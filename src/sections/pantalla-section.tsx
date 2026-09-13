import { Clapperboard, Film, Sparkles, Tv } from "lucide-react";
import type { AnimeItem, Poster } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { Card } from "@/components/ui/card";
import { EditList } from "@/components/content-editor";
import { SpotlightCarousel } from "@/components/carousels/spotlight-carousel";
import { AnimeCarousel } from "@/components/carousels/anime-carousel";

type Props = {
  series: Poster[];
  cartoons: Poster[];
  movies: Poster[];
  anime: AnimeItem[];
};

export function PantallaSection({ series, cartoons, movies, anime }: Props) {
  return (
    <section id="pantalla" className="mb-20">
      <SectionLabel icon={Clapperboard}>Pantalla</SectionLabel>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Series, caricaturas y películas
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <Card className="lg:col-span-7">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Tv}>Series live-action</SectionLabel>
            <EditList list="series" />
          </div>
          <div className="mt-5">
            <SpotlightCarousel items={series} />
          </div>
        </Card>

        <div className="lg:col-span-5">
          <AnimeCarousel animeList={anime} />
        </div>

        <Card className="lg:col-span-6">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Sparkles}>Caricaturas</SectionLabel>
            <EditList list="cartoons" />
          </div>
          <div className="mt-5">
            <SpotlightCarousel items={cartoons} />
          </div>
        </Card>

        <Card className="lg:col-span-6">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Film}>Películas</SectionLabel>
            <EditList list="movies" />
          </div>
          <div className="mt-5">
            <SpotlightCarousel items={movies} />
          </div>
        </Card>
      </div>
    </section>
  );
}
