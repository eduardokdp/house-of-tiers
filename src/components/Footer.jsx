export default function Footer() {
  return (
    <footer className="bg-espresso text-cream px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <p className="font-script text-4xl">House of Tiers</p>
        <p className="font-body text-sm text-cream/70 tracking-[0.08em]">
          Sweet &amp; Delicious Custom Cakes · White Rock, B.C.
        </p>

        <a
          href="https://instagram.com/house.of.tiers"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 font-body text-sm tracking-[0.1em] hover:bg-cream/10 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
          </svg>
          @house.of.tiers
        </a>

        <div className="w-full max-w-xs h-px bg-cream/15 mt-4" />

        <p className="font-body text-xs text-cream/50">
          © {new Date().getFullYear()} House of Tiers. Custom cakes made to order in White Rock, B.C.
        </p>
      </div>
    </footer>
  )
}
