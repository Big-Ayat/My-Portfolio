interface ArrowIconProps {
  size?: number
  className?: string
}

/** Small diagonal outline arrow used throughout nav links and buttons. */
export default function ArrowIcon({ size = 24, className }: ArrowIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
