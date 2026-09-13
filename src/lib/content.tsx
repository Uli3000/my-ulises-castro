import * as React from "react";

import heroVibe from "@/assets/hero-vibe.jpg";
import animeFma from "@/assets/anime-fma.webp";
import animeDemonSlayer from "@/assets/anime-demonslayer.jpg";
import animeDbz from "@/assets/anime-dbz.png";
import animeBleach from "@/assets/anime-bleach.jpg";
import animeBoticaria from "@/assets/anime-boticaria.jpg";
import animeFireForce from "@/assets/anime-fireforce.png";
import animeFrieren from "@/assets/anime-frieren.jpg";
import animeHaikyu from "@/assets/anime-haikyu.webp";
import animeHunterXHunter from "@/assets/anime-hxh.jpg";
import animeJujutsuKaisen from "@/assets/anime-jk.jpg";
import animeMyHeroAcademy from "@/assets/anime-mha.jpg";
import animeNaruto from "@/assets/anime-naruto.jpg";
import animeReZero from "@/assets/anime-rezero.webp";
import animeShingeki from "@/assets/anime-shingeki.webp";
import animeSteinsGate from "@/assets/anime-steinsgate.jpg";
import animeVinland from "@/assets/anime-vinalnd.jpg";
import foodMolletes from "@/assets/food-molletes.jpg";
import foodPolloFrito from "@/assets/food-pollo-frito.jpg";
import foodBoneless from "@/assets/food-boneless.jpg";
import foodGorditas from "@/assets/food-gorditas.jpg";
import placeMonterrey from "@/assets/place-monterrey.jpg";
import placeCdmx from "@/assets/place-cdmx.jpg";
import placeSaltillo from "@/assets/place-saltillo.jpg";
import placeMazatlan from "@/assets/place-mazatlan.jpg";
import placeJapon from "@/assets/place-japon.jpg";
import placeItalia from "@/assets/place-italia.jpg";
import placePeru from "@/assets/place-peru.jpg";
import posterCasaDePapel from "@/assets/poster-casadepapel.jpg";
import posterDark from "@/assets/poster-dark.jpg";
import posterUmbrella from "@/assets/poster-umbrella.jpg";
import posterBen10 from "@/assets/poster-ben10.jpg";
import posterAdventureTime from "@/assets/poster-adventuretime.jpg";
import posterIncreibles from "@/assets/poster-losincreibles.jpg";
import posterInfinityWar from "@/assets/poster-infinitywar.jpg";
import posterSpiderverse from "@/assets/poster-spiderverse.jpg";
import posterHollowKnight from "@/assets/poster-hollowknight.jpg";
import posterMinecraft from "@/assets/poster-minecraft.avif";
import posterPokemon from "@/assets/poster-pokemon.jpeg";
import posterLol from "@/assets/poster-lol.jpeg";
import posterAlice from "@/assets/poster-aliceinborderland.jpeg"
import posterArcane from "@/assets/poster-arcane.jpeg"
import posterBakugan from "@/assets/poster-bakugan.jpg"
import posterBen10af from "@/assets/poster-ben10af.jpg"
import posterBen10omni from "@/assets/poster-ben10omniverse.jpg"
import posterBudokai3 from "@/assets/poster-budokai3.webp"
import posterChowder from "@/assets/poster-chowder.jpg"
import posterCuphead from "@/assets/poster-cuphead.avif"
import posterCyberpunk from "@/assets/poster-cyberpunk.webp"
import posterDannyPhanthom from "@/assets/poster-dannyphanthom.jpg"
import posterElEternauta from "@/assets/poster-eleternauta.jpg"
import posterElTigre from "@/assets/poster-eltigre.jpg"
import posterEndgame from "@/assets/poster-endgame.jpg"
import posterFlash from "@/assets/poster-flash.jpg"
import posterGotham from "@/assets/poster-gotham.jpg"
import posterHeoresPoderosos from "@/assets/poster-heroesmaspoderosos.webp"
import posterJimmyNewtron from "@/assets/poster-jimmynewtron.jpg"
import posterKickButtowski from "@/assets/poster-kickbuttowski.jpg"
import posterKnd from "@/assets/poster-knd.webp"
import posterLegendsOfTomorrow from "@/assets/poster-legensoftomorrow.webp"
import posterLiloYStich from "@/assets/poster-lilostich.webp"
import posterMansionFoster from "@/assets/poster-mansionfoster.webp"
import posterMuchaLucha from "@/assets/poster-muchalucha.webp"
import posterPhineasYFerb from "@/assets/poster-phineasyferb.jpg"
import posterPokemonRF from "@/assets/poster-pokemonrf.jpeg"
import posterSandman from "@/assets/poster-sandman.webp"
import posterSconnyDoo from "@/assets/poster-scobbydoosa.jpg"
import posterSmashBrawl from "@/assets/poster-smashbrawl.jpg"
import posterSpectacularSpiderman from "@/assets/poster-spectacuarspiderman.jpg"
import posterSquidgame from "@/assets/poster-squidgame.webp"
import posterStevenUniverse from "@/assets/poster-stevenuniverse.jpg"
import posterStrangerThings from "@/assets/poster-stranger-things.jpg"
import posterTeenTitans from "@/assets/poster-teentitans.jpg"
import posterTitans from "@/assets/poster-titans.jpg"
import posterShowMas from "@/assets/poster-unshowmas.webp"
import posterYoungJustice from "@/assets/poster-young-justice.webp"
import posterAvatar from "@/assets/poster-avatar.jpg"
import posterInvencible from "@/assets/poster-invencible.jpg"
import foodPollopParmesana from "@/assets/food-polloparmesana.jpg";
import foodLasagna from "@/assets/food-lasagna.jpg";
import foodPizza from "@/assets/food-pizza.jpeg";
import placeMexiquillo from "@/assets/place-mexiquillo.jpg";
import placeBelgica from "@/assets/place-belgica.jpg";
import placeEspana from "@/assets/place-espana.jpg";
import placeArgentina from "@/assets/place-argentina.webp";
import placeGuanajuato from "@/assets/place-guanajuato.jpg";
import placeYucatan from "@/assets/place-yucatan.jpg";
import placeQuintanaRoo from "@/assets/place-quinanaroo.jpg";
import posterXMen from "@/assets/poster-xmendofp.jpg"
import { useEffect, useMemo } from "react";

