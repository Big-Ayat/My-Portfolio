import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import Header from './Header'
import OffcanvasMenu from './OffcanvasMenu'
import Footer from './Footer'

interface LayoutProps {
  transparentHeader?: boolean
  children: ReactNode
}

export default function Layout({ transparentHeader = false, children }: LayoutProps) {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 100,
      duration: 600,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setOffcanvasOpen(false)
    AOS.refreshHard()
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('offcanvas-open', offcanvasOpen)
  }, [offcanvasOpen])

  return (
    <div className="overflow-x-hidden">
      <Header transparent={transparentHeader} onOffcanvasToggle={() => setOffcanvasOpen((v) => !v)} />
      <OffcanvasMenu open={offcanvasOpen} onClose={() => setOffcanvasOpen(false)} />
      {children}
      <Footer />
    </div>
  )
}
