export default function Header({ pages, activeSlug, onNavigate }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#/home"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("home");
          }}
        >
          <span className="brand-kicker">IIT Kanpur</span>
          <span className="brand-title">Helicopter and VTOL Laboratory</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {pages.map((page) => (
            <a
              key={page.slug}
              href={`#/${page.slug}`}
              aria-current={activeSlug === page.slug ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(page.slug);
              }}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
