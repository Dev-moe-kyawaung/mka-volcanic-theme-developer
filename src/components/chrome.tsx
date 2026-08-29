/* ==========================================================================
   SITE CHROME
   Preloader · custom cursor · ember particle field · lava background ·
   navbar · footer · back-to-top · sticky CTA · geothermal AI analyzer
   ========================================================================== */
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Btn, Icon, Reveal } from "./ui";
import { PAGES, useStore, type Lang, type PageId } from "../lib/store";
import { CURRENCIES, EMAILS, PROFILE, SOCIALS, type Currency } from "../data/content";

/* ============================ PRELOADER ============================
   Volcanic "core ignition" loader shown while first paint settles.
   ================================================================== */
export function Preloader() {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 6);
      setPct(Math.round(p));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setGone(true), 500);
      }
    }, 120);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;
  return (
    <div
      className={cn(
        "fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--s-bg)] transition-all duration-500",
        pct >= 100 && "pointer-events-none scale-105 opacity-0 blur-md",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="lava-flow opacity-70" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-28 w-28">
          <div className="avatar-ring absolute inset-0 rounded-full opacity-90 blur-[2px]" />
          <div className="absolute inset-[6px] flex items-center justify-center rounded-full bg-[var(--s-bg)]">
            <span className="pulse-core rounded-full bg-[radial-gradient(circle,#fff3c4,#ff6a13_55%,#c11414)] p-5 text-2xl">🌋</span>
          </div>
        </div>
        <div className="font-display text-xs tracking-[0.4em] text-[var(--v-magma)] uppercase">Core Ignition</div>
        <div className="h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-[linear-gradient(90deg,#c11414,#ff6a13,#ffd166)]" style={{ width: `${pct}%`, transition: "width .25s" }} />
        </div>
        <div className="font-mono text-[11px] text-[var(--t-low)]">{pct}% · magma pressure stabilising</div>
      </div>
    </div>
  );
}

/* ============================ CUSTOM CURSOR ============================ */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${tx - 3.5}px, ${ty - 3.5}px)`;
      const hot = (e.target as HTMLElement)?.closest("a,button,[data-hot]");
      if (ring.current) ring.current.style.background = hot ? "rgba(255,106,19,.18)" : "transparent";
    };
    const loop = () => {
      rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    let raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}

/* ============================ EMBER FIELD ============================
   Rising ember particles — pure CSS animation, GPU-composited.
   ==================================================================== */
export function EmberField({ count = 34 }: { count?: number }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        dur: 9 + Math.random() * 14,
        delay: -Math.random() * 20,
        drift: (Math.random() - 0.5) * 220,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      {embers.map((e) => (
        <span
          key={e.id}
          className="ember"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            animationDuration: `${e.dur}s`,
            animationDelay: `${e.delay}s`,
            ["--drift" as string]: `${e.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

/* ============================ LAVA BACKDROP ============================ */
export function LavaBackdrop() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Parallax layer 1 — deep magma */}
      <div className="lava-flow" style={{ transform: `translate3d(0, ${y * 0.06}px, 0)` }} />
      {/* Parallax layer 2 — grid crust */}
      <div className="bg-grid absolute inset-0" style={{ transform: `translate3d(0, ${y * -0.03}px, 0)` }} />
      {/* Glow orbs */}
      <div className="orb h-[380px] w-[380px] bg-[#ff3d20]" style={{ top: "8%", left: "-8%", transform: `translateY(${y * 0.12}px)` }} />
      <div className="orb h-[300px] w-[300px] bg-[#22e6ff] opacity-25" style={{ top: "52%", right: "-6%", transform: `translateY(${y * -0.1}px)` }} />
      <div className="orb h-[340px] w-[340px] bg-[#ffb020]" style={{ bottom: "-6%", left: "38%", transform: `translateY(${y * 0.05}px)` }} />
      {/* Bottom molten horizon */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(255,61,32,0.22),transparent)]" />
    </div>
  );
}

