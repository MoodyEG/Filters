import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBolt,
  faCircleCheck,
  faClock,
  faCogs,
  faFilter,
  faIndustry,
  faLanguage,
  faLocationDot,
  faMoon,
  faPhone,
  faShieldHalved,
  faSun,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const copy = {
  ar: {
    brand: "عالم الفلاتر",
    tagline: "تصنيع وتوريد الفلاتر الصناعية",
    nav: {
      home: "الرئيسية",
      types: "الأنواع",
      value: "لماذا نحن",
      industries: "القطاعات",
      process: "آلية العمل",
      gallery: "المعرض",
      faq: "الأسئلة",
      contact: "التواصل",
    },
    hero: {
      badge: "تصنيع حسب المواصفات",
      title: "عالم الفلاتر",
      subtitle:
        "متخصصون في جميع أنواع الفلاتر الصناعية. نبيع ونصنّع أي فلتر وفق المقاسات والمعايير المطلوبة مع جودة عالية وتسليم موثوق.",
      primaryCta: "طلب عرض سعر",
      secondaryCta: "تصفح المعرض",
      imageAlt: "منشأة عالم الفلاتر",
      points: [
        "تصنيع مخصص بالكامل",
        "مواد مختبرة وعمر أطول",
        "توريد سريع للمشاريع",
      ],
    },
    core: {
      title: "خطوط الإنتاج الأساسية",
      subtitle: "هواء، زيت، وهيدروليك بأداء صناعي ثابت.",
    },
    types: {
      title: "أنواع الفلاتر",
      subtitle: "تغطية واسعة للقطاعات الصناعية ومصادر الطاقة والهواء.",
    },
    value: {
      title: "لماذا عالم الفلاتر",
      subtitle: "مرونة عالية، جودة موثوقة، ونتائج دقيقة حسب الطلب.",
    },
    industries: {
      title: "القطاعات التي نخدمها",
      subtitle: "حلولنا مصممة لتناسب بيئات التشغيل القاسية والمتغيرة.",
    },
    process: {
      title: "آلية التصنيع المخصص",
      subtitle: "من المواصفات إلى التشغيل الفعلي بخطوات واضحة.",
    },
    gallery: {
      title: "معرض المنتجات",
      subtitle: "اسحب أفقيا لرؤية المزيد واضغط للتكبير.",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات سريعة عن أكثر ما يتم سؤاله.",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نجهز عروض أسعار سريعة ونوفر دعم فني مباشر.",
      ownerLabel: "المالك",
      phoneLabel: "الهاتف",
      whatsappLabel: "واتساب",
      addressLabel: "العنوان",
      ctaTitle: "جاهزون لاستقبال طلبك",
      ctaText: "شاركنا التفاصيل وسنقترح أفضل حل هندسي خلال وقت قصير.",
      ctaButton: "اطلب الآن",
    },
    toggles: {
      light: "فاتح",
      dark: "داكن",
      language: "English",
    },
    footer: "جاهزون لتلبية احتياجات المشاريع الكبيرة والصغيرة.",
  },
  en: {
    brand: "Filter World",
    tagline: "Industrial filter manufacturing",
    nav: {
      home: "Home",
      types: "Types",
      value: "Why Us",
      industries: "Industries",
      process: "Process",
      gallery: "Gallery",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Built to your specs",
      title: "Filter World",
      subtitle:
        "Specialists in all kinds of industrial filters. We sell and manufacture any filter based on your parameters with reliable quality and delivery.",
      primaryCta: "Request a Quote",
      secondaryCta: "Browse Gallery",
      imageAlt: "Filter World facility",
      points: [
        "Fully custom builds",
        "Tested materials, long life",
        "Fast supply for projects",
      ],
    },
    core: {
      title: "Core Production Lines",
      subtitle: "Air, oil, and hydraulic performance you can rely on.",
    },
    types: {
      title: "Filter Types",
      subtitle: "Wide coverage for heavy-duty and industrial environments.",
    },
    value: {
      title: "Why Filter World",
      subtitle: "Flexible production, trusted quality, and precise results.",
    },
    industries: {
      title: "Industries We Serve",
      subtitle: "Solutions designed for demanding operating conditions.",
    },
    process: {
      title: "Custom Manufacturing Process",
      subtitle: "From requirements to deployment with clear steps.",
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Swipe horizontally to view more, click to zoom.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Quick answers to common questions.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Fast quotes and direct technical support.",
      ownerLabel: "Owner",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      addressLabel: "Address",
      ctaTitle: "Ready for your request",
      ctaText:
        "Share the details and we will propose the best engineering fit.",
      ctaButton: "Order Now",
    },
    toggles: {
      light: "Light",
      dark: "Dark",
      language: "العربية",
    },
    footer: "Ready to serve both large and small-scale projects.",
  },
};

