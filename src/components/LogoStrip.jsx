export default function LogoStrip() {
  const names = ["Finexa", "Northwind", "Verdant", "Halcyon", "Optiq", "Ridgeline"];
  // Duplicate names to ensure seamless infinite looping scroll
  const marqueeItems = [...names, ...names, ...names];

  return (
    <section className="border-y border-line bg-white overflow-hidden py-8 relative">
      {/* Side gradient masks for premium fade edge effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex gap-16 md:gap-24 items-center">
          {marqueeItems.map((n, index) => (
            <span 
              key={`${n}-${index}`} 
              className="text-stone/60 font-display text-base md:text-lg tracking-wider font-600 transition-colors hover:text-ink cursor-default"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

