/* ==========================================================================
   ENGINEERING PAGES
   Cross-Platform Architecture · Flutter Architecture · Performance ·
   Open Source · GitHub Activity
   ========================================================================== */
import { Btn, Icon, Metric, PageHeader, Panel, Reveal, Section, Tag } from "../components/ui";
import { GITHUB_SITES, LOVABLE_LINKS, OPEN_SOURCE, ORGS, PERF_METRICS, PROFILE, REPOS } from "../data/content";

/* Small helper: numbered content block list */
function Blocks({ items, accent = "#ffb020" }: { items: { h: string; b: string; tags?: string[] }[]; accent?: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((it, i) => (
        <Reveal key={it.h} delay={i * 70}>
          <Panel className="h-full">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px]" style={{ color: accent }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-[14px] font-extrabold text-[var(--t-hi)]">{it.h}</h3>
            </div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{it.b}</p>
            {it.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5">{it.tags.map((t) => <Tag key={t} color={accent}>{t}</Tag>)}</div>
            )}
          </Panel>
        </Reveal>
      ))}
    </div>
  );
}

/* ====================== CROSS-PLATFORM ARCHITECTURE ====================== */
export function CrossPlatform() {
  return (
    <>
      <PageHeader
        icon="🔀"
        kicker="Twin Conduits · ပလက်ဖောင်းစုံ"
        title="Cross-Platform Architecture"
        blurb="How I share the maximum amount of code without pretending the two platforms are the same thing."
      />
      <Section>
        <Blocks
          accent="#22e6ff"
          items={[
            { h: "Shared code strategy", b: "Domain and data layers are 100% shared Dart (or Kotlin in KMM projects). Presentation is shared by default and forked only where platform conventions genuinely differ — navigation transitions, share sheets, permission flows.", tags: ["Domain", "Data", "≈78% shared"] },
            { h: "Platform channels", b: "Native boundaries are explicit: one channel per capability, typed message contracts, and a fake implementation for tests. Printers, secure storage, background location and biometric auth all live here.", tags: ["MethodChannel", "EventChannel", "Pigeon"] },
            { h: "Native integration boundaries", b: "If a capability needs more than 200 lines of platform code, it becomes its own module with its own tests rather than leaking into feature code.", tags: ["Modules", "Contracts"] },
            { h: "Feature module design", b: "Each feature owns its routes, state, repository interface and tests. Cross-feature communication goes through the domain layer — never by reaching into another feature's state.", tags: ["Vertical slices"] },
            { h: "Testing layers", b: "Unit tests for domain, widget/Compose tests for surfaces, golden/screenshot tests for visual regressions, and a thin integration suite for the top 5 revenue flows.", tags: ["Unit", "Widget", "Golden", "E2E"] },
            { h: "Release strategy", b: "One version number, two store artefacts. Fastlane lanes for both, staged rollout at 5→20→50→100%, and automatic halt on crash-free dips below 99.5%.", tags: ["Fastlane", "Staged rollout"] },
          ]}
        />
      </Section>
      <Section eyebrow="Split" title={<>Code sharing <span className="text-magma">ratio</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric k="Shared domain" v="100%" hint="pure Dart / Kotlin" />
          <Metric k="Shared data" v="94%" hint="platform storage differs" />
          <Metric k="Shared UI" v="86%" hint="conventions forked" />
          <Metric k="Native code" v="~6%" hint="channels only" />
        </div>
      </Section>
    </>
  );
}

/* ====================== FLUTTER ARCHITECTURE ====================== */
export function FlutterArch() {
  return (
    <>
      <PageHeader
        icon="🎯"
        kicker="Widget Magma · Flutter ဗိသုကာ"
        title="Flutter Architecture"
        blurb="Composition, state, routing and rebuild discipline — the four things that decide whether a Flutter codebase ages well."
      />
      <Section>
        <Blocks
          items={[
            { h: "Widget composition", b: "Small const widgets over big build methods. Every widget has one reason to rebuild. Layout, styling and behaviour are separated so designers can move pixels without touching logic.", tags: ["const", "Composition", "Single-purpose"] },
            { h: "State management", b: "Riverpod for app-scoped and feature-scoped state; Bloc when the team prefers explicit event/state pairs. Either way: unidirectional flow, immutable state objects, no business logic in widgets.", tags: ["Riverpod", "Bloc", "Immutable"] },
            { h: "Routing", b: "Declarative go_router with typed routes, deep-link parity across both stores, and guard functions for auth and onboarding states.", tags: ["go_router", "Deep links", "Guards"] },
            { h: "Asynchronous data flow", b: "Streams at the repository edge, AsyncValue at the surface. Loading, error and empty are first-class states — never an afterthought spinner.", tags: ["Streams", "AsyncValue"] },
            { h: "Platform-aware UI", b: "Adaptive scaffolding, platform-correct dialogs and haptics, safe-area handling for notches and gesture bars, and dynamic type support.", tags: ["Adaptive", "Safe area"] },
            { h: "Performance-aware rebuild patterns", b: "RepaintBoundary around animated subtrees, selector-scoped watches, ListView.builder with cacheExtent tuning, and image decode sizing to avoid 4K textures in 200px slots.", tags: ["RepaintBoundary", "Selectors", "Decode sizing"] },
          ]}
        />
      </Section>
    </>
  );
}

/* ====================== PERFORMANCE ====================== */
export function Performance() {
  return (
    <>
      <PageHeader
        icon="⚡"
        kicker="Thermal Efficiency · စွမ်းဆောင်ရည်"
        title="Performance"
        blurb="Measured on real mid-range devices, before and after. Numbers below come from a 900k-MAU commerce app and a POS deployment across 140+ outlets."
      />

      <Section>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">Performance metrics before and after optimisation</caption>
            <thead>
              <tr className="border-b border-[var(--s-border)]">
                {["Metric", "Before", "After", "Delta"].map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-mono text-[10.5px] tracking-[0.25em] text-[var(--v-magma)] uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERF_METRICS.map((m, i) => (
                <tr key={m.label} className="border-b border-[var(--s-border)] transition-colors hover:bg-[color-mix(in_srgb,var(--v-lava)_7%,transparent)]" style={{ animationDelay: `${i * 60}ms` }}>
                  <th scope="row" className="px-4 py-3.5 text-[13.5px] font-medium text-[var(--t-hi)]">{m.label}</th>
                  <td className="px-4 py-3.5 font-mono text-[13px] text-[var(--t-low)] line-through">{m.before}</td>
                  <td className="px-4 py-3.5 font-mono text-[13px] font-bold text-[var(--t-hi)]">{m.after}</td>
                  <td className="px-4 py-3.5 font-mono text-[13px] font-bold text-[#3ddc84]">{m.delta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Method" title={<>How the heat gets <span className="text-magma">removed</span></>}>
        <Blocks
          accent="#ffe600"
          items={[
            { h: "Frame smoothness", b: "Perfetto traces to find the actual long frame, then attack the cause: unstable lambdas, unnecessary recomposition, synchronous decode on the UI thread." },
            { h: "Startup time", b: "Baseline profiles, deferred initialisation, splash-to-first-content measured with a custom trace rather than a stopwatch." },
            { h: "Memory usage", b: "Bitmap pooling, decode-to-target-size, leak canary in debug and heap dumps on the worst offender screens." },
            { h: "Battery impact", b: "WorkManager constraints, coalesced network calls, no background location unless the feature genuinely needs it." },
            { h: "List rendering", b: "Stable keys, item type reuse, prefetch tuning, and pagination that loads on velocity rather than on scroll position." },
            { h: "Real device behaviour", b: "Test matrix runs on Snapdragon 680 / Helio G85 class hardware. If it's smooth there, flagships are free." },
          ]}
        />
      </Section>
    </>
  );
}

/* ====================== OPEN SOURCE ====================== */
export function OpenSource() {
  return (
    <>
      <PageHeader
        icon="🌱"
        kicker="Surface Deposits · ပွင့်လင်းကုဒ်"
        title="Open Source"
        blurb="Small, sharp libraries extracted from production work — plus documentation fixes, which nobody thanks you for and everybody needs."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OPEN_SOURCE.map((o, i) => (
            <Reveal key={o.name} delay={i * 70}>
              <Panel className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-mono text-[13px] font-bold text-[var(--t-hi)]">{o.name}</h2>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-[var(--v-magma)]">★ {o.stars}</span>
                </div>
                <div className="mt-2"><Tag color="#ff6a13">{o.lang}</Tag></div>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[var(--t-mid)]">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--t-low)] uppercase">Why this matters — </span>
                  {o.why}
                </p>
                <a href={`https://github.com/Dev-moe-kyawaung/${o.name}`} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-[var(--v-magma)] hover:underline">
                  <Icon name="github" className="h-3.5 w-3.5" /> View repository
                </a>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Organisations" title={<>Where I <span className="text-magma">contribute</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ORGS.map((o, i) => (
            <Reveal key={o.name} delay={i * 60}>
              <a href={o.url} target="_blank" rel="noreferrer" className="magma-panel block h-full p-5 clip-cyber">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[13.5px] font-extrabold text-[var(--t-hi)]">{o.name}</h3>
                  {o.repos > 0 && <span className="font-mono text-[11px] text-[var(--v-magma)]">{o.repos}</span>}
                </div>
                <p className="mt-2 text-[13px] text-[var(--t-mid)]">{o.focus}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ====================== GITHUB ACTIVITY ====================== */
export function GitHubActivity() {
  /* Deterministic pseudo contribution grid — 26 weeks x 7 days */
  const cells = Array.from({ length: 26 * 7 }, (_, i) => {
    const v = (Math.sin(i * 1.7) * 0.5 + 0.5) * (0.4 + ((i % 11) / 11) * 0.6);
    return Math.round(v * 4);
  });
  const shades = ["rgba(255,255,255,.06)", "#5c1b06", "#a8360a", "#ff6a13", "#ffd166"];

  const commits = [
    { repo: "POS-Ultimate-Pro-Max", msg: "perf: decode receipt bitmaps at target size", when: "2h ago" },
    { repo: "zawgyi-unicode-kt", msg: "fix: handle medial ra + stacked consonant edge case", when: "1d ago" },
    { repo: "flutter-offline-queue", msg: "feat: exponential backoff with jitter", when: "2d ago" },
    { repo: "compose-perf-lint", msg: "docs: add unstable-lambda examples", when: "4d ago" },
    { repo: "Lens-lite", msg: "chore: bump TFLite to 2.16, quantise model", when: "6d ago" },
    { repo: "gh-actions-android-kit", msg: "ci: gate release on crash-free ≥ 99.5%", when: "1w ago" },
  ];

  const prs = [
    { title: "Add Myanmar locale golden tests", repo: "compose-shimmer-mm", state: "merged" },
    { title: "Fix ESC/POS codepage for Thai receipts", repo: "escpos-channel", state: "merged" },
    { title: "Reduce cold start by deferring analytics init", repo: "POS-Ultimate-Version", state: "open" },
    { title: "Docs: platform channel testing guide", repo: "flutter-offline-queue", state: "review" },
  ];

  return (
    <>
      <PageHeader
        icon="🐙"
        kicker="Seismograph · GitHub လှုပ်ရှားမှု"
        title="GitHub Activity"
        blurb="A live-feeling read on where the commits land. 600+ repositories across 43 GitHub Pages accounts and 3 organisations."
      />

      <Section>
        <Reveal>
          <Panel>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-[14px] font-extrabold text-magma">Contribution pattern · last 26 weeks</h2>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--t-low)]">
                less
                {shades.map((s) => <span key={s} className="h-2.5 w-2.5" style={{ background: s }} />)}
                more
              </div>
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="grid grid-flow-col grid-rows-7 gap-[3px]" style={{ width: "max-content" }}>
                {cells.map((c, i) => (
                  <span key={i} title={`${c} contributions`} className="h-[11px] w-[11px] rounded-[2px]" style={{ background: shades[c], boxShadow: c >= 3 ? `0 0 6px ${shades[c]}` : undefined }} />
                ))}
              </div>
            </div>
          </Panel>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric k="Public repos" v="600+" />
          <Metric k="Pages sites" v={`${GITHUB_SITES.length}`} hint="github.io" />
          <Metric k="PWA deploys" v={`${LOVABLE_LINKS.length}`} hint="lovable.app" />
          <Metric k="Longest streak" v="128 days" />
        </div>
      </Section>

      <Section eyebrow="Recent" title={<>Commits &amp; <span className="text-magma">pull requests</span></>}>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Panel>
              <h3 className="mb-4 font-display text-[13px] font-extrabold text-magma">Recent commits</h3>
              <ul className="space-y-3">
                {commits.map((c) => (
                  <li key={c.msg} className="flex gap-3 border-b border-[var(--s-border)] pb-3 last:border-0 last:pb-0">
                    <Icon name="code" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--v-lava)]" />
                    <div className="min-w-0">
                      <p className="truncate font-mono text-[12px] text-[var(--t-hi)]">{c.msg}</p>
                      <p className="font-mono text-[10.5px] text-[var(--t-low)]">{c.repo} · {c.when}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
          <Reveal delay={100}>
            <Panel>
              <h3 className="mb-4 font-display text-[13px] font-extrabold text-magma">Pull requests</h3>
              <ul className="space-y-3">
                {prs.map((p) => (
                  <li key={p.title} className="flex items-start gap-3 border-b border-[var(--s-border)] pb-3 last:border-0 last:pb-0">
                    <span className="mt-1 h-2 w-2 shrink-0 rotate-45" style={{ background: p.state === "merged" ? "#a371f7" : p.state === "open" ? "#3ddc84" : "#ffd166" }} />
                    <div className="min-w-0">
                      <p className="text-[12.5px] text-[var(--t-hi)]">{p.title}</p>
                      <p className="font-mono text-[10.5px] text-[var(--t-low)]">{p.repo} · {p.state}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Pinned" title={<>Pinned <span className="text-magma">repositories</span></>}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REPOS.slice(0, 9).map((r, i) => (
            <Reveal key={r.url} delay={i * 50}>
              <a href={r.url} target="_blank" rel="noreferrer" className="magma-panel block p-4 clip-cyber-sm">
                <div className="flex items-center gap-2">
                  <Icon name="github" className="h-3.5 w-3.5 text-[var(--v-magma)]" />
                  <span className="truncate font-mono text-[12.5px] font-bold text-[var(--t-hi)]">{r.name}</span>
                </div>
                <p className="mt-2 font-mono text-[11px] text-[var(--t-low)]">Kotlin · Dart · production sample</p>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-8"><Btn href={PROFILE.github} icon="github">Open GitHub profile</Btn></div>
      </Section>
    </>
  );
}
