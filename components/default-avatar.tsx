export function DefaultAvatar({
  className = "h-32 w-32",
  label = "No profile photo",
}: {
  className?: string
  label?: string
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e4e6eb] ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[58%] w-[58%] text-[#b0b3b8]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  )
}
