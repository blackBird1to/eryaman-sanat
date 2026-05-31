import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import './Footer.css'

const t = {
  en: {
    nav: 'Navigation',
    courses: 'Courses',
    contact: 'Contact',
    links: [
      { to: '/', label: 'Home' }, { to: '/about', label: 'About' },
      { to: '/staff', label: 'Staff' }, { to: '/courses', label: 'Courses' },
      { to: '/contact', label: 'Contact' },
    ],
    courseList: ['Fine Arts Preparation', 'Portfolio Preparation', 'Adult Art Courses', "Children's Drawing", 'Watercolor & Oil Painting'],
    address: 'Eryaman, Ankara, Türkiye',
    founded: 'Founded by Bena Tekin',
    rights: 'All rights reserved.',
  },
  tr: {
    nav: 'Navigasyon',
    courses: 'Kurslar',
    contact: 'İletişim',
    links: [
      { to: '/', label: 'Anasayfa' }, { to: '/about', label: 'Hakkımızda' },
      { to: '/staff', label: 'Kadromuz' }, { to: '/courses', label: 'Eğitimler' },
      { to: '/contact', label: 'İletişim' },
    ],
    courseList: ['Güzel Sanatlar Hazırlık', 'Portfolyo Hazırlık', 'Yetişkin Sanat Kursları', 'Çocuk Çizim Dersleri', 'Suluboya & Yağlıboya'],
    address: 'Eryaman, Ankara, Türkiye',
    founded: 'Bena Tekin tarafından kuruldu',
    rights: 'Tüm hakları saklıdır.',
  }
}

export default function Footer() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-mark">ES</div>
              <span>Eryaman Sanat</span>
            </div>
            <p className="footer__tagline">
              Güzel Sanatlar Atölyesi · Fine Arts Studio<br />
              Eryaman, Ankara
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{tx.nav}</h4>
            <ul className="footer__links">
              {tx.links.map(l => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{tx.courses}</h4>
            <ul className="footer__links">
              {tx.courseList.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{tx.contact}</h4>
            <ul className="footer__links footer__links--contact">
              <li>{tx.address}</li>
              <li><a href="tel:+90000000000">+90 000 000 00 00</a></li>
              <li><a href="mailto:info@eryamansanat.com">info@eryamansanat.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Eryaman Sanat. {tx.rights}</p>
          <p>{tx.founded}</p>
        </div>
      </div>
    </footer>
  )
}
