/* ==========================================================================
   CORE PAGES — About · Resume · Skills · Tech Stack
   ========================================================================== */
import { Btn, Counter, Icon, Metric, Panel, PageHeader, Reveal, Ring, Section, SkillBar, Tag } from "../components/ui";
import { Gallery, Timeline } from "../components/blocks";
import { useStore } from "../lib/store";
import { PROFILE, RINGS, SKILL_GROUPS, STATS, CERT_CATEGORIES, SOCIALS } from "../data/content";

/* ============================== ABOUT ============================== */
export function About() {
  const { go } = useStore();
  return (
    <>
      <PageHeader
        icon="🧬"
        kicker="Geological Record · အကြောင်း"
        title="About"
        blurb="I'm a Senior Android & Flutter developer who builds apps with strong architecture, careful performance tuning, and practical collaboration. My work usually sits at the intersection of product thinking, system design, and implementation discipline."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <p className="text-[15.5px] leading-relaxed text-[var(--t-mid)]">
              I prefer building codebases that are easy for teams to understand, test, and extend. That means clear
              boundaries, reliable data flow, stable releases, and a focus on the user experience as it behaves in the
              real world — on a three-year-old mid-range phone, on a patchy border-town connection, in Burmese script.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--t-mid)]">{PROFILE.about}</p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--t-mid)]">
              My certification portfolio demonstrates practical, structured learning across nine major domains and over
              82 technical subjects — from programming languages and web frameworks to machine learning, blockchain and
              cybersecurity. I build with intention: clean code, modern practices, and a genuine love for problem-solving.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="magma-panel p-4 text-center clip-cyber-sm">
                  <div className="font-display text-2xl font-black text-magma"><Counter to={s.value} suffix={s.suffix} /></div>
                  <div className="mt-1 text-[11px] text-[var(--t-low)] uppercase">{s.label}</div>
                  <div className="font-mm text-[11px] text-[var(--t-low)]">{s.labelMm}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Rotating avatar + info table */}
          <Reveal delay={140}>
            <div className="magma-panel p-6 clip-cyber">
              <div className="mx-auto mb-6 grid h-40 w-40 place-items-center">
                <span className="relative block h-40 w-40">
                  <span className="avatar-ring absolute inset-0 rounded-full blur-[2px]" />
                  <img src={PROFILE.avatar} alt="Moe Kyaw Aung" className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-full object-cover" />
                </span>
              </div>
              <dl className="space-y-0">
                {[
                  ["Full Name", `${PROFILE.name} · ${PROFILE.nameMm}`],
                  ["Role", PROFILE.role],
                  ["Base", PROFILE.location],
                  ["GitHub", "Dev-moe-kyawaung"],
                  ["Certificates", "82+ (Programming Hub)"],
                  ["Focus", "Mobile · Architecture · Performance"],
                  ["Status", "Open to Work 🟢"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4 border-b border-[var(--s-border)] py-2.5 last:border-0">
                    <dt className="font-mono text-[10.5px] tracking-widest text-[var(--t-low)] uppercase">{k}</dt>
                    <dd className="text-right text-[12.5px] font-medium text-[var(--t-hi)]">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {SOCIALS.slice(0, 8).map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}
                     className="grid h-9 w-9 place-items-center border border-[var(--s-border)] text-[var(--t-mid)] clip-cyber-sm hover:border-[var(--v-magma)] hover:text-[var(--v-magma)]">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Stratigraphy" title={<>Career <span className="text-magma">timeline</span></>}>
        <Timeline />
      </Section>

      <Section eyebrow="Focus map" title={<>Four active <span className="text-magma">domains</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { k: "Mobile", v: "Kotlin · Jetpack Compose · MVVM · Clean Arch", i: "📱" },
            { k: "Backend", v: "Firebase · REST APIs · Python · Ktor", i: "☁️" },
            { k: "Security", v: "Ethical Hacking · Mobile Hardening", i: "🔐" },
            { k: "AI / ML", v: "Claude API · TFLite · On-Device ML", i: "🤖" },
          ].map((d, i) => (
            <Reveal key={d.k} delay={i * 80}>
              <Panel className="h-full">
                <div className="text-2xl" aria-hidden>{d.i}</div>
                <h3 className="mt-2 font-display text-[14px] font-extrabold text-magma">{d.k}</h3>
                <p className="mt-1.5 text-[13px] text-[var(--t-mid)]">{d.v}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
        <div className="mt-8"><Btn onClick={() => go("resume")} icon="arrowRight">View full resume</Btn></div>
      </Section>

      <Section eyebrow="Field imagery" title={<>Work <span className="text-magma">gallery</span></>}>
        <Gallery />
      </Section>
    </>
  );
}

/* ============================== RESUME ============================== */
export function Resume() {
  const { t } = useStore();
  const atsText = `MOE KYAW AUNG — SENIOR ANDROID / FLUTTER DEVELOPER
Tachileik, Myanmar | Bangkok, Thailand | moekyawaung@programmer.net | +95 9 889 000 889

SUMMARY
${PROFILE.summary}

CORE SKILLS
Android: Kotlin, Jetpack (Compose, ViewModel, Navigation, Room, Paging), Material 3
Cross-platform: Flutter, Dart, Riverpod, Bloc, platform channels
Architecture: Clean Architecture, MVVM, MVI, multi-module applications
Backend & Cloud: Firebase Suite, REST APIs, Retrofit, OkHttp, Ktor, JSON
DevOps: GitHub Actions, Azure DevOps, Jenkins, Fastlane, automated testing & deployment
Testing: JUnit, Espresso, MockK, UI & integration tests
Other: SOLID, OOP, Agile/Scrum, Jira, Microsoft Azure services

EXPERIENCE
2023–Now  Senior Android / Flutter Engineer — Independent Consulting
2020–2023 Lead Mobile Developer — Regional Retail Group
2017–2020 Android Developer — Mobile Software House
2014–2017 Junior to Mid Android Developer — Startup Studio, Yangon

CERTIFICATIONS
82+ Programming Hub certificates across 9 domains; Google Developers Launchpad`;

  const download = () => {
    const blob = new Blob([atsText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Moe-Kyaw-Aung-Resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHeader
        icon="📄"
        kicker="Core Sample · ကိုယ်ရေးမှတ်တမ်း"
        title="Resume"
        blurb="Senior Android & Flutter Developer with experience building production apps, improving performance, and supporting teams through architecture decisions, release workflows, and long-term maintenance."
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-3">
          <Btn onClick={download} icon="download">{t("ctaResume")}</Btn>
          <Btn variant="ghost" href={PROFILE.github} icon="github">GitHub</Btn>
          <Btn variant="ghost" href={PROFILE.gravatar} icon="external">Gravatar</Btn>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <h2 className="mb-4 font-display text-lg font-extrabold text-magma">Experience</h2>
            </Reveal>
            <Timeline />
          </div>

          <div className="space-y-5">
            <Reveal delay={100}>
              <Panel>
                <h3 className="mb-4 font-display text-[14px] font-extrabold text-magma">Key skills</h3>
                <div className="space-y-3.5">
                  {SKILL_GROUPS.flatMap((g) => g.items).slice(0, 8).map((s, i) => (
                    <SkillBar key={s.name} name={s.name} v={s.v} delay={i * 80} />
                  ))}
                </div>
              </Panel>
            </Reveal>
            <Reveal delay={160}>
              <Panel>
                <h3 className="mb-3 font-display text-[14px] font-extrabold text-magma">Certifications</h3>
                <div className="flex flex-wrap gap-1.5">
                  {CERT_CATEGORIES.map((c) => <Tag key={c.cat}>{c.icon} {c.cat} ({c.count})</Tag>)}
                </div>
              </Panel>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section eyebrow="Machine readable" title={<>ATS-friendly <span className="text-magma">plain text</span></>} sub="Copy-paste safe. No tables, no columns, no icons — exactly what applicant tracking systems parse best.">
        <Reveal>
          <pre className="magma-panel overflow-x-auto p-6 font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-[var(--t-mid)] clip-cyber">
{atsText}
          </pre>
        </Reveal>
      </Section>
    </>
  );
}

/* ============================== SKILLS ============================== */
export function Skills() {
  return (
    <>
      <PageHeader
        icon="🔥"
        kicker="Heat Zones · ကျွမ်းကျင်မှု"
        title="Skills"
        blurb="Grouped by what they actually do on a team, not by logo count. Bars animate as they scroll into the thermal window."
      />

      <Section>
        <div className="mb-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {RINGS.map((r) => <Ring key={r.label} value={r.value} label={r.label} color={r.color} />)}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 110}>
              <Panel className="h-full">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="text-lg" aria-hidden>{g.icon}</span>
                  <h2 className="font-display text-[14px] font-extrabold text-[var(--t-hi)]">{g.title}</h2>
                </div>
                <div className="space-y-4">
                  {g.items.map((s, si) => <SkillBar key={s.name} name={s.name} v={s.v} delay={si * 110} />)}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Categories" title={<>Beyond <span className="text-magma">code</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Product delivery", d: "Scoping, estimation, staged rollout, release notes, post-launch monitoring." },
            { t: "Engineering quality", d: "Test pyramids that stay green, PR review standards, lint & static analysis gates." },
            { t: "Tools", d: "Android Studio, Xcode, Figma, Charles, Perfetto, Firebase Console, GitHub Actions." },
            { t: "Collaboration", d: "Design hand-off, API contract negotiation, async written updates, mentoring." },
            { t: "Security", d: "Keystore, cert pinning, obfuscation, OWASP MASVS-informed reviews." },
            { t: "Localization", d: "Burmese, Thai and English pipelines with pluralisation and script shaping." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <div className="beam magma-panel h-full p-5 clip-cyber">
                <h3 className="font-display text-[14px] font-extrabold text-magma">{s.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Cloud" title={<>Tech <span className="text-magma">chips</span></>}>
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {["🐍 Python","☕ Java","🟨 JavaScript","🔷 TypeScript","🎯 Dart","🤖 Kotlin","🐦 Flutter","⚛️ React","▲ Next.js","📦 Node.js","🐘 PostgreSQL","🍃 MongoDB","⚡ Redis","🐳 Docker","☁️ Firebase","🔗 Blockchain","🤖 Machine Learning","🔐 Cyber Security","🦀 Rust","🐹 Go","🅰️ Angular","💚 Vue.js"].map((c) => (
              <span key={c} className="border border-[var(--s-border)] px-3 py-1.5 font-mono text-[12px] text-[var(--t-mid)] transition-colors clip-cyber-sm hover:border-[var(--v-magma)] hover:text-[var(--v-magma)]">{c}</span>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* ============================== TECH STACK ============================== */
export function Stack() {
  const layers = [
    { name: "Presentation layer", color: "#ffd166", items: ["Jetpack Compose", "Material 3", "Flutter widgets", "Motion & theming", "Accessibility semantics"] },
    { name: "Domain layer", color: "#ff6a13", items: ["Use cases", "Pure Kotlin / Dart", "Business invariants", "Result & error types"] },
    { name: "Data layer", color: "#ff3d20", items: ["Retrofit / Ktor / Dio", "Room / Drift", "Firebase Firestore", "DataStore", "Mappers & caching policy"] },
    { name: "Architecture", color: "#ff2d92", items: ["Clean Architecture", "MVI / MVVM", "Multi-module Gradle", "Hilt / Koin / Riverpod"] },
    { name: "Delivery & quality", color: "#22e6ff", items: ["GitHub Actions", "Fastlane", "JUnit · MockK · Espresso", "Crashlytics gating", "Staged rollout"] },
    { name: "Collaboration layer", color: "#ffe600", items: ["Figma hand-off", "API contracts", "ADR documents", "Async written updates"] },
  ];

  return (
    <>
      <PageHeader
        icon="🧱"
        kicker="Strata · နည်းပညာ"
        title="Tech Stack"
        blurb="A layered view of the stack — from the surface the user touches down to the collaboration layer that keeps it shippable."
      />
      <Section>
        <div className="space-y-3">
          {layers.map((l, i) => (
            <Reveal key={l.name} delay={i * 90}>
              <div
                className="magma-panel grid gap-4 p-5 clip-cyber md:grid-cols-[230px_1fr] md:items-center"
                style={{ borderLeft: `3px solid ${l.color}` }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-[var(--t-low)]">L{i + 1}</span>
                  <h2 className="font-display text-[14.5px] font-extrabold" style={{ color: l.color }}>{l.name}</h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {l.items.map((it) => <Tag key={it} color={l.color}>{it}</Tag>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Instrumentation" title={<>Numbers I <span className="text-magma">watch</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric k="Modules" v="12–24" hint="typical production app" />
          <Metric k="Build time" v="< 90s" hint="incremental, warm cache" />
          <Metric k="Crash-free" v="99.7%" hint="release gate threshold" />
          <Metric k="Coverage" v="72%" hint="domain layer ≥ 90%" />
        </div>
      </Section>
    </>
  );
}
