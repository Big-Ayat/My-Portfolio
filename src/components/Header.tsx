import { Link } from 'react-router-dom'
import ArrowIcon from './icons/ArrowIcon'

interface HeaderProps {
  /** Home page renders the header absolutely over the hero image with a
   * transparent background; every other page uses a solid white header. */
  transparent?: boolean
  onOffcanvasToggle: () => void
}

export default function Header({ transparent = false, onOffcanvasToggle }: HeaderProps) {
  return (
    <header
      id="sticky-header"
      className={`xl:pl-12 ${transparent ? 'absolute left-0 top-0 w-full z-10' : 'bg-white'}`}
    >
      <div className="flex pl-4 xl:pl-0">
        <div className="flex-1 flex items-center justify-between border-b border-black-800 border-opacity-40">
          <Link to="/">
            <img src="/assets/images/logo/logo.png" alt="logo" />
          </Link>

          <Link
            to="/contact"
            className={`flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange ${transparent ? 'md:hover:text-white' : ''} group`}
          >
            Let&rsquo;s Talk
            <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div
          id="offcanvas-toggle"
          className="flex-none bg-active flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer"
          onClick={onOffcanvasToggle}
        >
          <button type="button" aria-label="open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="8" width="18" height="2" fill="white" />
              <rect x="3" y="14" width="18" height="2" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
