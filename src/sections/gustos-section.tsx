import { Heart, Palette, Sparkles, Star, Utensils } from "lucide-react";
import type { ColorItem, FoodItem, Interest, PokeItem } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { Card } from "@/components/ui/card";
import { Rail } from "@/components/ui/rail";
import { EditList } from "@/components/content-editor";

type Props = {
  pokemon: PokeItem[];
  food: FoodItem[];
  interests: Interest[];
  colors: ColorItem[];
};

export function GustosSection({ pokemon, food, interests, colors }: Props) {
  return (
    <section id="gustos" className="mb-20">
      <SectionLabel icon={Heart}>Lo que me define</SectionLabel>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Pokémon, comida y detalles
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <Card className="lg:col-span-6">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Star}>Pokémon favoritos</SectionLabel>
            <EditList list="pokemon" />
          </div>
          <div className="mt-5">
            <Rail itemClass="w-32 sm:w-36">
              {pokemon.map((p) => (
                <div
                  key={p.name}
                  className="group/poke relative overflow-hidden rounded-xl border border-border p-3 text-center"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${p.accent} opacity-40`} />
                  <div className="relative z-10">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                      alt={p.name}
                      loading="lazy"
                      width={475}
                      height={475}
                      className="mx-auto h-24 w-24 object-contain transition-transform duration-500 group-hover/poke:scale-110"
                    />
                    <p className="mt-2 font-display text-sm font-semibold">{p.name}</p>
                    <p className="text-[11px] text-foreground/60">{p.type}</p>
                  </div>
                </div>
              ))}
            </Rail>
          </div>
        </Card>

        <Card className="lg:col-span-6">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Utensils}>Comida favorita</SectionLabel>
            <EditList list="food" />
          </div>
          <div className="mt-5">
            <Rail itemClass="w-36 sm:w-40">
              {food.map((f) => (
                <div key={f.name} className="group/food relative aspect-square overflow-hidden rounded-xl border border-border">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/food:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2.5">
                    <p className="font-display text-sm font-semibold leading-tight">{f.name}</p>
                    <p className="text-[11px] text-foreground/60">{f.note}</p>
                  </div>
                </div>
              ))}
            </Rail>
          </div>
        </Card>

        <Card className="lg:col-span-8">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Sparkles}>Cosas que me interesan</SectionLabel>
            <EditList list="interests" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {interests.map((i) => (
              <div
                key={i.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-3 transition-colors hover:border-indigo-electric/40"
              >
                <span className="text-xl" aria-hidden="true">
                  {i.emoji}
                </span>
                <span className="text-sm font-medium">{i.label}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-4">
          <div className="flex items-center gap-2">
            <SectionLabel icon={Palette}>Colores favoritos</SectionLabel>
            <EditList list="colors" />
          </div>
          <div className="mt-5 space-y-3">
            {colors.map((c) => (
              <div key={c.hex} className="flex items-center gap-3">
                <div
                  className="h-12 w-12 shrink-0 rounded-xl border border-border shadow-inner"
                  style={{ backgroundColor: c.hex }}
                />
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
