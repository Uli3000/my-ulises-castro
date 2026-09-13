import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Poster } from "@/lib/content";
import { PosterTile } from "@/components/poster-tile";

export function SpotlightCarousel({ items }: { items: Poster[] }) {
  const [index, setIndex] = useState(0);
  const n = items.length;
  const go = (dir: number) => setIndex((i) => (i + dir + n) % n);

  return (
    <div className="relative">
      <div className="relative h-80 overflow-hidden sm:h-100">
        {items.map((item, i) => {
          let offset = i - index;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const abs = Math.abs(offset);
          const visible = abs <= 2;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={item.title}
              className="absolute left-1/2 top-1/2 w-45 sm:w-57.5 transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 62}%) scale(${abs === 0 ? 1 : abs === 1 ? 0.82 : 0.66})`,
                opacity: visible ? (abs === 0 ? 1 : abs === 1 ? 0.65 : 0.3) : 0,
                zIndex: 10 - abs,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <PosterTile item={item} />
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="rounded-full border border-border bg-background/60 p-2 text-muted-foreground transition-colors hover:border-indigo-electric hover:text-indigo-electric"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver ${item.title}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-indigo-electric" : "w-3 bg-border hover:bg-muted-foreground"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente"
          className="rounded-full border border-border bg-background/60 p-2 text-muted-foreground transition-colors hover:border-indigo-electric hover:text-indigo-electric"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
