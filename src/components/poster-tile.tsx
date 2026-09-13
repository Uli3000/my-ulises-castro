import posterDefault from "@/assets/poster-default.jpg";
import type { Poster } from "@/lib/content";
import { Rail } from "@/components/ui/rail";

export function PosterTile({ item, ratio = "aspect-[2/3]" }: { item: Poster; ratio?: string }) {
  return (
    <div className={`group/poster relative ${ratio} overflow-hidden rounded-xl border border-border`}>
      <div className={`absolute inset-0 bg-linear-to-br ${item.accent}`} />
      <img
        src={item.image ?? posterDefault}
        alt={`Portada de ${item.title}`}
        loading="lazy"
        width={512}
        height={768}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/poster:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
      <span className="absolute right-3 top-3 text-3xl drop-shadow-lg" aria-hidden="true">
        {item.emoji}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="font-display text-sm font-semibold leading-tight text-foreground">{item.title}</p>
        <p className="mt-1 text-xs text-foreground/60">{item.meta}</p>
      </div>
    </div>
  );
}

/** Riel simple de portadas (no se usa en la página principal, pero queda disponible). */
export function PosterRail({ items, ratio = "aspect-[2/3]" }: { items: Poster[]; ratio?: string }) {
  return (
    <Rail>
      {items.map((item) => (
        <PosterTile key={item.title} item={item} ratio={ratio} />
      ))}
    </Rail>
  );
}
