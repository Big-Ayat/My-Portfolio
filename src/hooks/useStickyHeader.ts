import { useEffect, useState } from 'react'

/** Mirrors the original jQuery `#sticky-header` scroll listener. */
export default function useStickyHeader() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY >= 1)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return isSticky
}
