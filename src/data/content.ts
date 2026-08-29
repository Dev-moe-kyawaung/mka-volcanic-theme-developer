/* ==========================================================================
   CONTENT LAYER
   All site data lives here so pages stay presentational and the whole site
   could be swapped to a CMS / JSON endpoint without touching components.
   ========================================================================== */

export const PROFILE = {
  name: "Moe Kyaw Aung",
  nameMm: "မိုးကျော်အောင်",
  handle: "Moe-Kyaw-Aung-Portfolio V000",
  tagline: "⭐MOE KYAW AUNG ⭐ANDROID SENIOR DEVELOPER",
  role: "Senior Android & Flutter Engineer",
  location: "Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭",
  languages: ["Burmese 🇲🇲", "English 🌐", "Kotlin ☕", "Dart 🎯"],
  currentlyBuilding: "MoekyawTranslator — AI Translation App",
  certifications: "82+ certificates · Google Developers Launchpad",
  philosophy: "Code with culture. Build with purpose.",
  phones: ["+95 9 889 000 889", "+959 666 000 050"],
  primaryEmail: "moekyawaung@programmer.net",
  gravatar: "https://gravatar.com/moekyawaung13721",
  gravatar2: "https://gravatar.com/moekyawaung2026",
  github: "https://github.com/Dev-moe-kyawaung/",
  avatar:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  about: `Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications. Strong in Kotlin and modern Jetpack development (Compose, ViewModel, Room), Firebase integration, and REST API consumption. I focus on clean architecture, maintainable code, and practical security — delivering features end-to-end from UI to networking, local caching, testing, and release-ready builds.`,
  summary: `Senior Android Engineer designing and delivering high-performance mobile applications using Kotlin, Jetpack, MVVM/MVI and Clean Architecture. Proven expertise integrating Firebase (Auth, Firestore, Cloud Messaging, Crashlytics) and RESTful APIs, plus CI/CD pipelines with GitHub Actions and Azure DevOps.`,
};

/* --- Cloudinary media pool -------------------------------------------- */
const C = "https://res.cloudinary.com/dye5qpwii/image/upload/";
const V = "https://res.cloudinary.com/dye5qpwii/video/upload/";

export const MEDIA = {
  avatar: PROFILE.avatar,
  heroVideo: `${V}v1779052711/Javier_Black-Dark-Ring.mp4`,
  videos: [
    `${V}v1779031596/Javier_Pardina_10_wttux4.mp4`,
    `${V}v1779052704/Javier_Pardina_10_ay7iai.mp4`,
    `${V}v1779052708/AUDI_-_Javier_Pardina_1_gavyon.mp4`,
    `${V}v1779052732/Javier_Pardina_2_l1mtud.mp4`,
    `${V}v1779031657/COACH_-_Javier_Pardina_gdjsjg.mp4`,
    `${V}v1779031569/Javier_Pardina_8_r1lgpj.mp4`,
    `${V}v1779031566/Javier_Pardina_11_r5y8no.mp4`,
  ],
  gallery: [
    `${C}v1778747388/image-1_1_khsx9s.png`,
    `${C}v1778763535/MKA_25_lbx6fb.webp`,
    `${C}v1778763531/MKA_12_iv8kpm.webp`,
    `${C}v1778747384/image-1_f6zlmk.jpg`,
    `${C}v1778747384/image_1_buwgls.png`,
    `${C}v1778795825/cloud-icon-poster-1_2_opl7sy.png`,
    `${C}v1778795856/copilot_image_1778795675037_heh9xk.png`,
    `${C}v1778795856/copilot_image_1778794626112_ega7kk.png`,
    `${C}v1778795859/copilot_image_1778794430377_n7xlmz.png`,
    `${C}v1778795856/copilot_image_1778795000722_eo96gj.png`,
    `${C}v1778763531/MKA_3_zqrhhr.webp`,
    `${C}v1778795822/preview_dzhqvv.webp`,
    `${C}v1778795829/copilot_image_1778795000722_okryxj.png`,
    `${C}v1778795847/copilot_image_1778795115579_acfm5j.png`,
    `${C}v1778795853/copilot_image_1778794781671_kytvkc.png`,
    `${C}v1779052645/2153-fireworks-composer_gm3e0h.jpg`,
    `${C}v1778795799/2024119_20_b94fen.jpg`,
    `${C}v1778795800/2024119_18_syk2ou.jpg`,
    `${C}v1778795800/2024119_12_sqhcat.jpg`,
    `${C}v1778795801/MKA_22_felevo.webp`,
    `${C}v1779031816/Content_65_oayzj3.jpg`,
    `${C}v1778747391/image_mplr5r.png`,
    `${C}v1778763532/MKA_11_jbijtv.webp`,
    `${C}v1778763532/MKA_13_i4bao3.webp`,
    `${C}v1778763536/preview_ls5ptn.webp`,
  ],
};

