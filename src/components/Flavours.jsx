const cakeFlavours = [
  { name: 'Chocolate', note: 'Rich and moist' },
  { name: 'Vanilla', note: 'Classic Madagascar bean' },
  { name: 'Confetti', note: 'Fun and colorful' },
  { name: 'Coconut', note: '' }, 
  { name: 'Lemon Cardamom', note: 'Zesty with a hint of spice' },
  { name: 'Ras Malai Tres Leches', note: 'Soaked in sweet milk' },
  { name: 'Cookies & Cream', note: 'Loaded with crushed Oreos' },
]

const fillings = [
  { name: 'Berry compote', note: 'Made from scratch' },
  { name: 'Fresh fruit', note: 'Seasonal selection' },
  { name: 'Whipped cream', note: '' },
  { name: 'Chocolate ganache', note: 'Dark and decadent' },
  { name: 'Vanilla pastry cream', note: '' },
  { name: 'Caramel', note: 'House-made salted caramel' },
  { name: 'White chocolate hazelnut', note: '' },
  { name: 'Whipped cream cheese', note: '' },
  { name: 'Chocolate Crémeux', note: '' },
  { name: 'Candied nuts', note: 'Crunchy pecans and walnuts' },
  { name: 'Cheesecake', note: 'Baked New York style' },
]

const frostings = [
  { name: 'Vanilla swiss meringue buttercream', note: 'Silky and not too sweet' },
]

function MenuRow({ name, note }) {
  return (
    <li className="flex items-baseline gap-3 py-3">
      <span className="font-display text-lg sm:text-xl text-espresso">{name}</span>
      
      {note && (
        <>
          <span className="flex-1 border-b border-dotted border-espresso/25 translate-y-[-3px]" />
          <span className="font-body text-xs sm:text-sm text-espresso-soft text-right">{note}</span>
        </>
      )}
    </li>
  )
}

export default function Flavours() {
  return (
    <section id="flavours" className="px-6 py-24 sm:py-28 bg-cream-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-espresso-soft mb-3">Flavours</p>
          <h2 className="font-display text-4xl sm:text-5xl text-espresso">Choose Your Base &amp; Frosting</h2>
          <p className="mt-4 font-body text-espresso-soft max-w-xl mx-auto">
            Every tier is baked fresh to order. Mix and match a base with a
            frosting, or ask Harleen for a pairing recommendation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-script text-3xl text-espresso mb-2">Cake Flavours</h3>
            <ul className="divide-y divide-espresso/10">
              {cakeFlavours.map((b) => (
                <MenuRow key={b.name} {...b} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-script text-3xl text-espresso mb-2">Fillings</h3>
            <ul className="divide-y divide-espresso/10">
              {fillings.map((f) => (
                <MenuRow key={f.name} {...f} />
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
          
          </div>
        </div>
      </div>
    </section>
  )
}
