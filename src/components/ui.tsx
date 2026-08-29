/* ==========================================================================
   UI PRIMITIVES — volcanic design system components
   ========================================================================== */
import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ---------------------------------------------------------------- ICONS
   Lucide-style stroke icons, inlined so there is zero network cost.
   ------------------------------------------------------------------- */
const P: Record<string, string> = {
  github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
  linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  mail: "M4 4h16v16H4zM22 6l-10 7L2 6",
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  send: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z",
  play: "M5 3l14 9-14 9V3z",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01",
  youtube: "M22.5 6.4a3 3 0 0 0-2.1-2.1C18.6 3.8 12 3.8 12 3.8s-6.6 0-8.4.5A3 3 0 0 0 1.5 6.4 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.6 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.6zM10 15.1V8.9l5.2 3.1z",
  globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  camera: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  cloud: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  video: "M23 7l-7 5 7 5V7zM14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
  hash: "M4 9h16M4 15h16M10 3L8 21M16 3l-2 18",
  wallet: "M21 12V7H5a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5M18 12a2 2 0 0 0 0 4h4v-4z",
  layout: "M3 3h18v18H3zM3 9h18M9 21V9",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  arrowUp: "M12 19V5M5 12l7-7 7 7",
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  external: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",
  menu: "M3 12h18M3 6h18M3 18h18",
  x: "M18 6 6 18M6 6l12 12",
  check: "M20 6 9 17l-5-5",
  chevron: "m6 9 6 6 6-6",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  flame: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
  zap: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35",
  code: "m16 18 6-6-6-6M8 6l-6 6 6 6",
  cpu: "M4 4h16v16H4zM9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  sparkles: "m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z",
  pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  calendar: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
  quote: "M3 21c3 0 7-1 7-8V5H3v7h4c0 4-1 5-4 5zm11 0c3 0 7-1 7-8V5h-7v7h4c0 4-1 5-4 5z",
  layers: "m12 2 10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  mic: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8",
  award: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.2 13.9 7 23l5-3 5 3-1.2-9.1",
  gauge: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 12l4-4",
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.7,
}: {
  name: keyof typeof P | string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={P[name] ?? P.sparkles} />
    </svg>
  );
}

/* ------------------------------------------------- SCROLL REVEAL
   IntersectionObserver-driven fade/blur-up used site-wide.
   -------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref as never}
      className={cn("reveal", seen && "in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/* --------------------------------------------------- 3D TILT CARD */
