import { useLang } from '../context/LanguageContext'
import './About.css'

const t = {
  en: {
    label: 'About Us',
    title: 'Our Story',
    whoTitle: 'Who We Are',
    whoBody: 'Eryaman Sanat is a professional fine arts studio located in Eryaman, Ankara. Founded by Bena Tekin, our atelier has grown into one of the most trusted art education centers in the region, guiding students from their first brushstroke to university acceptance.',
    missionTitle: 'Our Mission',
    missionBody: 'We believe art education should be accessible, rigorous, and inspiring. Our mission is to develop each student\'s individual creative voice while providing the technical foundation needed to succeed in fine arts examinations and professional practice.',
    visionTitle: 'Our Vision',
    visionBody: 'To be the leading fine arts education studio in Ankara — a space where creativity thrives, talent is nurtured, and every student discovers their artistic potential regardless of background or prior experience.',
    factsTitle: 'Quick Facts',
    founded: 'Founded',
    founder: 'Founder',
    students: 'Students',
    staff: 'Staff',
    language: 'Language',
    studentsVal: '500+ taught',
    staffVal: '4 experts',
    goalsTitle: 'Educational Goals',
    goals: ['Fine arts exam preparation', 'University portfolio development', 'Technical drawing mastery', 'Creative exploration', 'Professional practice skills'],
  },
  tr: {
    label: 'Hakkımızda',
    title: 'Hikayemiz',
    whoTitle: 'Biz Kimiz',
    whoBody: 'Eryaman Sanat, Ankara\'nın Eryaman ilçesinde yer alan profesyonel bir güzel sanatlar atölyesidir. Bena Tekin tarafından kurulan atölyemiz, bölgenin en güvenilir sanat eğitim merkezlerinden biri haline gelmiş; öğrencilere ilk fırça darbelerinden üniversite kabulüne kadar rehberlik etmiştir.',
    missionTitle: 'Misyonumuz',
    missionBody: 'Sanat eğitiminin erişilebilir, titiz ve ilham verici olması gerektiğine inanıyoruz. Misyonumuz, her öğrencinin bireysel yaratıcı sesini geliştirirken güzel sanatlar sınavlarında ve profesyonel pratikte başarı için gereken teknik temeli sağlamaktır.',
    visionTitle: 'Vizyonumuz',
    visionBody: 'Ankara\'nın önde gelen güzel sanatlar eğitim stüdyosu olmak — yaratıcılığın yeşerdiği, yeteneklerin beslendiği ve her öğrencinin geçmişinden veya önceki deneyiminden bağımsız olarak sanatsal potansiyelini keşfettiği bir alan olmak.',
    factsTitle: 'Hızlı Bilgiler',
    founded: 'Kuruluş',
    founder: 'Kurucu',
    students: 'Öğrenciler',
    staff: 'Kadro',
    language: 'Dil',
    studentsVal: '500+ öğrenci',
    staffVal: '4 uzman',
    goalsTitle: 'Eğitim Hedefleri',
    goals: ['Güzel sanatlar sınav hazırlığı', 'Üniversite portfolyo geliştirme', 'Teknik çizim ustalığı', 'Yaratıcı keşif', 'Profesyonel pratik becerileri'],
  }
}

export default function About() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div className="about">
      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle fade-up">{tx.label}</p>
          <h1 className="section-title fade-up-2">{tx.title}</h1>
          <div className="section-divider fade-up-3"></div>
        </div>
      </section>

      <section className="section">
        <div className="container about__grid">
          <div className="about__main">
            <h2 className="about__heading">{tx.whoTitle}</h2>
            <p className="about__text">{tx.whoBody}</p>

            <h2 className="about__heading" style={{ marginTop: '3rem' }}>{tx.missionTitle}</h2>
            <p className="about__text">{tx.missionBody}</p>

            <h2 className="about__heading" style={{ marginTop: '3rem' }}>{tx.visionTitle}</h2>
            <p className="about__text">{tx.visionBody}</p>
          </div>

          <div className="about__side">
            <div className="about__info-card">
              <h3 className="about__info-title">{tx.factsTitle}</h3>
              <ul className="about__info-list">
                <li><span>{tx.founded}</span><span>Eryaman, Ankara</span></li>
                <li><span>{tx.founder}</span><span>Berna Tekin</span></li>
                <li><span>{tx.students}</span><span>{tx.studentsVal}</span></li>
                <li><span>{tx.staff}</span><span>{tx.staffVal}</span></li>
                <li><span>{tx.language}</span><span>TR / EN</span></li>
              </ul>
            </div>

            <div className="about__goals">
              <h3 className="about__info-title">{tx.goalsTitle}</h3>
              <ul className="about__goals-list">
                {tx.goals.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
