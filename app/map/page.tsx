"use client"

import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react"
import * as XLSX from "xlsx"

const LEAFLET_CSS_ID = "leaflet-stylesheet"
const LEAFLET_VERSION = "1.9.4"
const CLUSTER_OPTIONS = [5, 10, 15, 20] as const
const SA_CENTER: [number, number] = [-28.5, 24.5]
const SA_ZOOM = 6

const CLUSTER_COLORS = [
  "#2563eb",
  "#dc2626",
  "#16a34a",
  "#ca8a04",
  "#9333ea",
  "#0891b2",
  "#ea580c",
  "#be185d",
  "#4f46e5",
  "#0d9488",
  "#b91c1c",
  "#15803d",
  "#a16207",
  "#7e22ce",
  "#0369a1",
  "#c2410c",
  "#9d174d",
  "#4338ca",
  "#047857",
  "#b45309",
]

export interface SchoolRecord {
  Official_Institution_Name: string
  GIS_Latitude: number
  GIS_Longitude: number
  Sector: string
  Town_City: string
  Learners2023: number
}

interface ClusterSummary {
  id: number
  color: string
  schoolCount: number
  totalLearners: number
  towns: string[]
}

type LeafletModule = typeof import("leaflet")
type LeafletMap = import("leaflet").Map
type LeafletLayerGroup = import("leaflet").LayerGroup

function normalizeHeader(header: string): string {
  return header.trim().replace(/\s+/g, "_")
}

function findCell(row: Record<string, unknown>, candidates: string[]): unknown {
  const normalizedEntries = Object.entries(row).map(([key, value]) => [
    normalizeHeader(key).toLowerCase(),
    value,
  ] as const)

  for (const candidate of candidates) {
    const match = normalizedEntries.find(([key]) => key === candidate.toLowerCase())
    if (match && match[1] !== undefined && match[1] !== null && String(match[1]).trim() !== "") {
      return match[1]
    }
  }

  return undefined
}

function parseSchoolRow(row: Record<string, unknown>): SchoolRecord | null {
  const name = findCell(row, ["official_institution_name", "official institution name"])
  const latRaw = findCell(row, ["gis_latitude", "gis latitude", "latitude", "lat"])
  const lngRaw = findCell(row, ["gis_longitude", "gis longitude", "longitude", "lng", "lon"])
  const sector = findCell(row, ["sector"])
  const town = findCell(row, ["town_city", "town city", "town", "city"])
  const learnersRaw = findCell(row, ["learners2023", "learners_2023", "learners 2023"])

  const latitude = Number(latRaw)
  const longitude = Number(lngRaw)
  const learners = Number(learnersRaw)

  if (!name || Number.isNaN(latitude) || Number.isNaN(longitude)) {
    return null
  }

  return {
    Official_Institution_Name: String(name).trim(),
    GIS_Latitude: latitude,
    GIS_Longitude: longitude,
    Sector: sector ? String(sector).trim() : "Unknown",
    Town_City: town ? String(town).trim() : "Unknown",
    Learners2023: Number.isNaN(learners) ? 0 : learners,
  }
}

function parseWorkbook(file: ArrayBuffer): SchoolRecord[] {
  const workbook = XLSX.read(file, { type: "array" })
  const firstSheetName = workbook.SheetNames[0]

  if (!firstSheetName) {
    return []
  }

  const worksheet = workbook.Sheets[firstSheetName]
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, { defval: "" })

  return rows
    .map(parseSchoolRow)
    .filter((school): school is SchoolRecord => school !== null)
}

function squaredDistance(a: [number, number], b: [number, number]): number {
  const dLat = a[0] - b[0]
  const dLng = a[1] - b[1]
  return dLat * dLat + dLng * dLng
}

