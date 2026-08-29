/* ==========================================================================
   WORK PAGES — Projects index · Project details 01-03 · Case studies
   ========================================================================== */
import { Btn, Icon, Metric, Panel, PageHeader, Reveal, Section, Tag } from "../components/ui";
import { VolcanicCore } from "../components/blocks";
import { useStore } from "../lib/store";
import { APP_COLLECTION, CASE_STUDIES, PROJECTS, REPOS } from "../data/content";

/* ============================== PROJECTS INDEX ============================== */
export function Projects() {
  const { go } = useStore();
  return (
    <>
      <PageHeader
        icon="🛰️"
        kicker="Active Vents · ပရောဂျက်"
        title="Projects"
        blurb="Curated production work. Each core lists its heat signature, my role, the measured outcome, and links to a live surface plus source."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => <VolcanicCore key={p.id} p={p} index={i} />)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Btn onClick={() => go("project-01")} icon="arrowRight">Project detail 01</Btn>
          <Btn variant="ghost" onClick={() => go("case-studies")} icon="arrowRight">Case studies</Btn>
        </div>
      </Section>

      <Section eyebrow="Repository index" title={<>Senior-level <span className="text-magma">source</span></>} sub="A sample of public repositories demonstrating architecture, testing and delivery practice.">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {REPOS.map((r, i) => (
            <Reveal key={r.url} delay={Math.min(i * 25, 400)}>
              <a href={r.url} target="_blank" rel="noreferrer" className="group flex items-center gap-2.5 border border-[var(--s-border)] px-3 py-2.5 clip-cyber-sm hover:border-[var(--v-magma)]">
                <Icon name="code" className="h-3.5 w-3.5 shrink-0 text-[var(--t-low)] group-hover:text-[var(--v-magma)]" />
                <span className="truncate font-mono text-[11.5px] text-[var(--t-mid)] group-hover:text-[var(--t-hi)]">{r.name}</span>
                <Icon name="external" className="ml-auto h-3 w-3 shrink-0 text-[var(--t-low)] opacity-0 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="App collection" title={<>16 shipped <span className="text-magma">builds</span></>}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {APP_COLLECTION.map((a, i) => (
            <Reveal key={a.n} delay={i * 40}>
              <a href={a.repo} target="_blank" rel="noreferrer" className="magma-panel group flex items-center gap-3 p-4 clip-cyber-sm">
                <span className="text-lg">{a.icon}</span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] text-[var(--t-low)]">#{String(a.n).padStart(2, "0")}</span>
                  <span className="block truncate text-[13px] font-semibold text-[var(--t-hi)] group-hover:text-[var(--v-magma)]">{a.name}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== PROJECT DETAIL ============================== */
export function ProjectDetail({ index }: { index: number }) {
  const p = PROJECTS[index];
  const cs = CASE_STUDIES[index];
  const { go } = useStore();

  const sections = [
    { h: "The problem", b: cs.problem },
    { h: "My role", b: `${p.role}. Owned architecture decisions, implementation of the critical path, and the release pipeline that carried it to production.` },
    { h: "Architecture", b: cs.architecture },
    { h: "Outcome", b: cs.outcome },
    { h: "Lessons learned", b: cs.lesson },
  ];

  return (
    <>
      <PageHeader
        icon={["①", "②", "③"][index]}
        kicker={`${p.zone} · ${p.heat}`}
        title={p.title}
        blurb={p.desc}
      />

      <Section>
        <Reveal>
          <div className="relative mb-8 overflow-hidden clip-cyber">
            <img src={p.img} alt={`${p.title} hero`} className="h-[clamp(200px,38vw,420px)] w-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, var(--s-bg), transparent 55%), radial-gradient(80% 60% at 50% 120%, ${p.accent}88, transparent 60%)` }} />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => <Tag key={t} color={p.accent}>{t}</Tag>)}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 70}>
                <article>
                  <h2 className="font-display text-[15px] font-extrabold tracking-wide" style={{ color: p.accent }}>{s.h}</h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--t-mid)]">{s.b}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            <Metric k="Heat signature" v={p.heat} hint={p.zone} />
            <Metric k="Measured impact" v={p.metric} />
            <Reveal delay={120}>
              <Panel>
                <h3 className="mb-3 font-display text-[13px] font-extrabold text-magma">Stack used</h3>
                <div className="flex flex-wrap gap-1.5">
                  {[...p.tags, "CI/CD", "Crashlytics", "Feature flags"].map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <Btn href={p.demo} icon="external">Live demo</Btn>
                  <Btn variant="ghost" href={p.source} icon="github">Source</Btn>
                </div>
              </Panel>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {[0, 1, 2].filter((n) => n !== index).map((n) => (
            <Btn key={n} variant="ghost" onClick={() => go(`project-0${n + 1}` as never)} icon="arrowRight">
              {PROJECTS[n].title}
            </Btn>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== CASE STUDIES ============================== */
export function CaseStudies() {
  return (
    <>
      <PageHeader
        icon="📚"
        kicker="Drill Cores · လေ့လာချက်"
        title="Case Studies"
        blurb="Problem, role, architecture, outcome and the honest lesson — the parts of a project that actually transfer to the next one."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <article className="magma-panel h-full overflow-hidden clip-cyber" style={{ borderColor: `${c.accent}44` }}>
                <div className="flex items-center gap-3 border-b border-[var(--s-border)] px-5 py-3.5" style={{ background: `linear-gradient(90deg, ${c.accent}1f, transparent)` }}>
                  <span className="h-2 w-2 rotate-45" style={{ background: c.accent, boxShadow: `0 0 10px ${c.accent}` }} />
                  <h2 className="font-display text-[14.5px] font-extrabold text-[var(--t-hi)]">{c.title}</h2>
                  <span className="ml-auto font-mono text-[10.5px]" style={{ color: c.accent }}>{c.heat}</span>
                </div>
                <div className="space-y-3.5 p-5">
                  {[
                    ["Problem", c.problem],
                    ["Role", c.role],
                    ["Architecture", c.architecture],
                    ["Outcome", c.outcome],
                    ["Lesson", c.lesson],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--t-low)] uppercase">{k}</div>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{v}</p>
                    </div>
                  ))}
                  <div className="flex gap-2 pt-1">
                    <a href={c.source} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 border border-[var(--s-border)] px-3 py-2 font-mono text-[10.5px] uppercase clip-cyber-sm hover:border-[var(--v-magma)]">
                      <Icon name="github" className="h-3.5 w-3.5" /> Source
                    </a>
                    <a href={c.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 border px-3 py-2 font-mono text-[10.5px] uppercase clip-cyber-sm" style={{ borderColor: `${c.accent}66`, color: c.accent }}>
                      <Icon name="external" className="h-3.5 w-3.5" /> Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
