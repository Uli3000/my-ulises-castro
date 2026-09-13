import * as React from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Rail({
  children,
  itemClass = "w-40 sm:w-44",
}: {
  children: React.ReactNode;
  itemClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children);

  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClass}`}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Anterior"
          className="rounded-full border border-border bg-background/60 p-1.5 text-muted-foreground transition-colors hover:border-indigo-electric hover:text-indigo-electric"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Siguiente"
          className="rounded-full border border-border bg-background/60 p-1.5 text-muted-foreground transition-colors hover:border-indigo-electric hover:text-indigo-electric"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
