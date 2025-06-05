'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/studentselfgovernment.module.css';

export default function StudentSelfGovernmentPage() {
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
      title: "Вибори до учнівського самоврядування",
      text: "У нашій школі відбулися вибори до учнівського самоврядування. Участь у виборах взяли учні 5-11 класів. Кандидати представили свої програми та відповіли на запитання виборців. За результатами голосування було обрано новий склад учнівського самоврядування на 2024-2025 навчальний рік.\n\nНовий склад учнівського самоврядування вже розпочав свою роботу та планує реалізувати низку важливих проєктів для покращення навчального процесу та дозвілля учнів.",
      images: [1, 2, 3]
    },
    {
      title: "Зустріч учнівського самоврядування",
      text: "Відбулася зустріч учнівського самоврядування з адміністрацією школи. На зустрічі було обговорено актуальні питання навчального процесу, планування заходів та проєктів на поточний навчальний рік. Учнівське самоврядування представило свої ініціативи щодо покращення навчального середовища та організації дозвілля.",
      images: [2, 3]
    }
  ];

  return (
    <div className={styles.studentSelfGovernmentPage}>
      <div className={styles.intellectContent}>
        <h1 className={styles.intellectTitle}>Учнівське самоврядування</h1>
        
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
                  src={event.images[0]}
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
              src={currentImage[currentImageIndex]}
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