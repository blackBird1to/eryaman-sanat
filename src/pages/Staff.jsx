import { useLang } from "../context/LanguageContext";
import "./Staff.css";

const staff = [
  {
    name: "Berna Tekin",
    role: { en: "Founder & Head Instructor", tr: "Kurucu & Baş Eğitmen" },
    expertise: {
      en: "Fine Arts Education, Studio Practice",
      tr: "Güzel Sanatlar Eğitimi, Atölye Pratiği",
    },
    bio: {
      en: "Berna Tekin founded Eryaman Sanat with a vision to bring professional-grade art education to Ankara. With years of studio and teaching experience, she leads the atelier with passion and precision.",
      tr: "Berna Tekin, Ankara'ya profesyonel düzeyde sanat eğitimi getirme vizyonuyla Eryaman Sanat'ı kurdu. Yıllarca süren atölye ve öğretim deneyimiyle atölyeyi tutku ve özenle yönetmektedir.",
    },
    initials: "BT",
    founder: true,
  },
  {
    name: "Erdem Koç",
    role: { en: "Art Instructor", tr: "Sanat Eğitmeni" },
    expertise: {
      en: "Pencil Drawing, Portrait, Composition",
      tr: "Karakalem, Portre, Kompozisyon",
    },
    bio: {
      en: "Erdem Koç specializes in traditional drawing techniques. His meticulous approach to pencil drawing and portraiture has guided dozens of students to fine arts exam success.",
      tr: "Erdem Koç, geleneksel çizim tekniklerinde uzmanlaşmıştır. Karakalem ve portre çizimine titiz yaklaşımı, düzinelerce öğrenciyi güzel sanatlar sınavı başarısına taşımıştır.",
    },
    initials: "EK",
  },
  {
    name: "İlayda Kantarcı",
    role: { en: "Art Instructor", tr: "Sanat Eğitmeni" },
    expertise: {
      en: "Watercolor, Acrylic, Color Theory",
      tr: "Suluboya, Akrilik, Renk Teorisi",
    },
    bio: {
      en: "İlayda Kantarcı brings a vibrant energy to painting courses. Her expertise in watercolor and acrylic painting makes her courses among the most sought after at the atelier.",
      tr: "İlayda Kantarcı, resim derslerine canlı bir enerji katar. Suluboya ve akrilik resim konusundaki uzmanlığı, kurslarını atölyenin en çok aranan dersleri arasına taşımaktadır.",
    },
    initials: "İK",
  },
  {
    name: "Şeyma Özkan",
    role: { en: "Art Instructor", tr: "Sanat Eğitmeni" },
    expertise: {
      en: "Oil Painting, Children's Art, Portfolio",
      tr: "Yağlıboya, Çocuk Sanatı, Portfolyo",
    },
    bio: {
      en: "Şeyma Özkan leads children's programs and oil painting courses. Her patient, encouraging teaching style makes her especially beloved by younger students and beginners.",
      tr: "Şeyma Özkan, çocuk programlarını ve yağlıboya kurslarını yönetmektedir. Sabırlı ve teşvik edici öğretim tarzı, onu özellikle genç öğrenciler ve yeni başlayanlar tarafından çok sevilen biri yapmaktadır.",
    },
    initials: "ŞÖ",
  },
];

const t = {
  en: {
    label: "Our Team",
    title: "Education Staff",
    desc: "Meet the artists who will guide your journey.",
    expertise: "Expertise",
    founder: "Founder",
  },
  tr: {
    label: "Ekibimiz",
    title: "Eğitim Kadromuz",
    desc: "Yolculuğunuza rehberlik edecek sanatçılarla tanışın.",
    expertise: "Uzmanlık",
    founder: "Kurucu",
  },
};

export default function Staff() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div className="staff">
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
          <div className="staff__grid">
            {staff.map((member, i) => (
              <div
                key={member.name}
                className="staff-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="staff-card__top">
                  <div className="staff-card__avatar">{member.initials}</div>
                  {member.founder && (
                    <span className="staff-card__badge">{tx.founder}</span>
                  )}
                </div>
                <h3 className="staff-card__name">{member.name}</h3>
                <p className="staff-card__role">{member.role[lang]}</p>
                <div className="staff-card__divider"></div>
                <p className="staff-card__bio">{member.bio[lang]}</p>
                <div className="staff-card__expertise">
                  <span className="staff-card__expertise-label">
                    {tx.expertise}
                  </span>
                  <span className="staff-card__expertise-value">
                    {member.expertise[lang]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