export function Tilt({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(6px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={cn("tilt", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------- MAGMA BUTTON */
type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "neon";
  icon?: string;
  href?: string;
};
export function Btn({ variant = "primary", icon, className, children, href, ...rest }: BtnProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] clip-cyber-sm transition-all duration-300 active:scale-[0.97]";
  const styles = {
    primary:
      "text-black bg-[linear-gradient(100deg,#ffd166,#ff6a13_55%,#c11414)] shadow-[0_10px_40px_-12px_rgba(255,106,19,0.9)] hover:shadow-[0_16px_54px_-10px_rgba(255,176,32,0.95)] hover:brightness-110",
    ghost:
      "text-[var(--t-hi)] border border-[var(--s-border-strong)] bg-[color-mix(in_srgb,var(--s-panel-solid)_70%,transparent)] hover:bg-[color-mix(in_srgb,var(--v-lava)_16%,transparent)]",
    neon: "text-black bg-[linear-gradient(100deg,#22e6ff,#ff2d92_60%,#ffe600)] hover:brightness-110 shadow-[0_10px_40px_-12px_rgba(34,230,255,0.8)]",
  }[variant];

  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <button className={cn(base, styles, className)} {...rest}>
      {inner}
    </button>
  );
}

/* ------------------------------------------------- PANEL / CARD */
export function Panel({
  children,
  className,
  glow,
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  return (
    <div className={cn("magma-panel clip-cyber p-6", className)} style={glow ? { boxShadow: `0 0 60px -30px ${glow}` } : undefined}>
      {children}
    </div>
  );
}

/* ------------------------------------------------- SECTION SHELL */
export function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  sub?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20", className)}>
      {(eyebrow || title) && (
        <Reveal className="mb-8">
          {eyebrow && (
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[6px] w-[6px] rotate-45 bg-[var(--v-magma)] shadow-[0_0_12px_var(--v-magma)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.34em] text-[var(--v-magma)]">{eyebrow}</span>
              <span className="fracture hidden flex-1 sm:block" />
            </div>
          )}
          {title && (
            <h2 className="font-display text-[clamp(1.6rem,4vw,2.7rem)] leading-[1.12] font-extrabold text-[var(--t-hi)]">
              {title}
            </h2>
          )}
          {sub && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--t-mid)]">{sub}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}

/* ------------------------------------------------- TAG PILL */
export function Tag({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase"
      style={{
        borderColor: color ? `${color}55` : "var(--s-border)",
        color: color ?? "var(--t-mid)",
        background: color ? `${color}14` : "transparent",
      }}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------- ANIMATED COUNTER */
export function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setN(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------- SVG PROGRESS RING */
export function Ring({ value, label, color, size = 108 }: { value: number; label: string; color: string; size?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const [on, setOn] = useState(false);
  const r = (size - 14) / 2;
  const c = 2 * Math.PI * r;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg ref={ref} width={size} height={size} className="-rotate-90" role="img" aria-label={`${label} ${value}%`}>
          <circle cx={size / 2} cy={size / 2} r={r} className="ring-track" strokeWidth={7} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={color}
            strokeWidth={7}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={on ? c - (c * value) / 100 : c}
            style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(.16,1,.3,1)", filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold" style={{ color }}>
          {on ? value : 0}%
        </span>
      </div>
      <span className="font-mono text-[11px] tracking-wider text-[var(--t-mid)] uppercase">{label}</span>
    </div>
  );
}

/* ------------------------------------------------- SKILL BAR */
export function SkillBar({ name, v, delay = 0 }: { name: string; v: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-[13px] text-[var(--t-mid)]">{name}</span>
        <span className="font-mono text-[11px] text-[var(--v-magma)]">{on ? v : 0}%</span>
      </div>
      <div className="h-[7px] w-full overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--t-hi)_9%,transparent)]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#c11414,#ff6a13_55%,#ffd166)]"
          style={{
            width: on ? `${v}%` : "0%",
            transition: `width 1.5s cubic-bezier(.16,1,.3,1) ${delay}ms`,
            boxShadow: "0 0 14px rgba(255,106,19,.75)",
          }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------- ACCORDION */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="magma-panel clip-cyber-sm overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-[15px] font-semibold text-[var(--t-hi)]">{it.q}</span>
              <Icon
                name="chevron"
                className={cn("h-4 w-4 shrink-0 text-[var(--v-magma)] transition-transform duration-300", isOpen && "rotate-180")}
              />
            </button>
            <div
              className="grid transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[14px] leading-relaxed text-[var(--t-mid)]">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------- PAGE HEADER */
export function PageHeader({ icon, title, kicker, blurb }: { icon: string; title: string; kicker: string; blurb: string }) {
  return (
    <header className="relative mx-auto w-full max-w-[1240px] px-5 pt-28 pb-4 sm:px-8 md:pt-36">
      <Reveal>
        <div className="mb-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-[var(--v-magma)] uppercase">
          <span aria-hidden>{icon}</span> {kicker}
        </div>
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] leading-[1.02] font-black">
          <span className="text-magma">{title}</span>
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--t-mid)] md:text-[17px]">{blurb}</p>
        <div className="fracture mt-7" />
      </Reveal>
    </header>
  );
}

/* ------------------------------------------------- METRIC CARD */
export function Metric({ k, v, hint }: { k: string; v: string; hint?: string }) {
  return (
    <Panel className="p-5">
      <div className="font-display text-2xl font-black text-magma">{v}</div>
      <div className="mt-1 text-[12px] tracking-wide text-[var(--t-mid)] uppercase">{k}</div>
      {hint && <div className="mt-2 font-mono text-[11px] text-[var(--t-low)]">{hint}</div>}
    </Panel>
  );
}
