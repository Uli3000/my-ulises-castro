import { MapPin, Plane } from "lucide-react";
import type { VisitedItem, WishItem } from "@/lib/content";
import { SectionLabel } from "@/components/ui/section-label";
import { Rail } from "@/components/ui/rail";
import { EditList } from "@/components/content-editor";

type Props = { visited: VisitedItem[]; wishlist: WishItem[] };

export function ViajesSection({ visited, wishlist }: Props) {
  return (
    <section id="viajes" className="mb-4">
      <div className="flex items-center gap-2">
        <SectionLabel icon={MapPin}>Lugares</SectionLabel>
        <EditList list="visited" />
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Donde he estado / donde quiero ir
      </h2>

      <div className="mt-10">
        <Rail itemClass="w-[85vw] sm:w-[420px]">
          {visited.map((v) => (
            <div key={v.city} className="group/place relative overflow-hidden rounded-2xl border border-border">
              <img
                src={v.image}
                alt={v.city}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover/place:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
              <div className="relative z-10 flex min-h-70 flex-col justify-end p-6">
                <h3 className="font-display text-2xl font-semibold">{v.city}</h3>
                <p className="mt-1 text-sm text-foreground/70">{v.note}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {v.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-indigo-electric/30 bg-background/60 px-3 py-1 text-xs backdrop-blur-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Rail>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2">
          <SectionLabel icon={Plane}>Por conocer</SectionLabel>
          <EditList list="wishlist" />
        </div>
        <div className="mt-5">
          <Rail itemClass="w-[75vw] sm:w-[320px]">
            {wishlist.map((w) => (
              <div key={w.place} className="group/wish relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={w.image}
                  alt={w.place}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover/wish:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
                <div className="relative z-10 flex min-h-60 flex-col justify-end p-5">
                  <h3 className="font-display text-xl font-semibold">{w.place}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{w.why}</p>
                </div>
              </div>
            ))}
          </Rail>
        </div>
      </div>
    </section>
  );
}