const filterTypes = [
  { ar: "فلاتر معدات ثقيلة", en: "Heavy equipment filters" },
  { ar: "زيت و وقود", en: "Oil & fuel" },
  { ar: "هواء", en: "Air" },
  { ar: "بيرس و حرير", en: "Press & silk" },
  { ar: "بري وباج", en: "Pre & bag" },
  { ar: "هيدروليك سحب", en: "Hydraulic suction" },
  { ar: "اسمنت بودرة", en: "Cement powder" },
  { ar: "تكيفيات و شيلرات", en: "HVAC & chillers" },
  { ar: "بنطلون و شراب", en: "Pant & sock" },
  { ar: "غاز و بترول", en: "Gas & petroleum" },
  { ar: "اقفاص شراب و بنطلون", en: "Sock & pant cages" },
  { ar: "فواصل زيت", en: "Oil separators" },
];

const valueProps = [
  {
    icon: faCogs,
    arTitle: "تصنيع حسب الطلب",
    arText: "نحوّل المواصفات والرسومات إلى حلول دقيقة لكل نظام.",
    enTitle: "Made to spec",
    enText: "We translate your parameters into precise engineered solutions.",
  },
  {
    icon: faShieldHalved,
    arTitle: "جودة صناعية",
    arText: "اختبارات صارمة لضمان أداء ثابت وعمر تشغيلي أطول.",
    enTitle: "Industrial quality",
    enText: "Strict QA for stable performance and longer service life.",
  },
  {
    icon: faClock,
    arTitle: "تسليم سريع",
    arText: "خط إنتاج مرن لاستجابة سريعة دون التنازل عن الجودة.",
    enTitle: "Fast turnaround",
    enText: "Agile production for fast delivery without compromise.",
  },
  {
    icon: faBolt,
    arTitle: "استجابة فنية",
    arText: "فريق هندسي يراجع المتطلبات ويقترح البدائل الأفضل.",
    enTitle: "Expert support",
    enText: "Our engineers review requirements and recommend the best fit.",
  },
];

const industries = [
  { ar: "المعدات الثقيلة", en: "Heavy equipment" },
  { ar: "النفط والغاز", en: "Oil & gas" },
  { ar: "الأسمنت والخرسانة", en: "Cement & concrete" },
  { ar: "التصنيع والمعادن", en: "Manufacturing & metals" },
  { ar: "التكييفات والشيلرات", en: "HVAC & chillers" },
  { ar: "الطاقة", en: "Power & energy" },
  { ar: "المناجم والمحاجر", en: "Mining & quarry" },
];

const processSteps = [
  {
    arTitle: "استلام المتطلبات",
    arText: "تحليل المقاسات ومعدل التدفق والبيئة التشغيلية.",
    enTitle: "Requirements",
    enText: "We review dimensions, flow rates, and operating conditions.",
  },
  {
    arTitle: "تصميم هندسي",
    arText: "تحديد المواد ووسائط الترشيح والهيكل المناسب.",
    enTitle: "Engineering design",
    enText: "We select materials, media, and optimal housing design.",
  },
  {
    arTitle: "التصنيع والاختبار",
    arText: "تصنيع محكم واختبارات ضغط وكفاءة الترشيح.",
    enTitle: "Build & test",
    enText: "Precision manufacturing with performance testing.",
  },
  {
    arTitle: "التسليم والدعم",
    arText: "تسليم منظم مع دعم فني ومتابعة ما بعد البيع.",
    enTitle: "Delivery & support",
    enText: "Structured delivery with technical follow-up.",
  },
];

