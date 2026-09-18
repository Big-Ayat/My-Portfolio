interface ArrowIconFilledProps {
  size?: number
  className?: string
}

/** Larger filled diagonal arrow used on project cards and footer CTA cards. */
export default function ArrowIconFilled({ size = 40, className }: ArrowIconFilledProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11.6667 28.3334L28.3334 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6667 11.6667H28.3334V28.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
