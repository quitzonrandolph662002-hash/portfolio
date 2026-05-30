export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 pb-10 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 border-t border-ink/15 pt-8 font-mono text-[11px] uppercase tracking-widest text-ink/50 md:flex-row">
        <span>© {year} Даша · графический дизайнер</span>
        <span>Сделано с любовью к деталям</span>
        <a href="#top" data-scroll-to="#top" className="hover:text-ink">
          Наверх ↑
        </a>
      </div>
    </footer>
  );
}
