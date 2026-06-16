import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import LegacyPage from "./components/LegacyPage.jsx";
import { getPageBySlug, pages } from "./data/pages.js";
import CalendarPage from "./pages/CalendarPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
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
  const navigationItems = useMemo(() => pages.filter((page) => page.slug !== "contact"), []);

  const navigate = (slug) => {
    window.location.hash = `/${slug}`;
    setActiveSlug(slug);
  };

  return (
    <div className="app-shell">
      <Header pages={navigationItems} activeSlug={activePage.slug} onNavigate={navigate} />
      <main className="site-main">
        {activePage.slug === "home" ? <HomePage /> : null}
        {activePage.slug === "people" ? <PeoplePage /> : null}
        {activePage.slug === "research" ? <ResearchPage /> : null}
        {activePage.slug === "teaching" ? <TeachingPage /> : null}
        {activePage.slug === "calendar" ? <CalendarPage /> : null}
        {activePage.slug === "gallery" ? <GalleryPage /> : null}
        {activePage.slug === "contact" ? <ContactPage /> : null}
        {activePage.source === "legacy" ? (
          <LegacyPage key={activePage.slug} page={activePage} onNavigate={navigate} />
        ) : null}
      </main>
    </div>
  );
}
