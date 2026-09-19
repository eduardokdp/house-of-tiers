export default function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 overflow-hidden">
      
      <div className="pointer-events-none absolute -top-20 -left-24 w-72 h-72 rounded-full bg-butter/50 blur-3xl" />
      <div className="pointer-events-none absolute top-10 -right-16 w-80 h-80 rounded-full bg-blush/50 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="text-center md:text-left animate-fadeUp">
          <p className="font-body text-xs sm:text-sm tracking-[0.35em] uppercase text-espresso-soft mb-5">
            White Rock, B.C. &nbsp;·&nbsp; est. 2026
          </p>
          <h1 className="font-script text-6xl sm:text-7xl lg:text-8xl text-espresso leading-[0.95]">
            House of Tiers
          </h1>
          <p className="mt-6 font-display italic text-xl sm:text-2xl text-espresso-light max-w-md mx-auto md:mx-0">
            Sweet &amp; delicious custom cakes by Harleen
          </p>
          <p className="mt-4 font-body text-sm sm:text-base text-espresso-soft max-w-md mx-auto md:mx-0 leading-relaxed">
            Lambeth inspired piping, fresh fruit, and hand-placed
            florals — each cake piped to order, one tier at a time.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#inquire"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-espresso text-ivory px-9 py-4 font-body text-sm tracking-[0.14em] uppercase shadow-card hover:bg-espresso-light transition-colors"
            >
              Book Your Cake
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-espresso/30 px-9 py-4 font-body text-sm tracking-[0.14em] uppercase text-espresso hover:bg-espresso/5 transition-colors"
            >
              See the Cakes
            </a>
          </div>
        </div>

        <div className="relative mx-auto animate-fadeUp [animation-delay:150ms]">
          <svg viewBox="0 0 340 380" className="w-64 sm:w-80 md:w-full max-w-sm mx-auto drop-shadow-xl">
            <ellipse cx="170" cy="345" rx="150" ry="16" fill="#E9D5AC" />
            <rect x="35" y="230" width="270" height="105" rx="10" fill="#FFFDF8" stroke="#3B2A1E" strokeOpacity="0.08" />
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={i}
                d={`M${45 + i * 19},235 q9,-16 18,0 z`}
                fill="#F0D3C9"
              />
            ))}

            <rect x="80" y="120" width="180" height="100" rx="10" fill="#FFFDF8" stroke="#3B2A1E" strokeOpacity="0.08" />
            {Array.from({ length: 9 }).map((_, i) => (
              <path
                key={i}
                d={`M${90 + i * 19},125 q9,-16 18,0 z`}
                fill="#EFD9A0"
              />
            ))}

            {[110, 150, 190, 230].map((x, i) => (
              <path
                key={i}
                transform={`translate(${x},165)`}
                d="M0,6 C-8,-4 -20,-2 -20,8 C-20,16 -8,22 0,30 C8,22 20,16 20,8 C20,-2 8,-4 0,6 Z"
                fill="#C1443B"
                fillOpacity="0.85"
              />
            ))}

            <circle cx="105" cy="112" r="7" fill="#C1443B" />
            <circle cx="128" cy="106" r="6" fill="#6B4A35" />
            <circle cx="150" cy="113" r="7" fill="#C1443B" />
            <circle cx="172" cy="105" r="6" fill="#3B2A1E" fillOpacity="0.7" />
            <circle cx="195" cy="112" r="7" fill="#C1443B" />
            <circle cx="217" cy="106" r="6" fill="#6B4A35" />
            <circle cx="238" cy="113" r="7" fill="#C1443B" />
          </svg>
        </div>
      </div>
    </section>
  )
}