/* ============================ NAVBAR ============================ */
export function Navbar() {
  const { page, go, theme, toggleTheme, lang, setLang, t } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMega(false); }, [page]);

  const primary: PageId[] = ["home", "about", "projects", "case-studies", "performance", "services", "pricing", "contact"];
  const label = (id: PageId) => {
    const p = PAGES.find((x) => x.id === id)!;
    return lang === "mm" ? p.mm : lang === "th" ? p.th : p.en;
  };
  const groups = ["Core", "Work", "Engineering", "Community", "System"] as const;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[500] transition-all duration-500",
          scrolled
            ? "border-b border-[var(--s-border)] bg-[color-mix(in_srgb,var(--s-bg)_82%,transparent)] shadow-[0_10px_50px_-24px_rgba(255,106,19,0.9)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        {/* thin magma progress line */}
        <ScrollProgress />

        <nav className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4 sm:px-6" aria-label="Primary">
          {/* Brand */}
          <button onClick={() => go("home")} className="group flex items-center gap-2.5" aria-label="Go home">
            <span className="relative grid h-9 w-9 place-items-center">
              <span className="avatar-ring absolute inset-0 rounded-md opacity-80 blur-[1px]" />
              <span className="absolute inset-[2px] grid place-items-center rounded-md bg-[var(--s-bg)] text-sm">🌋</span>
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[13px] font-extrabold tracking-widest text-magma">MOE KYAW AUNG</span>
              <span className="block font-mono text-[9px] tracking-[0.22em] text-[var(--t-low)]">V000 · ANDROID SENIOR DEV</span>
            </span>
          </button>

          <div className="flex-1" />

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {primary.map((id) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={cn(
                    "relative px-3 py-2 text-[12.5px] font-medium tracking-wide transition-colors",
                    page === id ? "text-[var(--v-magma)]" : "text-[var(--t-mid)] hover:text-[var(--t-hi)]",
                    lang === "mm" && "font-mm",
                  )}
                >
                  {label(id)}
                  {page === id && <span className="absolute inset-x-2 -bottom-0.5 h-[2px] bg-[var(--v-magma)] shadow-[0_0_10px_var(--v-magma)]" />}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setMega((v) => !v)}
                aria-expanded={mega}
                className="ml-1 flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-medium text-[var(--t-mid)] hover:text-[var(--t-hi)]"
              >
                All 30 <Icon name="chevron" className={cn("h-3.5 w-3.5 transition-transform", mega && "rotate-180")} />
              </button>
            </li>
          </ul>

          {/* Utilities */}
          <div className="ml-1 flex items-center gap-1.5">
            <LangSwitcher lang={lang} setLang={setLang} />
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-9 w-9 place-items-center border border-[var(--s-border)] text-[var(--t-mid)] transition-colors hover:border-[var(--s-border-strong)] hover:text-[var(--v-magma)] clip-cyber-sm"
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} className="h-4 w-4" />
            </button>
            <a
              href="#/contact"
              className="hidden items-center gap-2 border border-[var(--v-magma)]/50 bg-[color-mix(in_srgb,var(--v-lava)_14%,transparent)] px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-[var(--v-magma)] uppercase clip-cyber-sm md:flex"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3ddc84] shadow-[0_0_8px_#3ddc84]" />
              {t("availability")}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center border border-[var(--s-border)] text-[var(--t-hi)] clip-cyber-sm xl:hidden"
              aria-label={t("menu")}
            >
              <Icon name="menu" className="h-4 w-4" />
            </button>
          </div>
        </nav>

        {/* Mega menu (desktop) */}
        {mega && (
          <div className="hidden border-t border-[var(--s-border)] bg-[color-mix(in_srgb,var(--s-bg)_95%,transparent)] backdrop-blur-2xl xl:block">
            <div className="mx-auto grid max-w-[1400px] grid-cols-5 gap-6 px-6 py-7">
              {groups.map((g) => (
                <div key={g}>
                  <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-[var(--v-magma)] uppercase">{g}</div>
                  <ul className="space-y-1">
                    {PAGES.filter((p) => p.group === g).map((p) => (
                      <li key={p.id}>
                        <button
                          onClick={() => go(p.id)}
                          className={cn(
                            "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[13px] transition-colors hover:bg-white/5",
                            page === p.id ? "text-[var(--v-magma)]" : "text-[var(--t-mid)] hover:text-[var(--t-hi)]",
                          )}
                        >
                          <span className="w-4 text-center text-[11px] opacity-70">{p.icon}</span>
                          <span className={cn(lang === "mm" && "font-mm")}>{lang === "mm" ? p.mm : lang === "th" ? p.th : p.en}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[600] transition-all duration-400 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col border-l border-[var(--s-border)] bg-[var(--s-bg-2)] transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-[var(--s-border)] px-5 py-4">
            <span className="font-display text-sm tracking-widest text-magma">NAVIGATE</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-9 w-9 place-items-center border border-[var(--s-border)] clip-cyber-sm">
              <Icon name="x" className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {groups.map((g) => (
              <div key={g} className="mb-5">
                <div className="mb-2 font-mono text-[10px] tracking-[0.3em] text-[var(--v-magma)] uppercase">{g}</div>
                <ul className="grid grid-cols-2 gap-1">
                  {PAGES.filter((p) => p.group === g).map((p) => (
                    <li key={p.id}>
                      <button
                        onClick={() => go(p.id)}
                        className={cn(
                          "w-full rounded px-2 py-2 text-left text-[13px]",
                          page === p.id ? "bg-[color-mix(in_srgb,var(--v-lava)_18%,transparent)] text-[var(--v-magma)]" : "text-[var(--t-mid)]",
                          lang === "mm" && "font-mm",
                        )}
                      >
                        <span className="mr-1.5 opacity-70">{p.icon}</span>
                        {lang === "mm" ? p.mm : lang === "th" ? p.th : p.en}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-[var(--s-border)] p-5">
            <Btn href="#/contact" className="w-full" icon="arrowRight">{t("ctaContact")}</Btn>
          </div>
        </aside>
      </div>
    </>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="absolute inset-x-0 top-0 h-[2px] bg-transparent" aria-hidden>
      <div className="h-full bg-[linear-gradient(90deg,#ffd166,#ff6a13,#c11414)] shadow-[0_0_10px_#ff6a13]" style={{ width: `${p}%` }} />
    </div>
  );
}

export function LangSwitcher({ lang, setLang, className }: { lang: Lang; setLang: (l: Lang) => void; className?: string }) {
  const opts: { id: Lang; flag: string; short: string }[] = [
    { id: "en", flag: "🌐", short: "EN" },
    { id: "mm", flag: "🇲🇲", short: "MM" },
    { id: "th", flag: "🇹🇭", short: "TH" },
  ];
  return (
    <div className={cn("flex items-center gap-0.5 border border-[var(--s-border)] p-0.5 clip-cyber-sm", className)} role="group" aria-label="Language">
      {opts.map((o) => (
        <button
          key={o.id}
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={cn(
            "px-2 py-1.5 font-mono text-[10px] tracking-widest transition-colors",
            lang === o.id ? "bg-[color-mix(in_srgb,var(--v-lava)_26%,transparent)] text-[var(--v-magma)]" : "text-[var(--t-low)] hover:text-[var(--t-hi)]",
          )}
        >
          {o.short}
        </button>
      ))}
    </div>
  );
}

export function CurrencySwitcher({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="inline-flex items-center gap-0.5 border border-[var(--s-border)] p-0.5 clip-cyber-sm" role="group" aria-label="Currency">
      {(Object.keys(CURRENCIES) as Currency[]).map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          aria-pressed={value === c}
          className={cn(
            "px-3 py-1.5 font-mono text-[11px] tracking-widest transition-colors",
            value === c ? "bg-[color-mix(in_srgb,var(--v-lava)_26%,transparent)] text-[var(--v-magma)]" : "text-[var(--t-low)] hover:text-[var(--t-hi)]",
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

/* ============================ BACK TO TOP ============================ */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const { t } = useStore();
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("backTop")}
      className={cn(
        "fixed right-5 bottom-24 z-[400] grid h-11 w-11 place-items-center border border-[var(--v-magma)]/60 bg-[color-mix(in_srgb,var(--s-bg)_80%,transparent)] text-[var(--v-magma)] backdrop-blur transition-all duration-400 clip-cyber-sm hover:bg-[color-mix(in_srgb,var(--v-lava)_25%,transparent)]",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Icon name="arrowUp" className="h-4 w-4" />
    </button>
  );
}

/* ============================ STICKY CTA ============================ */
export function StickyCTA() {
  const { t, go } = useStore();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className={cn(
        "fixed bottom-5 left-1/2 z-[400] -translate-x-1/2 transition-all duration-500",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <button
        onClick={() => go("contact")}
        className="flex items-center gap-2.5 border border-[var(--v-magma)]/50 bg-[color-mix(in_srgb,var(--s-bg)_86%,transparent)] px-5 py-2.5 backdrop-blur-xl clip-cyber-sm hover:border-[var(--v-magma)]"
      >
        <span className="pulse-core h-2 w-2 rounded-full bg-[var(--v-lava)]" />
        <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--t-hi)] uppercase">{t("ctaContact")}</span>
        <Icon name="arrowRight" className="h-3.5 w-3.5 text-[var(--v-magma)]" />
      </button>
    </div>
  );
}

/* ==================================================================
   GEOTHERMAL ANALYZER — the AI assistant
   Persona: a volcanology instrument that reads the portfolio as a
   thermal survey and reports "engineering heat zones".
   ================================================================== */
type Msg = { role: "user" | "ai"; text: string };

const KB: { keys: string[]; reply: string }[] = [
  { keys: ["kotlin", "android", "compose", "jetpack"], reply: "🌋 CORE CHAMBER — 1560°C. Kotlin + Jetpack Compose is the hottest zone in this survey. 12 years of continuous magma flow: Coroutines/Flow for concurrency, Compose + Material 3 for surface rendering, Room + Paging for the cooled sediment layer. Recomposition is controlled via stable parameters and lint rules (see /open-source → compose-perf-lint)." },
  { keys: ["flutter", "dart", "cross", "platform"], reply: "🔀 MAGMA CONDUIT — 1420°C. Flutter/Dart carries heat across two crusts. Shared domain + data layers, platform channels only at the native boundary (printers, camera, secure storage). Feature-module design keeps the conduit from clogging. Read /cross-platform for the full pressure map." },
  { keys: ["performance", "fast", "speed", "jank", "fps", "startup"], reply: "⚡ THERMAL EFFICIENCY READING: cold start p95 2.9s → 1.7s (-41%), jank frames 6.8% → 0.9% (-87%), list scroll 44 → 119 fps. Measured on mid-range Snapdragon hardware, not flagships. Full instrumentation on the /performance page." },
  { keys: ["architecture", "clean", "mvvm", "mvi", "module"], reply: "🏗️ STRUCTURAL SURVEY: Clean Architecture with hard module boundaries — presentation (Compose/Flutter widgets) → domain (use cases, pure Kotlin/Dart) → data (Retrofit/Ktor + Room/Drift). MVI for screens with complex state, MVVM where it would be overkill. One writer, many readers." },
  { keys: ["firebase", "backend", "api", "rest", "retrofit"], reply: "☁️ VOLATILE GAS LAYER: Firebase Auth, Firestore, Cloud Messaging and Crashlytics wired behind repository interfaces so they're swappable. REST via Retrofit/OkHttp with typed error envelopes; Ktor client on the Flutter/KMM side." },
  { keys: ["security", "hack", "secure", "cyber"], reply: "🛡️ CRUST INTEGRITY: Android Keystore for secrets, certificate pinning, R8 obfuscation, root/tamper detection, and encrypted local caches. Threat model is written down before mitigation — not after the pentest." },
  { keys: ["experience", "years", "who", "about", "background"], reply: "🧬 GEOLOGICAL RECORD: Moe Kyaw Aung — nearly 12 years of Android delivery, from Yangon startup studio → mobile software house → lead of a 5-person team across 140+ retail outlets → independent senior consultant. Based Tachileik 🇲🇲 ↔ Bangkok 🇹🇭." },
  { keys: ["contact", "hire", "email", "phone", "available"], reply: "📮 VENT ACCESS OPEN: moekyawaung@programmer.net · +95 9 889 000 889 · +959 666 000 050. Reply within 24h on business days. Consulting rates in MMK / THB / USD live on /pricing." },
  { keys: ["price", "cost", "rate", "pricing", "budget"], reply: "💠 EXTRACTION COST: Quick Audit from $390 · Architecture Review $1,450 · Monthly Advisory $890/mo · Implementation $5,600/sprint-month. THB and MMK equivalents on the /pricing page — switch currency at the top of the table." },
  { keys: ["project", "work", "portfolio", "app"], reply: "🛰️ ACTIVE VENTS: 6 volcanic cores mapped — Mobile Commerce Redesign, Offline-First Field App, Internal Ops Companion, POS Ultimate Pro Max, Video Player Engine and Lens Lite (on-device ML). Plus a 16-app collection and 600+ repositories. Head to /projects." },
  { keys: ["burmese", "myanmar", "zawgyi", "unicode", "language", "local"], reply: "🌏 REGIONAL STRATA: Full Burmese support — Zawgyi↔Unicode detection and conversion, Myanmar cluster-aware text shaping, Padauk/Pyidaungsu font pipelines, and locale-aware date/number formatting. Site itself runs EN / မြန်မာ / ไทย. See /localization." },
  { keys: ["open source", "github", "repo", "contribution"], reply: "🌱 SURFACE DEPOSITS: 600+ repos across 43 GitHub Pages accounts and 3 organisations. Notable: zawgyi-unicode-kt (502★), flutter-offline-queue (389★), compose-shimmer-mm (214★). Live survey on /github and /open-source." },
  { keys: ["test", "quality", "ci", "cd", "pipeline", "release"], reply: "🚀 ERUPTION CONTROL: JUnit + MockK for domain, Espresso/integration for critical flows, screenshot tests for Compose. GitHub Actions builds signed artefacts, gates on crash-free rate, and ships staged rollouts via Fastlane." },
];

export function GeothermalAnalyzer() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "🌡️ GEOTHERMAL ANALYZER v3.1 online. I read this portfolio as a thermal survey. Ask me about any engineering heat zone — Kotlin, Flutter, architecture, performance, security, pricing or availability." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  const analyze = (q: string) => {
    const l = q.toLowerCase();
    const hit = KB.find((k) => k.keys.some((key) => l.includes(key)));
    return (
      hit?.reply ??
      "🔍 No matching thermal signature in that sector. Try probing: “Kotlin”, “Flutter”, “architecture”, “performance”, “security”, “Burmese”, “open source”, “pricing”, or “contact”. I can also summarise the geological record (experience)."
    );
  };

  const send = (text?: string) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { role: "ai", text: analyze(q) }]);
    }, 700 + Math.random() * 500);
  };

  const chips = ["Performance", "Flutter", "Architecture", "Burmese", "Pricing"];

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open geothermal analyzer assistant"
        className="fixed right-5 bottom-5 z-[700] grid h-14 w-14 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff3c4,#ff6a13_55%,#c11414)] text-xl shadow-[0_10px_40px_-8px_rgba(255,106,19,0.9)] transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full pulse-core" aria-hidden />
        <span className="relative">{open ? "✕" : "🌡️"}</span>
      </button>

      <div
        className={cn(
          "fixed right-4 bottom-24 z-[700] flex w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden border border-[var(--s-border-strong)] bg-[color-mix(in_srgb,var(--s-bg-2)_94%,transparent)] backdrop-blur-2xl transition-all duration-400 clip-cyber",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
        )}
        role="dialog"
        aria-label="Geothermal analyzer"
      >
        <div className="flex items-center gap-3 border-b border-[var(--s-border)] bg-[linear-gradient(90deg,rgba(255,106,19,.16),transparent)] px-4 py-3">
          <span className="pulse-core grid h-8 w-8 place-items-center rounded-full bg-[radial-gradient(circle,#ffd166,#c11414)] text-sm">🌋</span>
          <div className="leading-tight">
            <div className="font-display text-[12px] font-bold tracking-widest text-[var(--v-magma)]">GEOTHERMAL ANALYZER</div>
            <div className="font-mono text-[9px] text-[var(--t-low)]">reading engineering heat zones · v3.1</div>
          </div>
        </div>

        <div ref={scroller} className="max-h-[46vh] min-h-[220px] space-y-3 overflow-y-auto px-4 py-4">
          {msgs.map((m, i) => (
            <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              <p
                className={cn(
                  "max-w-[85%] px-3.5 py-2.5 text-[12.5px] leading-relaxed clip-cyber-sm",
                  m.role === "user"
                    ? "bg-[linear-gradient(100deg,#ffd166,#ff6a13)] text-black"
                    : "border border-[var(--s-border)] bg-[color-mix(in_srgb,var(--v-lava)_8%,transparent)] text-[var(--t-mid)]",
                )}
              >
                {m.text}
              </p>
            </div>
          ))}
          {typing && (
            <div className="flex items-center gap-1.5 px-1 font-mono text-[11px] text-[var(--v-magma)]">
              probing thermal gradient
              <span className="inline-flex gap-1">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--v-lava)]" style={{ animationDelay: `${d * 120}ms` }} />
                ))}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 border-t border-[var(--s-border)] px-3 py-2">
          {chips.map((c) => (
            <button key={c} onClick={() => send(c)} className="rounded-full border border-[var(--s-border)] px-2.5 py-1 font-mono text-[10px] text-[var(--t-low)] hover:border-[var(--v-magma)] hover:text-[var(--v-magma)]">
              {c}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); send(); }}
          className="flex items-center gap-2 border-t border-[var(--s-border)] p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Probe a heat zone…"
            aria-label="Ask the geothermal analyzer"
            className="flex-1 border border-[var(--s-border)] bg-transparent px-3 py-2 text-[12.5px] text-[var(--t-hi)] outline-none placeholder:text-[var(--t-low)] focus:border-[var(--v-magma)] clip-cyber-sm"
          />
          <button type="submit" aria-label="Send" className="grid h-9 w-9 place-items-center bg-[linear-gradient(100deg,#ffd166,#ff6a13)] text-black clip-cyber-sm">
            <Icon name="send" className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
}

/* ============================ FOOTER ============================ */
export function Footer() {
  const { t, lang, setLang, currency, setCurrency, go } = useStore();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    setMsg(valid ? { ok: true, text: t("subOk") } : { ok: false, text: t("errSub") });
    if (valid) setEmail("");
  };

  const groups = ["Core", "Work", "Engineering", "Community", "System"] as const;

  return (
    <footer className="relative z-10 mt-16 border-t border-[var(--s-border)] bg-[color-mix(in_srgb,var(--s-bg-2)_88%,transparent)] backdrop-blur-xl">
      <div className="fracture" />
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        {/* Newsletter */}
        <Reveal className="mb-12 grid gap-6 border border-[var(--s-border)] bg-[radial-gradient(120%_140%_at_0%_0%,rgba(255,106,19,.14),transparent_60%)] p-7 clip-cyber lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h3 className="font-display text-xl font-extrabold text-magma">{t("newsletter")}</h3>
            <p className="mt-2 max-w-lg text-[14px] text-[var(--t-mid)]">{t("newsletterSub")}</p>
          </div>
          <form onSubmit={subscribe} className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label htmlFor="nl" className="sr-only">Email address</label>
              <input
                id="nl"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="min-w-0 flex-1 border border-[var(--s-border)] bg-[color-mix(in_srgb,var(--s-bg)_70%,transparent)] px-4 py-3 text-[14px] outline-none focus:border-[var(--v-magma)] clip-cyber-sm"
              />
              <Btn type="submit" icon="send">{t("subscribe")}</Btn>
            </div>
            {msg && (
              <p role="status" className={cn("font-mono text-[11px]", msg.ok ? "text-[#3ddc84]" : "text-[#ff5d5d]")}>{msg.text}</p>
            )}
          </form>
        </Reveal>

        {/* Fat footer grid */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr_1.2fr]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center">
                <span className="avatar-ring absolute inset-0 rounded-full opacity-90 blur-[1px]" />
                <img src={PROFILE.avatar} alt="" className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-full object-cover" />
              </span>
              <div>
                <div className="font-display text-sm font-extrabold tracking-widest text-magma">{PROFILE.name}</div>
                <div className="font-mm text-[12px] text-[var(--t-low)]">{PROFILE.nameMm} · {PROFILE.role}</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[var(--t-mid)]">{PROFILE.philosophy} — {PROFILE.location}</p>
            <ul className="mt-4 space-y-1.5 font-mono text-[12px] text-[var(--t-mid)]">
              <li><a className="hover:text-[var(--v-magma)]" href={`mailto:${PROFILE.primaryEmail}`}>{PROFILE.primaryEmail}</a></li>
              {PROFILE.phones.map((p) => (
                <li key={p}><a className="hover:text-[var(--v-magma)]" href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></li>
              ))}
              <li className="text-[var(--t-low)]">{EMAILS.length}+ alias inboxes · see Contact</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.slice(0, 10).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="grid h-9 w-9 place-items-center border border-[var(--s-border)] text-[var(--t-mid)] transition-all clip-cyber-sm hover:-translate-y-0.5 hover:border-[var(--v-magma)] hover:text-[var(--v-magma)]"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <nav className="grid grid-cols-2 gap-6 sm:grid-cols-3" aria-label="Footer">
            {groups.map((g) => (
              <div key={g}>
                <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-[var(--v-magma)] uppercase">{g}</div>
                <ul className="space-y-1.5">
                  {PAGES.filter((p) => p.group === g).map((p) => (
                    <li key={p.id}>
                      <button onClick={() => go(p.id)} className={cn("text-left text-[12.5px] text-[var(--t-mid)] hover:text-[var(--v-magma)]", lang === "mm" && "font-mm")}>
                        {lang === "mm" ? p.mm : lang === "th" ? p.th : p.en}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Map + switchers */}
          <div>
            <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-[var(--v-magma)] uppercase">Base of operations</div>
            <div className="overflow-hidden border border-[var(--s-border)] clip-cyber">
              <iframe
                title="Map — Tachileik, Myanmar"
                src="https://www.google.com/maps?q=Tachileik,%20Myanmar&output=embed"
                width="100%"
                height="170"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "grayscale(.4) invert(.92) hue-rotate(170deg) contrast(1.1)" }}
              />
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.25em] text-[var(--t-low)] uppercase">Language</div>
                <LangSwitcher lang={lang} setLang={setLang} />
              </div>
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.25em] text-[var(--t-low)] uppercase">Currency</div>
                <CurrencySwitcher value={currency} onChange={setCurrency} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--s-border)] pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-[var(--t-low)]">
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.handle} · Built with React, Vite &amp; molten CSS.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px] text-[var(--t-low)]">
            <button onClick={() => go("legal")} className="hover:text-[var(--v-magma)]">Privacy</button>
            <button onClick={() => go("legal")} className="hover:text-[var(--v-magma)]">Terms</button>
            <button onClick={() => go("accessibility")} className="hover:text-[var(--v-magma)]">Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
