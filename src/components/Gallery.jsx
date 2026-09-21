const cakes = [
  {title: 'Raspberry Romance', tag: 'Wedding Cake', h: 'h-[25.5rem]', img: '/img/wedding-cake.jpg' },
  {title: 'Clubhouse Bash', tag: "Kids' Birthday", h: 'h-96', img: '/img/disney-cake.jpg' },
  {title: 'Loot Llama', tag: 'Fortnight Cake', h: 'h-96', img: '/img/loot-lama-cake.jpg' },
  {title: 'Berry Bliss', tag: 'Fruit Cake', h: 'h-96', img: '/img/fruit-cake.jpg' },
  {title: 'Berry Basket', tag: 'Fruit Basket', h: 'h-96', img: '/img/basket-cake.jpg' },
  {title: 'Lucky Cherries', tag: 'Birthday Cake', h: 'h-80', img: '/img/26-cake.jpg' },
  {title: 'Melted Wax', tag: 'Candle Cake', h: 'h-[25.5rem]', img: '/img/candle-cake.jpg' },
  {title: 'Ogre\u2019s Delight', tag: 'Shrek Cake', h: 'h-[25.5rem]', img: '/img/shrek-cake.jpg' },
  {title: 'First Bloom', tag: 'Floral Cake', h: 'h-[25.5rem]', img: '/img/1-cake.jpg' },
]

function PhotoSlot({cake}) {
  return (
    <figure className="break-inside-avoid mb-5">
      <div
        className={`relative w-full aspect-square md:aspect-auto ${cake.h} rounded-2xl border border-espresso/10 shadow-card overflow-hidden`}
      >
        <img src={cake.img} alt={cake.title} className="w-full h-full object-cover" />
      </div>
      <figcaption className="mt-2 md:mt-3 px-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-0.5">
        <span className="font-display text-[16px] md:text-lg text-espresso leading-tight">{cake.title}</span>
        <span className="font-body text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.14em] uppercase text-espresso-soft">
          {cake.tag}
        </span>
      </figcaption>
    </figure>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-espresso-soft mb-3">Pretty Cakes</p>
          <h2 className="font-display text-4xl sm:text-5xl text-espresso">A Gallery of Recent Tiers</h2>
          <p className="mt-4 font-body text-espresso-soft max-w-xl mx-auto">
            From hand-piped Lambeth hearts to fresh fruit florals and playful
            kids' designs — every cake is one of a kind.
          </p>
        </div>

        {}
        <div className="grid grid-cols-2 gap-5 md:block md:columns-3">
          {cakes.map((cake) => (
            <PhotoSlot key={cake.title} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  )
}