export type Poster = { title: string; meta: string; emoji: string; accent: string; image?: string };
export type AnimeItem = { title: string; character: string; note: string; image?: string };
export type Artist = { name: string; genre: string; accent: string; songs: string[] };
export type PokeItem = { name: string; id: number; type: string; accent: string };
export type FoodItem = { name: string; note: string; image?: string };
export type Interest = { emoji: string; label: string };
export type ColorItem = { name: string; hex: string };
export type VisitedItem = { city: string; note: string; highlights: string[]; image?: string };
export type WishItem = { place: string; why: string; image?: string };

export type Content = {
  profile: { name: string; age: number; tagline: string; heroImage: string };
  series: Poster[];
  cartoons: Poster[];
  movies: Poster[];
  games: Poster[];
  anime: AnimeItem[];
  artists: Artist[];
  pokemon: PokeItem[];
  food: FoodItem[];
  interests: Interest[];
  colors: ColorItem[];
  visited: VisitedItem[];
  wishlist: WishItem[];
};

export const DEFAULT_ACCENT = "from-[#4338ca] to-[#1e1b4b]";

export const defaultContent: Content = {
  profile: {
    name: "Ulises Castro",
    age: 24,
    tagline: "Si soy.",
    heroImage: heroVibe,
  },
  series: [
    { title: "Arcane", meta: "Animacion · LoL", emoji: "🕹️", accent: "from-[#7c3aed] to-[#1e1b4b]", image: posterArcane },
    { title: "Dark", meta: "Ciencia ficción · Tiempo", emoji: "🕳️", accent: "from-[#1e3a5f] to-[#0b1120]", image: posterDark },
    { title: "La Casa de Papel", meta: "Atraco · Tensión", emoji: "🎭", accent: "from-[#c2410c] to-[#7f1d1d]", image: posterCasaDePapel },
    { title: "The Flash", meta: "Superhéroes · 4 primeras temporadas", emoji: "⚡", accent: "from-[#eab308] to-[#b91c1c]", image: posterFlash },
    { title: "Gotham", meta: "Crimen · Origen oscuro", emoji: "🦇", accent: "from-[#374151] to-[#000000]", image: posterGotham },
    { title: "Stranger Things", meta: "Misterio · Años 80", emoji: "🌀", accent: "from-[#b91c1c] to-[#18181b]", image: posterStrangerThings },
    { title: "Invencible", meta: "Superhéroes · Brutal", emoji: "💥", accent: "from-[#e11d48] to-[#020617]", image: posterInvencible },
    { title: "The Umbrella Academy", meta: "Superhéroes raros", emoji: "☂️", accent: "from-[#4338ca] to-[#1e1b4b]", image: posterUmbrella },
    { title: "Juegos del Calamar", meta: "Supervivencia · Juegos mortales", emoji: "🦑", accent: "from-[#db2777] to-[#065f46]", image: posterSquidgame },
    { title: "Alice in Borderland", meta: "Supervivencia · Juegos mortales", emoji: "🃏", accent: "from-[#db2777] to-[#065f46]", image: posterAlice },
    { title: "Sandman", meta: "Fantasía · Sueños", emoji: "🌙", accent: "from-[#1e1b4b] to-[#000000]", image: posterSandman },
    { title: "Cyberpunk Edgerunners", meta: "Cyberpunk · Tragedia", emoji: "🤖", accent: "from-[#fbbf24] to-[#701a75]", image: posterCyberpunk },
    { title: "Titans", meta: "Superhéroes oscuros", emoji: "🦸", accent: "from-[#991b1b] to-[#0f172a]", image: posterTitans },
    { title: "Legends Of Tomorrow", meta: "Ciencia ficción · Superhéroes", emoji: "🔫", accent: "from-[#0ea5e9] to-[#0c4a6e]", image: posterLegendsOfTomorrow },
    { title: "El Eternauta", meta: "Ciencia ficción · Invasión", emoji: "❄️", accent: "from-[#0ea5e9] to-[#0c4a6e]", image: posterElEternauta },
  ],
  cartoons: [
    { title: "Ben 10", meta: "Aliens · Omnitrix", emoji: "⌚", accent: "from-[#15803d] to-[#052e16]", image: posterBen10 },
    { title: "Los Vengadores: Los heroes mas poderoesos del planeta", meta: "Superhéroes · Equipo", emoji: "🛡️", accent: "from-[#dc2626] to-[#1e1b4b]", image: posterHeoresPoderosos },
    { title: "Hora de Aventura", meta: "Ooo · Aventura", emoji: "🗡️", accent: "from-[#0891b2] to-[#0c4a6e]", image: posterAdventureTime },
    { title: "Avatar La Leyenda de Aang", meta: "Elementos · Balance", emoji: "🌪️", accent: "from-[#0ea5e9] to-[#164e63]", image: posterAvatar },
    { title: "Teen Titans", meta: "Superhéroes jóvenes", emoji: "🦸", accent: "from-[#059669] to-[#022c22]", image: posterTeenTitans },
    { title: "Young Justice", meta: "Superhéroes jóvenes", emoji: "🦸", accent: "from-[#1d4ed8] to-[#0f172a]", image: posterYoungJustice },
    { title: "Spectacular Spiderman", meta: "Superhéroes · Instituto", emoji: "🕷️", accent: "from-[#b91c1c] to-[#1e1b4b]", image: posterSpectacularSpiderman },
    { title: "Ben 10 Alien Force", meta: "Aliens · Más oscuro", emoji: "👽", accent: "from-[#166534] to-[#022c22]", image: posterBen10af },
    { title: "Ben 10 Omniverse", meta: "Aliens · Comedia", emoji: "🛸", accent: "from-[#0d9488] to-[#042f2e]", image: posterBen10omni },
    { title: "Los Chicos del Barrio", meta: "Niños contra adultos", emoji: "🌳", accent: "from-[#65a30d] to-[#1a2e05]", image: posterKnd },
    { title: "Danny Phantom", meta: "Fantasmas · Doble vida", emoji: "👻", accent: "from-[#22d3ee] to-[#083344]", image: posterDannyPhanthom },
    { title: "Mucha Lucha", meta: "Lucha libre · Escuela", emoji: "🤼", accent: "from-[#eab308] to-[#713f12]", image: posterMuchaLucha },
    { title: "La Mansión de Foster", meta: "Amigos imaginarios", emoji: "🎈", accent: "from-[#f472b6] to-[#831843]", image: posterMansionFoster },
    { title: "Scooby-Doo Misterios SA", meta: "Misterio · Pandilla", emoji: "🐕", accent: "from-[#78350f] to-[#1c1917]", image: posterSconnyDoo },
    { title: "Phineas y Ferb", meta: "Inventos · Verano infinito", emoji: "🔧", accent: "from-[#fb923c] to-[#7c2d12]", image: posterPhineasYFerb },
    { title: "Steven Universe", meta: "Gemas · Amor y crecimiento", emoji: "💎", accent: "from-[#f472b6] to-[#701a75]", image: posterStevenUniverse },
    { title: "Un Show Mas", meta: "Absurdo · Amistad", emoji: "🎮", accent: "from-[#f59e0b] to-[#7c2d12]", image: posterShowMas },
    { title: "El Tigre", meta: "Héroe o villano", emoji: "🐯", accent: "from-[#f97316] to-[#7c2d12]", image: posterElTigre },
    { title: "Kick Buttowski", meta: "Acrobacias · Caos", emoji: "🛹", accent: "from-[#ea580c] to-[#431407]", image: posterKickButtowski },
    { title: "Lilo y Stitch", meta: "Familia · Alienígena travieso", emoji: "🌺", accent: "from-[#2563eb] to-[#082f49]", image: posterLiloYStich },
    { title: "Jimmy Newtron", meta: "Ciencia · Inventos", emoji: "🧪", accent: "from-[#0284c7] to-[#082f49]", image: posterJimmyNewtron },
    { title: "Chowder", meta: "Cocina · Absurdo", emoji: "🍲", accent: "from-[#a855f7] to-[#3b0764]", image: posterChowder },
    
  ],
  movies: [
    { title: "Los Increíbles", meta: "Familia con superpoderes", emoji: "🦸", accent: "from-[#b91c1c] to-[#450a0a]", image: posterIncreibles },
    { title: "Avengers: Infinity War", meta: "El golpe más duro", emoji: "💎", accent: "from-[#6d28d9] to-[#2e1065]", image: posterInfinityWar },
    { title: "Spider-Man: Into the Spider-Verse", meta: "Estilo puro", emoji: "🕸️", accent: "from-[#db2777] to-[#4c0519]", image: posterSpiderverse },
    { title: "Avengers: Endgame", meta: "El juego final", emoji: "⚔️", accent: "from-[#6d28d9] to-[#2e1065]", image: posterEndgame },
    { title: "X-Men: Días del Futuro Pasado", meta: "Viaje en el tiempo · Mutantes", emoji: "🌀", accent: "from-[#1e3a8a] to-[#020617]", image: posterXMen },
  ],
  games: [
    { title: "Hollow Knight", meta: "Metroidvania melancólico", emoji: "🦋", accent: "from-[#1e3a8a] to-[#020617]", image: posterHollowKnight },
    { title: "Minecraft", meta: "Construir sin final", emoji: "⛏️", accent: "from-[#166534] to-[#052e16]", image: posterMinecraft },
    { title: "League of Legends", meta: "Grieta del invocador", emoji: "🛡️", accent: "from-[#0e7490] to-[#083344]", image: posterLol },
    { title: "Pokémon Rojo Fuego", meta: "Kanto · Clásico retro", emoji: "🔥", accent: "from-[#ea580c] to-[#7c2d12]", image: posterPokemonRF },
    { title: "Cuphead", meta: "Run and gun · Estilo retro", emoji: "☕", accent: "from-[#b45309] to-[#1c1917]", image: posterCuphead },
    { title: "DBZ: Budokai Tenkaichi 3", meta: "Peleas · Power level", emoji: "🐉", accent: "from-[#f59e0b] to-[#7c2d12]", image: posterBudokai3 },
    { title: "Super Smash Bros Brawl", meta: "Peleas de plataformas", emoji: "🥊", accent: "from-[#4338ca] to-[#1e1b4b]", image: posterSmashBrawl },
    { title: "Bakugan", meta: "Peleas de esferas", emoji: "🔴", accent: "from-[#dc2626] to-[#1e1b4b]", image: posterBakugan },
  ],
  anime: [
    { title: "Fullmetal Alchemist", character: "Roy Mustang", note: "Alquimia, intercambio equivalente.", image: animeFma },
    { title: "Dragon Ball Z", character: "Gohan", note: "No importa lo que suceda siempre el animo mantendre.", image: animeDbz },
    { title: "Shingeki no Kyojin", character: "Armin Arlert", note: "La libertad tiene un precio muy alto.", image: animeShingeki },
    { title: "Hunter x Hunter", character: "Kurapika", note: "Una aventura que nunca deja de crecer.", image: animeHunterXHunter },
    { title: "Demon Slayer", character: "Zenitsu", note: "Si sabes hacer solo una cosa bien, dominala a la perfeccion.", image: animeDemonSlayer },
    { title: "Re:Zero", character: "Natsuki Subaru", note: "Eres un tipo increible Natsuki Subaru.", image: animeReZero },
    { title: "Haikyu!!", character: "Kei Tsukishima", note: "Hola. Soy el tipo normal. Un placer conocerte.", image: animeHaikyu },
    { title: "Jujutsu Kaisen", character: "Yuta Okkotsu", note: "Cargar una maldición para salvar a otros.", image: animeJujutsuKaisen },
    { title: "Steins;Gate", character: "Rintaro Okabe", note: "El Psy Kongroo.", image: animeSteinsGate },
    { title: "Vinland Saga", character: "Thorfinn", note: "De la venganza a buscar un lugar sin enemigos, nadie tiene enemigos.", image: animeVinland },
    { title: "Naruto", character: "Shikamaru Nara", note: "Desearía ser una simple nube… flotando libremente en el cielo.", image: animeNaruto },
    { title: "Frieren", character: "Fern", note: "Aprender a valorar el tiempo.", image: animeFrieren },
    { title: "Bleach", character: "Kiske Urahara", note: "Estoy aquí. No hay mayor seguridad que esa.", image: animeBleach },
    { title: "My Hero Academia", character: "Izuku Midoriya", note: "Un quirk prestado y una voluntad de acero.", image: animeMyHeroAcademy },
    { title: "Diarios de la Boticaria", character: "Maomao", note: "Curiosidad, veneno y deducción.", image: animeBoticaria },
    { title: "Fire Force", character: "Arthur Boyle", note: "A veces, ves las cosas cerrando los ojos.", image: animeFireForce },  
  ],
  artists: [
    { name: "Imagine Dragons", genre: "Rock alternativo", accent: "from-[#4338ca] to-[#111827]", songs: ["Believer", "Enemy", "Radioactive"] },
    { name: "The Warning", genre: "Rock mexicano", accent: "from-[#b91c1c] to-[#1c0a0a]", songs: ["Disciple", "Consume", "MORE", "Evolve"] },
    { name: "AURORA", genre: "Art pop nórdico", accent: "from-[#0e7490] to-[#0f172a]", songs: ["Cure For Me", "Runaway", "Conqueror", "Queendom"] },
    { name: "Coldplay", genre: "Pop y Rock alternativo", accent: "from-[#eab308] to-[#1e1b4b]", songs: ["A Sky Full of Stars", "Something Just Like This", "Viva La Vida"] },
  ],
  pokemon: [
    { name: "Gengar", id: 94, type: "Fantasma / Veneno", accent: "from-[#6d28d9] to-[#2e1065]" },
    { name: "Alakazam", id: 65, type: "Psíquico", accent: "from-[#a16207] to-[#422006]" },
    { name: "Aegislash", id: 681, type: "Acero / Fantasma", accent: "from-[#0f766e] to-[#042f2e]" },
    { name: "Chandelure", id: 609, type: "Fantasma / Fuego", accent: "from-[#7e22ce] to-[#1e1b4b]" },
    { name: "Cofagrigus", id: 563, type: "Fantasma", accent: "from-[#78350f] to-[#1c1917]" },
    { name: "Charizard", id: 6, type: "Fuego / Dragón", accent: "from-[#1e3a8a] to-[#000000]" },
    { name: "Infernape", id: 392, type: "Fuego / Lucha", accent: "from-[#ea580c] to-[#450a0a]" },
    { name: "Krookodile", id: 553, type: "Tierra / Siniestro", accent: "from-[#92400e] to-[#1c1917]" },
    { name: "Talonflame", id: 663, type: "Fuego / Volador", accent: "from-[#dc2626] to-[#7c2d12]" },
    { name: "Raichu", id: 26, type: "Eléctrico", accent: "from-[#facc15] to-[#78350f]" },
    { name: "Snorlax", id: 143, type: "Normal", accent: "from-[#0284c7] to-[#0c4a6e]" },
    { name: "Umbreon", id: 197, type: "Siniestro", accent: "from-[#1e1b4b] to-[#000000]" },
    { name: "Sceptile", id: 254, type: "Planta", accent: "from-[#15803d] to-[#052e16]" },
  ],
  food: [
    { name: "Molletes", note: "Desayuno que nunca falla", image: foodMolletes },
    { name: "Boneless", note: "Con bbq de sobra", image: foodBoneless },
    { name: "Pollo frito", note: "Crujiente, siempre", image: foodPolloFrito },
    { name: "Gorditas", note: "Sabor de casa", image: foodGorditas },
    { name: "Pollo a la Parmesana", note: "Queso derretido y salsa de tomate", image: foodPollopParmesana },
    { name: "Lasaña", note: "Capas de pasta, carne y queso", image: foodLasagna },
    { name: "Pizza", note: "La favorita de siempre", image: foodPizza },
  ],
  interests: [
    { label: "Geografia", emoji: "🏔️" },
    { label: "Astronomía", emoji: "🔭" },
    { label: "Diseño", emoji: "🎨" },
    { label: "Tecnología", emoji: "💻" },
    { label: "Caminar de noche", emoji: "🌙" },
    { label: "Videojuegos", emoji: "🕹️" },
    { label: "Anime", emoji: "💢" },
    { label: "Coleccionar Funkos-Figuras-Decorables", emoji: "📦" },
    { label: "Fotografia", emoji: "📷" },
  ],
  colors: [
    { hex: "#7e22ce", name: "Morado" },
    { hex: "#15803d", name: "Verde" },
    { hex: "#000000", name: "Negro" },
    { hex: "#d4af37", name: "Dorado" },
  ],
  visited: [
    { city: "Monterrey, Nuevo León", image: placeMonterrey, highlights: ["Parque Fundidora", "Bioparque", "Hack MTY", "Luztopia","Evento lucha libre"], note: "La ciudad entre las montañas." },
    { city: "Ciudad de México", image: placeCdmx, highlights: ["El Ángel", "Torikami Café", "Castillo de Chapultepec, Zócalo"], note: "La capital de Mexico." },
    { city: "Saltillo, Coahuila", image: placeSaltillo, highlights: ["Museo del Desierto"], note: "Desierto, dinosaurios y calma." },
    { city: "Mazatlán, Sinaloa", image: placeMazatlan, highlights: ["Mazagua", "Acuario", "Isla de la piedra","Malecón "], note: "Agua, sol y días largos." },
    { city: "Mexiquillo, Durango", image: placeMexiquillo, highlights: ["Cascadas", "Zona de piedras", "Cabañas"], note: "Vistas bonitas entre bosque y cascadas." },
  ],
  wishlist: [
    { place: "Japón", image: placeJapon, why: "Por el anime, la cultura y las calles de noche." },
    { place: "Italia", image: placeItalia, why: "Historia, arquitectura y comida de calidad." },
    { place: "Perú", image: placePeru, why: "Machu Picchu y Peru." },
    { place: "Bélgica", image: placeBelgica, why: "Chocolate, cervezas y ciudades medievales." },
    { place: "España", image: placeEspana, why: "Arquitectura, playas y buena comida." },
    { place: "Argentina", image: placeArgentina, why: "Buenos Aires, asado y paisajes de la Patagonia." },
    { place: "Guanajuato, México", image: placeGuanajuato, why: "Callejones, colores y el Cervantino." },
    { place: "Yucatán, México", image: placeYucatan, why: "Cenotes, ruinas mayas y comida yucateca." },
    { place: "Quintana Roo, México", image: placeQuintanaRoo, why: "Playas, arrecifes y selva." },
  ],
};

