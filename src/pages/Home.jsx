import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import "./Home.css";

const courses = [
  {
    en: "Fine Arts High School Prep",
    tr: "Güzel Sanatlar Lise Hazırlık",
    icon: "🎨",
  },
  {
    en: "Fine Arts University Prep",
    tr: "Güzel Sanatlar Üniversite Hazırlık",
    icon: "🏛️",
  },
  { en: "Portfolio Preparation", tr: "Portfolyo Hazırlık", icon: "📁" },
  { en: "Adult Art Courses", tr: "Yetişkin Sanat Kursları", icon: "🖌️" },
  { en: "Children's Drawing", tr: "Çocuk Çizim Dersleri", icon: "✏️" },
  { en: "Pencil Drawing", tr: "Karakalem", icon: "🖊️" },
];

const testimonials = [
  {
    name: "Zeynep A.",
    en: "Eryaman Sanat changed how I see art completely. I passed my fine arts exam with top marks.",
    tr: "Eryaman Sanat sanatı görüş açımı tamamen değiştirdi. Güzel sanatlar sınavımı en yüksek puanla geçtim.",
  },
  {
    name: "Murat K.",
    en: "The teachers here are incredibly dedicated. My portfolio got me into my dream university.",
    tr: "Buradaki öğretmenler inanılmaz derecede özverili. Portfolyom hayalimdeki üniversiteye girmemi sağladı.",
  },
  {
    name: "Elif S.",
    en: "From zero to my first watercolor exhibition in one year. Truly grateful.",
    tr: "Sıfırdan ilk suluboya sergime bir yılda ulaştım. Gerçekten minnettarım.",
  },
];

const stats = [
  { number: "500+", en: "Students Taught", tr: "Öğrenci" },
  { number: "95%", en: "Exam Success Rate", tr: "Sınav Başarısı" },
  { number: "10+", en: "Years Experience", tr: "Yıl Deneyim" },
  { number: "4", en: "Expert Teachers", tr: "Uzman Öğretmen" },
];

const t = {
  en: {
    eyebrow: "Eryaman Sanat · Fine Arts Studio",
    heroTitle1: "Where Art",
    heroTitle2: "Finds Its Voice",
    heroDesc:
      "Professional fine arts education in Eryaman, Ankara. From beginners to university-bound students.",
    exploreCourses: "Explore Courses",
    getInTouch: "Get in Touch",
    aboutLabel: "About Us",
    aboutTitle: "A Studio Built on Passion for Art",
    aboutBody:
      "Eryaman Sanat was founded with a single belief: every student has an artist within them waiting to emerge. Our atelier offers structured, professional instruction across drawing, painting, and fine arts exam preparation — in the heart of Eryaman, Ankara.",
    learnMore: "Learn More →",
    coursesLabel: "What We Teach",
    coursesTitle: "Featured Courses",
    viewAll: "View All Courses",
    testimonialsLabel: "Student Voices",
    testimonialsTitle: "What Our Students Say",
    ctaLabel: "Start Today",
    ctaTitle: "Ready to Begin Your Art Journey?",
    ctaDesc: "Join hundreds of students who found their voice through art.",
    enroll: "Enroll Now",
    browse: "Browse Courses",
    photoHere: "Your Photo Here",
    heroImage: "Hero Image",
    replacePhoto: "Replace with your photo:",
  },
  tr: {
    eyebrow: "Eryaman Sanat · Güzel Sanatlar Atölyesi",
    heroTitle1: "Sanatın",
    heroTitle2: "Sesi Burada",
    heroDesc:
      "Eryaman, Ankara'da profesyonel güzel sanatlar eğitimi. Başlangıç seviyesinden üniversite adaylarına kadar.",
    exploreCourses: "Eğitimleri Keşfet",
    getInTouch: "İletişime Geç",
    aboutLabel: "Hakkımızda",
    aboutTitle: "Sanata Tutkuyla Kurulmuş Bir Atölye",
    aboutBody:
      "Eryaman Sanat, tek bir inançla kuruldu: her öğrencinin içinde ortaya çıkmayı bekleyen bir sanatçı var. Atölyemiz, Eryaman, Ankara'nın kalbinde çizim, resim ve güzel sanatlar sınav hazırlığı alanlarında yapılandırılmış, profesyonel eğitim sunmaktadır.",
    learnMore: "Daha Fazla →",
    coursesLabel: "Eğitimlerimiz",
    coursesTitle: "Öne Çıkan Kurslar",
    viewAll: "Tüm Kursları Gör",
    testimonialsLabel: "Öğrenci Yorumları",
    testimonialsTitle: "Öğrencilerimiz Ne Diyor",
    ctaLabel: "Bugün Başla",
    ctaTitle: "Sanat Yolculuğuna Başlamaya Hazır mısın?",
    ctaDesc: "Sanat aracılığıyla sesini bulan yüzlerce öğrenciye katıl.",
    enroll: "Kayıt Ol",
    browse: "Kurslara Göz At",
    photoHere: "Fotoğrafınız Buraya",
    heroImage: "Hero Görseli",
    replacePhoto: "Fotoğrafınızla değiştirin:",
  },
};

