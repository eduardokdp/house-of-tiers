const bases = [
  { name: 'Classic Vanilla Bean', note: 'Madagascar vanilla, tender crumb' },
  { name: 'Rich Chocolate Fudge', note: 'Deep cocoa, moist & dense' },
  { name: 'Lemon Poppyseed', note: 'Bright citrus, delicate speckle' },
  { name: 'Salted Caramel', note: 'Brown butter sponge, caramel swirl' },
  { name: 'Red Velvet', note: 'Cocoa-kissed, classic tang' },
  { name: 'Almond Milk Cake', note: 'Soaked & tender, lightly nutty' },
]

const frostings = [
  { name: 'Swiss Meringue Buttercream', note: 'Silky, lightly sweet — best for piping' },
  { name: 'Cream Cheese', note: 'Tangy & smooth' },
  { name: 'Chocolate Ganache', note: 'Rich, glossy drip finish' },
  { name: 'Whipped Fresh Cream', note: 'Airy & light, fruit-forward pairing' },
]

function MenuRow({ name, note }) {
  return (
    <li className="flex items-baseline gap-3 py-3">
      <span className="font-display text-lg sm:text-xl text-espresso whitespace-nowrap">{name}</span>
      <span className="flex-1 border-b border-dotted border-espresso/25 translate-y-[-3px]" />
      <span className="font-body text-xs sm:text-sm text-espresso-soft text-right whitespace-nowrap">{note}</span>
    </li>
  )
}

export default function Flavours() {
  return (
    <section id="flavours" className="px-6 py-24 sm:py-28 bg-cream-dark relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-espresso-soft mb-3">Flavours</p>
          <h2 className="font-display text-4xl sm:text-5xl text-espresso">Choose Your Base &amp; Frosting</h2>
          <p className="mt-4 font-body text-espresso-soft max-w-xl mx-auto">
            Every tier is baked fresh to order. Mix and match a base with a
            frosting, or ask Harleen for a pairing recommendation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-script text-3xl text-espresso mb-2">Cake Bases</h3>
            <ul className="divide-y divide-espresso/10">
              {bases.map((b) => (
                <MenuRow key={b.name} {...b} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-script text-3xl text-espresso mb-2">Frostings</h3>
            <ul className="divide-y divide-espresso/10">
              {frostings.map((f) => (
                <MenuRow key={f.name} {...f} />
              ))}
            </ul>
            <p className="mt-8 font-body text-sm text-espresso-soft italic">
              Fresh berries, florals, and Lambeth piping detail can be added
              to any combination.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