function kMeans(points: [number, number][], k: number, maxIterations = 50): number[] {
  if (points.length === 0) return []
  if (k <= 1) return points.map(() => 0)
  if (k >= points.length) return points.map((_, index) => index)

  const centroidIndexes = new Set<number>()
  while (centroidIndexes.size < k) {
    centroidIndexes.add(Math.floor(Math.random() * points.length))
  }

  let centroids = Array.from(centroidIndexes).map((index) => [...points[index]] as [number, number])
  const assignments = new Array<number>(points.length).fill(0)

  for (let iteration = 0; iteration < maxIterations; iteration += 1) {
    let changed = false

    for (let i = 0; i < points.length; i += 1) {
      let bestCluster = 0
      let bestDistance = Number.POSITIVE_INFINITY

      for (let c = 0; c < centroids.length; c += 1) {
        const distance = squaredDistance(points[i], centroids[c])
        if (distance < bestDistance) {
          bestDistance = distance
          bestCluster = c
        }
      }

      if (assignments[i] !== bestCluster) {
        assignments[i] = bestCluster
        changed = true
      }
    }

    const nextCentroids = Array.from({ length: k }, () => [0, 0] as [number, number])
    const counts = new Array(k).fill(0)

    for (let i = 0; i < points.length; i += 1) {
      const cluster = assignments[i]
      nextCentroids[cluster][0] += points[i][0]
      nextCentroids[cluster][1] += points[i][1]
      counts[cluster] += 1
    }

    for (let c = 0; c < k; c += 1) {
      if (counts[c] > 0) {
        nextCentroids[c][0] /= counts[c]
        nextCentroids[c][1] /= counts[c]
      } else {
        nextCentroids[c] = [...points[Math.floor(Math.random() * points.length)]]
      }
    }

    centroids = nextCentroids

    if (!changed) break
  }

  return assignments
}

function buildClusterSummaries(schools: SchoolRecord[], assignments: number[]): ClusterSummary[] {
  const clusterMap = new Map<number, ClusterSummary>()

  schools.forEach((school, index) => {
    const clusterId = assignments[index]
    const existing = clusterMap.get(clusterId)

    if (!existing) {
      clusterMap.set(clusterId, {
        id: clusterId,
        color: CLUSTER_COLORS[clusterId % CLUSTER_COLORS.length],
        schoolCount: 1,
        totalLearners: school.Learners2023,
        towns: school.Town_City !== "Unknown" ? [school.Town_City] : [],
      })
      return
    }

    existing.schoolCount += 1
    existing.totalLearners += school.Learners2023
    if (school.Town_City !== "Unknown" && !existing.towns.includes(school.Town_City)) {
      existing.towns.push(school.Town_City)
    }
  })

  return Array.from(clusterMap.values()).sort((a, b) => a.id - b.id)
}

function formatNumber(value: number): string {
  return value.toLocaleString("en-ZA")
}

function configureLeafletIcons(L: LeafletModule) {
  // Leaflet's default marker assets break under Next.js bundling without explicit URLs.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/images/marker-icon-2x.png`,
    iconUrl: `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/images/marker-icon.png`,
    shadowUrl: `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/images/marker-shadow.png`,
  })
}

