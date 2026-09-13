export function SiteHeader({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="font-display text-lg font-semibold tracking-tight">{name}</span>
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#pantalla" className="transition-colors hover:text-foreground">
            Pantalla
          </a>
          <a href="#sonido" className="transition-colors hover:text-foreground">
            Música & Juegos
          </a>
          <a href="#gustos" className="transition-colors hover:text-foreground">
            Gustos
          </a>
          <a href="#viajes" className="transition-colors hover:text-foreground">
            Viajes
          </a>
        </nav>
      </div>
    </header>
  );
}
