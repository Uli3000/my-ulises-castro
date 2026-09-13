import { useState } from "react";
import { ChevronLeft, ChevronRight, Gamepad2 } from "lucide-react";
import posterDefault from "@/assets/poster-default.jpg";
import type { Poster } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { EditList } from "@/components/content-editor";

/** Panel compacto de juegos, con portada. */
export function GamesCarousel({ games }: { games: Poster[] }) {
  const [index, setIndex] = useState(0);
  const current = games[Math.min(index, games.length - 1)];
  const go = (dir: number) => setIndex((i) => (i + dir + games.length) % games.length);

  if (!current) {
    return (
      <div className="flex h-full min-h-55 items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
        Sin juegos todavía <EditList list="games" />
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-55 overflow-hidden rounded-2xl border border-border">
      <img
        key={current.title}
        src={current.image ?? posterDefault}
        alt={`Portada de ${current.title}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 bg-linear-to-br ${current.accent} opacity-40`} />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 to-background/20" />

      <div className="relative z-10 flex h-full min-h-55 w-full flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Gamepad2}>Juegos</SectionLabel>
            <EditList list="games" />
          </div>
          <span className="text-xs text-muted-foreground">
            {index + 1} / {games.length}
          </span>
        </div>

        <div className="mt-6 min-w-0">
          <h3 className="font-display text-2xl font-semibold tracking-tight drop-shadow">{current.title}</h3>
          <p className="mt-1 text-sm text-foreground/80">{current.meta}</p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            {games.map((g, i) => (
              <button
                key={g.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver ${g.title}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-indigo-electric" : "w-3 bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Juego anterior"
              className="rounded-full border border-border bg-background/60 p-2 backdrop-blur-sm transition-colors hover:border-indigo-electric hover:text-indigo-electric"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente juego"
              className="rounded-full border border-border bg-background/60 p-2 backdrop-blur-sm transition-colors hover:border-indigo-electric hover:text-indigo-electric"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
