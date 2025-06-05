'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/patrioticeducation.module.css';

export default function PatrioticEducation() {
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

  const toggleEvent = (eventId) => {
    setExpandedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  const openGallery = (images, index) => {
    setCurrentImage(images[index]);
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentImage(null);
  };

  const nextImage = (images) => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = (images) => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const events = [
    {
      id: 1,
      title: 'Вшанування пам\'яті Героїв Небесної Сотні',
      text: 'Урочисте вшанування пам\'яті Героїв Небесної Сотні. Учні школи взяли участь у мітингу-реквіємі, поклали квіти до меморіалу, підготували літературно-музичну композицію. Після урочистостей відбувся круглий стіл "Уроки Революції Гідності" з учасниками подій 2014 року.',
      images: ['/img/patriotic1.jpg', '/img/patriotic2.jpg', '/img/patriotic3.jpg']
    },
    {
      id: 2,
      title: 'Свято Незалежності України',
      text: 'Урочисте святкування Дня Незалежності України. Учні підготували концертну програму з патріотичними піснями та танцями. Відбувся конкурс малюнків "Моя Україна", виставка народного мистецтва, спортивні змагання. Завершилося свято урочистим флешмобом "Жива прапор України".',
      images: ['/img/patriotic1.jpg', '/img/patriotic2.jpg', '/img/patriotic3.jpg']
    },
    {
      id: 3,
      title: 'Військово-патріотична гра "Сокіл"',
      text: 'Щорічна військово-патріотична гра "Сокіл" для учнів 8-11 класів. Учасники змагалися у військовій підготовці, медичній допомозі, туристичних навичках. Гра сприяє вихованню патріотизму, розвитку фізичної підготовки та командного духу.',
      images: ['/img/patriotic1.jpg', '/img/patriotic2.jpg', '/img/patriotic3.jpg']
    }
  ];

  return (
    <div className={styles.patrioticEducationPage}>
      <div className={styles.intellectContent}>
        <h1 className={styles.intellectTitle}>Національно-патріотичне виховання</h1>
        
        <div className={styles.yearSelector} onClick={toggleYearDropdown}>
          <span className={styles.yearText}>{selectedYear}</span>
          <div className={styles.yearDropdownIcon}></div>
          <div className={`${styles.yearDropdownContent} ${isYearDropdownOpen ? styles.active : ''}`}>
            <a onClick={() => handleYearSelect('2025')}>2025</a>
          </div>
        </div>

        <div className={styles.eventsList}>
          {events.map((event) => (
            <div key={event.id} className={`${styles.eventItem} ${expandedEvents[event.id] ? styles.expanded : ''}`}>
              <div className={styles.eventContent}>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <p className={styles.eventText}>{event.text}</p>
                <button 
                  className={`${styles.readMoreBtn} ${expandedEvents[event.id] ? styles.expanded : ''}`}
                  onClick={() => toggleEvent(event.id)}
                >
                  {expandedEvents[event.id] ? 'Згорнути' : 'Читати далі'}
                </button>
              </div>
              <div className={styles.eventImage}>
                <Image
                  src={event.images[0]}
                  alt={event.title}
                  width={500}
                  height={300}
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

      {isGalleryOpen && currentImage && (
        <div className={`${styles.galleryModal} ${isGalleryOpen ? styles.active : ''}`}>
          <div className={styles.galleryContent}>
            <Image
              src={currentImage}
              alt="Gallery"
              width={1200}
              height={800}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.galleryNav}>
              <button onClick={() => prevImage(events[0].images)}>❮</button>
              <button onClick={() => nextImage(events[0].images)}>❯</button>
            </div>
            <button className={styles.galleryClose} onClick={closeGallery}>×</button>
            <div className={styles.galleryCounter}>
              {currentImageIndex + 1} / {events[0].images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 