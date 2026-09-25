const steps = [
  {
    n: '01',
    title: 'Choose Your Style',
    text: 'Browse the gallery and pick a direction — vintage Lambeth hearts, fresh fruit & floral, or a custom themed design.',
  },
  {
    n: '02',
    title: 'Pick Your Flavour',
    text: 'Select a cake base and frosting from the menu, or ask for a pairing recommendation.',
  },
  {
    n: '03',
    title: 'Submit an Inquiry',
    text: 'Send over your event date, guest count, and vision through the form below.',
  },
  {
    n: '04',
    title: 'Enjoy Your Creation',
    text: 'Harleen bakes and hand-pipes your cake fresh, ready for pickup in White Rock.',
  },
]

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-espresso-soft mb-3">The Process</p>
          <h2 className="font-display text-4xl sm:text-5xl text-espresso">How an Order Comes Together</h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-espresso/15" />

          {steps.map((s) => (
            <div key={s.n} className="relative text-center lg:text-left">
              <div className="mx-auto lg:mx-0 relative z-10 w-16 h-16 rounded-full bg-ivory border border-espresso/15 shadow-card flex items-center justify-center font-display text-xl text-espresso mb-5">
                {s.n}
              </div>
              <h3 className="font-display text-2xl text-espresso mb-2">{s.title}</h3>
              <p className="font-body text-sm text-espresso-soft leading-relaxed max-w-xs mx-auto lg:mx-0">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
