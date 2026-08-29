/* ==========================================================================
   COMMUNITY PAGES
   Testimonials · Experience · Services · Contact · Writing · Talks ·
   Mentorship · Awards
   ========================================================================== */
import { Btn, Icon, Metric, PageHeader, Panel, Reveal, Section, Tag } from "../components/ui";
import { ContactForm, TestimonialCarousel, Timeline } from "../components/blocks";
import { useStore } from "../lib/store";
import { AWARDS, EMAILS, PROFILE, SERVICES, SOCIALS, TALKS, TESTIMONIALS, WRITING } from "../data/content";

/* ============================== TESTIMONIALS ============================== */
export function Testimonials() {
  return (
    <>
      <PageHeader icon="💬" kicker="Signals · အသိအမှတ်ပြုချက်" title="Testimonials"
        blurb="Managers, product leads, designers and engineers I've shipped with." />
      <Section><TestimonialCarousel /></Section>
      <Section eyebrow="All voices" title={<>Everything they <span className="text-magma">said</span></>}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <Panel className="flex h-full flex-col">
                <Icon name="quote" className="h-6 w-6 text-[var(--v-lava)] opacity-50" />
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--t-mid)]">“{t.quote}”</p>
                <footer className="mt-4 flex items-center gap-3 border-t border-[var(--s-border)] pt-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[linear-gradient(135deg,#ffd166,#c11414)] font-display text-[13px] font-black text-black">{t.name.charAt(0)}</span>
                  <span>
                    <cite className="block text-[13px] font-semibold not-italic text-[var(--t-hi)]">{t.name}</cite>
                    <span className="font-mono text-[10.5px] text-[var(--t-low)]">{t.role}</span>
                  </span>
                </footer>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== EXPERIENCE ============================== */
export function Experience() {
  return (
    <>
      <PageHeader icon="🕰️" kicker="Stratigraphy · အတွေ့အကြုံ" title="Experience"
        blurb="Twelve years of mobile delivery, from a four-person Yangon studio to independent senior consulting across Myanmar and Thailand." />
      <Section>
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric k="Years shipping" v="12" hint="since 2014" />
          <Metric k="Apps in production" v="40+" hint="Play Store + App Store" />
          <Metric k="Engineers mentored" v="18" hint="junior → mid/senior" />
          <Metric k="Outlets served" v="140+" hint="POS deployment" />
        </div>
        <Timeline />
      </Section>
    </>
  );
}

