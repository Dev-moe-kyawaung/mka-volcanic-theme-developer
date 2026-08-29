/* ==========================================================================
   SYSTEM PAGES
   Labs · Design System · Accessibility · Localization · Pricing · FAQ · Legal
   ========================================================================== */
import { Accordion, Btn, Icon, Metric, PageHeader, Panel, Reveal, Section, Tag } from "../components/ui";
import { CurrencySwitcher } from "../components/chrome";
import { useStore } from "../lib/store";
import { CURRENCIES, FAQ, LABS, PRICING } from "../data/content";

/* ============================== LABS ============================== */
export function Labs() {
  return (
    <>
      <PageHeader icon="🧪" kicker="Fissure Experiments · ဓာတ်ခွဲခန်း" title="Labs"
        blurb="Prototypes, motion studies and small tools. Nothing here is production — that's the point." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((l, i) => (
            <Reveal key={l.title} delay={i * 70}>
              <div className="magma-panel group relative h-full overflow-hidden p-5 clip-cyber">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,106,19,.35),transparent_70%)] blur-xl transition-transform duration-700 group-hover:scale-150" />
                <Tag color="#ffe600">{l.tag}</Tag>
                <h2 className="mt-3 font-display text-[14.5px] font-extrabold text-[var(--t-hi)]">{l.title}</h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{l.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== DESIGN SYSTEM ============================== */
export function DesignSystem() {
  const tokens = [
    { n: "--v-core", v: "#fff3c4", d: "White-hot core" },
    { n: "--v-magma", v: "#ffb020", d: "Molten gold" },
    { n: "--v-lava", v: "#ff6a13", d: "Flowing lava" },
    { n: "--v-ember", v: "#ff3d20", d: "Cooling ember" },
    { n: "--v-crimson", v: "#c11414", d: "Crust fracture" },
    { n: "--v-obsidian", v: "#0a0607", d: "Cooled basalt" },
    { n: "--v-cyan", v: "#22e6ff", d: "Neon cyan accent" },
    { n: "--v-pink", v: "#ff2d92", d: "Hot pink accent" },
    { n: "--v-yellow", v: "#ffe600", d: "Electric yellow" },
  ];

  return (
    <>
      <PageHeader icon="🎨" kicker="Mineral Composition · ဒီဇိုင်းစနစ်" title="Design System"
        blurb="Every colour, type ramp, spacing step and motion curve on this site is a documented token. Change one variable, retheme the whole crust." />

      <Section eyebrow="Color tokens" title={<>Magma <span className="text-magma">ramp</span></>}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tokens.map((t, i) => (
            <Reveal key={t.n} delay={i * 45}>
              <div className="flex items-center gap-3 border border-[var(--s-border)] p-3 clip-cyber-sm">
                <span className="h-11 w-11 shrink-0 border border-white/10" style={{ background: t.v, boxShadow: `0 0 22px ${t.v}66` }} />
                <div className="min-w-0">
                  <div className="truncate font-mono text-[11.5px] text-[var(--t-hi)]">{t.n}</div>
                  <div className="font-mono text-[10.5px] text-[var(--t-low)]">{t.v} · {t.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Typography" title={<>Type <span className="text-magma">ramp</span></>}>
        <Reveal>
          <Panel className="space-y-4">
            <div><div className="font-mono text-[10px] tracking-widest text-[var(--t-low)] uppercase">Display · Orbitron 900</div><p className="font-display text-3xl font-black text-magma">ERUPTIVE HEADLINE</p></div>
            <div><div className="font-mono text-[10px] tracking-widest text-[var(--t-low)] uppercase">Body · Space Grotesk 400</div><p className="text-[15px] text-[var(--t-mid)]">Readable at 15px with 1.65 line-height, tuned for long technical paragraphs.</p></div>
            <div><div className="font-mono text-[10px] tracking-widest text-[var(--t-low)] uppercase">Mono · JetBrains Mono</div><p className="font-mono text-[13px] text-[var(--t-mid)]">val heatZone = "1420°C" // metrics, labels, code</p></div>
            <div><div className="font-mono text-[10px] tracking-widest text-[var(--t-low)] uppercase">Myanmar · Padauk</div><p className="font-mm text-[15px] text-[var(--t-mid)]">မြန်မာဘာသာဖြင့် ဖတ်ရလွယ်ကူစွာ ရေးသားထားပါသည်။</p></div>
          </Panel>
        </Reveal>
      </Section>

      <Section eyebrow="Primitives" title={<>Spacing, elevation, <span className="text-magma">motion</span></>}>
        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal>
            <Panel className="h-full">
              <h3 className="mb-3 font-display text-[13px] font-extrabold text-magma">Spacing scale</h3>
              <div className="space-y-2">
                {[4, 8, 12, 16, 24, 32, 48, 64].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="w-8 font-mono text-[10.5px] text-[var(--t-low)]">{s}</span>
                    <span className="h-2 bg-[linear-gradient(90deg,#c11414,#ffd166)]" style={{ width: s * 2 }} />
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>
          <Reveal delay={80}>
            <Panel className="h-full">
              <h3 className="mb-3 font-display text-[13px] font-extrabold text-magma">Elevation</h3>
              <div className="space-y-3">
                {["glass · blur 14px", "panel · +hover lift 4px", "core · 0 18px 60px lava", "modal · full backdrop blur"].map((e, i) => (
                  <div key={e} className="border border-[var(--s-border)] p-3 text-[12.5px] text-[var(--t-mid)] clip-cyber-sm" style={{ boxShadow: `0 ${4 + i * 5}px ${16 + i * 14}px -8px rgba(255,106,19,.5)` }}>{e}</div>
                ))}
              </div>
            </Panel>
          </Reveal>
          <Reveal delay={140}>
            <Panel className="h-full">
              <h3 className="mb-3 font-display text-[13px] font-extrabold text-magma">Motion curves</h3>
              <ul className="space-y-2 font-mono text-[11.5px] text-[var(--t-mid)]">
                <li>--e-out · cubic-bezier(.16,1,.3,1)</li>
                <li>--e-inout · cubic-bezier(.65,0,.35,1)</li>
                <li>reveal · 800ms blur-up</li>
                <li>erupt · 900ms scale + brightness</li>
                <li>ember-rise · 9–23s linear loop</li>
                <li>heat-haze · 5s skew + hue shift</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["clip-cyber", "clip-cyber-sm", "fracture", "beam", "pulse-core"].map((c) => <Tag key={c} color="#22e6ff">{c}</Tag>)}
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

/* ============================== ACCESSIBILITY ============================== */
export function Accessibility() {
  return (
    <>
      <PageHeader icon="♿" kicker="Safe Passage · အသုံးပြုနိုင်မှု" title="Accessibility"
        blurb="A volcanic aesthetic is no excuse for an inaccessible site. Here's exactly what this build does — and how to verify it." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { h: "Keyboard support", b: "Every interactive element is reachable by Tab. A skip-link jumps straight to main content. The lightbox supports Esc, ←, →." },
            { h: "Visible focus states", b: "A 2px magma outline with 3px offset on :focus-visible — never removed, never invisible against the background." },
            { h: "Contrast control", b: "Body text meets WCAG AA against both the obsidian and cooled-crust themes. Decorative glow never carries meaning alone." },
            { h: "Reduced motion", b: "prefers-reduced-motion disables ember drift, lava movement, tilt, marquee and reveal animations — content appears instantly." },
            { h: "Semantic markup", b: "header / nav / main / section / article / footer landmarks, one h1 per page, ordered heading levels, real <table> for data." },
            { h: "Screen readers", b: "aria-label on icon-only controls, aria-expanded on accordions and menus, role=status on live form feedback, alt text on all content images." },
          ].map((a, i) => (
            <Reveal key={a.h} delay={i * 70}>
              <Panel className="h-full">
                <div className="flex items-center gap-2.5">
                  <Icon name="check" className="h-4 w-4 text-[#3ddc84]" />
                  <h2 className="font-display text-[13.5px] font-extrabold text-[var(--t-hi)]">{a.h}</h2>
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{a.b}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Targets" title={<>Conformance <span className="text-magma">targets</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric k="Standard" v="WCAG 2.2" hint="Level AA target" />
          <Metric k="Body contrast" v="≥ 4.5:1" />
          <Metric k="Touch targets" v="≥ 44px" />
          <Metric k="Motion" v="Opt-out" hint="OS preference honoured" />
        </div>
      </Section>
    </>
  );
}

/* ============================== LOCALIZATION ============================== */
export function Localization() {
  const { lang } = useStore();
  return (
    <>
      <PageHeader icon="🌏" kicker="Regional Strata · ဘာသာစကား" title="Localization"
        blurb="Myanmar, English and Thai are first-class here — not an afterthought translation file bolted on before launch." />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { flag: "🌐", n: "English", code: "en", note: "Source language. Concise technical register." },
            { flag: "🇲🇲", n: "မြန်မာ (Burmese)", code: "my", note: "Unicode-first with Zawgyi detection and Padauk shaping." },
            { flag: "🇹🇭", n: "ไทย (Thai)", code: "th", note: "Thai line-breaking with no-space word segmentation." },
          ].map((l, i) => (
            <Reveal key={l.code} delay={i * 80}>
              <Panel className={lang === (l.code === "my" ? "mm" : l.code) ? "border-[var(--v-magma)]" : ""}>
                <div className="text-3xl" aria-hidden>{l.flag}</div>
                <h2 className="mt-2 font-display text-[15px] font-extrabold text-[var(--t-hi)]">{l.n}</h2>
                <div className="font-mono text-[11px] text-[var(--v-magma)]">locale: {l.code}</div>
                <p className="mt-2 text-[13.5px] text-[var(--t-mid)]">{l.note}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Strategy" title={<>How it <span className="text-magma">works</span></>}>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { h: "Locale-aware content structure", b: "Copy lives in a typed dictionary keyed by locale. Components never hard-code strings; layout is written to survive a 40% length expansion." },
            { h: "Fallback behaviour", b: "Missing key → English source string, logged in development. Users never see a raw key or an empty node." },
            { h: "Translation handling", b: "ICU message format for plurals and gender, separate namespaces per feature, and screenshots attached to translator tickets for context." },
            { h: "Script & font pipeline", b: "Padauk / Pyidaungsu for Burmese, Noto Sans Thai for Thai, subsetted and preloaded so no fallback flash occurs." },
            { h: "Formatting", b: "Dates, numbers and currency go through locale-aware formatters. Prices display in MMK, THB or USD depending on the visitor's selection." },
            { h: "Testing", b: "Golden tests render every screen in all three locales; a pseudo-locale run catches hard-coded strings automatically." },
          ].map((s, i) => (
            <Reveal key={s.h} delay={i * 60}>
              <Panel className="h-full">
                <h3 className="font-display text-[13.5px] font-extrabold text-magma">{s.h}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{s.b}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== PRICING ============================== */
export function Pricing() {
  const { currency, setCurrency, go } = useStore();
  const fmt = (n: number) => {
    const sym = CURRENCIES[currency];
    return currency === "MMK" ? `${n.toLocaleString()} ${sym}` : `${sym}${n.toLocaleString()}`;
  };

  return (
    <>
      <PageHeader icon="💠" kicker="Extraction Cost · ဈေးနှုန်း" title="Pricing"
        blurb="Transparent rates in MMK, THB and USD. No discovery-call-only pricing games — you can budget before you email me." />
      <Section>
        <Reveal className="mb-8 flex flex-wrap items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[var(--t-low)] uppercase">Display currency</span>
          <CurrencySwitcher value={currency} onChange={setCurrency} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className={`magma-panel relative flex h-full flex-col p-6 clip-cyber ${p.featured ? "border-[var(--v-magma)] shadow-[0_0_60px_-24px_rgba(255,176,32,.9)]" : ""}`}>
                {p.featured && (
                  <span className="absolute top-0 right-0 bg-[linear-gradient(100deg,#ffd166,#ff6a13)] px-3 py-1 font-mono text-[9.5px] tracking-[0.2em] text-black uppercase">Most chosen</span>
                )}
                <h2 className="font-display text-[15px] font-extrabold text-[var(--t-hi)]">{p.name}</h2>
                <div className="font-mm text-[12.5px] text-[var(--v-magma)]">{p.mm}</div>
                <div className="mt-4 font-display text-[clamp(1.3rem,3vw,1.8rem)] font-black text-magma">{fmt(p[currency])}</div>
                <div className="font-mono text-[10.5px] text-[var(--t-low)]">{p.unit}</div>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[13px] text-[var(--t-mid)]">
                      <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--v-lava)]" />{f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Btn variant={p.featured ? "primary" : "ghost"} onClick={() => go("contact")} className="w-full" icon="arrowRight">Start</Btn>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="font-mono text-[11.5px] text-[var(--t-low)]">
            Rates exclude VAT/WHT where applicable. MMK and THB figures are indicative and settled at the prevailing rate on invoice date.
            Long-term engagements (3+ months) are discounted 10–15%.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

/* ============================== FAQ ============================== */
export function Faq() {
  return (
    <>
      <PageHeader icon="❓" kicker="Common Probes · မေးလေ့ရှိသော" title="FAQ"
        blurb="Role preferences, availability, stack, consulting and response time — answered directly." />
      <Section>
        <div className="mx-auto max-w-3xl"><Accordion items={FAQ} /></div>
      </Section>
    </>
  );
}

/* ============================== LEGAL ============================== */
export function Legal() {
  const blocks = [
    { h: "Privacy policy", b: "This site is fully static. There is no backend, no database and no user account system. The contact and newsletter forms validate input in your browser and are not transmitted to a server in this build. No analytics cookies, no advertising trackers, no fingerprinting scripts are used." },
    { h: "Terms of use", b: "Content, copy and code samples on this site are provided as-is for evaluation purposes. Project descriptions and metrics are drawn from real engagements; client names are withheld or generalised where confidentiality applies. Nothing here constitutes a warranty of outcome for future work." },
    { h: "Cookie notice", b: "No cookies are set by this site. Theme, language and currency preferences are held in memory for the duration of your visit only. Embedded Google Maps may set its own cookies under Google's policy — the map is loaded lazily, so no request is made until you scroll to it." },
    { h: "Attribution", b: "Typefaces: Orbitron, Space Grotesk, JetBrains Mono and Padauk via Google Fonts (SIL Open Font License). Icons are hand-drawn in the Lucide stroke style. Imagery is hosted on Cloudinary and owned or licensed by Moe Kyaw Aung. Built with React, Vite and Tailwind CSS." },
    { h: "Intellectual property", b: "Open-source repositories linked from this site carry their own licences — check each repository's LICENSE file before reuse. Portfolio imagery and written copy remain the property of Moe Kyaw Aung." },
    { h: "Contact for legal matters", b: "Send legal or takedown enquiries to moekyawaung@programmer.net with “LEGAL” in the subject line. Responses within 5 business days." },
  ];
  return (
    <>
      <PageHeader icon="⚖️" kicker="Bedrock · ဥပဒေ" title="Legal"
        blurb="Privacy, terms, cookies and attribution — short, readable, and honest about what this site does and does not collect." />
      <Section>
        <div className="mx-auto grid max-w-4xl gap-4">
          {blocks.map((b, i) => (
            <Reveal key={b.h} delay={i * 60}>
              <Panel>
                <h2 className="font-display text-[14px] font-extrabold text-magma">{b.h}</h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{b.b}</p>
              </Panel>
            </Reveal>
          ))}
          <p className="mt-2 font-mono text-[11px] text-[var(--t-low)]">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </Section>
    </>
  );
}
