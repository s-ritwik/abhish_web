import { publicPath } from "../utils/publicPath.js";

function groupNavigationPages(pages) {
  const items = [];
  const groups = new Map();

  pages.forEach((page) => {
    if (!page.navGroup) {
      items.push({ type: "page", page });
      return;
    }

    if (!groups.has(page.navGroup)) {
      const group = {
        type: "group",
        id: page.navGroup,
        label: page.navGroupLabel,
        pages: [],
      };
      groups.set(page.navGroup, group);
      items.push(group);
    }

    groups.get(page.navGroup).pages.push(page);
  });

  return items;
}

export default function Header({ pages, activeSlug, onNavigate }) {
  const navigationItems = groupNavigationPages(pages);

  const handleNavigate = (event, slug, options) => {
    event.preventDefault();
    onNavigate(slug, options);
  };

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
          <img className="brand-logo" src={publicPath("/assets/images/iitk.png")} alt="IIT Kanpur logo" />
          <span className="brand-kicker">IIT Kanpur</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            if (item.type === "group") {
              const isGroupActive = item.pages.some((page) => page.slug === activeSlug);
              const firstPage = item.pages[0];

              return (
                <div className="nav-group" key={item.id}>
                  <a
                    className="nav-group-trigger"
                    href={`#/${firstPage.slug}`}
                    aria-current={isGroupActive ? "page" : undefined}
                    onClick={(event) => handleNavigate(event, firstPage.slug)}
                  >
                    {item.label}
                  </a>
                  <div className="nav-submenu" role="menu" aria-label={`${item.label} sections`}>
                    {item.pages.map((page) => (
                      <a
                        key={page.slug}
                        href={`#/${page.slug}`}
                        role="menuitem"
                        aria-current={activeSlug === page.slug ? "page" : undefined}
                        onClick={(event) => handleNavigate(event, page.slug)}
                      >
                        {page.navLabel || page.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            if (item.page.navChildren?.length) {
              const isGroupActive = activeSlug === item.page.slug;

              return (
                <div className="nav-group" key={item.page.slug}>
                  <a
                    className="nav-group-trigger"
                    href={`#/${item.page.slug}`}
                    aria-current={isGroupActive ? "page" : undefined}
                    onClick={(event) => handleNavigate(event, item.page.slug)}
                  >
                    {item.page.label}
                  </a>
                  <div className="nav-submenu" role="menu" aria-label={`${item.page.label} sections`}>
                    {item.page.navChildren.map((child) => (
                      <a
                        key={child.sectionId}
                        href={`#/${item.page.slug}`}
                        role="menuitem"
                        onClick={(event) =>
                          handleNavigate(event, item.page.slug, { sectionId: child.sectionId })
                        }
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.page.slug}
                href={`#/${item.page.slug}`}
                aria-current={activeSlug === item.page.slug ? "page" : undefined}
                onClick={(event) => handleNavigate(event, item.page.slug)}
              >
                {item.page.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
