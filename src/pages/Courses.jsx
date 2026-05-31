import { useLang } from '../context/LanguageContext'
import './Courses.css'

const categories = {
  en: [
    {
      heading: 'Exam Preparation',
      courses: [
        { title: 'Fine Arts High School Preparation', desc: 'Comprehensive prep for fine arts high school entrance exams. Covers drawing, color theory, and composition.', icon: '🏫' },
        { title: 'Fine Arts University Preparation', desc: 'Intensive program targeting university fine arts faculty entrance exams with mock tests and feedback.', icon: '🎓' },
        { title: 'BILSEM Preparation', desc: 'Specialized preparation for the BILSEM gifted education program selection exams.', icon: '⭐' },
      ]
    },
    {
      heading: 'Portfolio & Professional',
      courses: [
        { title: 'Portfolio Preparation', desc: 'Build a professional portfolio that showcases your best work for university admissions and art programs.', icon: '📁' },
        { title: 'Drawing Support Course', desc: 'Supplementary drawing instruction for students who need focused practice on fundamentals.', icon: '📐' },
      ]
    },
    {
      heading: 'Painting',
      courses: [
        { title: 'Watercolor Painting', desc: 'Master the fluid and expressive medium of watercolor. From basic washes to advanced layering techniques.', icon: '💧' },
        { title: 'Acrylic Painting', desc: 'Versatile and vibrant. Learn acrylic techniques from impasto to smooth blending.', icon: '🎨' },
        { title: 'Oil Painting', desc: 'The classic medium. Develop rich textures, glazing, and traditional oil painting methods.', icon: '🖼️' },
      ]
    },
    {
      heading: 'Drawing & Specialized',
      courses: [
        { title: 'Pencil Drawing (Karakalem)', desc: 'Foundational and advanced pencil drawing: shading, hatching, portraiture, and still life.', icon: '✏️' },
        { title: 'Adult Art Courses', desc: 'Art for adults at all levels. Relax, explore, and develop your creative side in a supportive environment.', icon: '🧑‍🎨' },
        { title: "Children's Drawing Courses", desc: 'Fun, structured art education for children. Builds creativity, patience, and fine motor skills.', icon: '🌟' },
      ]
    },
  ],
  tr: [
    {
      heading: 'Sınav Hazırlık',
      courses: [
        { title: 'Güzel Sanatlar Lise Hazırlık', desc: 'Güzel sanatlar lisesi giriş sınavları için kapsamlı hazırlık. Çizim, renk teorisi ve kompozisyonu kapsar.', icon: '🏫' },
        { title: 'Güzel Sanatlar Üniversite Hazırlık', desc: 'Deneme sınavları ve geri bildirimlerle üniversite güzel sanatlar fakültesi giriş sınavlarını hedefleyen yoğun program.', icon: '🎓' },
        { title: 'BİLSEM Hazırlık', desc: 'BİLSEM üstün yetenekliler eğitim programı seçme sınavları için özel hazırlık.', icon: '⭐' },
      ]
    },
    {
      heading: 'Portfolyo & Profesyonel',
      courses: [
        { title: 'Portfolyo Hazırlık', desc: 'Üniversite kabulleri ve sanat programları için en iyi çalışmalarınızı sergileyen profesyonel bir portfolyo oluşturun.', icon: '📁' },
        { title: 'Çizim Destek Dersi', desc: 'Temel konularda odaklı pratik yapması gereken öğrenciler için ek çizim eğitimi.', icon: '📐' },
      ]
    },
    {
      heading: 'Resim',
      courses: [
        { title: 'Suluboya Resim', desc: 'Suluboyasının akıcı ve ifadeci ortamına hakim olun. Temel boyamalardan ileri katmanlama tekniklerine kadar.', icon: '💧' },
        { title: 'Akrilik Resim', desc: 'Çok yönlü ve canlı. İmpasto\'dan pürüzsüz harmanlamaya akrilik teknikleri öğrenin.', icon: '🎨' },
        { title: 'Yağlıboya Resim', desc: 'Klasik medium. Zengin dokular, glazlama ve geleneksel yağlıboya yöntemleri geliştirin.', icon: '🖼️' },
      ]
    },
    {
      heading: 'Çizim & Özel',
      courses: [
        { title: 'Karakalem Çizim', desc: 'Temel ve ileri karakalem çizimi: gölgeleme, tarama, portre ve natürmort.', icon: '✏️' },
        { title: 'Yetişkin Sanat Kursları', desc: 'Her seviyede yetişkinler için sanat. Destekleyici bir ortamda rahatlayın, keşfedin ve yaratıcı yönünüzü geliştirin.', icon: '🧑‍🎨' },
        { title: 'Çocuk Çizim Dersleri', desc: 'Çocuklar için eğlenceli, yapılandırılmış sanat eğitimi. Yaratıcılık, sabır ve ince motor becerilerini geliştirir.', icon: '🌟' },
      ]
    },
  ]
}

const t = {
  en: { label: 'What We Teach', title: 'Our Courses', desc: '11 programs designed for every level, age, and goal.' },
  tr: { label: 'Eğitimlerimiz', title: 'Kurslarımız', desc: 'Her seviye, yaş ve hedef için tasarlanmış 11 program.' },
}

export default function Courses() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div className="courses">
      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle fade-up">{tx.label}</p>
          <h1 className="section-title fade-up-2">{tx.title}</h1>
          <p className="page-hero__desc fade-up-3">{tx.desc}</p>
          <div className="section-divider fade-up-4"></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {categories[lang].map(cat => (
            <div key={cat.heading} className="courses__category">
              <h2 className="courses__category-title">{cat.heading}</h2>
              <div className="courses__grid">
                {cat.courses.map(c => (
                  <div key={c.title} className="course-detail-card">
                    <div className="course-detail-card__icon">{c.icon}</div>
                    <div className="course-detail-card__body">
                      <h3 className="course-detail-card__title">{c.title}</h3>
                      <p className="course-detail-card__desc">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
