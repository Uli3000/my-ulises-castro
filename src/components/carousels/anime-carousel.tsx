import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { AnimeItem } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { EditList } from "@/components/content-editor";

export function AnimeCarousel({ animeList }: { animeList: AnimeItem[] }) {
  const [index, setIndex] = useState(0);
  const current = animeList[Math.min(index, animeList.length - 1)];
  const go = (dir: number) => setIndex((i) => (i + dir + animeList.length) % animeList.length);

  if (!current) {
    return (
      <div className="flex h-full min-h-75 items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
        Sin anime todavía <EditList list="anime" />
      </div>
    );
  }

  return (
    <div className="relative flex h-full overflow-hidden rounded-2xl border border-border">
      <img
        key={current.image}
        src={current.image}
        alt={`Ambiente visual de ${current.title}`}
        className="absolute inset-0 h-full w-full object-cover opacity-45 transition-opacity duration-700"
        loading="lazy"
        width={1024}
        height={768}
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/30" />

      <div className="relative z-10 flex h-full w-full min-h-125 flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Star}>Anime</SectionLabel>
            <EditList list="anime" />
          </div>
          <span className="text-xs text-muted-foreground">
            {index + 1} / {animeList.length}
          </span>
        </div>

        <div>
          <h3 className="font-display text-3xl font-semibold tracking-tight">{current.title}</h3>
          <p className="mt-2 max-w-sm text-sm text-foreground/70">{current.note}</p>

          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Personaje</span>
            <span className="font-display text-sm font-semibold text-indigo-electric">{current.character}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {animeList.map((a, i) => (
              <button
                key={a.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver ${a.title}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-indigo-electric" : "w-3 bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Anime anterior"
              className="rounded-full border border-border bg-background/60 p-2 backdrop-blur-sm transition-colors hover:border-indigo-electric hover:text-indigo-electric"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente anime"
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
