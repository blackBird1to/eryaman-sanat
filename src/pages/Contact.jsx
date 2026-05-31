import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import "./Contact.css";

const t = {
  en: {
    label: "Get in Touch",
    title: "Contact Us",
    desc: "We'd love to hear from you. Reach out and we'll respond promptly.",
    visitTitle: "Visit the Studio",
    addressLabel: "Address",
    phoneLabel: "Phone",
    hoursLabel: "Hours",
    hours1: "Mon–Fri: 09:00–20:00",
    hours2: "Sat: 10:00–18:00",
    followLabel: "Follow Us",
    formTitle: "Send a Message",
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    phoneLabel2: "Phone",
    phonePlaceholder: "+90 ...",
    subjectLabel: "Subject",
    subjectDefault: "Select a course...",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about yourself and what you're looking for...",
    send: "Send Message →",
    successTitle: "Message Sent!",
    successMsg: "Thank you for reaching out. We'll get back to you soon.",
    sendAnother: "Send Another",
    mapTitle: "Find Us",
    courses: [
      "Fine Arts High School Prep",
      "Fine Arts University Prep",
      "Portfolio Preparation",
      "Adult Art Courses",
      "Children's Drawing",
      "Pencil Drawing",
      "Watercolor Painting",
      "Oil Painting",
      "Other",
    ],
  },
  tr: {
    label: "İletişim",
    title: "Bize Ulaşın",
    desc: "Sizden haber almaktan memnuniyet duyarız. Bize ulaşın, en kısa sürede yanıt verelim.",
    visitTitle: "Atölyeyi Ziyaret Edin",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    hoursLabel: "Çalışma Saatleri",
    hours1: "Pzt–Cum: 09:00–20:00",
    hours2: "Cmt: 10:00–18:00",
    followLabel: "Takip Edin",
    formTitle: "Mesaj Gönder",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız",
    emailPlaceholder: "eposta@adresiniz.com",
    phoneLabel2: "Telefon",
    phonePlaceholder: "+90 505 260 32 67",
    subjectLabel: "Konu",
    subjectDefault: "Kurs seçin...",
    messageLabel: "Mesaj",
    messagePlaceholder: "Kendinizden ve ne aradığınızdan bahsedin...",
    send: "Mesaj Gönder →",
    successTitle: "Mesaj Gönderildi!",
    successMsg:
      "Bize ulaştığınız için teşekkürler. En kısa sürede dönüş yapacağız.",
    sendAnother: "Yeni Mesaj",
    mapTitle: "Bizi Bulun",
    courses: [
      "Güzel Sanatlar Lise Hazırlık",
      "Güzel Sanatlar Üniversite Hazırlık",
      "Portfolyo Hazırlık",
      "Yetişkin Sanat Kursları",
      "Çocuk Çizim Dersleri",
      "Karakalem",
      "Suluboya Resim",
      "Yağlıboya Resim",
      "Diğer",
    ],
  },
};

export default function Contact() {
  const { lang } = useLang();
  const tx = t[lang];
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container">
          <p className="section-subtitle fade-up">{tx.label}</p>
          <h1 className="section-title fade-up-2">{tx.title}</h1>
          <p className="page-hero__desc fade-up-3">{tx.desc}</p>
          <div className="section-divider fade-up-4"></div>
        </div>
      </section>

      <section className="section">
        <div className="container contact__layout">
          <div className="contact__info">
            <h2 className="contact__info-heading">{tx.visitTitle}</h2>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <strong>{tx.addressLabel}</strong>
                  <p>
                    Güzelkent Mahallesi, Lozan Barışı Caddesi, 720. Sk. No:1,
                    06827 Etimesgut/Ankara
                  </p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div>
                  <strong>{tx.phoneLabel}</strong>
                  <p>
                    <a href="tel:+905052603267">+90 505 260 32 67</a>
                  </p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:info@eryamansanat.com">
                      info@eryamansanat.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">🕐</span>
                <div>
                  <strong>{tx.hoursLabel}</strong>
                  <p>{tx.hours1}</p>
                  <p>{tx.hours2}</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <p className="contact__social-label">{tx.followLabel}</p>
              <div className="contact__social-links">
                <a href="#" className="contact__social-btn">
                  Instagram
                </a>
                <a href="#" className="contact__social-btn">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>{tx.successTitle}</h3>
                <p>{tx.successMsg}</p>
                <button
                  className="btn-outline"
                  style={{ marginTop: "1.5rem" }}
                  onClick={() => setSent(false)}
                >
                  {tx.sendAnother}
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={submit}>
                <h2 className="contact__form-heading">{tx.formTitle}</h2>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>{tx.nameLabel} *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handle}
                      placeholder={tx.namePlaceholder}
                    />
                  </div>
                  <div className="contact__field">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handle}
                      placeholder={tx.emailPlaceholder}
                    />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>{tx.phoneLabel2}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      placeholder={tx.phonePlaceholder}
                    />
                  </div>
                  <div className="contact__field">
                    <label>{tx.subjectLabel}</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handle}
                    >
                      <option value="">{tx.subjectDefault}</option>
                      {tx.courses.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="contact__field">
                  <label>{tx.messageLabel} *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handle}
                    placeholder={tx.messagePlaceholder}
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  {tx.send}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── MAP ── */}
        <div className="container">
          <div className="contact__map-wrap">
            <p className="section-subtitle" style={{ marginBottom: "1rem" }}>
              {tx.mapTitle}
            </p>
            <div className="contact__map">
              <iframe
                title="Eryaman Sanat Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5!2d32.65!3d39.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337136d153511%3A0x9f0b1f36757588a1!2sG%C3%BCzelkent%2C%20Lozan%20Bar%C4%B1%C5%9F%C4%B1%20Cd.%20720.%20Sk.%20No%3A1%2C%2006827%20Etimesgut%2FAnkara!5e0!3m2!1sen!2str!4v1716000000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