/* --- Animated stat counters ------------------------------------------- */
export const STATS = [
  { value: 10, suffix: "+", label: "Years shipping", labelMm: "အတွေ့အကြုံ နှစ်" },
  { value: 3000, suffix: "+", label: "Apps & builds", labelMm: "အက်ပ်များ" },
  { value: 600, suffix: "+", label: "Repositories", labelMm: "ကုဒ်သိုလှောင်ခန်း" },
  { value: 100, suffix: "%", label: "Satisfaction", labelMm: "ကျေနပ်မှု" },
];

/* --- SVG progress rings ------------------------------------------------ */
export const RINGS = [
  { label: "Kotlin", value: 96, color: "#ffb020" },
  { label: "Compose", value: 93, color: "#ff6a13" },
  { label: "Flutter / Dart", value: 90, color: "#22e6ff" },
  { label: "Firebase", value: 91, color: "#ff2d92" },
  { label: "CI / CD", value: 88, color: "#ffe600" },
];

/* --- Skill bars (animate on scroll) ------------------------------------ */
export const SKILL_GROUPS = [
  {
    title: "Mobile Engineering",
    icon: "📱",
    items: [
      { name: "Kotlin / Coroutines / Flow", v: 96 },
      { name: "Jetpack Compose · Material 3", v: 93 },
      { name: "Flutter · Dart · Riverpod / Bloc", v: 90 },
      { name: "Room · Paging · WorkManager", v: 89 },
    ],
  },
  {
    title: "Architecture",
    icon: "🏗️",
    items: [
      { name: "Clean Architecture · Modularisation", v: 94 },
      { name: "MVVM / MVI · Unidirectional flow", v: 92 },
      { name: "Dependency Injection (Hilt/Koin)", v: 90 },
      { name: "Kotlin Multiplatform (KMM)", v: 82 },
    ],
  },
  {
    title: "Backend & Delivery",
    icon: "☁️",
    items: [
      { name: "Firebase Suite · Firestore · FCM", v: 91 },
      { name: "REST · Retrofit · OkHttp · Ktor", v: 92 },
      { name: "GitHub Actions · Fastlane · Azure DevOps", v: 88 },
      { name: "JUnit · Espresso · MockK", v: 86 },
    ],
  },
];

