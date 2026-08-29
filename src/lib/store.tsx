/* ==========================================================================
   GLOBAL STORE
   Tiny context-based store: theme (dark/light), locale (en/mm/th),
   currency (USD/THB/MMK) and a hash-based router for the 30-page site.
   No external state library needed — keeps the bundle fast.
   ========================================================================== */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Currency } from "../data/content";

/* ---------------- Page registry (30 pages) ---------------- */
export type PageId =
  | "home" | "about" | "resume" | "skills" | "stack" | "projects"
  | "project-01" | "project-02" | "project-03" | "case-studies"
  | "cross-platform" | "flutter-arch" | "performance" | "open-source"
  | "github" | "testimonials" | "experience" | "services" | "contact"
  | "writing" | "talks" | "mentorship" | "awards" | "labs"
  | "design-system" | "accessibility" | "localization" | "pricing"
  | "faq" | "legal";

export interface PageMeta {
  id: PageId;
  en: string;
  mm: string;
  th: string;
  group: "Core" | "Work" | "Engineering" | "Community" | "System";
  icon: string;
}

export const PAGES: PageMeta[] = [
  { id: "home", en: "Home", mm: "ပင်မ", th: "หน้าแรก", group: "Core", icon: "🌋" },
  { id: "about", en: "About", mm: "အကြောင်း", th: "เกี่ยวกับ", group: "Core", icon: "🧬" },
  { id: "resume", en: "Resume", mm: "ကိုယ်ရေးမှတ်တမ်း", th: "เรซูเม่", group: "Core", icon: "📄" },
  { id: "skills", en: "Skills", mm: "ကျွမ်းကျင်မှု", th: "ทักษะ", group: "Core", icon: "🔥" },
  { id: "stack", en: "Tech Stack", mm: "နည်းပညာ", th: "เทคสแตก", group: "Core", icon: "🧱" },
  { id: "projects", en: "Projects", mm: "ပရောဂျက်", th: "โปรเจกต์", group: "Work", icon: "🛰️" },
  { id: "project-01", en: "Project 01", mm: "ပရောဂျက် ၀၁", th: "โปรเจกต์ 01", group: "Work", icon: "①" },
  { id: "project-02", en: "Project 02", mm: "ပရောဂျက် ၀၂", th: "โปรเจกต์ 02", group: "Work", icon: "②" },
  { id: "project-03", en: "Project 03", mm: "ပရောဂျက် ၀၃", th: "โปรเจกต์ 03", group: "Work", icon: "③" },
  { id: "case-studies", en: "Case Studies", mm: "လေ့လာချက်", th: "กรณีศึกษา", group: "Work", icon: "📚" },
  { id: "cross-platform", en: "Cross-Platform", mm: "ပလက်ဖောင်းစုံ", th: "ครอสแพลตฟอร์ม", group: "Engineering", icon: "🔀" },
  { id: "flutter-arch", en: "Flutter Architecture", mm: "Flutter ဗိသုကာ", th: "สถาปัตยกรรม Flutter", group: "Engineering", icon: "🎯" },
  { id: "performance", en: "Performance", mm: "စွမ်းဆောင်ရည်", th: "ประสิทธิภาพ", group: "Engineering", icon: "⚡" },
  { id: "open-source", en: "Open Source", mm: "ပွင့်လင်းကုဒ်", th: "โอเพนซอร์ส", group: "Engineering", icon: "🌱" },
  { id: "github", en: "GitHub Activity", mm: "GitHub လှုပ်ရှားမှု", th: "กิจกรรม GitHub", group: "Engineering", icon: "🐙" },
  { id: "testimonials", en: "Testimonials", mm: "အသိအမှတ်ပြုချက်", th: "คำรับรอง", group: "Community", icon: "💬" },
  { id: "experience", en: "Experience", mm: "အတွေ့အကြုံ", th: "ประสบการณ์", group: "Community", icon: "🕰️" },
  { id: "services", en: "Services", mm: "ဝန်ဆောင်မှု", th: "บริการ", group: "Community", icon: "🛠️" },
  { id: "contact", en: "Contact", mm: "ဆက်သွယ်ရန်", th: "ติดต่อ", group: "Community", icon: "📮" },
  { id: "writing", en: "Writing", mm: "ဆောင်းပါး", th: "บทความ", group: "Community", icon: "✍️" },
  { id: "talks", en: "Talks", mm: "ဟောပြောပွဲ", th: "การบรรยาย", group: "Community", icon: "🎤" },
  { id: "mentorship", en: "Mentorship", mm: "လမ်းညွှန်မှု", th: "การให้คำปรึกษา", group: "Community", icon: "🧭" },
  { id: "awards", en: "Awards", mm: "ဆုများ", th: "รางวัล", group: "Community", icon: "🏆" },
  { id: "labs", en: "Labs", mm: "ဓာတ်ခွဲခန်း", th: "แล็บ", group: "System", icon: "🧪" },
  { id: "design-system", en: "Design System", mm: "ဒီဇိုင်းစနစ်", th: "ระบบดีไซน์", group: "System", icon: "🎨" },
  { id: "accessibility", en: "Accessibility", mm: "အသုံးပြုနိုင်မှု", th: "การเข้าถึง", group: "System", icon: "♿" },
  { id: "localization", en: "Localization", mm: "ဘာသာစကား", th: "โลคัลไลเซชัน", group: "System", icon: "🌏" },
  { id: "pricing", en: "Pricing", mm: "ဈေးနှုန်း", th: "ราคา", group: "System", icon: "💠" },
  { id: "faq", en: "FAQ", mm: "မေးလေ့ရှိသော", th: "คำถามพบบ่อย", group: "System", icon: "❓" },
  { id: "legal", en: "Legal", mm: "ဥပဒေ", th: "กฎหมาย", group: "System", icon: "⚖️" },
];

