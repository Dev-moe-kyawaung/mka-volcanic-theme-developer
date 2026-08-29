/* ==========================================================================
   COMPOSITE BLOCKS
   Volcanic project cores · lightbox gallery · testimonial carousel ·
   timeline · validated contact form · marquee strip
   ========================================================================== */
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Btn, Icon, Panel, Reveal, Tag, Tilt } from "./ui";
import { useStore } from "../lib/store";
import { EXPERIENCE, MEDIA, PROJECTS, TESTIMONIALS } from "../data/content";

/* ==================================================================
   VOLCANIC CORE — project card with eruptive reveal on scroll
   ================================================================== */
export function VolcanicCore({ p, index }: { p: (typeof PROJECTS)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [erupted, setErupted] = useState(false);
  const { t } = useStore();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setErupted(true), index * 110);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <article ref={ref} className={cn("opacity-0", erupted && "erupt")}>
      <Tilt max={6}>
        <div
          className="magma-panel group relative flex h-full flex-col overflow-hidden clip-cyber"
          style={{ borderColor: `${p.accent}44` }}
        >
          {/* Core imagery + heat overlay */}
          <div className="relative h-44 overflow-hidden">
            <img
              src={p.img}
              alt={`${p.title} preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <div
              className="absolute inset-0 mix-blend-hard-light transition-opacity duration-500 group-hover:opacity-90"
              style={{ background: `radial-gradient(120% 100% at 50% 130%, ${p.accent}cc, transparent 62%)` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--s-panel-solid),transparent_58%)]" />
            {/* Heat readout */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="flex items-center gap-1.5 border border-white/20 bg-black/55 px-2 py-1 font-mono text-[10px] tracking-widest text-white backdrop-blur clip-cyber-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: p.accent, boxShadow: `0 0 8px ${p.accent}` }} />
                {p.heat}
              </span>
              <span className="border border-white/15 bg-black/45 px-2 py-1 font-mono text-[10px] tracking-widest text-white/80 backdrop-blur clip-cyber-sm">
                {p.zone}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-5">
            <div className="mb-1 font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: p.accent }}>
              {p.role}
            </div>
            <h3 className="font-display text-[17px] leading-snug font-extrabold text-[var(--t-hi)]">{p.title}</h3>
            <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--t-mid)]">{p.desc}</p>

            <div className="mt-3 flex items-center gap-2 font-mono text-[11px]" style={{ color: p.accent }}>
              <Icon name="activity" className="h-3.5 w-3.5" />
              {p.metric}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((tg) => (
                <Tag key={tg} color={p.accent}>{tg}</Tag>
              ))}
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 border px-3 py-2 font-mono text-[10.5px] tracking-widest uppercase transition-colors clip-cyber-sm"
                style={{ borderColor: `${p.accent}66`, color: p.accent }}
              >
                <Icon name="external" className="h-3.5 w-3.5" /> {t("demo")}
              </a>
              <a
                href={p.source}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 border border-[var(--s-border)] px-3 py-2 font-mono text-[10.5px] tracking-widest text-[var(--t-mid)] uppercase transition-colors clip-cyber-sm hover:text-[var(--t-hi)]"
              >
                <Icon name="github" className="h-3.5 w-3.5" /> {t("source")}
              </a>
            </div>
          </div>

          {/* Molten base bar */}
          <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
        </div>
      </Tilt>
    </article>
  );
}

/* ==================================================================
   LIGHTBOX GALLERY
   ================================================================== */
export function Gallery({ images = MEDIA.gallery.slice(0, 12) }: { images?: string[] }) {
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (d: number) => setIdx((i) => (i === null ? null : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (idx === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <Reveal key={src} delay={i * 40}>
            <button
              onClick={() => setIdx(i)}
              className="group relative block aspect-4/3 w-full overflow-hidden border border-[var(--s-border)] clip-cyber-sm"
              aria-label={`Open image ${i + 1}`}
            >
              <img src={src} alt={`Portfolio visual ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,61,32,.5),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute right-2 bottom-2 font-mono text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                EXPAND ↗
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {idx !== null && (
        <div className="fixed inset-0 z-[900] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md" role="dialog" aria-modal="true" onClick={close}>
          <button onClick={close} aria-label="Close" className="absolute top-5 right-5 grid h-11 w-11 place-items-center border border-white/25 text-white clip-cyber-sm">
            <Icon name="x" className="h-5 w-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-4 grid h-11 w-11 place-items-center border border-white/25 text-white clip-cyber-sm">
            <Icon name="arrowRight" className="h-5 w-5 rotate-180" />
          </button>
          <img
            src={images[idx]}
            alt={`Portfolio visual ${idx + 1} enlarged`}
            className="max-h-[84vh] max-w-[90vw] border border-[var(--v-magma)]/40 object-contain shadow-[0_0_120px_-20px_rgba(255,106,19,.8)]"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-4 grid h-11 w-11 place-items-center border border-white/25 text-white clip-cyber-sm">
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>
          <div className="absolute bottom-6 font-mono text-[11px] tracking-widest text-white/70">
            {idx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

/* ==================================================================
   TESTIMONIAL CAROUSEL
   ================================================================== */
export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Panel className="relative overflow-hidden p-8 md:p-10">
        <Icon name="quote" className="absolute -top-2 left-4 h-16 w-16 text-[var(--v-lava)] opacity-10" />
        <div className="relative min-h-[150px]">
          {TESTIMONIALS.map((tm, n) => (
            <blockquote
              key={tm.name}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]",
                n === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
              )}
              aria-hidden={n !== i}
            >
              <p className="font-display text-[clamp(1rem,2.4vw,1.4rem)] leading-relaxed text-[var(--t-hi)]">“{tm.quote}”</p>
              <footer className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,#ffd166,#c11414)] font-display text-sm font-black text-black">
                  {tm.name.charAt(0)}
                </span>
                <span>
                  <cite className="block text-[13.5px] font-semibold not-italic text-[var(--t-hi)]">{tm.name}</cite>
                  <span className="font-mono text-[11px] text-[var(--t-low)]">{tm.role}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          {TESTIMONIALS.map((tm, n) => (
            <button
              key={tm.name}
              onClick={() => setI(n)}
              aria-label={`Testimonial ${n + 1}`}
              className={cn("h-1.5 rounded-full transition-all", n === i ? "w-8 bg-[var(--v-magma)]" : "w-3 bg-white/20 hover:bg-white/40")}
            />
          ))}
        </div>
      </Panel>
    </div>
  );
}

/* ==================================================================
   TIMELINE
   ================================================================== */
export function Timeline() {
  return (
    <ol className="relative ml-3 border-l border-[var(--s-border)] pl-8">
      {EXPERIENCE.map((e, i) => (
        <Reveal as="li" key={e.year} delay={i * 90} className="relative pb-10 last:pb-0">
          <span className="pulse-core absolute top-1.5 -left-[41px] grid h-5 w-5 place-items-center rounded-full bg-[radial-gradient(circle,#ffd166,#c11414)]">
            <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
          </span>
          <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--v-magma)] uppercase">{e.year}</div>
          <h3 className="mt-1 font-display text-[17px] font-extrabold text-[var(--t-hi)]">{e.title}</h3>
          <div className="text-[13px] text-[var(--t-mid)]">{e.org} · <span className="text-[var(--t-low)]">{e.team}</span></div>
          <ul className="mt-3 space-y-1.5">
            {e.points.map((p) => (
              <li key={p} className="flex gap-2 text-[13.5px] text-[var(--t-mid)]">
                <Icon name="flame" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--v-lava)]" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  );
}

/* ==================================================================
   CONTACT FORM — full validation, localized error messages
   ================================================================== */
export function ContactForm() {
  const { t } = useStore();
  const [v, setV] = useState({ name: "", email: "", subject: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [ok, setOk] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (v.name.trim().length < 2) e.name = t("errName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = t("errEmail");
    if (v.subject.trim().length < 3) e.subject = t("errSubject");
    if (v.message.trim().length < 20) e.message = t("errMessage");
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setOk(true);
    setV({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setOk(false), 6000);
  };

  const field = (key: keyof typeof v, label: string, type = "text") => (
    <div>
      <label htmlFor={key} className="mb-1.5 block font-mono text-[10.5px] tracking-[0.22em] text-[var(--t-low)] uppercase">
        {label}
      </label>
      <input
        id={key}
        type={type}
        value={v[key]}
        aria-invalid={!!err[key]}
        aria-describedby={err[key] ? `${key}-err` : undefined}
        onChange={(e) => setV({ ...v, [key]: e.target.value })}
        className={cn(
          "w-full border bg-[color-mix(in_srgb,var(--s-bg)_60%,transparent)] px-4 py-3 text-[14px] text-[var(--t-hi)] outline-none transition-colors clip-cyber-sm",
          err[key] ? "border-[#ff5d5d]" : "border-[var(--s-border)] focus:border-[var(--v-magma)]",
        )}
      />
      {err[key] && (
        <p id={`${key}-err`} role="alert" className="mt-1.5 font-mm text-[12px] text-[#ff7a7a]">
          ⚠ {err[key]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", t("fName"))}
        {field("email", t("fEmail"), "email")}
      </div>
      {field("subject", t("fSubject"))}
      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-[10.5px] tracking-[0.22em] text-[var(--t-low)] uppercase">
          {t("fMessage")}
        </label>
        <textarea
          id="message"
          rows={5}
          value={v.message}
          aria-invalid={!!err.message}
          onChange={(e) => setV({ ...v, message: e.target.value })}
          className={cn(
            "w-full resize-y border bg-[color-mix(in_srgb,var(--s-bg)_60%,transparent)] px-4 py-3 text-[14px] text-[var(--t-hi)] outline-none transition-colors clip-cyber-sm",
            err.message ? "border-[#ff5d5d]" : "border-[var(--s-border)] focus:border-[var(--v-magma)]",
          )}
        />
        {err.message && <p role="alert" className="mt-1.5 font-mm text-[12px] text-[#ff7a7a]">⚠ {err.message}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Btn type="submit" icon="send">{t("send")}</Btn>
        {ok && (
          <p role="status" className="flex items-center gap-2 font-mono text-[12px] text-[#3ddc84]">
            <Icon name="check" className="h-4 w-4" /> {t("sent")}
          </p>
        )}
      </div>
    </form>
  );
}

/* ==================================================================
   MARQUEE STRIP
   ================================================================== */
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[var(--s-border)] bg-[color-mix(in_srgb,var(--s-bg-2)_70%,transparent)] py-3">
      <div className="marquee-track flex w-max gap-8">
        {doubled.map((it, i) => (
          <span key={i} className="flex shrink-0 items-center gap-3 font-mono text-[11.5px] tracking-[0.22em] text-[var(--t-mid)] uppercase">
            <span className="text-[var(--v-lava)]">◆</span> {it}
          </span>
        ))}
      </div>
    </div>
  );
}
