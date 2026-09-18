/** "Back to top" smooth-scroll click handler (mirrors the original
 * jQuery `$("html, body").animate({ scrollTop: 0 })` behavior). */
export default function useScrollUp() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { scrollToTop }
}