/* ============================== SERVICES ============================== */
export function Services() {
  const { go } = useStore();
  return (
    <>
      <PageHeader icon="🛠️" kicker="Extraction · ဝန်ဆောင်မှု" title="Services"
        blurb="Four ways teams usually bring me in — plus two that keep the codebase healthy after I leave." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="beam magma-panel flex h-full flex-col p-6 clip-cyber">
                <div className="text-2xl" aria-hidden>{s.icon}</div>
                <h2 className="mt-3 font-display text-[15px] font-extrabold text-[var(--t-hi)]">{s.title}</h2>
                <div className="font-mm text-[12.5px] text-[var(--v-magma)]">{s.mm}</div>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{s.desc}</p>
                <button onClick={() => go("pricing")} className="mt-5 flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-[var(--v-magma)] uppercase hover:underline">
                  See scope &amp; price <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="How it runs" title={<>Engagement <span className="text-magma">shape</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "1 · Probe", b: "30-minute call. I ask about the codebase, the team, and what actually hurts." },
            { h: "2 · Survey", b: "Repo access, a build, a profiling run. You get a written read within days." },
            { h: "3 · Plan", b: "Prioritised, scheduled, estimated. Nothing vague, nothing gold-plated." },
            { h: "4 · Execute", b: "I implement, pair, or hand over — whichever gives your team the most leverage." },
          ].map((s, i) => (
            <Reveal key={s.h} delay={i * 70}>
              <Panel className="h-full">
                <h3 className="font-display text-[13.5px] font-extrabold text-magma">{s.h}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--t-mid)]">{s.b}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== CONTACT ============================== */
export function Contact() {
  return (
    <>
      <PageHeader icon="📮" kicker="Vent Access · ဆက်သွယ်ရန်" title="Contact"
        blurb="Let's build something reliable, polished, and useful. Tell me what's stuck and I'll tell you honestly whether I'm the right person." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Panel className="p-6 md:p-8"><ContactForm /></Panel>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={80}>
              <Panel>
                <h2 className="mb-4 font-display text-[13px] font-extrabold text-magma">Direct lines</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="mail" className="h-4 w-4 text-[var(--v-lava)]" />
                    <a href={`mailto:${PROFILE.primaryEmail}`} className="font-mono text-[12.5px] text-[var(--t-mid)] hover:text-[var(--v-magma)]">{PROFILE.primaryEmail}</a>
                  </li>
                  {PROFILE.phones.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <Icon name="phone" className="h-4 w-4 text-[var(--v-lava)]" />
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="font-mono text-[12.5px] text-[var(--t-mid)] hover:text-[var(--v-magma)]">{p}</a>
                    </li>
                  ))}
                  <li className="flex items-center gap-3">
                    <Icon name="pin" className="h-4 w-4 text-[var(--v-lava)]" />
                    <span className="text-[12.5px] text-[var(--t-mid)]">{PROFILE.location}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="calendar" className="h-4 w-4 text-[var(--v-lava)]" />
                    <span className="text-[12.5px] text-[var(--t-mid)]">GMT+6:30 / GMT+7 · replies within 24h</span>
                  </li>
                </ul>
                <div className="mt-5 flex flex-col gap-2">
                  <Btn href="https://calendar.google.com/" icon="calendar">Book a 30-min call</Btn>
                  <Btn variant="ghost" href={PROFILE.gravatar} icon="external">Gravatar profile</Btn>
                </div>
              </Panel>
            </Reveal>

            <Reveal delay={140}>
              <Panel>
                <h2 className="mb-3 font-display text-[13px] font-extrabold text-magma">Social channels</h2>
                <div className="grid grid-cols-2 gap-2">
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                       className="flex items-center gap-2 border border-[var(--s-border)] px-2.5 py-2 text-[12px] text-[var(--t-mid)] clip-cyber-sm hover:border-[var(--v-magma)] hover:text-[var(--t-hi)]">
                      <Icon name={s.icon} className="h-3.5 w-3.5" /> {s.name}
                    </a>
                  ))}
                </div>
              </Panel>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section eyebrow="Mail collection" title={<>Alias <span className="text-magma">inboxes</span></>} sub="All routed to the same core inbox — pick whichever fits your context.">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {EMAILS.map((e, i) => (
            <Reveal key={e.addr} delay={Math.min(i * 20, 360)}>
              <a href={`mailto:${e.addr}`} className="group flex items-center gap-2.5 border border-[var(--s-border)] px-3 py-2.5 clip-cyber-sm hover:border-[var(--v-pink)]">
                <Icon name="mail" className="h-3.5 w-3.5 shrink-0 text-[var(--t-low)] group-hover:text-[var(--v-pink)]" />
                <span className="truncate font-mono text-[11.5px] text-[var(--t-mid)] group-hover:text-[var(--t-hi)]">{e.addr}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Location" title={<>Base of <span className="text-magma">operations</span></>}>
        <Reveal>
          <div className="overflow-hidden border border-[var(--s-border)] clip-cyber">
            <iframe
              title="Google map of Tachileik, Myanmar"
              src="https://www.google.com/maps?q=Tachileik,%20Myanmar&output=embed"
              width="100%" height="380" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "grayscale(.35) invert(.92) hue-rotate(170deg) contrast(1.08)" }}
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* ============================== WRITING ============================== */
export function Writing() {
  return (
    <>
      <PageHeader icon="✍️" kicker="Field Notes · ဆောင်းပါး" title="Writing"
        blurb="Technical notes on architecture, performance, shared code strategy, delivery discipline and product thinking." />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {WRITING.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <article className="magma-panel flex h-full flex-col p-5 clip-cyber">
                <div className="flex items-center justify-between gap-3">
                  <Tag color="#ff6a13">{w.tag}</Tag>
                  <span className="font-mono text-[10.5px] text-[var(--t-low)]">{w.read}</span>
                </div>
                <h2 className="mt-3 flex-1 font-display text-[15px] leading-snug font-extrabold text-[var(--t-hi)]">{w.title}</h2>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--s-border)] pt-3">
                  <time className="font-mono text-[10.5px] text-[var(--t-low)]" dateTime={w.date}>{w.date}</time>
                  <span className="flex items-center gap-1 font-mono text-[10.5px] text-[var(--v-magma)]">Read <Icon name="arrowRight" className="h-3 w-3" /></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== TALKS ============================== */
export function Talks() {
  return (
    <>
      <PageHeader icon="🎤" kicker="Broadcast · ဟောပြောပွဲ" title="Talks"
        blurb="Meetups, conference sessions and workshops across Myanmar and Thailand — slides and recordings on request." />
      <Section>
        <div className="space-y-3">
          {TALKS.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <div className="magma-panel flex flex-col gap-3 p-5 clip-cyber sm:flex-row sm:items-center">
                <span className="font-display text-2xl font-black text-magma">{t.year}</span>
                <div className="flex-1">
                  <h2 className="font-display text-[15px] font-extrabold text-[var(--t-hi)]">{t.title}</h2>
                  <p className="text-[13px] text-[var(--t-mid)]">{t.venue}</p>
                </div>
                <Tag color="#22e6ff">{t.type}</Tag>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 border border-[var(--s-border)] px-3 py-1.5 font-mono text-[10.5px] uppercase clip-cyber-sm"><Icon name="layout" className="h-3 w-3" /> Slides</span>
                  <span className="flex items-center gap-1.5 border border-[var(--s-border)] px-3 py-1.5 font-mono text-[10.5px] uppercase clip-cyber-sm"><Icon name="video" className="h-3 w-3" /> Recording</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== MENTORSHIP ============================== */
export function Mentorship() {
  return (
    <>
      <PageHeader icon="🧭" kicker="Heat Transfer · လမ်းညွှန်မှု" title="Mentorship"
        blurb="I've mentored 18 engineers from junior to mid and senior. It's the highest-leverage thing I do, and the part I enjoy most." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { i: "🔍", h: "Code review support", b: "Written, specific, and kind. I explain the reasoning so the next PR doesn't need the same comment." },
            { i: "👥", h: "Pairing sessions", b: "Weekly 90-minute pairing on real tickets — debugging, refactoring, and test design in your own codebase." },
            { i: "🧹", h: "Refactoring guidance", b: "How to break a 3,000-line Activity into modules without freezing feature delivery for a quarter." },
            { i: "📈", h: "Career growth", b: "What the senior bar actually looks like, how to demonstrate it, and how to write the promo document." },
            { i: "🎯", h: "Flutter & Kotlin fundamentals", b: "Coroutines, Flow, recomposition, widget lifecycle — the concepts tutorials skip." },
            { i: "🗣️", h: "Communication", b: "Writing ADRs, running a design review, and disagreeing with a manager productively." },
          ].map((m, i) => (
            <Reveal key={m.h} delay={i * 70}>
              <div className="beam magma-panel h-full p-5 clip-cyber">
                <div className="text-2xl" aria-hidden>{m.i}</div>
                <h2 className="mt-2.5 font-display text-[14px] font-extrabold text-[var(--t-hi)]">{m.h}</h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{m.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ============================== AWARDS ============================== */
export function Awards() {
  return (
    <>
      <PageHeader icon="🏆" kicker="Recognition · ဆုများ" title="Awards"
        blurb="Certifications, community recognition and featured work." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <Panel className="h-full text-center">
                <Icon name="award" className="mx-auto h-8 w-8 text-[var(--v-magma)]" />
                <h2 className="mt-3 font-display text-[13.5px] font-extrabold text-[var(--t-hi)]">{a.title}</h2>
                <div className="mt-1 font-mono text-[11px] text-[var(--v-magma)]">{a.year}</div>
                <p className="mt-2 text-[12.5px] text-[var(--t-mid)]">{a.note}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
