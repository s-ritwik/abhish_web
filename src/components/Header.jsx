export default function Header({ pages, activeSlug, onNavigate }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="https://www.iitk.ac.in/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit IIT Kanpur"
        >
          <img className="brand-logo" src="/assets/images/iitk.png" alt="IIT Kanpur logo" />
          <span className="brand-kicker">IIT Kanpur</span>
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
