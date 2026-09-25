export default function PipedDivider({ color = '#3B2A1E', bg = '#FAF3E7', flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}
      style={{ backgroundColor: bg }}
    >
      <svg
        viewBox="0 0 600 26"
        preserveAspectRatio="none"
        className="w-full h-[22px] sm:h-[26px]"
      >
        <path
          d="M0,4 C10,20 20,20 30,4 C40,20 50,20 60,4 C70,20 80,20 90,4
             C100,20 110,20 120,4 C130,20 140,20 150,4 C160,20 170,20 180,4
             C190,20 200,20 210,4 C220,20 230,20 240,4 C250,20 260,20 270,4
             C280,20 290,20 300,4 C310,20 320,20 330,4 C340,20 350,20 360,4
             C370,20 380,20 390,4 C400,20 410,20 420,4 C430,20 440,20 450,4
             C460,20 470,20 480,4 C490,20 500,20 510,4 C520,20 530,20 540,4
             C550,20 560,20 570,4 C580,20 590,20 600,4 L600,0 L0,0 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
