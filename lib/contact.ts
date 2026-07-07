export const contact = {
  office: {
    display: "011 771 2917",
    tel: "+27117712917",
  },
  cell: {
    display: "065 389 0723",
    tel: "+27653890723",
    whatsapp: "27653890723",
  },
} as const

export const officeTelUrl = `tel:${contact.office.tel}`
export const cellTelUrl = `tel:${contact.cell.tel}`
export const whatsappUrl = `https://wa.me/${contact.cell.whatsapp}`

export function buildWhatsAppMessageUrl(message: string) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`
}

export const company = {
  foundedYear: 2015,
  founder: {
    name: "Monde Nkuna",
    photo: "/images/monde-nkuna.png",
  },
} as const

export function getYearsInBusiness(year = new Date().getFullYear()) {
  return year - company.foundedYear
}
