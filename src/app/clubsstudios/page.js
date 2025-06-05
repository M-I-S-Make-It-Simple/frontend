'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/clubsstudios.module.css';

export default function ClubsStudios() {
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
      title: 'Художня студія',
      text: 'Художня студія - це місце, де учні можуть розвивати свої творчі здібності та навички образотворчого мистецтва. Під керівництвом досвідчених педагогів діти вивчають різні техніки малювання, живопису, графіки та декоративно-ужиткового мистецтва. У студії проводяться майстер-класи, виставки та конкурси.',
      images: ['/img/club1.jpg', '/img/club2.jpg', '/img/club3.jpg']
    },
    {
      id: 2,
      title: 'Музичний гурток',
      text: 'Музичний гурток надає можливість учням розвивати музичні здібності та навички. Діти вивчають гру на різних музичних інструментах, спів, музичну грамоту. У гуртку формуються ансамблі та хор, які беруть участь у шкільних заходах та конкурсах.',
      images: ['/img/club1.jpg', '/img/club2.jpg', '/img/club3.jpg']
    },
    {
      id: 3,
      title: 'Театральна студія',
      text: 'Театральна студія допомагає учням розкрити свій творчий потенціал через театральне мистецтво. Діти вивчають акторську майстерність, сценічну мову, пластику, учать ролі та беруть участь у виставах. Студія сприяє розвитку комунікативних навичок та творчого мислення.',
      images: ['/img/club1.jpg', '/img/club2.jpg', '/img/club3.jpg']
    }
  ];

  return (
    <div className={styles.clubsStudiosPage}>
      <div className={styles.intellectContent}>
        <h1 className={styles.intellectTitle}>Клуби та студії</h1>
        
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