export type Lang = "en" | "mm" | "th";

/* ---------------- Translation dictionary ---------------- */
export const DICT = {
  en: {
    availability: "Available for senior roles",
    heroKicker: "Volcanic Core · Engineering Heat Zones",
    heroTitle: "I build premium mobile experiences that feel consistent, fast, and native-quality.",
    heroSub: "Senior Android & Flutter Developer focused on Kotlin, Dart, architecture, performance, shared codebases, and production delivery.",
    heroSupport: "I turn complex product ideas into cross-platform systems teams can confidently ship, maintain, and evolve.",
    ctaWork: "View selected work",
    ctaResume: "Download resume",
    ctaContact: "Contact me",
    readCase: "Read case study",
    viewAll: "View all",
    source: "Source",
    demo: "Live demo",
    newsletter: "Subscribe to the Magma Dispatch",
    newsletterSub: "Monthly notes on Flutter architecture, Compose performance and release discipline.",
    subscribe: "Subscribe",
    backTop: "Back to top",
    menu: "Menu",
    // form
    fName: "Your name", fEmail: "Email address", fSubject: "Subject", fMessage: "Message",
    send: "Send message", sent: "Message sent — I'll reply within 24 hours.",
    errName: "Please enter your name.", errEmail: "Please enter a valid email address.",
    errSubject: "Please add a subject.", errMessage: "Message must be at least 20 characters.",
    errSub: "Enter a valid email to subscribe.", subOk: "Subscribed. Welcome to the core.",
  },
  mm: {
    availability: "အလုပ်အကိုင် လက်ခံနေပါသည်",
    heroKicker: "မီးတောင်အူတိုင် · အင်ဂျင်နီယာ အပူဇုန်များ",
    heroTitle: "မြန်ဆန်၊ တည်ငြိမ်ပြီး native အရည်အသွေးရှိသော မိုဘိုင်းအက်ပ်များကို တည်ဆောက်ပေးပါသည်။",
    heroSub: "Kotlin, Dart, ဗိသုကာဒီဇိုင်း, စွမ်းဆောင်ရည်နှင့် ထုတ်လုပ်မှုပေါ်တွင် အာရုံစိုက်သော Senior Android နှင့် Flutter Developer။",
    heroSupport: "ရှုပ်ထွေးသော ထုတ်ကုန်စိတ်ကူးများကို အသင်းအဖွဲ့များ ယုံကြည်စွာ ထုတ်လွှင့်နိုင်သည့် စနစ်များအဖြစ် ပြောင်းလဲပေးသည်။",
    ctaWork: "လုပ်ငန်းများ ကြည့်ရန်",
    ctaResume: "ကိုယ်ရေးမှတ်တမ်း ဒေါင်းလုဒ်",
    ctaContact: "ဆက်သွယ်ရန်",
    readCase: "အသေးစိတ် ဖတ်ရန်",
    viewAll: "အားလုံးကြည့်ရန်",
    source: "ကုဒ်",
    demo: "စမ်းကြည့်ရန်",
    newsletter: "Magma Dispatch သတင်းလွှာ",
    newsletterSub: "Flutter ဗိသုကာ၊ Compose စွမ်းဆောင်ရည်နှင့် release စည်းကမ်းအကြောင်း လစဉ်မှတ်စုများ။",
    subscribe: "စာရင်းသွင်းရန်",
    backTop: "အပေါ်သို့",
    menu: "မီနူး",
    fName: "အမည်", fEmail: "အီးမေးလ်", fSubject: "ခေါင်းစဉ်", fMessage: "မက်ဆေ့ချ်",
    send: "ပေးပို့ရန်", sent: "ပေးပို့ပြီးပါပြီ — ၂၄ နာရီအတွင်း ပြန်လည်ဆက်သွယ်ပါမည်။",
    errName: "ကျေးဇူးပြု၍ အမည်ထည့်ပါ။", errEmail: "မှန်ကန်သော အီးမေးလ်လိပ်စာ ထည့်ပါ။",
    errSubject: "ကျေးဇူးပြု၍ ခေါင်းစဉ်ထည့်ပါ။", errMessage: "မက်ဆေ့ချ်သည် အနည်းဆုံး ၂၀ လုံး ရှိရမည်။",
    errSub: "မှန်ကန်သော အီးမေးလ် ထည့်ပါ။", subOk: "စာရင်းသွင်းပြီးပါပြီ။ ကြိုဆိုပါသည်။",
  },
  th: {
    availability: "พร้อมรับงานระดับซีเนียร์",
    heroKicker: "แกนภูเขาไฟ · โซนความร้อนวิศวกรรม",
    heroTitle: "ผมสร้างประสบการณ์โมบายระดับพรีเมียมที่ลื่นไหล รวดเร็ว และให้ความรู้สึกเนทีฟ",
    heroSub: "นักพัฒนา Android และ Flutter ระดับซีเนียร์ เน้น Kotlin, Dart, สถาปัตยกรรม, ประสิทธิภาพ และการส่งมอบจริง",
    heroSupport: "เปลี่ยนไอเดียผลิตภัณฑ์ที่ซับซ้อนให้เป็นระบบข้ามแพลตฟอร์มที่ทีมดูแลต่อได้อย่างมั่นใจ",
    ctaWork: "ดูผลงาน",
    ctaResume: "ดาวน์โหลดเรซูเม่",
    ctaContact: "ติดต่อผม",
    readCase: "อ่านกรณีศึกษา",
    viewAll: "ดูทั้งหมด",
    source: "ซอร์สโค้ด",
    demo: "เดโม",
    newsletter: "สมัครรับ Magma Dispatch",
    newsletterSub: "บันทึกรายเดือนเรื่องสถาปัตยกรรม Flutter, ประสิทธิภาพ Compose และวินัยการรีลีส",
    subscribe: "สมัคร",
    backTop: "กลับขึ้นบน",
    menu: "เมนู",
    fName: "ชื่อของคุณ", fEmail: "อีเมล", fSubject: "หัวข้อ", fMessage: "ข้อความ",
    send: "ส่งข้อความ", sent: "ส่งแล้ว — จะตอบกลับภายใน 24 ชั่วโมง",
    errName: "กรุณากรอกชื่อ", errEmail: "กรุณากรอกอีเมลที่ถูกต้อง",
    errSubject: "กรุณาระบุหัวข้อ", errMessage: "ข้อความต้องมีอย่างน้อย 20 ตัวอักษร",
    errSub: "กรุณากรอกอีเมลที่ถูกต้อง", subOk: "สมัครเรียบร้อย ยินดีต้อนรับ",
  },
} as const;

