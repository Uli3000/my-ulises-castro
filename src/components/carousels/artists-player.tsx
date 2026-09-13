import { useState } from "react";
import { ChevronLeft, ChevronRight, Music } from "lucide-react";
import type { Artist } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { EditList } from "@/components/content-editor";

/** Mini reproductor: un artista a la vez, se navega con flechas. */
export function ArtistsPlayer({ artists }: { artists: Artist[] }) {
  const [active, setActive] = useState(0);
  const artist = artists[Math.min(active, artists.length - 1)];
  const go = (dir: number) => setActive((i) => (i + dir + artists.length) % artists.length);

  if (!artist) {
    return (
      <div className="flex h-full min-h-55 items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
        Sin artistas todavía <EditList list="artists" />
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-55 overflow-hidden rounded-2xl border border-border">
      <div className={`absolute inset-0 bg-linear-to-br ${artist.accent} opacity-40 transition-all duration-500`} />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/40" />

      <div className="relative z-10 flex h-full min-h-55 flex-col p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Music}>Artistas</SectionLabel>
            <EditList list="artists" />
          </div>
          <span className="text-xs text-muted-foreground">
            {active + 1} / {artists.length}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Artista anterior"
            className="rounded-full border border-border bg-background/60 p-2 backdrop-blur-sm transition-colors hover:border-indigo-electric hover:text-indigo-electric"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${artist.accent} shadow-lg`}>
            <Music className="h-6 w-6 text-foreground" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-xl font-semibold leading-tight">{artist.name}</p>
            <p className="truncate text-xs text-muted-foreground">{artist.genre}</p>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Siguiente artista"
            className="rounded-full border border-border bg-background/60 p-2 backdrop-blur-sm transition-colors hover:border-indigo-electric hover:text-indigo-electric"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-4 space-y-1.5">
          {artist.songs.map((song, i) => (
            <li key={song} className="flex items-center gap-3 text-sm text-foreground/90">
              <span className="w-5 font-mono text-xs text-indigo-electric">{String(i + 1).padStart(2, "0")}</span>
              <span className="truncate">{song}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
