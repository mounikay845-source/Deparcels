import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PromoCard = ({ onClaim }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: t('promo1_badge'),
      title: t('promo1_title'),
      desc: t('promo1_desc'),
      btnText: t('promo1_btn'),
      bgGradient: 'linear-gradient(135deg, #FF8800 0%, #FF4500 100%)',
      action: () => onClaim('food')
    },
    {
      id: 2,
      badge: t('promo2_badge'),
      title: t('promo2_title'),
      desc: t('promo2_desc'),
      btnText: t('promo2_btn'),
      bgGradient: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
      action: () => onClaim('custom')
    }
  ];

  // Auto-slide interval every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="promo-carousel-container">
      <div
        className="promo-carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="promo-slide-item"
            style={{ background: slide.bgGradient }}
            onClick={slide.action}
          >
            <div className="promo-slide-content">
              <span className="promo-slide-badge">{slide.badge}</span>
              <h3 className="promo-slide-title">{slide.title}</h3>
              <p className="promo-slide-desc">{slide.desc}</p>
              <button type="button" className="btn-promo-claim">
                {slide.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Pagination Dots */}
      <div className="promo-carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};