/* --- Volcanic core projects (eruptive reveal) -------------------------- */
export const PROJECTS = [
  {
    id: "commerce",
    title: "Mobile Commerce Redesign",
    heat: "1420°C",
    zone: "Core Chamber",
    desc: "Rebuilt a cluttered shopping experience into a faster, clearer, higher-converting cross-platform flow.",
    tags: ["Dart", "Flutter", "API integration", "Modular architecture"],
    role: "Lead Mobile Engineer",
    metric: "+38% checkout completion",
    demo: "https://moekyawaung-tech.github.io/",
    source: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    img: MEDIA.gallery[0],
    accent: "#ff6a13",
  },
  {
    id: "offline",
    title: "Offline-First Field App",
    heat: "1180°C",
    zone: "Magma Conduit",
    desc: "A resilient Flutter workflow for teams operating in low-connectivity border and rural environments.",
    tags: ["State management", "Sync logic", "Local storage", "Reliability"],
    role: "Architect + Implementer",
    metric: "0 data-loss incidents in 14 months",
    demo: "https://moekyawaung-dev-mm.github.io/",
    source: "https://github.com/moekyawaung-tech/Job-Portal-App",
    img: MEDIA.gallery[2],
    accent: "#22e6ff",
  },
  {
    id: "ops",
    title: "Internal Operations Companion",
    heat: "980°C",
    zone: "Fissure Vent",
    desc: "A mobile tool for fast approvals, alerts, and operational task handling on the go.",
    tags: ["Flutter UI", "State management", "Performance", "UX"],
    role: "Senior Engineer",
    metric: "Approval latency 4h → 11min",
    demo: "https://moekyawaung-web.github.io/",
    source: "https://github.com/moekyawaung-tech/social-dashboard",
    img: MEDIA.gallery[7],
    accent: "#ff2d92",
  },
  {
    id: "pos",
    title: "POS Ultimate Pro Max",
    heat: "1560°C",
    zone: "Deep Mantle",
    desc: "Multi-tenant point-of-sale with offline receipts, hardware printer channels and role-based access.",
    tags: ["Kotlin", "Room", "Platform channels", "Printing"],
    role: "Owner / Maintainer",
    metric: "Handles 12k tx/day per outlet",
    demo: "https://moekyawaung-tech.github.io/",
    source: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    img: MEDIA.gallery[10],
    accent: "#ffb020",
  },
  {
    id: "media",
    title: "Video Player Engine",
    heat: "1240°C",
    zone: "Lava Tube",
    desc: "ExoPlayer-backed playback with gesture scrubbing, PiP, subtitle pipeline and adaptive caching.",
    tags: ["ExoPlayer", "Media3", "Compose", "Caching"],
    role: "Media Engineer",
    metric: "Startup 1.9s → 0.6s",
    demo: "https://moekyawaung-tech.github.io/",
    source: "https://github.com/moekyawaung-tech/video-player",
    img: MEDIA.gallery[13],
    accent: "#ffe600",
  },
  {
    id: "lens",
    title: "Lens Lite — On-device ML",
    heat: "1100°C",
    zone: "Ash Cloud",
    desc: "TFLite classification + Burmese OCR translation running fully offline on mid-range hardware.",
    tags: ["TFLite", "CameraX", "On-device ML", "Burmese OCR"],
    role: "Solo Builder",
    metric: "Inference 42ms on Snapdragon 680",
    demo: "https://moekyawaung-graduate.github.io/",
    source: "https://github.com/moekyawaung-tech/Lens-lite",
    img: MEDIA.gallery[20],
    accent: "#c11414",
  },
];

/* --- Case studies ------------------------------------------------------ */
export const CASE_STUDIES = PROJECTS.slice(0, 4).map((p, i) => ({
  ...p,
  problem: [
    "Checkout abandoned at 71% — 9 taps to purchase, no state restoration.",
    "Field agents lost submissions when connectivity dropped mid-form.",
    "Approvals lived in email threads; nothing was auditable.",
    "Legacy POS could not run a second till without corrupting stock counts.",
  ][i],
  architecture: [
    "Feature modules + Riverpod, repository boundary over Retrofit/Dio, cached DTO mappers.",
    "Command queue in Drift/Room, exponential-backoff sync worker, conflict resolution by vector clock.",
    "Compose + MVI, Firestore listeners with debounce, FCM data messages for cold alerts.",
    "Multi-module Kotlin, single-writer transaction bus, platform channel for ESC/POS printers.",
  ][i],
  outcome: [
    "+38% checkout completion, 42% fewer support tickets.",
    "Zero data loss across 14 months and ~180k submissions.",
    "Median approval latency dropped from 4h to 11 minutes.",
    "Stock drift eliminated; 12k transactions/day per outlet.",
  ][i],
  lesson: [
    "Reduce decisions before you reduce taps.",
    "Design the failure path first; the happy path is the easy part.",
    "Auditability is a product feature, not a database detail.",
    "One writer, many readers — the cheapest concurrency model that works.",
  ][i],
}));

