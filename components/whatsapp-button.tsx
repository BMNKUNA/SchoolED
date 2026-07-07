import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { whatsappUrl } from "@/lib/contact"

export default function WhatsAppButton() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))]"
    >
      <FaWhatsapp className="h-7 w-7" />
    </Link>
  )
}