export type DictKey = keyof typeof DICT.en;

interface Store {
  theme: "dark" | "light";
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  page: PageId;
  go: (p: PageId) => void;
}

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<Lang>("en");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [page, setPage] = useState<PageId>(() => hashToPage());

  /* Apply theme class to <html> */
  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle("light", theme === "light");
    el.classList.toggle("dark", theme === "dark");
  }, [theme]);

  /* Keep <html lang> in sync for screen readers & SEO */
  useEffect(() => {
    document.documentElement.lang = lang === "mm" ? "my" : lang;
  }, [lang]);

  /* Hash router */
  useEffect(() => {
    const onHash = () => {
      setPage(hashToPage());
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = useCallback((p: PageId) => {
    if (window.location.hash === `#/${p}`) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = `#/${p}`;
  }, []);

  const t = useCallback((k: DictKey) => DICT[lang][k] ?? DICT.en[k], [lang]);

  const value = useMemo(
    () => ({ theme, toggleTheme: () => setTheme((v) => (v === "dark" ? "light" : "dark")), lang, setLang, t, currency, setCurrency, page, go }),
    [theme, lang, t, currency, page, go],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

function hashToPage(): PageId {
  const raw = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  const found = PAGES.find((p) => p.id === raw);
  return found ? found.id : "home";
}

// eslint-disable-next-line react-refresh/only-export-components
export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used inside StoreProvider");
  return c;
}
