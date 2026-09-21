const cakes = [
  { title: '01', tag: 'Wedding Cake', h: 'h-[25.5rem]', img: '/img/wedding-cake.jpg' },
  { title: '02', tag: "Kids' Birthday", h: 'h-96', img: '/img/disney-cake.jpg' },
  { title: '03', tag: 'Fortnight Cake', h: 'h-96', img: '/img/loot-lama-cake.jpg' },
  { title: '04', tag: 'Fruit Cake', h: 'h-96', img: '/img/fruit-cake.jpg' },
  { title: '05', tag: 'Fruit Basket', h: 'h-96', img: '/img/basket-cake.jpg' },
  { title: '06', tag: 'Birthday Cake', h: 'h-80', img: '/img/26-cake.jpg' },

]

function PhotoSlot({ cake }) {
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