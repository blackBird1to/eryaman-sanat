import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './Exhibitions.css'

import metromall1 from '../assets/exhibitions/metromall-mart/1.jpg'
import metromall2 from '../assets/exhibitions/metromall-mart/2.jpg'
import metromall3 from '../assets/exhibitions/metromall-mart/3.jpg'
import metromall4 from '../assets/exhibitions/metromall-mart/4.jpg'
import metromall5 from '../assets/exhibitions/metromall-mart/5.jpg'
import metromall6 from '../assets/exhibitions/metromall-mart/6.jpg'
import metromall7 from '../assets/exhibitions/metromall-mart/7.jpg'
import metromall8 from '../assets/exhibitions/metromall-mart/8.jpg'
import metromall9 from '../assets/exhibitions/metromall-mart/9.jpg'
import metromall10 from '../assets/exhibitions/metromall-mart/10.jpg'
import metromall11 from '../assets/exhibitions/metromall-mart/11.jpg'
import metromall12 from '../assets/exhibitions/metromall-mart/12.jpg'
import metromall13 from '../assets/exhibitions/metromall-mart/13.jpg'
import metromall14 from '../assets/exhibitions/metromall-mart/14.jpg'
import metromall15 from '../assets/exhibitions/metromall-mart/15.jpg'
import metromallPoster from '../assets/exhibitions/metromall-mart/poster.jpg'

const exhibitionGroups = {
  en: [
    {
      id: 'metromall-mart',
      cover: metromallPoster,
      title: 'Metromall Exhibition – March 28–29',
      date: 'March 28–29, 2026',
      location: 'Metromall, Ankara',
      photos: [
        { src: metromall1, alt: 'Metromall Exhibition photo 1' },
        { src: metromall2, alt: 'Metromall Exhibition photo 2' },
        { src: metromall3, alt: 'Metromall Exhibition photo 3' },
        { src: metromall4, alt: 'Metromall Exhibition photo 4' },
        { src: metromall5, alt: 'Metromall Exhibition photo 5' },
        { src: metromall6, alt: 'Metromall Exhibition photo 6' },
        { src: metromall7, alt: 'Metromall Exhibition photo 7' },
        { src: metromall8, alt: 'Metromall Exhibition photo 8' },
        { src: metromall9, alt: 'Metromall Exhibition photo 9' },
        { src: metromall10, alt: 'Metromall Exhibition photo 10' },
        { src: metromall11, alt: 'Metromall Exhibition photo 11' },
        { src: metromall12, alt: 'Metromall Exhibition photo 12' },
        { src: metromall13, alt: 'Metromall Exhibition photo 13' },
        { src: metromall14, alt: 'Metromall Exhibition photo 14' },
        { src: metromall15, alt: 'Metromall Exhibition photo 15' },
      ]                                      // ← and here
    }
  ],
  tr: [
    {
      id: 'metromall-mart',
      cover: metromallPoster,
      title: 'Metromall Sergisi – 28–29 Mart',
      date: '28–29 Mart 2026',
      location: 'Metromall, Ankara',
      photos: [
        { src: metromall1, alt: 'Metromall Sergisi fotoğraf 1' },
        { src: metromall2, alt: 'Metromall Sergisi fotoğraf 2' },
        { src: metromall3, alt: 'Metromall Sergisi fotoğraf 3' },
        { src: metromall4, alt: 'Metromall Sergisi fotoğraf 4' },
        { src: metromall5, alt: 'Metromall Sergisi fotoğraf 5' },
        { src: metromall6, alt: 'Metromall Sergisi fotoğraf 6' },
        { src: metromall7, alt: 'Metromall Sergisi fotoğraf 7' },
        { src: metromall8, alt: 'Metromall Sergisi fotoğraf 8' },
        { src: metromall9, alt: 'Metromall Sergisi fotoğraf 9' },
        { src: metromall10, alt: 'Metromall Sergisi fotoğraf 10' },
        { src: metromall11, alt: 'Metromall Sergisi fotoğraf 11' },
        { src: metromall12, alt: 'Metromall Sergisi fotoğraf 12' },
        { src: metromall13, alt: 'Metromall Sergisi fotoğraf 13' },
        { src: metromall14, alt: 'Metromall Sergisi fotoğraf 14' },
        { src: metromall15, alt: 'Metromall Sergisi fotoğraf 15' },
      ]                                      // ← and here
    }
  ]
}

