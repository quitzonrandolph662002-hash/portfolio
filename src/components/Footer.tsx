export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink px-5 pb-10 text-paper md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 border-t border-paper/10 pt-8 font-mono text-[11px] uppercase tracking-widest text-cream/40 md:flex-row">
        <span>© {year} Studio — все права защищены</span>
        <span>Сделано с любовью к деталям</span>
        <a href="#top" data-scroll-to="#top" className="hover:text-paper">
          Наверх ↑
        </a>
      </div>
    </footer>
  );
}
