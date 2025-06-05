'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/projectresearch.module.css';

export default function ProjectResearchPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState({});
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleYearDropdown = () => {
    setIsYearDropdownOpen(!isYearDropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsYearDropdownOpen(false);
  };

  const toggleEvent = (index) => {
    setExpandedEvents(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openGallery = (images, index) => {
    setCurrentImage(images);
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentImage && currentImageIndex < currentImage.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImage && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const events = [
    {
      title: "Науково-практична конференція 'Перші кроки в науку'",
      text: "У нашій школі відбулася науково-практична конференція 'Перші кроки в науку', де учні представили свої дослідницькі проєкти. У конференції взяли участь учні 5-11 класів, які презентували роботи з різних галузей науки.\n\nОсобливу увагу привернули проєкти з екології, фізики та біології. Експертне журі відзначило високий рівень підготовки учасників та оригінальність досліджень. Найкращі роботи будуть представлені на міському етапі конференції.",
      images: [1, 2, 3]
    },
    {
      title: "Захист наукових проєктів",
      text: "Відбувся захист наукових проєктів учнів 9-11 класів. Учні представили результати своїх досліджень, які вони проводили протягом навчального року. Особливу увагу привернули проєкти з математики та інформатики, які демонстрували практичне застосування теоретичних знань.",
      images: [2, 3]
    }
  ];

  return (
    <div className={styles.projectResearchPage}>
      <div className={styles.intellectContent}>
        <h1 className={styles.intellectTitle}>Проєктно-дослідницька робота</h1>
        
        <div className={styles.yearSelector} onClick={toggleYearDropdown}>
          <span className={styles.yearText}>{selectedYear}</span>
          <div className={styles.yearDropdownIcon}></div>
          <div className={`${styles.yearDropdownContent} ${isYearDropdownOpen ? styles.active : ''}`}>
            <a href="#" onClick={() => handleYearSelect('2025')}>2025</a>
          </div>
        </div>
        
        <div className={styles.eventsList}>
          {events.map((event, index) => (
            <div key={index} className={`${styles.eventItem} ${expandedEvents[index] ? styles.expanded : ''}`}>
              <div className={styles.eventContent}>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <p className={styles.eventText}>{event.text}</p>
                <button 
                  className={`${styles.readMoreBtn} ${expandedEvents[index] ? styles.expanded : ''}`}
                  onClick={() => toggleEvent(index)}
                >
                  Читати далі
                </button>
              </div>
              <div className={styles.eventImage}>
                <Image
                  src={`/img/project${event.images[0]}.jpg`}
                  alt={event.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div 
                  className={styles.eventImageOverlay}
                  onClick={() => openGallery(event.images, 0)}
                >
                  <span className={styles.viewMoreText}>Переглянути всі фото</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <div className={`${styles.galleryModal} ${isGalleryOpen ? styles.active : ''}`}>
        <div className={styles.galleryContent}>
          {currentImage && (
            <Image
              src={`/img/project${currentImage[currentImageIndex]}.jpg`}
              alt="Gallery image"
              fill
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>
        <div className={styles.galleryNav}>
          <button onClick={prevImage}>←</button>
          <button onClick={nextImage}>→</button>
        </div>
        <button className={styles.galleryClose} onClick={closeGallery}>×</button>
        {currentImage && (
          <div className={styles.galleryCounter}>
            {currentImageIndex + 1} / {currentImage.length}
          </div>
        )}
      </div>
    </div>
  );
} 