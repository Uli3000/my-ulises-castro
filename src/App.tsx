import travelVibe from "@/assets/travel-vibe.jpg";
import { ContentProvider, useContent } from "@/lib/content";
import { EditModeToggle } from "@/components/content-editor";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/sections/hero-section";
import { PantallaSection } from "@/sections/pantalla-section";
import { SonidoSection } from "@/sections/sonido-section";
import { GustosSection } from "@/sections/gustos-section";
import { ViajesSection } from "@/sections/viajes-section";

export default function App() {
  return (
    <ContentProvider>
      <Page />
    </ContentProvider>
  );
}

function Page() {
  const { content } = useContent();
  const { profile, series, cartoons, movies, games, anime, artists, pokemon, food, interests, colors, visited, wishlist } =
    content;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader name={profile.name} />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:pt-12">
        <HeroSection profile={profile} />

        <PantallaSection series={series} cartoons={cartoons} movies={movies} anime={anime} />

        <SonidoSection artists={artists} games={games} />

        <GustosSection pokemon={pokemon} food={food} interests={interests} colors={colors} />

        <ViajesSection visited={visited} wishlist={wishlist} />

        <img
          src={travelVibe}
          alt="Camino serpenteante en un valle montañoso al amanecer"
          loading="lazy"
          width={1280}
          height={800}
          className="mt-12 h-40 w-full rounded-3xl border border-border object-cover opacity-40"
        />
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Hecho con gusto para recordar y compartir.</p>
      </footer>

      <EditModeToggle />
    </div>
  );
}