export default function SchoolMapPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markerLayerRef = useRef<LeafletLayerGroup | null>(null)
  const leafletRef = useRef<LeafletModule | null>(null)

  const [schools, setSchools] = useState<SchoolRecord[]>([])
  const [clusterCount, setClusterCount] = useState<(typeof CLUSTER_OPTIONS)[number]>(10)
  const [assignments, setAssignments] = useState<number[]>([])
  const [statusMessage, setStatusMessage] = useState("Upload an Excel (.xlsx) file to plot schools on the map.")
  const [isMapReady, setIsMapReady] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const clusterSummaries = useMemo(
    () => buildClusterSummaries(schools, assignments),
    [schools, assignments],
  )

  const totalLearners = useMemo(
    () => schools.reduce((sum, school) => sum + school.Learners2023, 0),
    [schools],
  )

  const runClustering = useCallback((records: SchoolRecord[], regions: number) => {
    const points = records.map(
      (school) => [school.GIS_Latitude, school.GIS_Longitude] as [number, number],
    )
    return kMeans(points, regions)
  }, [])

  useEffect(() => {
    if (document.getElementById(LEAFLET_CSS_ID)) return

    const link = document.createElement("link")
    link.id = LEAFLET_CSS_ID
    link.rel = "stylesheet"
    link.href = `https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/leaflet.css`
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    let cancelled = false

    async function initMap() {
      if (!mapContainerRef.current || mapRef.current) return

      const L = await import("leaflet")
      if (cancelled || !mapContainerRef.current) return

      leafletRef.current = L
      configureLeafletIcons(L)

      const map = L.map(mapContainerRef.current, {
        center: SA_CENTER,
        zoom: SA_ZOOM,
        zoomControl: true,
      })

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      markerLayerRef.current = L.layerGroup().addTo(map)
      mapRef.current = map
      setIsMapReady(true)
    }

    initMap()

    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        markerLayerRef.current = null
        leafletRef.current = null
        setIsMapReady(false)
      }
    }
  }, [])

  useEffect(() => {
    if (!isMapReady || schools.length === 0) return
    setAssignments(runClustering(schools, clusterCount))
  }, [schools, clusterCount, isMapReady, runClustering])

  useEffect(() => {
    const L = leafletRef.current
    const map = mapRef.current
    const markerLayer = markerLayerRef.current

    if (!L || !map || !markerLayer || schools.length === 0 || assignments.length !== schools.length) {
      return
    }

    markerLayer.clearLayers()

    const bounds = L.latLngBounds([])

    schools.forEach((school, index) => {
      const clusterId = assignments[index]
      const color = CLUSTER_COLORS[clusterId % CLUSTER_COLORS.length]
      const position: [number, number] = [school.GIS_Latitude, school.GIS_Longitude]

      const marker = L.circleMarker(position, {
        radius: 7,
        color: "#ffffff",
        weight: 1.5,
        fillColor: color,
        fillOpacity: 0.9,
      })

      marker.bindPopup(`
        <div style="min-width:220px;font-family:Arial,sans-serif;line-height:1.45;">
          <strong style="font-size:14px;">${school.Official_Institution_Name}</strong>
          <hr style="margin:8px 0;border:none;border-top:1px solid #e5e7eb;" />
          <div><strong>Sector:</strong> ${school.Sector}</div>
          <div><strong>Town / City:</strong> ${school.Town_City}</div>
          <div><strong>Learners (2023):</strong> ${formatNumber(school.Learners2023)}</div>
          <div><strong>Latitude:</strong> ${school.GIS_Latitude.toFixed(5)}</div>
          <div><strong>Longitude:</strong> ${school.GIS_Longitude.toFixed(5)}</div>
          <div><strong>Proximity Zone:</strong> Zone ${clusterId + 1}</div>
        </div>
      `)

      marker.addTo(markerLayer)
      bounds.extend(position)
    })

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [40, 40] })
    }
  }, [schools, assignments, isMapReady])

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.toLowerCase().endsWith(".xlsx")) {
      setStatusMessage("Please upload a valid .xlsx workbook.")
      return
    }

    try {
      const buffer = await file.arrayBuffer()
      const parsedSchools = parseWorkbook(buffer)

      if (parsedSchools.length === 0) {
        setSchools([])
        setAssignments([])
        setFileName(file.name)
        setStatusMessage("No valid school rows found. Check required columns and coordinate values.")
        return
      }

      setSchools(parsedSchools)
      setFileName(file.name)
      setStatusMessage(`Loaded ${formatNumber(parsedSchools.length)} schools from ${file.name}.`)
    } catch {
      setStatusMessage("Failed to parse the Excel file. Ensure it is a valid .xlsx workbook.")
    }
  }

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-slate-100">
      <div className="absolute left-0 right-0 top-0 z-[1000] border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">School Proximity Map</h1>
            <p className="mt-1 text-sm text-slate-600">{statusMessage}</p>
            {schools.length > 0 && (
              <p className="mt-1 text-xs text-slate-500">
                {formatNumber(schools.length)} schools · {formatNumber(totalLearners)} learners ·{" "}
                {fileName ?? "dataset loaded"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex flex-col gap-1 text-sm text-slate-700">
              <span className="font-medium">Upload Excel (.xlsx)</span>
              <input
                type="file"
                accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={handleFileUpload}
                className="block w-full min-w-[240px] cursor-pointer rounded-md border border-slate-300 bg-white px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-blue-800 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-700">
              <span className="font-medium">Proximity Zones</span>
              <select
                value={clusterCount}
                onChange={(event) =>
                  setClusterCount(Number(event.target.value) as (typeof CLUSTER_OPTIONS)[number])
                }
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                disabled={schools.length === 0}
              >
                {CLUSTER_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option} sub-regions
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div ref={mapContainerRef} className="absolute inset-0 z-0" />

      {clusterSummaries.length > 0 && (
        <aside className="absolute bottom-4 right-4 z-[1000] max-h-[50vh] w-[min(92vw,320px)] overflow-y-auto rounded-lg border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <h2 className="text-sm font-semibold text-slate-900">Proximity Zone Breakdown</h2>
          <p className="mt-1 text-xs text-slate-500">
            {clusterCount} K-Means zones across {formatNumber(schools.length)} schools
          </p>
          <ul className="mt-3 space-y-3">
            {clusterSummaries.map((cluster) => (
              <li key={cluster.id} className="rounded-md border border-slate-100 p-3">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: cluster.color }}
                  />
                  <span className="text-sm font-medium text-slate-800">Zone {cluster.id + 1}</span>
                </div>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <div>{formatNumber(cluster.schoolCount)} schools</div>
                  <div>{formatNumber(cluster.totalLearners)} learners</div>
                  {cluster.towns.length > 0 && (
                    <div className="text-slate-500">
                      {cluster.towns.slice(0, 4).join(", ")}
                      {cluster.towns.length > 4 ? "…" : ""}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  )
}
