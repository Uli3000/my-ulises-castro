import type { Content } from "@/lib/content";
import { EditProfile } from "@/components/content-editor";

export function HeroSection({ profile }: { profile: Content["profile"] }) {
  return (
    <section className="mb-20 grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-5">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-electric">
          Torreón, Coahuila
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          {profile.age} años · {profile.tagline}
        </p>
        <div className="mt-5">
          <EditProfile />
        </div>
      </div>
      <div className="order-1 lg:order-2 lg:col-span-7">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img
            src={profile.heroImage}
            alt="Ilustración de gustos personales: música, juegos, películas y un Pokémon"
            className="h-80 w-full object-cover sm:h-100"
            width={1280}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}
