import { Music } from "lucide-react";
import type { Artist, Poster } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { ArtistsPlayer } from "@/components/carousels/artists-player";
import { GamesCarousel } from "@/components/carousels/games-carousel";

type Props = { artists: Artist[]; games: Poster[] };

export function SonidoSection({ artists, games }: Props) {
  return (
    <section id="sonido" className="mb-20">
      <SectionLabel icon={Music}>Sonido y control</SectionLabel>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Música & Juegos
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <ArtistsPlayer artists={artists} />
        </div>

        <div className="lg:col-span-6">
          <GamesCarousel games={games} />
        </div>
      </div>
    </section>
  );
}
