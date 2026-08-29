/* ==========================================================================
   HOME — cinematic volcanic landing page
   ========================================================================== */
import { useEffect, useState } from "react";
import { Btn, Counter, Icon, Metric, Panel, Reveal, Ring, Section, SkillBar, Tag } from "../components/ui";
import { Gallery, Marquee, TestimonialCarousel, VolcanicCore } from "../components/blocks";
import { useStore } from "../lib/store";
import {
  APP_COLLECTION, CERT_CATEGORIES, EMAILS, GITHUB_SITES, LOVABLE_LINKS, MEDIA,
  ORGS, PROFILE, PROJECTS, RINGS, SERVICES, SKILL_GROUPS, SOCIALS, STATS,
} from "../data/content";

/* ---------------- Typing effect with 4 rotating roles ---------------- */
const ROLES = [
  "Android Developer | Kotlin | Jetpack Compose | MVVM",
  "Android Engineer | Coroutines, Room, Retrofit, Hilt",
  "Flutter Developer | Dart, Material 3, Firebase, CI/CD",
  "Kotlin Multiplatform (KMM) | Native | Backend Integration",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const speed = del ? 28 : 58;
    const id = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, txt.length + 1);
        setTxt(next);
        if (next === full) setTimeout(() => setDel(true), 1700);
      } else {
        const next = full.slice(0, txt.length - 1);
        setTxt(next);
        if (next === "") { setDel(false); setI((v) => (v + 1) % ROLES.length); }
      }
    }, speed);
    return () => clearTimeout(id);
  }, [txt, del, i]);

  return (
    <span className="font-mono text-[13px] text-[var(--v-cyan)] sm:text-[15px]">
      {txt}
      <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-[var(--v-magma)]" />
    </span>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const { t, go } = useStore();
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="hero" className="scanlines relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      {/* Video background */}
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translate3d(0, ${y * 0.22}px, 0) scale(1.08)` }}
        autoPlay muted loop playsInline poster={MEDIA.gallery[15]}
        aria-hidden
      >
        <source src={MEDIA.heroVideo} type="video/mp4" />
      </video>
      <div className="hero-scrim absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        {/* Copy */}
        <div className="page-enter">
          <div className="mb-5 inline-flex items-center gap-2.5 border border-[var(--v-magma)]/40 bg-black/30 px-3 py-1.5 backdrop-blur clip-cyber-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3ddc84] shadow-[0_0_8px_#3ddc84]" />
            <span className="font-mono text-[10px] tracking-[0.28em] text-[var(--v-magma)] uppercase">{t("heroKicker")}</span>
          </div>

          <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-[var(--t-low)] uppercase">{PROFILE.tagline}</p>

          <h1 className="font-display text-[clamp(2.1rem,6.2vw,4.4rem)] leading-[0.98] font-black tracking-tight">
            <span className="text-magma">MOE KYAW AUNG</span>
            <span className="mt-2 block font-mm text-[clamp(1rem,2.6vw,1.6rem)] font-bold text-[var(--t-mid)]">မိုးကျော်အောင် · Senior Android &amp; Flutter Engineer</span>
          </h1>

          <div className="mt-4 flex min-h-[2.2em] items-center">
            <span className="mr-2 font-mono text-[13px] text-[var(--t-low)]">&gt;</span>
            <Typewriter />
          </div>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--t-mid)] md:text-[17px]">{t("heroTitle")}</p>
          <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-[var(--t-low)]">{t("heroSupport")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn onClick={() => go("projects")} icon="arrowRight">{t("ctaWork")}</Btn>
            <Btn variant="ghost" onClick={() => go("resume")} icon="download">{t("ctaResume")}</Btn>
          </div>

          {/* Social icons */}
          <div className="mt-8 flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                title={s.name}
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center border border-[var(--s-border)] bg-black/25 text-[var(--t-mid)] backdrop-blur transition-all clip-cyber-sm hover:-translate-y-1"
                style={{ ["--tw-shadow" as string]: s.color }}
                onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = ""; e.currentTarget.style.borderColor = ""; }}
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Hero side card — production focus */}
        <Reveal delay={200}>
          <div className="magma-panel relative overflow-hidden p-6 clip-cyber">
            <div className="mb-5 flex items-center gap-4">
              <span className="relative grid h-20 w-20 shrink-0 place-items-center">
                <span className="avatar-ring absolute inset-0 rounded-full blur-[1.5px]" />
                <img src={PROFILE.avatar} alt="Moe Kyaw Aung" className="absolute inset-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-full object-cover" />
              </span>
              <div>
                <div className="font-display text-sm font-extrabold tracking-widest text-[var(--t-hi)]">PRODUCTION FOCUS</div>
                <div className="font-mono text-[10.5px] text-[var(--t-low)]">{PROFILE.location}</div>
              </div>
            </div>

            <ul className="space-y-2.5">
              {["Flutter · Dart", "Kotlin · Jetpack Compose", "Shared architecture", "Native integrations", "App Store / Play Store delivery", "Firebase · REST · CI/CD"].map((f, i) => (
                <li key={f} className="flex items-center gap-3 text-[13.5px] text-[var(--t-mid)]">
                  <span className="font-mono text-[10px] text-[var(--v-magma)]">{String(i + 1).padStart(2, "0")}</span>
                  <Icon name="check" className="h-3.5 w-3.5 text-[var(--v-lava)]" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="fracture my-5" />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-[var(--t-low)] uppercase">Currently building</div>
                <div className="mt-1 text-[13px] font-semibold text-[var(--t-hi)]">{PROFILE.currentlyBuilding}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-[var(--t-low)] uppercase">Certifications</div>
                <div className="mt-1 text-[13px] font-semibold text-[var(--t-hi)]">{PROFILE.certifications}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function Home() {
  const { t, go } = useStore();

  return (
    <>
      <Hero />

      {/* TRUST STRIP */}
      <Marquee items={[
        "10+ years shipping mobile products",
        "Production Flutter & Kotlin experience",
        "Architecture and performance focus",
        "Strong cross-functional collaboration",
        "82+ certifications",
        "600+ repositories",
        "Google Developers Launchpad",
      ]} />

      {/* ABOUT PREVIEW + STATS */}
      <Section id="about" eyebrow="Thermal Profile · အကြောင်း" title={<>Engineering heat, <span className="text-magma">measured</span>.</>}>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-[var(--t-mid)]">{PROFILE.about}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--t-mid)]">{PROFILE.summary}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <div key={s.label} className="magma-panel p-4 text-center clip-cyber-sm" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="font-display text-[clamp(1.3rem,3.4vw,1.9rem)] font-black text-magma">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] tracking-wide text-[var(--t-low)] uppercase">{s.label}</div>
                  <div className="font-mm text-[11px] text-[var(--t-low)]">{s.labelMm}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn variant="ghost" onClick={() => go("about")} icon="arrowRight">Full about &amp; timeline</Btn>
              <Btn variant="ghost" href={PROFILE.gravatar} icon="external">Gravatar profile</Btn>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Panel>
              <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-[var(--v-magma)] uppercase">Core temperature rings</div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                {RINGS.map((r) => (
                  <Ring key={r.label} value={r.value} label={r.label} color={r.color} size={96} />
                ))}
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>

      {/* FEATURED PROJECTS — volcanic cores */}
      <Section id="projects" eyebrow="Active Vents · ပရောဂျက်" title={<>Volcanic <span className="text-magma">cores</span></>} sub="Six production systems, each mapped by heat signature, role and measured outcome.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => <VolcanicCore key={p.id} p={p} index={i} />)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Btn onClick={() => go("case-studies")} icon="arrowRight">{t("readCase")}</Btn>
          <Btn variant="ghost" href={PROFILE.github} icon="github">GitHub profile</Btn>
        </div>
      </Section>

      {/* SKILLS SNAPSHOT */}
      <Section id="skills" eyebrow="Heat Zones · ကျွမ်းကျင်မှု" title={<>Where the <span className="text-magma">magma</span> sits</>}>
        <div className="grid gap-5 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 110}>
              <Panel className="h-full">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="text-lg" aria-hidden>{g.icon}</span>
                  <h3 className="font-display text-[14px] font-extrabold tracking-wide text-[var(--t-hi)]">{g.title}</h3>
                </div>
                <div className="space-y-4">
                  {g.items.map((s, si) => <SkillBar key={s.name} name={s.name} v={s.v} delay={si * 120} />)}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Extraction Services · ဝန်ဆောင်မှု" title={<>How I can <span className="text-magma">help</span></>}>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="beam magma-panel h-full p-6 clip-cyber">
                <div className="mb-3 text-2xl" aria-hidden>{s.icon}</div>
                <h3 className="font-display text-[15px] font-extrabold text-[var(--t-hi)]">{s.title}</h3>
                <div className="font-mm text-[12px] text-[var(--v-magma)]">{s.mm}</div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* APP COLLECTION */}
      <Section id="apps" eyebrow="My Create App Collection" title={<>16 shipped <span className="text-magma">app builds</span></>} sub="A rolling collection of production and lab apps — tap any core to open its repository.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {APP_COLLECTION.map((a, i) => (
            <Reveal key={a.n} delay={i * 45}>
              <a href={a.repo} target="_blank" rel="noreferrer" className="magma-panel group flex items-center gap-3 p-4 clip-cyber-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[radial-gradient(circle,rgba(255,176,32,.25),transparent_70%)] text-lg">{a.icon}</span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] text-[var(--t-low)]">#{String(a.n).padStart(2, "0")}</span>
                  <span className="block truncate text-[13px] font-semibold text-[var(--t-hi)] group-hover:text-[var(--v-magma)]">{a.name}</span>
                </span>
                {a.badge && <span className="ml-auto shrink-0"><Tag color="#3ddc84">{a.badge}</Tag></span>}
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" eyebrow="Credentials · လက်မှတ်များ" title={<>82+ <span className="text-magma">certificates</span>, 9 domains</>} sub="Programming Hub certification collection — structured learning across the full technology spectrum.">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {CERT_CATEGORIES.map((c, i) => (
            <Reveal key={c.cat} delay={i * 60}>
              <Panel className="h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg" aria-hidden>{c.icon}</span>
                    <h3 className="font-display text-[13.5px] font-extrabold text-[var(--t-hi)]">{c.cat}</h3>
                  </div>
                  <span className="font-display text-lg font-black text-magma">{c.count}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.items.map((it) => <Tag key={it}>{it}</Tag>)}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* GITHUB ACCOUNT COLLECTION */}
      <Section id="gh-sites" eyebrow="GitHub Account Collection" title={<><span className="text-magma">{GITHUB_SITES.length}</span> live GitHub Pages sites</>}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {GITHUB_SITES.map((g, i) => (
            <Reveal key={g.url} delay={Math.min(i * 18, 400)}>
              <a href={g.url} target="_blank" rel="noreferrer" className="group flex items-center gap-2.5 border border-[var(--s-border)] px-3 py-2.5 transition-colors clip-cyber-sm hover:border-[var(--v-magma)]">
                <Icon name="github" className="h-3.5 w-3.5 shrink-0 text-[var(--t-low)] group-hover:text-[var(--v-magma)]" />
                <span className="truncate font-mono text-[11.5px] text-[var(--t-mid)] group-hover:text-[var(--t-hi)]">{g.name}.github.io</span>
                <Icon name="external" className="ml-auto h-3 w-3 shrink-0 text-[var(--t-low)] opacity-0 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LOVABLE PWA LINKS */}
      <Section id="lovable" eyebrow="Lovable PWA Collection" title={<><span className="text-magma">{LOVABLE_LINKS.length}</span> deployed PWA experiments</>}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {LOVABLE_LINKS.map((l, i) => (
            <Reveal key={l.url} delay={Math.min(i * 18, 400)}>
              <a href={l.url} target="_blank" rel="noreferrer" className="group flex items-center gap-2.5 border border-[var(--s-border)] px-3 py-2.5 transition-colors clip-cyber-sm hover:border-[var(--v-cyan)]">
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--v-cyan)]" />
                <span className="truncate font-mono text-[11.5px] text-[var(--t-mid)] group-hover:text-[var(--t-hi)]">{l.name}.lovable.app</span>
                <Icon name="external" className="ml-auto h-3 w-3 shrink-0 text-[var(--t-low)] opacity-0 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EMAIL COLLECTION */}
      <Section id="emails" eyebrow="Mail Collection" title={<>Reach the <span className="text-magma">vent</span></>} sub="Routed alias inboxes — all forward to the same core. Click to compose.">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {EMAILS.map((e, i) => (
            <Reveal key={e.addr} delay={Math.min(i * 22, 400)}>
              <a href={`mailto:${e.addr}`} className="group flex items-center gap-2.5 border border-[var(--s-border)] px-3 py-2.5 transition-colors clip-cyber-sm hover:border-[var(--v-pink)]">
                <Icon name="mail" className="h-3.5 w-3.5 shrink-0 text-[var(--t-low)] group-hover:text-[var(--v-pink)]" />
                <span className="truncate font-mono text-[11.5px] text-[var(--t-mid)] group-hover:text-[var(--t-hi)]">{e.addr}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ORGANIZATIONS */}
      <Section id="orgs" eyebrow="Organization Network" title={<>Where the work <span className="text-magma">lives</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ORGS.map((o, i) => (
            <Reveal key={o.name} delay={i * 70}>
              <a href={o.url} target="_blank" rel="noreferrer" className="magma-panel block h-full p-5 clip-cyber">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[14px] font-extrabold text-[var(--t-hi)]">{o.name}</h3>
                  {o.repos > 0 && <span className="font-mono text-[11px] text-[var(--v-magma)]">{o.repos} repos</span>}
                </div>
                <p className="mt-2 text-[13px] text-[var(--t-mid)]">{o.focus}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BURMESE LANGUAGE SUPPORT */}
      <Section id="burmese" eyebrow="Burmese Language Support · မြန်မာဘာသာ" title={<>ဘာသာစကား <span className="text-magma">ပံ့ပိုးမှု</span></>}>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Panel className="h-full">
              <h3 className="font-mm text-[17px] font-bold text-[var(--t-hi)]">မြန်မာဘာသာဖြင့် အက်ပ်တည်ဆောက်ခြင်း</h3>
              <p className="mt-3 font-mm text-[14px] leading-loose text-[var(--t-mid)]">
                Zawgyi နှင့် Unicode နှစ်မျိုးလုံးကို အလိုအလျောက် ခွဲခြားပြီး ပြောင်းလဲပေးနိုင်သည်။ Padauk၊ Pyidaungsu ဖောင့်များဖြင့် စာလုံးများ မှန်ကန်စွာ ပေါ်လွင်စေရန် text shaping ကို ဂရုတစိုက် စစ်ဆေးပါသည်။ ရက်စွဲ၊ ဂဏန်း၊ ငွေကြေးပုံစံများကိုလည်း မြန်မာစံနှုန်းအတိုင်း ဖော်ပြပေးသည်။
              </p>
              <ul className="mt-4 space-y-2">
                {["Zawgyi ↔ Unicode auto-detect & convert", "Myanmar cluster-aware line breaking", "Padauk / Pyidaungsu font pipeline", "မြန်မာ ရက်စွဲနှင့် ဂဏန်း format", "RTL-safe layout mirroring"].map((x) => (
                  <li key={x} className="flex gap-2.5 text-[13.5px] text-[var(--t-mid)]">
                    <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--v-lava)]" />{x}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
          <Reveal delay={120}>
            <Panel className="h-full">
              <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-[var(--v-magma)] uppercase">Tri-lingual sample</div>
              <div className="space-y-4 font-mono text-[13px]">
                <div><span className="text-[var(--v-cyan)]">EN</span> <span className="text-[var(--t-mid)]">Build with purpose. Ship with discipline.</span></div>
                <div><span className="text-[var(--v-pink)]">MM</span> <span className="font-mm text-[var(--t-mid)]">ရည်ရွယ်ချက်ဖြင့် တည်ဆောက်ပါ။ စည်းကမ်းဖြင့် ထုတ်လွှင့်ပါ။</span></div>
                <div><span className="text-[var(--v-yellow)]">TH</span> <span className="text-[var(--t-mid)]">สร้างอย่างมีเป้าหมาย ส่งมอบอย่างมีวินัย</span></div>
              </div>
              <div className="fracture my-5" />
              <p className="text-[13px] text-[var(--t-mid)]">
                Switch the whole site language from the header — every navigation label, hero line, form error and CTA is localized.
              </p>
              <div className="mt-4"><Btn variant="ghost" onClick={() => go("localization")} icon="arrowRight">Localization strategy</Btn></div>
            </Panel>
          </Reveal>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" eyebrow="Features" title={<>What this build <span className="text-magma">does</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: "⚡", t: "Performance Optimization", d: "Lazy media, GPU-composited motion, zero blocking fonts, tiny JS payload." },
            { i: "🧭", t: "Smooth Scroll + UX", d: "Scroll-padded anchors, reduced-motion support, keyboard-first navigation." },
            { i: "🌏", t: "Tri-lingual", d: "English, မြန်မာ and ไทย with locale-aware layout." },
            { i: "💠", t: "Multi-currency", d: "MMK, THB and USD pricing switchable inline." },
            { i: "🌗", t: "Dark / Light", d: "Obsidian night mode and cooled-crust day mode." },
            { i: "♿", t: "WCAG-minded", d: "Semantic landmarks, ARIA labels, visible focus rings." },
            { i: "🌡️", t: "Geothermal AI", d: "Ask the analyzer about any engineering heat zone." },
            { i: "🖼️", t: "Lightbox Gallery", d: "Keyboard-navigable image viewer with parallax cards." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 60}>
              <div className="beam magma-panel h-full p-5 clip-cyber-sm">
                <div className="text-xl" aria-hidden>{f.i}</div>
                <h3 className="mt-2 font-display text-[13px] font-extrabold text-[var(--t-hi)]">{f.t}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--t-mid)]">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" eyebrow="Visual Survey" title={<>Field <span className="text-magma">imagery</span></>} sub="Click any frame to expand. Arrow keys navigate, Esc closes.">
        <Gallery />
      </Section>

      {/* TESTIMONIAL PREVIEW */}
      <Section id="voices" eyebrow="Signals · အသိအမှတ်ပြုချက်" title={<>What teams <span className="text-magma">say</span></>}>
        <TestimonialCarousel />
      </Section>

      {/* METRICS + CTA */}
      <Section id="cta" eyebrow="Next Eruption" title={<>Let's build something <span className="text-magma">reliable</span>.</>}>
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="magma-panel relative overflow-hidden p-8 clip-cyber">
              <div className="lava-flow opacity-40" />
              <div className="relative">
                <p className="max-w-xl text-[15px] leading-relaxed text-[var(--t-mid)]">
                  Whether it's an architecture review, a stalled feature, or a full cross-platform build — I'll give you a
                  direct read on the heat zones and a plan you can actually schedule.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn onClick={() => go("contact")} icon="send">{t("ctaContact")}</Btn>
                  <Btn variant="ghost" onClick={() => go("pricing")} icon="arrowRight">See pricing</Btn>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Metric k="Response time" v="< 24h" hint="business days" />
            <Metric k="Time zones" v="GMT+6:30 / +7" hint="SEA · EU-AM · US-PM" />
            <Metric k="Availability" v="Open" hint="senior / lead roles" />
            <Metric k="Languages" v="EN · MM · TH" hint="written + spoken" />
          </div>
        </div>
      </Section>
    </>
  );
}
