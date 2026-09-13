import * as React from "react";
import { Pencil, Plus, Trash2, X, ArrowUp, ArrowDown, Check } from "lucide-react";

import {
  DEFAULT_ACCENT,
  fileToDataUrl,
  useContent,
  type Content,
  type ListKey,
} from "@/lib/content";

type Field = {
  key: string;
  label: string;
  type: "text" | "number" | "image" | "list" | "color";
  placeholder?: string;
};

type Schema = { title: string; singular: string; fields: Field[]; blank: Record<string, unknown> };

const posterFields: Field[] = [
  { key: "title", label: "Título", type: "text", placeholder: "Nombre" },
  { key: "meta", label: "Descripción corta", type: "text", placeholder: "Género o nota" },
  { key: "emoji", label: "Emoji", type: "text", placeholder: "🎬" },
  { key: "image", label: "Portada", type: "image" },
];

const posterBlank = { title: "", meta: "", emoji: "✨", accent: DEFAULT_ACCENT, image: "" };

export const schemas: Record<ListKey, Schema> = {
  series: { title: "Series live-action", singular: "serie", fields: posterFields, blank: posterBlank },
  cartoons: { title: "Caricaturas", singular: "caricatura", fields: posterFields, blank: posterBlank },
  movies: { title: "Películas", singular: "película", fields: posterFields, blank: posterBlank },
  games: { title: "Juegos", singular: "juego", fields: posterFields, blank: posterBlank },
  anime: {
    title: "Anime",
    singular: "anime",
    fields: [
      { key: "title", label: "Título", type: "text" },
      { key: "character", label: "Personaje favorito", type: "text" },
      { key: "note", label: "Nota", type: "text" },
      { key: "image", label: "Imagen", type: "image" },
    ],
    blank: { title: "", character: "", note: "", image: "" },
  },
  artists: {
    title: "Artistas",
    singular: "artista",
    fields: [
      { key: "name", label: "Nombre", type: "text" },
      { key: "genre", label: "Género", type: "text" },
      { key: "songs", label: "Canciones (una por línea)", type: "list" },
    ],
    blank: { name: "", genre: "", accent: DEFAULT_ACCENT, songs: [] },
  },
  pokemon: {
    title: "Pokémon favoritos",
    singular: "Pokémon",
    fields: [
      { key: "name", label: "Nombre", type: "text" },
      { key: "id", label: "Número de la Pokédex", type: "number", placeholder: "94" },
      { key: "type", label: "Tipo", type: "text", placeholder: "Fantasma / Veneno" },
    ],
    blank: { name: "", id: 1, type: "", accent: DEFAULT_ACCENT },
  },
  food: {
    title: "Comida favorita",
    singular: "platillo",
    fields: [
      { key: "name", label: "Nombre", type: "text" },
      { key: "note", label: "Nota", type: "text" },
      { key: "image", label: "Foto", type: "image" },
    ],
    blank: { name: "", note: "", image: "" },
  },
  interests: {
    title: "Cosas que me interesan",
    singular: "interés",
    fields: [
      { key: "emoji", label: "Emoji", type: "text", placeholder: "🔭" },
      { key: "label", label: "Nombre", type: "text" },
    ],
    blank: { emoji: "✨", label: "" },
  },
  colors: {
    title: "Colores favoritos",
    singular: "color",
    fields: [
      { key: "name", label: "Nombre", type: "text" },
      { key: "hex", label: "Color", type: "color" },
    ],
    blank: { name: "", hex: "#4f46e5" },
  },
  visited: {
    title: "Lugares visitados",
    singular: "lugar",
    fields: [
      { key: "city", label: "Lugar", type: "text" },
      { key: "note", label: "Nota", type: "text" },
      { key: "highlights", label: "Qué hice (uno por línea)", type: "list" },
      { key: "image", label: "Foto", type: "image" },
    ],
    blank: { city: "", note: "", highlights: [], image: "" },
  },
  wishlist: {
    title: "Lugares por conocer",
    singular: "lugar",
    fields: [
      { key: "place", label: "Lugar", type: "text" },
      { key: "why", label: "Por qué", type: "text" },
      { key: "image", label: "Foto", type: "image" },
    ],
    blank: { place: "", why: "", image: "" },
  },
};