const faqs = [
  {
    arQ: "هل يمكن تصنيع فلتر بمواصفات خاصة؟",
    arA: "نعم، نحتاج المقاسات والمعايير التشغيلية ومعدل التدفق.",
    enQ: "Can you build a filter to custom specs?",
    enA: "Yes. Share dimensions, operating conditions, and flow rate.",
  },
  {
    arQ: "ما هي مدة التصنيع والتسليم؟",
    arA: "يعتمد ذلك على النوع والكمية، ونوفر خطط تسليم مرنة.",
    enQ: "What is the turnaround time?",
    enA: "It depends on type and volume, with flexible delivery plans.",
  },
  {
    arQ: "هل توفرون نماذج أولية؟",
    arA: "يمكن توفير عينات ونماذج أولية حسب الطلب.",
    enQ: "Do you provide samples or prototypes?",
    enA: "Samples and prototypes are available upon request.",
  },
  {
    arQ: "هل يتوفر دعم فني أو استشاري؟",
    arA: "نعم، نوفر دعما فنيا واستشاريا حسب طبيعة المشروع.",
    enQ: "Do you offer technical support?",
    enA: "Yes, technical and consulting support is available per project.",
  },
];

const coreLines = [
  { src: "/images/air2.jpeg", ar: "فلاتر هواء", en: "Air filters" },
  {
    src: "/images/oils1.jpeg",
    ar: "فلاتر زيت ووقود",
    en: "Oil & fuel filters",
  },
  {
    src: "/images/hydraulic3.jpeg",
    ar: "فلاتر هيدروليك",
    en: "Hydraulic filters",
  },
];

const gallerySlides = [
  { src: "/images/air1.jpeg", alt: "Air filter" },
  { src: "/images/air3.jpeg", alt: "Air filter" },
  { src: "/images/air4.jpeg", alt: "Air filter" },
  { src: "/images/air5.jpeg", alt: "Air filter" },
  { src: "/images/cage3.jpeg", alt: "Cage filter" },
  { src: "/images/cage4.jpeg", alt: "Cage filter" },
  { src: "/images/cage5.jpeg", alt: "Cage filter" },
  { src: "/images/hydraulic1.jpeg", alt: "Hydraulic filter" },
  { src: "/images/hydraulic2.jpeg", alt: "Hydraulic filter" },
  { src: "/images/hydraulic4.jpeg", alt: "Hydraulic filter" },
  { src: "/images/hydraulic5.jpeg", alt: "Hydraulic filter" },
  { src: "/images/hydraulic6.jpeg", alt: "Hydraulic filter" },
  { src: "/images/hydraulic11.jpeg", alt: "Hydraulic filter" },
  { src: "/images/mix1.jpeg", alt: "Mixed filter" },
  { src: "/images/mix2.jpeg", alt: "Mixed filter" },
  { src: "/images/mix4.jpeg", alt: "Mixed filter" },
  { src: "/images/mix5.jpeg", alt: "Mixed filter" },
  { src: "/images/mix6.jpeg", alt: "Mixed filter" },
  { src: "/images/mix7.jpeg", alt: "Mixed filter" },
  { src: "/images/mix9.jpeg", alt: "Mixed filter" },
  { src: "/images/oils2.jpeg", alt: "Oil filter" },
  { src: "/images/oils4.jpeg", alt: "Oil filter" },
  { src: "/images/random1.jpeg", alt: "Filter" },
  { src: "/images/random2.jpeg", alt: "Filter" },
  { src: "/images/sock1.jpeg", alt: "Sock filter" },
  { src: "/images/sock3.jpeg", alt: "Sock filter" },
  { src: "/images/sock5.jpeg", alt: "Sock filter" },
];

const getStored = (key, fallback) => {
  if (typeof window === "undefined") {
    return fallback;
  }
  const value = window.localStorage.getItem(key);
  return value || fallback;
};

