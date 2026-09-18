import { Link } from 'react-router-dom'
import ArrowIcon from './icons/ArrowIcon'
import SocialLinks from './SocialLinks'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: 'https://www.behance.net/big-ayatdesign', label: 'Project', external: true },
  { to: '/contact', label: 'Contact' },
]

interface OffcanvasMenuProps {
  open: boolean
  onClose: () => void
}

export default function OffcanvasMenu({ open, onClose }: OffcanvasMenuProps) {
  return (
    <div
      id="offcanvas"
      className={`offcanvas right-0 top-0 bottom-0 z-50 transform translate-x-full fixed h-full w-[350px] md:w-[460px] transition-all ease-in-out duration-300 bg-black-800 pl-8 flex flex-wrap flex-col justify-between ${open ? 'offcanvas-open' : ''}`}
    >
      <div>
        <div className="flex flex-wrap justify-between items-center border-b border-border-white mb-[80px]">
          <Link to="/">
            <img src="/assets/images/logo/offcanvas-logo.png" alt="" />
          </Link>
          <button
            id="offcanvas-close"
            className="offcanvas-close bg-primary py-7 px-[38px]"
            aria-label="offcanvas"
            onClick={onClose}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <nav className="offcanvas-menu mr-[40px] flex flex-wrap flex-col justify-between">
          <ul>
            {links.map((link) => {
              const className =
                'text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300'
              const inner = (
                <>
                  {link.label}
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <ArrowIcon />
                  </span>
                </>
              )
              return (
                <li key={link.to} className="border-b border-border-white py-4 group">
                  {link.external ? (
                    <a href={link.to} target="_blank" rel="noreferrer" className={className}>
                      {inner}
                    </a>
                  ) : (
                    <Link to={link.to} onClick={onClose} className={className}>
                      {inner}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <nav className="pb-10">
        <SocialLinks
          className="flex flex-wrap gap-x-4 items-center"
          linkClassName="text-white transition-all duration-300 hover:text-orange"
        />
      </nav>
    </div>
  )
}
