import { useEffect, useState } from 'react'

const links = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Flavours', href: '#flavours' },
  { label: 'The Process', href: '#process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-3">
        <a
          href="#top"
          className="font-script text-3xl sm:text-4xl text-espresso leading-none"
        >
          House of Tiers
        </a>

        <div className="hidden md:flex items-center gap-9 font-body text-[13px] tracking-[0.14em] uppercase text-espresso-light">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-espresso transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#inquire"
            className="rounded-full bg-espresso text-ivory px-6 py-2.5 tracking-[0.12em] hover:bg-espresso-light transition-colors shadow-card"
          >
            Inquire now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-[1.5px] w-6 bg-espresso transition-transform ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-espresso transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-espresso transition-transform ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-espresso/10 px-6 py-6 flex flex-col gap-5 font-body text-sm tracking-[0.14em] uppercase text-espresso-light">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#inquire"
            onClick={() => setOpen(false)}
            className="rounded-full bg-espresso text-ivory px-6 py-3 text-center tracking-[0.12em]"
          >
            Inquire Now
          </a>
        </div>
      )}
    </header>
  )
}