const inputClass =
  "w-full rounded-lg border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-indigo-electric";

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border bg-card p-5 shadow-2xl sm:rounded-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:border-indigo-electric hover:text-indigo-electric"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        {value ? (
          <img src={value} alt="" className="h-16 w-16 rounded-lg border border-border object-cover" />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">
            sin foto
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer rounded-lg border border-border px-3 py-1.5 text-xs transition-colors hover:border-indigo-electric hover:text-indigo-electric">
            {busy ? "Procesando…" : "Subir imagen"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setBusy(true);
                setError(null);
                try {
                  onChange(await fileToDataUrl(file));
                } catch {
                  setError("No se pudo usar esa imagen.");
                }
                setBusy(false);
              }}
            />
          </label>
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
            >
              Quitar
            </button>
          )}
        </div>
      </div>
      <input
        className={inputClass}
        placeholder="…o pega el enlace de una imagen"
        value={value.startsWith("data:") ? "" : value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ItemForm({
  fields,
  value,
  onChange,
}: {
  fields: Field[];
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
}) {
  const set = (k: string, v: unknown) => onChange({ ...value, [k]: v });

  return (
    <div className="space-y-4">
      {fields.map((f) => (
        <div key={f.key}>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {f.label}
          </label>
          {f.type === "image" ? (
            <ImageField value={String(value[f.key] ?? "")} onChange={(v) => set(f.key, v)} />
          ) : f.type === "list" ? (
            <textarea
              rows={4}
              className={inputClass}
              value={(Array.isArray(value[f.key]) ? (value[f.key] as string[]) : []).join("\n")}
              onChange={(e) =>
                set(
                  f.key,
                  e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
                )
              }
            />
          ) : f.type === "color" ? (
            <div className="flex items-center gap-3">
              <input
                type="color"
                className="h-10 w-14 cursor-pointer rounded-lg border border-border bg-transparent"
                value={String(value[f.key] ?? "#4f46e5")}
                onChange={(e) => set(f.key, e.target.value)}
              />
              <input
                className={inputClass}
                value={String(value[f.key] ?? "")}
                onChange={(e) => set(f.key, e.target.value)}
              />
            </div>
          ) : (
            <input
              type={f.type === "number" ? "number" : "text"}
              className={inputClass}
              placeholder={f.placeholder}
              value={String(value[f.key] ?? "")}
              onChange={(e) => set(f.key, f.type === "number" ? Number(e.target.value) : e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function itemLabel(item: Record<string, unknown>) {
  return String(item["title"] ?? item["name"] ?? item["label"] ?? item["city"] ?? item["place"] ?? "Sin nombre");
}

/** Botón que abre el administrador de una lista (solo en modo edición). */
export function EditList({ list }: { list: ListKey }) {
  const { editing, content, updateList } = useContent();
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState<{ index: number; value: Record<string, unknown> } | null>(null);
  const schema = schemas[list];
  const items = content[list] as unknown as Record<string, unknown>[];

  if (!editing) return null;

  const save = (next: Record<string, unknown>[]) => updateList(list, next as never);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full border border-indigo-electric/50 bg-indigo-electric/10 px-3 py-1 text-xs font-medium text-indigo-electric transition-colors hover:bg-indigo-electric/20"
      >
        <Pencil className="h-3 w-3" /> Editar
      </button>

      {open && (
        <Modal title={schema.title} onClose={() => (draft ? setDraft(null) : setOpen(false))}>
          {draft ? (
            <div>
              <ItemForm
                fields={schema.fields}
                value={draft.value}
                onChange={(value) => setDraft({ ...draft, value })}
              />
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const next = [...items];
                    if (draft.index === -1) next.push(draft.value);
                    else next[draft.index] = draft.value;
                    save(next);
                    setDraft(null);
                  }}
                  className="flex-1 rounded-lg bg-indigo-electric px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setDraft(null)}
                  className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-2"
                  >
                    <span className="min-w-0 flex-1 truncate text-sm">{itemLabel(item)}</span>
                    <button
                      type="button"
                      aria-label="Subir"
                      disabled={i === 0}
                      onClick={() => {
                        const next = [...items];
                        const prev = next[i - 1]!;
                        next[i - 1] = next[i]!;
                        next[i] = prev;
                        save(next);
                      }}
                      className="p-1 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Bajar"
                      disabled={i === items.length - 1}
                      onClick={() => {
                        const next = [...items];
                        const after = next[i + 1]!;
                        next[i + 1] = next[i]!;
                        next[i] = after;
                        save(next);
                      }}
                      className="p-1 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Editar"
                      onClick={() => setDraft({ index: i, value: { ...item } })}
                      className="p-1 text-muted-foreground transition-colors hover:text-indigo-electric"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Eliminar"
                      onClick={() => save(items.filter((_, j) => j !== i))}
                      className="p-1 text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
                {items.length === 0 && (
                  <li className="rounded-lg border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                    Todavía no hay nada aquí.
                  </li>
                )}
              </ul>

              <button
                type="button"
                onClick={() => setDraft({ index: -1, value: { ...schema.blank } })}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-electric/50 bg-indigo-electric/10 px-4 py-2 text-sm font-medium text-indigo-electric transition-colors hover:bg-indigo-electric/20"
              >
                <Plus className="h-4 w-4" /> Agregar {schema.singular}
              </button>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}

/** Editor de los datos del inicio. */
export function EditProfile() {
  const { editing, content, updateProfile } = useContent();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Record<string, unknown>>({ ...content.profile });

  if (!editing) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setValue({ ...content.profile });
          setOpen(true);
        }}
        className="inline-flex items-center gap-1.5 rounded-full border border-indigo-electric/50 bg-indigo-electric/10 px-3 py-1 text-xs font-medium text-indigo-electric transition-colors hover:bg-indigo-electric/20"
      >
        <Pencil className="h-3 w-3" /> Editar inicio
      </button>

      {open && (
        <Modal title="Mi información" onClose={() => setOpen(false)}>
          <ItemForm
            fields={[
              { key: "name", label: "Nombre", type: "text" },
              { key: "age", label: "Edad", type: "number" },
              { key: "tagline", label: "Frase", type: "text" },
              { key: "heroImage", label: "Imagen principal", type: "image" },
            ]}
            value={value}
            onChange={setValue}
          />
          <button
            type="button"
            onClick={() => {
              updateProfile({
                name: String(value["name"] ?? ""),
                age: Number(value["age"] ?? 0),
                tagline: String(value["tagline"] ?? ""),
                heroImage: String(value["heroImage"] ?? ""),
              } as Content["profile"]);
              setOpen(false);
            }}
            className="mt-5 w-full rounded-lg bg-indigo-electric px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Guardar
          </button>
        </Modal>
      )}
    </>
  );
}

/** Botón flotante para entrar y salir del modo edición. */
export function EditModeToggle() {
  const { editing, setEditing, saveError } = useContent();

  return (
    <div className="fixed bottom-5 right-5 z-90 flex flex-col items-end gap-2">
      {saveError && (
        <p className="max-w-xs rounded-lg border border-destructive/40 bg-card px-3 py-2 text-xs text-destructive shadow-lg">
          {saveError}
        </p>
      )}
      <button
        type="button"
        onClick={() => setEditing(!editing)}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-xl transition-all ${
          editing
            ? "bg-indigo-electric text-white"
            : "border border-border bg-card text-foreground hover:border-indigo-electric hover:text-indigo-electric"
        }`}
      >
        {editing ? <Check className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
        {editing ? "Listo" : "Editar"}
      </button>
    </div>
  );
}