/* --- 6 services -------------------------------------------------------- */
export const SERVICES = [
  { icon: "🌋", title: "Flutter / Android Architecture Review", mm: "ဗိသုကာ သုံးသပ်ခြင်း", desc: "Module boundaries, state ownership, data flow and a prioritised remediation plan you can actually schedule." },
  { icon: "⚡", title: "Performance Audit", mm: "စွမ်းဆောင်ရည် စစ်ဆေးခြင်း", desc: "Jank traces, startup breakdown, memory & battery profiling on real mid-range devices — not just flagships." },
  { icon: "🧩", title: "Feature Rescue", mm: "လုပ်ဆောင်ချက် ကယ်တင်ခြင်း", desc: "Stalled feature? I take it from half-finished branch to shipped, tested and released." },
  { icon: "🛡️", title: "Mobile Security Hardening", mm: "လုံခြုံရေး ခိုင်မာစေခြင်း", desc: "Keystore usage, cert pinning, obfuscation, root/tamper checks and a realistic threat model." },
  { icon: "🚀", title: "CI/CD & Release Pipelines", mm: "CI/CD တည်ဆောက်ခြင်း", desc: "GitHub Actions + Fastlane: signed builds, staged rollouts, crash gating, changelog automation." },
  { icon: "🎓", title: "Mentorship & Code Review", mm: "လမ်းညွှန်မှု", desc: "Weekly pairing, PR review discipline and a growth plan for Kotlin/Flutter engineers." },
];

/* --- Pricing (multi-currency) ------------------------------------------ */
export const PRICING = [
  { name: "Quick Audit", mm: "အမြန် စစ်ဆေးမှု", USD: 390, THB: 13900, MMK: 1250000, unit: "one-off", features: ["3-day turnaround", "Architecture smell report", "Top-10 prioritised fixes", "60-min walkthrough call"] },
  { name: "Architecture Review", mm: "ဗိသုကာ သုံးသပ်ချက်", USD: 1450, THB: 51000, MMK: 4600000, unit: "2 weeks", featured: true, features: ["Full module map", "State & data-flow redesign", "Test strategy", "Migration roadmap", "2 follow-up sessions"] },
  { name: "Monthly Advisory", mm: "လစဉ် အကြံပေး", USD: 890, THB: 31000, MMK: 2800000, unit: "per month", features: ["4 hrs/week sync", "Unlimited async review", "Release gate checks", "Team mentoring"] },
  { name: "Implementation", mm: "အကောင်အထည်ဖော်မှု", USD: 5600, THB: 197000, MMK: 17800000, unit: "per sprint-month", features: ["Feature delivery end-to-end", "Kotlin / Flutter", "CI + store release", "Handover documentation"] },
];

export const CURRENCIES = { USD: "$", THB: "฿", MMK: "K" } as const;
export type Currency = keyof typeof CURRENCIES;

/* --- FAQ ---------------------------------------------------------------- */
export const FAQ = [
  { q: "What roles are you targeting?", a: "Senior / Lead Android and Flutter engineering roles — ideally where architecture and performance ownership are part of the job, not an afterthought." },
  { q: "Are you available remote?", a: "Yes. I work remotely from Tachileik, Myanmar and Bangkok, Thailand (GMT+6:30 / GMT+7) and overlap comfortably with SEA, EU-morning and US-evening hours." },
  { q: "What is your core stack?", a: "Kotlin, Jetpack Compose, Coroutines/Flow, Room, Hilt, Firebase — plus Flutter/Dart with Riverpod or Bloc for cross-platform work, and GitHub Actions for delivery." },
  { q: "Do you take consulting work?", a: "Yes — audits, architecture reviews, monthly advisory and scoped implementation sprints. See the Pricing page for transparent MMK / THB / USD rates." },
  { q: "How fast do you reply?", a: "Within 24 hours on business days, usually the same day. Urgent production issues: mention “production” in the subject line." },
  { q: "Do you support Burmese language products?", a: "Yes — Zawgyi/Unicode normalisation, Myanmar text shaping, Padauk/Pyidaungsu font pipelines, and locale-aware date/number formatting are all things I have shipped." },
];