const t = {
  en: {
    label: 'Exhibitions',
    title: 'Our Exhibitions',
    desc: 'A showcase of student and instructor artwork from Eryaman Sanat.',
    viewAll: 'All Photos',
  },
  tr: {
    label: 'Sergiler',
    title: 'Sergilerimiz',
    desc: 'Eryaman Sanat öğrenci ve eğitmenlerinin eserlerinden bir seçki.',
    viewAll: 'Tüm Fotoğraflar',
  }
}

export default function Exhibitions() {
  const { lang } = useLang()
  const tx = t[lang]
  const [lightbox, setLightbox] = useState(null)
  const [expandedGroup, setExpandedGroup] = useState(null)

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      else if (e.key === 'ArrowLeft') handlePrev()
      else if (e.key === 'ArrowRight') handleNext()
    }

    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  const openLightbox = (groupId, index) => {
    setLightbox({ groupId, index })
  }

  const closeLightbox = () => {
    setLightbox(null)
  }

  const handlePrev = (e) => {
    if (e) e.stopPropagation()
    setLightbox(prev => {
      if (!prev) return null
      const group = exhibitionGroups[lang].find(g => g.id === prev.groupId)
      const maxIndex = group.photos.length - 1
      const nextIndex = prev.index > 0 ? prev.index - 1 : maxIndex
      return { ...prev, index: nextIndex }
    })
  }

  const handleNext = (e) => {
    if (e) e.stopPropagation()
    setLightbox(prev => {
      if (!prev) return null
      const group = exhibitionGroups[lang].find(g => g.id === prev.groupId)
      const maxIndex = group.photos.length - 1
      const nextIndex = prev.index < maxIndex ? prev.index + 1 : 0
      return { ...prev, index: nextIndex }
    })
  }

  let lightboxImage = null
  let showArrows = false
  if (lightbox) {
    const group = exhibitionGroups[lang].find(g => g.id === lightbox.groupId)
    if (group && group.photos[lightbox.index]) {
      lightboxImage = group.photos[lightbox.index]
      showArrows = group.photos.length > 1
    }
  }

  return (
    <div className="exhibitions">
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
          {exhibitionGroups[lang].map(group => {
            const isExpanded = expandedGroup === group.id;

            return (
              <div key={group.id} className="exhibitions__group">
                <div className="exhibitions__group-header">
                  <h2 className="exhibitions__group-heading">{group.title}</h2>
                  <div className="exhibitions__group-meta">
                    {group.date} • {group.location}
                  </div>
                </div>

                {!isExpanded ? (
                  <div className="exhibitions__cover-wrap" onClick={() => setExpandedGroup(group.id)}>
                    <img src={group.cover} alt={group.title} />
                    <div className="exhibitions__cover-cta">
                      {lang === 'en' ? '✦ Click to explore our latest exhibition' : '✦ Son sergimizi keşfetmek için tıklayın'}
                    </div>
                  </div>
                ) : (
                  <>
                    <button className="exhibitions__back-btn" onClick={() => setExpandedGroup(null)}>
                      {lang === 'en' ? '← Back' : '← Geri'}
                    </button>
                    <div className="exhibitions__grid">
                      {group.photos.map((photo, i) => (
                        <div
                          key={i}
                          className="exhibitions__card"
                          onClick={() => openLightbox(group.id, i)}
                        >
                          <img src={photo.src} alt={photo.alt} title={photo.alt} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {lightbox && lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>

          {showArrows && (
            <button className="lightbox-arrow lightbox-arrow--left" onClick={handlePrev} aria-label="Previous">
              ‹
            </button>
          )}

          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />

          {showArrows && (
            <button className="lightbox-arrow lightbox-arrow--right" onClick={handleNext} aria-label="Next">
              ›
            </button>
          )}
        </div>
      )}
    </div>
  )
}