function App() {
  const [theme, setTheme] = useState(() => getStored("theme", "light"));
  const [language, setLanguage] = useState(() => getStored("language", "ar"));
  const [isLangSwitching, setIsLangSwitching] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const galleryRef = useRef(null);
  const autoScrollRef = useRef(null);

  const isArabic = language === "ar";
  const t = copy[language];

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dir = isArabic ? "rtl" : "ltr";
    root.lang = isArabic ? "ar" : "en";
    window.localStorage.setItem("theme", theme);
    window.localStorage.setItem("language", language);
  }, [theme, language, isArabic]);

  const navItems = useMemo(
    () => [
      { href: "#home", label: t.nav.home },
      { href: "#types", label: t.nav.types },
      { href: "#value", label: t.nav.value },
      { href: "#industries", label: t.nav.industries },
      { href: "#process", label: t.nav.process },
      { href: "#gallery", label: t.nav.gallery },
      { href: "#faq", label: t.nav.faq },
      { href: "#contact", label: t.nav.contact },
    ],
    [t],
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setIsLangSwitching(true);
    window.setTimeout(() => {
      setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
      setIsLangSwitching(false);
    }, 200);
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      window.clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = window.setInterval(() => {
      const slider = galleryRef.current;
      if (!slider) {
        return;
      }
      const step = Math.min(slider.clientWidth * 0.75, 360);
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const atEnd = slider.scrollLeft >= maxScroll - 2;
      if (atEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 5000);
  };

  const scrollGallery = (direction) => {
    const slider = galleryRef.current;
    if (!slider) {
      return;
    }
    const step = Math.min(slider.clientWidth * 0.75, 360);
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const atStart = slider.scrollLeft <= 2;
    const atEnd = slider.scrollLeft >= maxScroll - 2;
    if (direction === "prev" && atStart) {
      slider.scrollTo({ left: maxScroll, behavior: "smooth" });
      resetAutoScroll();
      return;
    }
    if (direction === "next" && atEnd) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
      resetAutoScroll();
      return;
    }
    const offset = direction === "next" ? step : -step;
    slider.scrollBy({ left: offset, behavior: "smooth" });
    resetAutoScroll();
  };

  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (autoScrollRef.current) {
        window.clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  const arrowClass = isArabic ? "rotate-180" : "";
  const textAlign = isArabic ? "text-right" : "text-left";
  const itemsAlign = isArabic ? "items-end" : "items-start";
  const rowDirection = isArabic ? "flex-row-reverse" : "";
  const heroTextOrder = isArabic ? "lg:order-2" : "lg:order-1";
  const heroImageOrder = isArabic ? "lg:order-1" : "lg:order-2";

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-atmosphere" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid" />

      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 pt-4">
          <div
            className={`glass-panel flex flex-wrap items-center justify-between gap-4 rounded-3xl px-5 py-3`}
          >
            <div className={`flex items-center gap-3 ${rowDirection}`}>
              <div className={textAlign}>
                <p className="font-display text-lg font-semibold">{t.brand}</p>
                <p className="hidden text-sm text-(--muted) sm:block">
                  {t.tagline}
                </p>
              </div>
            </div>

            <nav
              className={`hidden flex-wrap items-center gap-4 text-sm lg:flex `}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-(--primary)"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div
              className={`flex flex-wrap items-center gap-2 ${rowDirection}`}
            >
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-outline px-4 py-2 text-sm cursor-pointer"
                aria-pressed={theme === "dark"}
              >
                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                {theme === "dark" ? t.toggles.light : t.toggles.dark}
              </button>
              <button
                type="button"
                onClick={toggleLanguage}
                className="btn btn-outline px-4 py-2 text-sm cursor-pointer"
              >
                <FontAwesomeIcon icon={faLanguage} />
                {t.toggles.language}
              </button>
              <a
                href="#contact"
                className="btn btn-primary hidden px-4 py-2 text-sm sm:inline-flex "
              >
                {t.contact.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main
        className={`transition-all duration-300 ${
          isLangSwitching
            ? "opacity-40 translate-y-1"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* عالم الفلاتر */}
        <section id="home" className="pt-14 pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-16">
            <div
              className={`${textAlign} ${!itemsAlign} ${!heroTextOrder} flex flex-col gap-6 motion-safe:animate-fade-up lg:max-w-xl`}
              style={{ animationDelay: "0.05s" }}
            >
              <h1 className="font-display text-4xl font-semibold leading-tight text-(--text) sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>
              <p className="text-lg text-(--muted)">{t.hero.subtitle}</p>
              <div className={`flex flex-wrap gap-3 justify-start`}>
                <a href="#contact" className="btn btn-primary">
                  {t.hero.primaryCta}
                  <FontAwesomeIcon icon={faArrowRight} className={arrowClass} />
                </a>
                <a href="#gallery" className="btn btn-outline">
                  {t.hero.secondaryCta}
                </a>
              </div>
              <ul
                className={`mt-2 grid grid-cols-2 gap-2 text-sm text-(--muted) items-start`}
              >
                {t.hero.points.map((point) => (
                  <li key={point} className={`flex items-center gap-2 `}>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-(--primary)"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`relative ${heroImageOrder} mx-auto w-full max-w-xl motion-safe:animate-fade-up`}
              style={{ animationDelay: "0.15s" }}
            >
              <div className="absolute -inset-4 rounded-4xl bg-(--glow) blur-2xl" />
              <img
                src="/images/Company.jpeg"
                alt={t.hero.imageAlt}
                className="relative h-72 w-full rounded-4xl object-cover shadow-glow motion-safe:animate-float sm:h-80 lg:h-105"
              />
            </div>
          </div>
        </section>

        {/* خطوط الإنتاج الأساسية */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.core.title}
              </h2>
              <p className={`text-(--muted) ${textAlign}`}>{t.core.subtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {coreLines.map((item, index) => (
                <div
                  key={item.src}
                  className="surface-card overflow-hidden motion-safe:animate-fade-up"
                  style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                >
                  <img
                    src={item.src}
                    alt={isArabic ? item.ar : item.en}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className={`p-4 ${textAlign}`}>
                    <p className="font-semibold">
                      {isArabic ? item.ar : item.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* أنواع الفلاتر */}
        <section id="types" className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.types.title}
              </h2>
              <p className={`text-(--muted) ${textAlign}`}>
                {t.types.subtitle}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filterTypes.map((type) => (
                <div
                  key={type.ar}
                  className={`surface-card flex items-center gap-3 px-5 py-4 ${textAlign} `}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-(--primary-soft) text-(--primary)">
                    <FontAwesomeIcon icon={faFilter} />
                  </div>
                  <p className="font-semibold">
                    {isArabic ? type.ar : type.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* معرض المنتجات */}
        <section id="gallery" className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.gallery.title}
              </h2>
              <p className={`text-(--muted)] ${textAlign}`}>
                {t.gallery.subtitle}
              </p>
            </div>
            <div className="-mx-6 relative">
              <div
                ref={galleryRef}
                dir="ltr"
                className="no-scrollbar flex gap-5 overflow-x-auto pb-4 px-6 scroll-smooth"
              >
                {gallerySlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className={`surface-card min-w-55 cursor-pointer overflow-hidden ${textAlign} transition-transform hover:-translate-y-1 sm:min-w-65`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollGallery("prev")}
                className="group absolute cursor-pointer left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-(--border) bg-(--surface-strong)/90 text-(--text) shadow-lg transition-all hover:-translate-y-1/2 hover:scale-105 hover:shadow-xl active:scale-95"
                aria-label="Scroll gallery left"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                type="button"
                onClick={() => scrollGallery("next")}
                className="group absolute cursor-pointer right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-(--border) bg-(--surface-strong)/90 text-(--text) shadow-lg transition-all hover:-translate-y-1/2 hover:scale-105 hover:shadow-xl active:scale-95"
                aria-label="Scroll gallery right"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </section>

        {/* لماذا عالم الفلاتر */}
        <section id="value" className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.value.title}
              </h2>
              <p className={`text-(--muted) ${textAlign}`}>
                {t.value.subtitle}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {valueProps.map((item, index) => (
                <div
                  key={item.enTitle}
                  className="surface-card p-6 motion-safe:animate-fade-up"
                  style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-(--primary-soft) text-(--primary)">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className={`mb-2 text-xl font-semibold ${textAlign}`}>
                    {isArabic ? item.arTitle : item.enTitle}
                  </h3>
                  <p className={`text-(--muted) ${textAlign}`}>
                    {isArabic ? item.arText : item.enText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* القطاعات التي نخدمها */}
        <section id="industries" className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.industries.title}
              </h2>
              <p className={`text-(--muted) ${textAlign}`}>
                {t.industries.subtitle}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              {industries.map((item) => (
                <span key={item.ar} className={`chip text-lg`}>
                  <FontAwesomeIcon icon={faIndustry} />
                  {isArabic ? item.ar : item.en}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* آلية التصنيع المخصص */}
        <section id="process" className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.process.title}
              </h2>
              <p className={`text-(--muted) ${textAlign}`}>
                {t.process.subtitle}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <div
                  key={step.enTitle}
                  className="surface-card p-6 motion-safe:animate-fade-up"
                  style={{ animationDelay: `${0.08 + index * 0.06}s` }}
                >
                  <div className={`mb-4 flex items-center gap-3 `}>
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-(--primary) text-white">
                      {index + 1}
                    </span>
                    <h3 className={`text-xl font-semibold ${textAlign}`}>
                      {isArabic ? step.arTitle : step.enTitle}
                    </h3>
                  </div>
                  <p className={`text-(--muted) ${textAlign}`}>
                    {isArabic ? step.arText : step.enText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة */}
        <section id="faq" className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.faq.title}
              </h2>
              <p className={`text-(--muted)] ${textAlign}`}>{t.faq.subtitle}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <details key={item.enQ} className="surface-card p-5">
                  <summary
                    className={`cursor-pointer text-lg font-semibold ${textAlign}`}
                  >
                    {isArabic ? item.arQ : item.enQ}
                  </summary>
                  <p className={`mt-3 text-(--muted)] ${textAlign}`}>
                    {isArabic ? item.arA : item.enA}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* تواصل معنا */}
        <section id="contact" className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className={`font-display text-3xl ${textAlign}`}>
                {t.contact.title}
              </h2>
              <p className={`text-(--muted)] ${textAlign}`}>
                {t.contact.subtitle}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className={`surface-card p-6 ${textAlign}`}>
                <div className="space-y-4">
                  <div className={`flex items-center gap-3 `}>
                    <FontAwesomeIcon icon={faUserTie} />
                    <div>
                      <p className="text-sm text-(--muted)]">
                        {t.contact.ownerLabel}
                      </p>
                      <p className="font-semibold">
                        {isArabic
                          ? "د/ محيي الدين محمود"
                          : "Dr. Mohy ElDin Mahmoud"}
                      </p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 `}>
                    <FontAwesomeIcon icon={faPhone} />
                    <div>
                      <p className="text-sm text-(--muted)]">
                        {t.contact.phoneLabel}
                      </p>
                      <a className="font-semibold" href="tel:+01002553733">
                        +01002553733
                      </a>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 `}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <div>
                      <p className="text-sm text-(--muted)]">
                        {t.contact.whatsappLabel}
                      </p>
                      <a
                        className="font-semibold"
                        href="https://wa.me/01208626234"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +01208626234
                      </a>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 `}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div>
                      <p className="text-sm text-(--muted)]">
                        {t.contact.addressLabel}
                      </p>
                      <p className="font-semibold">
                        {isArabic
                          ? "٣٧ ش عماد الدين، عمارة النهضة، القاهرة"
                          : "37 Emad El Din St, Nahda Building, Cairo"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-panel flex flex-wrap items-center justify-between gap-4 rounded-3xl px-5 py-4 text-sm">
            <p>{t.footer}</p>
            <p>© 2026 {t.brand}</p>
          </div>
        </div>
      </footer>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={gallerySlides}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2.6 }}
      />
    </div>
  );
}

export default App;