const STORAGE_KEY = "mis-gustos-contenido-v1";

export type ListKey = Exclude<keyof Content, "profile">;

type Ctx = {
  content: Content;
  editing: boolean;
  setEditing: (v: boolean) => void;
  updateProfile: (p: Content["profile"]) => void;
  updateList: <K extends ListKey>(key: K, items: Content[K]) => void;
  reset: () => void;
  saveError: string | null;
};

const ContentContext = React.createContext<Ctx | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [overrides, setOverrides] = React.useState<Partial<Content>>({});
  const [editing, setEditing] = React.useState(false);
  const [saveError, setSaveError] = React.useState<string | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setOverrides(JSON.parse(raw) as Partial<Content>);
      }
    } catch {
    }
    setLoaded(true);
  }, []);

  const persist = React.useCallback((next: Partial<Content>) => {
    setOverrides(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaveError(null);
    } catch {
      setSaveError("No se pudo guardar: las imágenes ocupan demasiado espacio en este navegador.");
    }
  }, []);

  const content: Content = useMemo(
    () => ({ ...defaultContent, ...overrides, profile: { ...defaultContent.profile, ...overrides.profile } }),
    [overrides],
  );

  const value: Ctx = useMemo(
    () => ({
      content,
      editing,
      setEditing,
      saveError,
      updateProfile: (profile) => persist({ ...overrides, profile }),
      updateList: (key, items) => persist({ ...overrides, [key]: items } as Partial<Content>),
      reset: () => {
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch {
        }
        setOverrides({});
        setSaveError(null);
      },
    }),
    [content, editing, overrides, persist, saveError],
  );

  if (!loaded) {
    // Evita diferencias entre el render del servidor y el navegador.
  }

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = React.useContext(ContentContext);
  if (!ctx) throw new Error("useContent debe usarse dentro de ContentProvider");
  return ctx;
}

/** Reduce y convierte una imagen elegida por el usuario para poder guardarla. */
export async function fileToDataUrl(file: File, maxSize = 640): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No se pudo procesar la imagen");
  ctx.drawImage(bitmap, 0, 0, w, h);
  return canvas.toDataURL("image/jpeg", 0.72);
}