/* --- Testimonials ------------------------------------------------------- */
export const TESTIMONIALS = [
  { quote: "Thoughtful, steady, and excellent at turning messy mobile problems into clean solutions.", name: "Nanda W.", role: "Engineering Manager, Fintech" },
  { quote: "Strong Flutter judgment, clear communication, and reliable delivery under pressure.", name: "Preecha S.", role: "Product Lead, Bangkok" },
  { quote: "He reduced our cold start by half and then wrote the doc so the team could keep it that way.", name: "Aye Chan M.", role: "Senior Android Dev" },
  { quote: "The architecture review paid for itself in the first sprint. Blunt, specific, actionable.", name: "Daniel R.", role: "CTO, Logistics SaaS" },
  { quote: "Rare combination: cares about pixels and about the build pipeline equally.", name: "Su Su H.", role: "Product Designer" },
];

/* --- Experience timeline ------------------------------------------------ */
export const EXPERIENCE = [
  { year: "2023 — Now", title: "Senior Android / Flutter Engineer", org: "Independent · Consulting", team: "Embedded with 3–12 person product teams", points: ["Architecture reviews and multi-module migrations for 6 production apps", "Cut p95 cold start 41% on a 900k-MAU commerce app", "Built GitHub Actions pipelines with staged rollout + crash gating"] },
  { year: "2020 — 2023", title: "Lead Mobile Developer", org: "Regional Retail Group", team: "Led 5 engineers", points: ["Shipped POS Ultimate line across 140+ outlets", "Introduced Compose + MVI; halved UI defect rate", "Owned Play Store release process and rollback policy"] },
  { year: "2017 — 2020", title: "Android Developer", org: "Mobile Software House", team: "Squad of 8", points: ["Delivered 20+ client apps (Kotlin/Java, Firebase, REST)", "Set up Room offline caching standard used across projects", "Mentored 4 juniors to mid-level"] },
  { year: "2014 — 2017", title: "Junior → Mid Android Developer", org: "Startup Studio, Yangon", team: "Full-stack of 4", points: ["Built first Play Store releases and crash-reporting culture", "Java → Kotlin migration for the flagship product", "Learned release discipline the hard way"] },
];

