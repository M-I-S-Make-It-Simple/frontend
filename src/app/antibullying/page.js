'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/antibullying.module.css';

export default function Antibullying() {
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
      title: 'Профілактика булінгу',
      text: 'У школі реалізується комплексна програма профілактики булінгу, яка включає регулярні тренінги для учнів, педагогів та батьків. Проводяться заняття з розвитку емпатії, комунікативних навичок, вирішення конфліктів. Особливу увагу приділяється формуванню культури взаємної поваги та толерантності.',
      images: ['/img/bullying1.jpg', '/img/bullying2.jpg', '/img/bullying3.jpg']
    },
    {
      id: 2,
      title: 'Система реагування',
      text: 'У школі діє ефективна система реагування на випадки булінгу. Створено службу медиації, де навчені учні-медіатори допомагають вирішувати конфліктні ситуації. Працює "телефон довіри" та електронна пошта для анонімних повідомлень про випадки булінгу.',
      images: ['/img/bullying1.jpg', '/img/bullying2.jpg', '/img/bullying3.jpg']
    },
    {
      id: 3,
      title: 'Просвітницька робота',
      text: 'Регулярно проводяться просвітницькі заходи для всіх учасників освітнього процесу: семінари, круглі столи, тематичні зустрічі. Організовуються акції та флешмоби, спрямовані на популяризацію ідеї безпечного навчального середовища. Велика увага приділяється інформаційній роботі через шкільні медіа.',
      images: ['/img/bullying1.jpg', '/img/bullying2.jpg', '/img/bullying3.jpg']
    }
  ];

  return (
    <div className={styles.antibullyingPage}>
      <div className={styles.intellectContent}>
        <h1 className={styles.intellectTitle}>Протидія булінгу</h1>
        
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