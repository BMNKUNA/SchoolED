import Link from "next/link"
import { Phone, MapPin, Clock, Calendar } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { cellTelUrl, contact, officeTelUrl, whatsappUrl } from "@/lib/contact"

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <Phone className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
        <div>
          <p className="text-sm font-medium text-gray-500">Office</p>
          <a href={officeTelUrl} className="text-lg text-gray-700 underline-offset-2 hover:text-blue-800 hover:underline">
            {contact.office.display}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
        <div>
          <p className="text-sm font-medium text-gray-500">Cell / WhatsApp</p>
          <a href={cellTelUrl} className="text-lg text-gray-700 underline-offset-2 hover:text-blue-800 hover:underline">
            {contact.cell.display}
          </a>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={cellTelUrl}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800 hover:bg-blue-100"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#25D366]/10 px-3 py-2 text-sm font-medium text-[#128C7E] hover:bg-[#25D366]/20"
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
        <div>
          <p className="text-sm font-medium text-gray-500">Address</p>
          <address className="text-lg not-italic text-gray-700">
            {contact.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Clock className="h-6 w-6 shrink-0 text-blue-600" />
        <span className="text-gray-700">Mon-Fri: 8am-5pm, Sat: 9am-1pm</span>
      </div>
      <div className="flex items-center gap-4">
        <Calendar className="h-6 w-6 shrink-0 text-blue-600" />
        <span className="text-gray-700">Closed on public holidays</span>
      </div>
    </div>
  )
}
