/* ==========================================================================
   APP ROOT
   Wires the store, background layers, chrome and the 30-page hash router.
   ========================================================================== */
import { useEffect, useMemo } from "react";
import { StoreProvider, useStore, PAGES, type PageId } from "./lib/store";
import {
  BackToTop, Cursor, EmberField, Footer, GeothermalAnalyzer,
  LavaBackdrop, Navbar, Preloader, StickyCTA,
} from "./components/chrome";

import Home from "./pages/Home";
import { About, Resume, Skills, Stack } from "./pages/CorePages";
import { CaseStudies, ProjectDetail, Projects } from "./pages/WorkPages";
import { CrossPlatform, FlutterArch, GitHubActivity, OpenSource, Performance } from "./pages/EngPages";
import {
  Awards, Contact, Experience, Mentorship, Services, Talks, Testimonials, Writing,
} from "./pages/CommunityPages";
import {
  Accessibility, DesignSystem, Faq, Labs, Legal, Localization, Pricing,
} from "./pages/SystemPages";

/* --------- Route table: PageId -> element --------- */
const ROUTES: Record<PageId, () => React.ReactElement> = {
  home: () => <Home />,
  about: () => <About />,
  resume: () => <Resume />,
  skills: () => <Skills />,
  stack: () => <Stack />,
  projects: () => <Projects />,
  "project-01": () => <ProjectDetail index={0} />,
  "project-02": () => <ProjectDetail index={1} />,
  "project-03": () => <ProjectDetail index={2} />,
  "case-studies": () => <CaseStudies />,
  "cross-platform": () => <CrossPlatform />,
  "flutter-arch": () => <FlutterArch />,
  performance: () => <Performance />,
  "open-source": () => <OpenSource />,
  github: () => <GitHubActivity />,
  testimonials: () => <Testimonials />,
  experience: () => <Experience />,
  services: () => <Services />,
  contact: () => <Contact />,
  writing: () => <Writing />,
  talks: () => <Talks />,
  mentorship: () => <Mentorship />,
  awards: () => <Awards />,
  labs: () => <Labs />,
  "design-system": () => <DesignSystem />,
  accessibility: () => <Accessibility />,
  localization: () => <Localization />,
  pricing: () => <Pricing />,
  faq: () => <Faq />,
  legal: () => <Legal />,
};

function Shell() {
  const { page } = useStore();
  const meta = useMemo(() => PAGES.find((p) => p.id === page)!, [page]);

  /* Update the document title for SEO / history clarity on every route change */
  useEffect(() => {
    document.title =
      page === "home"
        ? "Moe Kyaw Aung — Senior Android & Flutter Engineer | Volcanic Core Portfolio"
        : `${meta.en} · Moe Kyaw Aung — Senior Android & Flutter Engineer`;
  }, [page, meta]);

  const View = ROUTES[page];

  return (
    <>
      <Preloader />
      <Cursor />
      <LavaBackdrop />
      <EmberField />
      <Navbar />

      {/* key forces the heat-distortion page transition on every navigation */}
      <main id="main" key={page} className="page-enter relative z-10">
        <View />
      </main>

      <Footer />
      <BackToTop />
      <StickyCTA />
      <GeothermalAnalyzer />
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Shell />
    </StoreProvider>
  );
}
