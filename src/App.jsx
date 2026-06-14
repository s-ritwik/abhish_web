import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import LegacyPage from "./components/LegacyPage.jsx";
import { getPageBySlug, pages } from "./data/pages.js";
import HomePage from "./pages/HomePage.jsx";
import PeoplePage from "./pages/PeoplePage.jsx";
import ResearchPage from "./pages/ResearchPage.jsx";
import TeachingPage from "./pages/TeachingPage.jsx";

function getRouteFromHash() {
  const rawHash = window.location.hash.replace(/^#\/?/, "");
  return rawHash || "home";
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => setActiveSlug(getRouteFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activePage = useMemo(() => getPageBySlug(activeSlug), [activeSlug]);

  const navigate = (slug) => {
    window.location.hash = `/${slug}`;
    setActiveSlug(slug);
  };

  return (
    <div className="app-shell">
      <Header pages={pages} activeSlug={activePage.slug} onNavigate={navigate} />
      <main className="site-main">
        {activePage.slug === "home" ? <HomePage /> : null}
        {activePage.slug === "people" ? <PeoplePage /> : null}
        {activePage.slug === "research" ? <ResearchPage /> : null}
        {activePage.slug === "teaching" ? <TeachingPage /> : null}
        {activePage.source === "legacy" ? (
          <LegacyPage key={activePage.slug} page={activePage} onNavigate={navigate} />
        ) : null}
      </main>
    </div>
  );
}