export default function Home() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div className="home">
      {/* ───── HERO ───── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grid-overlay"></div>
        </div>

        <div className="container hero__content">
          <p className="hero__eyebrow fade-up">{tx.eyebrow}</p>
          <h1 className="hero__title fade-up-2">
            {tx.heroTitle1}
            <br />
            <em>{tx.heroTitle2}</em>
          </h1>
          <p className="hero__desc fade-up-3">{tx.heroDesc}</p>
          <div className="hero__actions fade-up-4">
            <Link to="/courses" className="btn-primary">
              {tx.exploreCourses}
            </Link>
            <Link to="/contact" className="btn-outline">
              {tx.getInTouch}
            </Link>
          </div>
        </div>

        <div className="hero__image-block">
          <img
            src="/Images/hero.jpg"
            alt="Eryaman Sanat Fine Arts Studio"
            className="hero__image"
          />
        </div>

        <div className="hero__scroll">
          <span></span>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map((s) => (
            <div key={s.en} className="stats-bar__item">
              <span className="stats-bar__number">{s.number}</span>
              <span className="stats-bar__label">
                {lang === "en" ? s.en : s.tr}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───── INTRO ───── */}
      <section className="section intro">
        <div className="container intro__inner">
          <div className="intro__text">
            <p className="section-subtitle">{tx.aboutLabel}</p>
            <h2 className="section-title">{tx.aboutTitle}</h2>
            <div className="section-divider"></div>
            <p className="intro__body">{tx.aboutBody}</p>
            <Link
              to="/about"
              className="btn-outline"
              style={{ marginTop: "1.5rem" }}
            >
              {tx.learnMore}
            </Link>
          </div>
          <div className="intro__visual">
            <div className="intro__frame">
              <img
                src="/Images/hero2.jpg"
                alt="Eryaman Sanat Fine Arts Studio"
                className="intro__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── FEATURED COURSES ───── */}
      <section className="section featured-courses">
        <div className="container">
          <p className="section-subtitle">{tx.coursesLabel}</p>
          <h2 className="section-title">{tx.coursesTitle}</h2>
          <div className="section-divider"></div>
          <div className="featured-courses__grid">
            {courses.map((c) => (
              <Link to="/courses" key={c.en} className="course-card">
                <div className="course-card__icon">{c.icon}</div>
                <h3 className="course-card__title">
                  {lang === "en" ? c.en : c.tr}
                </h3>
                <span className="course-card__arrow">→</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/courses" className="btn-primary">
              {tx.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="section testimonials">
        <div className="container">
          <p className="section-subtitle">{tx.testimonialsLabel}</p>
          <h2 className="section-title">{tx.testimonialsTitle}</h2>
          <div className="section-divider"></div>
          <div className="testimonials__grid">
            {testimonials.map((tm) => (
              <div key={tm.name} className="testimonial-card">
                <div className="testimonial-card__quote">"</div>
                <p className="testimonial-card__text">
                  {lang === "en" ? tm.en : tm.tr}
                </p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{tm.name[0]}</div>
                  <span>{tm.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="section cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__content">
            <p className="section-subtitle">{tx.ctaLabel}</p>
            <h2 className="section-title">{tx.ctaTitle}</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem" }}>
              {tx.ctaDesc}
            </p>
          </div>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn-primary">
              {tx.enroll}
            </Link>
            <Link to="/courses" className="btn-outline">
              {tx.browse}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
