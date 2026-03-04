export default function Marquee() {
  const items = [
    "SUSTAINABLE HOME GOODS",
    "ECO-TECH & ENERGY",
    "WELLNESS & ACTIVE LIFESTYLE",
    "NON-TOXIC PERSONAL CARE",
    "PET WELLNESS",
    "BABY & CHILD ESSENTIALS",
    "ORGANIC MATTRESSES",
    "WATER FILTRATION",
    "CLEAN SUPPLEMENTS",
    "EWG-VERIFIED",
  ]

  return (
    <div className="overflow-hidden relative py-3.5 bg-forest">
      <div className="animate-marquee flex w-max gap-0">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center px-10 text-[11px] gap-4 font-semibold uppercase tracking-[0.15em] text-white/50"
          >
            {item}
            <span className="ml-6 text-[8px] text-gold">&#10038;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