/* --- Certificates ------------------------------------------------------- */
export const CERT_CATEGORIES = [
  { cat: "Programming Languages", icon: "⌨️", count: 13, items: ["C Programming", "Python", "Java", "Kotlin", "JavaScript", "TypeScript", "Dart", "Go", "Rust", "Ruby", "C#", "PHP", "Swift"] },
  { cat: "Web Development", icon: "🌐", count: 13, items: ["HTML5", "CSS3", "React", "Next.js", "Vue.js", "Angular", "Node.js", "Express", "Tailwind", "REST APIs", "GraphQL", "WebSockets", "PWA"] },
  { cat: "Mobile & App Dev", icon: "📱", count: 7, items: ["Android Fundamentals", "Jetpack Compose", "Flutter", "Material 3", "KMM", "App Publishing", "Mobile UX"] },
  { cat: "Databases", icon: "🗄️", count: 6, items: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Room / SQLite", "Firestore"] },
  { cat: "AI & Data Science", icon: "🤖", count: 11, items: ["Machine Learning", "Deep Learning", "TensorFlow Lite", "NLP", "Prompt Engineering", "Claude API", "Pandas", "NumPy", "Data Viz", "Computer Vision", "MLOps"] },
  { cat: "Security & DevOps", icon: "🔐", count: 10, items: ["Ethical Hacking", "Cyber Security", "Kali Linux", "Network Security", "OWASP Mobile", "Docker", "CI/CD", "GitHub Actions", "Linux Admin", "Cloud Basics"] },
  { cat: "Blockchain", icon: "⛓️", count: 4, items: ["Blockchain Basics", "Solidity", "Smart Contracts", "Web3"] },
  { cat: "Software Engineering", icon: "🛠️", count: 7, items: ["Clean Architecture", "SOLID", "Design Patterns", "Agile / Scrum", "Testing", "Git Flow", "System Design"] },
  { cat: "Marketing & Business", icon: "📈", count: 11, items: ["Product Thinking", "ASO", "Analytics", "Growth", "SEO", "Copywriting", "Figma", "UI Design", "Pitching", "Freelancing", "Client Management"] },
];

/* --- App collection (16) ------------------------------------------------ */
export const APP_COLLECTION = [
  { n: 1, icon: "📱", name: "Social Dashboard", badge: "New", repo: "https://github.com/moekyawaung-tech/social-dashboard" },
  { n: 2, icon: "📱", name: "PWA App", repo: "https://github.com/moekyawaung-tech/pwa-app" },
  { n: 3, icon: "📊", name: "Admin Dashboard", repo: "https://github.com/moekyawaung-tech/social-dashboard" },
  { n: 4, icon: "📈", name: "Stock Market", repo: "https://github.com/moekyawaung-tech" },
  { n: 5, icon: "🎮", name: "Game Collection", repo: "https://github.com/moekyawaung-tech/game-collection" },
  { n: 6, icon: "🎵", name: "Music Player", repo: "https://github.com/moekyawaung-tech" },
  { n: 7, icon: "💬", name: "Chat App", repo: "https://github.com/moekyawaung-tech" },
  { n: 8, icon: "⚽", name: "World Cup", repo: "https://github.com/moekyawaung-tech" },
  { n: 9, icon: "🛒", name: "E-commerce", repo: "https://github.com/moekyawaung-tech/POS-Full-Version" },
  { n: 10, icon: "💼", name: "Portfolio", repo: "https://github.com/Dev-moe-kyawaung" },
  { n: 11, icon: "💰", name: "Money Tracker", repo: "https://github.com/moekyawaung-tech" },
  { n: 12, icon: "🌤️", name: "Weather", repo: "https://github.com/moekyawaung-tech/Weather-app" },
  { n: 13, icon: "💸", name: "Crypto", repo: "https://github.com/moekyawaung-tech/casino-app" },
  { n: 14, icon: "📝", name: "Todo", repo: "https://github.com/moekyawaung-tech/javascript-todo" },
  { n: 15, icon: "🎯", name: "Video Player", repo: "https://github.com/moekyawaung-tech/video-player" },
  { n: 16, icon: "🏆", name: "LEGEND!", repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max" },
];

/* --- Senior-level example repos ---------------------------------------- */
export const REPOS = [
  "video-player", "social-dashboard", "game-collection", "pwa-app", "Job-Portal-App",
  "POS-Full-Version", "javascript-todo", "thailand-travel", "casino-app", "Snake-Game-App",
  "Advance-POS-Version", "POS-Ultimate-Version", "POS-Ultimate-Pro-Max", "Weather-app",
  "Daily-planner-app", "Lens-lite",
].map((r) => ({ name: r, url: `https://github.com/moekyawaung-tech/${r}` }))
  .concat([
    { name: "My_postcode-My-web_project", url: "https://github.com/Moekyawaung-cyber/My_postcode-My-web_project" },
    { name: "Hospital-Lists", url: "https://github.com/Moekyawaung-cyber/Hospital-Lists" },
    { name: "pulsesync-android", url: "https://github.com/Dev-moe-kyawaung/pulsesync-android" },
  ]);

/* --- 43 GitHub Pages accounts ------------------------------------------- */
export const GITHUB_SITES = [
  "moekyawaung-china", "moekyawaung-developer", "moekyawaungvivov30pro-design", "moekyaw-aung-mm",
  "moekyawaung-mk", "moekyawaung-microsoft", "moekyawaung-cyber", "moekyawaung-bangkok",
  "moekyawaung-micro", "moekyawaungmka2032-boop", "moekyawaung-dev-mm", "moekyaw-developer",
  "moekyawaung", "Moekyawaung-mm", "moekyawaung-tech", "moekyawaung-hack",
  "moekyawaung-graduate", "Moekyawaung-Linux", "Moekyawaung-coder", "moekyawaung-designer",
  "Moekyawaung2026", "moekyawaungmka2034-coder", "moekyawaung-web", "Moekyawaung-dev",
  "MoeKyawAung-code", "moekyawaung-creator", "moekyawaung-webdeveloper", "Moekyawaung-co",
  "moekyawaung-edu", "moekyawaung-senior", "Moekyawaung-Development", "moekyawaung-google",
  "Moe-KyawAung",
].map((s) => ({ name: s, url: `https://${s}.github.io/` }));

/* --- Lovable PWA links --------------------------------------------------- */
export const LOVABLE_LINKS = [
  "happy-cv-creator", "moekyawaung", "moekyawaungmybio", "the-cv-palette", "moekyaw-url",
  "moekyawaung-dev", "moe-kyaw-aung", "moekyawaungmka", "moekyaw", "m-moekyaw",
  "dev-moekyawaung", "dev-moekyaw", "cv-beacon", "moekyawaungmkamka", "pixel-perfect-snap-39",
  "devmoekyaw", "profile-persuasion-hub", "friendly-haven-io", "moekyawaung-github",
  "moekyawgithub", "joy-codify-life", "mmoekyaw", "color-code-chronicles", "moekyawaung-free",
  "app-skill-gallery", "spark-coach-create", "moekyaw-mk", "moekyawaung-myanmar", "mmoe",
  "moekyaw-dev",
].map((s) => ({ name: s, url: `https://${s}.lovable.app` }));

/* --- Email collection ---------------------------------------------------- */
export const EMAILS = [
  "programmer.net", "collector.org", "technologist.com", "techie.com", "graphic-designer.com",
  "cybergal.com", "webname.com", "hackermail.com", "graduate.org", "engineer.com",
  "asia.com", "contractor.net", "linuxmail.org", "usa.com", "europe.com", "mail.com",
  "iname.com", "socialogist.com", "secretary.net", "publicist.com",
].map((d) => ({ addr: `moekyawaung@${d}`, domain: d }));

/* --- Socials (incl. Gravatar-verified accounts) -------------------------- */
export const SOCIALS = [
  { name: "GitHub", icon: "github", url: "https://github.com/Dev-moe-kyawaung/", color: "#ffffff" },
  { name: "Gravatar", icon: "user", url: "https://gravatar.com/moekyawaung13721", color: "#1e8cbe" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1", color: "#0a66c2" },
  { name: "Email", icon: "mail", url: "mailto:moekyawaung@programmer.net", color: "#ff6a13" },
  { name: "Phone", icon: "phone", url: "tel:+959889000889", color: "#22e6ff" },
  { name: "Telegram", icon: "send", url: "https://t.me/moekyawaung", color: "#2aabee" },
  { name: "Play Store", icon: "play", url: "https://play.google.com/store/apps/dev", color: "#3ddc84" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com/moekyawaung", color: "#e1306c" },
  { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG", color: "#ff0000" },
  { name: "Tumblr", icon: "globe", url: "https://www.tumblr.com/moekyawaung", color: "#36465d" },
  { name: "Flickr", icon: "camera", url: "https://www.flickr.com/people/204037451@N06", color: "#ff0084" },
  { name: "Bluesky", icon: "cloud", url: "https://bsky.app/profile/moekyawaung96.bsky.social", color: "#0085ff" },
  { name: "Vimeo", icon: "video", url: "https://vimeo.com/user252414232", color: "#1ab7ea" },
  { name: "Slack", icon: "hash", url: "https://moekyawaung.slack.com/", color: "#611f69" },
  { name: "PayPal", icon: "wallet", url: "https://www.paypal.com/paypalme/my/profile", color: "#00457c" },
  { name: "Strikingly", icon: "layout", url: "http://moekyawaung2026.strikingly.com", color: "#ffb020" },
];

/* --- Organizations -------------------------------------------------------- */
export const ORGS = [
  { name: "Dev-moe-kyawaung", focus: "Senior Android reference architectures", url: "https://github.com/Dev-moe-kyawaung/", repos: 24 },
  { name: "moekyawaung-tech", focus: "Product apps & POS platform line", url: "https://github.com/moekyawaung-tech", repos: 46 },
  { name: "Moekyawaung-cyber", focus: "Security research & tooling", url: "https://github.com/Moekyawaung-cyber", repos: 18 },
  { name: "Google Developers Launchpad", focus: "Community program alumnus", url: "https://developers.google.com/", repos: 0 },
  { name: "Myanmar Android Devs", focus: "Local mentorship circle", url: "https://moekyawaung-mm.github.io/", repos: 9 },
  { name: "Bangkok Flutter Meetup", focus: "Talks & workshops", url: "https://moekyawaung-bangkok.github.io/", repos: 5 },
];

/* --- Open source ---------------------------------------------------------- */
export const OPEN_SOURCE = [
  { name: "compose-shimmer-mm", why: "Skeleton loaders that render correctly with Myanmar glyph clusters.", lang: "Kotlin", stars: 214 },
  { name: "flutter-offline-queue", why: "A tiny command queue for offline-first apps — retry, backoff, conflict hooks.", lang: "Dart", stars: 389 },
  { name: "zawgyi-unicode-kt", why: "Fast Zawgyi↔Unicode detection & conversion for Android text pipelines.", lang: "Kotlin", stars: 502 },
  { name: "escpos-channel", why: "Platform channel wrapper for thermal receipt printers used across POS builds.", lang: "Kotlin/Dart", stars: 141 },
  { name: "gh-actions-android-kit", why: "Reusable workflows: signed builds, staged rollout, crash gating.", lang: "YAML", stars: 96 },
  { name: "compose-perf-lint", why: "Lint rules catching unstable params that cause recomposition storms.", lang: "Kotlin", stars: 173 },
];

/* --- Writing / Talks / Labs / Awards -------------------------------------- */
export const WRITING = [
  { title: "Recomposition is not the enemy — unstable parameters are", tag: "Performance", read: "8 min", date: "2026-01-14" },
  { title: "A shared-code strategy that survives two app stores", tag: "Architecture", read: "11 min", date: "2025-11-02" },
  { title: "Offline-first without the distributed-systems PhD", tag: "Reliability", read: "9 min", date: "2025-08-19" },
  { title: "Shipping Burmese text correctly on Android", tag: "Localization", read: "7 min", date: "2025-06-05" },
  { title: "Release discipline for teams of three", tag: "Delivery", read: "6 min", date: "2025-03-22" },
  { title: "Product thinking for engineers who hate roadmaps", tag: "Product", read: "5 min", date: "2024-12-11" },
];

export const TALKS = [
  { title: "Compose Performance in the Real World", venue: "Bangkok Flutter & Android Meetup", year: 2025, type: "Talk" },
  { title: "Offline-First Field Apps", venue: "Myanmar Dev Summit", year: 2025, type: "Conference" },
  { title: "From Java Monolith to Multi-Module Kotlin", venue: "SEA Mobile Week", year: 2024, type: "Workshop" },
  { title: "On-Device ML for Low-End Hardware", venue: "GDG Chiang Mai", year: 2024, type: "Talk" },
];

export const LABS = [
  { title: "Magma Shader Playground", desc: "Fragment-shader lava for Flutter's CustomPainter.", tag: "Motion" },
  { title: "Compose Gesture Scrub", desc: "Precision video scrubbing with haptic detents.", tag: "Prototype" },
  { title: "Ember Particle Engine", desc: "10k GPU particles at 120fps on mid-range phones.", tag: "Graphics" },
  { title: "Burmese Font Metrics Tool", desc: "Visualises baseline & cluster issues in Padauk.", tag: "Tooling" },
  { title: "Thermal Print Simulator", desc: "Preview ESC/POS receipts without hardware.", tag: "Tooling" },
  { title: "Cold-Start Tracer", desc: "Annotated startup timeline from logcat.", tag: "Performance" },
];

export const AWARDS = [
  { title: "Google Developers Launchpad", year: "2021", note: "Selected mentee cohort" },
  { title: "82+ Programming Hub Certificates", year: "2024", note: "9 technical domains" },
  { title: "Top Regional POS Deployment", year: "2022", note: "140+ retail outlets" },
  { title: "Community Mentor of the Year", year: "2025", note: "Myanmar Android Devs" },
];

export const PERF_METRICS = [
  { label: "Cold start (p95)", before: "2.9s", after: "1.7s", delta: "-41%" },
  { label: "Jank frames", before: "6.8%", after: "0.9%", delta: "-87%" },
  { label: "APK size", before: "42 MB", after: "24 MB", delta: "-43%" },
  { label: "Memory peak", before: "310 MB", after: "186 MB", delta: "-40%" },
  { label: "Battery / hr active", before: "7.1%", after: "4.2%", delta: "-41%" },
  { label: "List scroll FPS", before: "44", after: "119", delta: "+170%" },
];
