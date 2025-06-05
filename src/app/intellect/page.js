'use client';

import { useState } from 'react';
import styles from '@/styles/intellect.module.css';
import Image from 'next/image';
import intellect1 from "@/assets/intellect1.jpg";
import intellect2 from "@/assets/intellect2.jpg";
import intellect3 from "@/assets/intellect3.jpg";
import intellect4 from "@/assets/intellect4.jpg";
import intellect5 from "@/assets/intellect5.jpg";
import intellect6 from "@/assets/intellect6.jpg";

export default function IntellectPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleYearDropdown = () => {
    setIsYearDropdownOpen(!isYearDropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsYearDropdownOpen(false);
  };

  const handleReadMore = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const handleImageClick = (images, index) => {
    setCurrentImage(images[index]);
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const handleGalleryClose = () => {
    setGalleryOpen(false);
    setCurrentImage(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    const currentEvent = events.find((item) => item.images.includes(currentImage));
    if (currentEvent) {
      const currentIndex = currentEvent.images.indexOf(currentImage);
      const prevIndex = (currentIndex - 1 + currentEvent.images.length) % currentEvent.images.length;
      setCurrentImage(currentEvent.images[prevIndex]);
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleNextImage = () => {
    const currentEvent = events.find((item) => item.images.includes(currentImage));
    if (currentEvent) {
      const currentIndex = currentEvent.images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % currentEvent.images.length;
      setCurrentImage(currentEvent.images[nextIndex]);
      setCurrentImageIndex(nextIndex);
    }
  };

  const events = [
    {
      id: 1,
      title: 'ІІ науково-практична конференція учнівської молоді',
      text: `25 квітня відбулася ІІ Науково-практична конференція учнівської молоді "Лубенщина: минуле й сьогодення». Академічний ліцей «Європейський» представили 5 юних краєзнавців та науковців:

1. Юлія ГЛУЩЕНКО, учениця 11 класу, «Поезія О.Козинця – дороговкази світла і любові» (напрямок «Літературне краєзнавство»), науковий керівник Інна ЛЕВЧЕНКО
2. Євгенія ХОМЕНКО, учениця 11 класу, «Феномен героїзму Віктора Новікова» (напрямок «Видатні особистості Лубенщини»), науковий керівник Наталія АНТОНЕНКО
3. Марія ЛИТВИНЕНКО, учениця 9 класу, «Дослідження флористичного різноманіття та екологічних умов водних екосистем села Тишки Лубенського району Полтавської області» (напрямок «Екологічне краєзнавство»), науковий керівник Олена ПРОЗОРОВСЬКА
4. Карина ПІЦИК, учениця 8 класу, «Традиції облаштування та оздоблення хат на Лубенщині кінець ХІХ - початок ХХ ст.» (напрямок «Етнографічне краєзнавство»), науковий керівник Любов АНДРІЄВСЬКА
5. Назар УСЕНКО, учень 8 класу, «Ерозійні процеси в місті Лубни: особливості формування, чинники та шляхи стабілізації рельєфу» (напрямок «Географічне краєзнавство»), науковий керівник Лариса ЯКОВЕНКО.

Участь у краєзнавчій конференції — це не просто можливість презентувати власні дослідження, а й важливий крок до усвідомлення себе як частини великої історії. Учні вивчають традиції, події, постаті рідного краю, формують громадянську позицію, розвивають навички дослідницької діяльності та критичного мислення. Одинадцятикласниці сьогодні підсумовують свою діяльність в ліцейському науковому товаристві «ДивоСвіт», а восьмикласники вперше пробують себе в ролі юних науковців.

Усі П'ЯТЬ ЛІЦЕЇСТІВ отримали грамоти Управління освіти виконавчого комітету Лубенської міської ради Лубенського району Полтавської області ЗА КРАЩІ ДОСЛІДНИЦЬКІ ПРОЄКТИ! Їх роботи буде розміщено в збірнику матеріалів, на офіційному сайті Управління освіти виконавчого комітету Лубенської міської ради. Пишаємося ліцеїстами та їх наставниками!

Бажаємо, щоб ваша допитливість ніколи не згасала, а кожна нова сторінка краєзнавчої праці відкривала вам несподівані горизонти! Досліджуйте, відкривайте, надихайте, бо саме ви творите культурну спадщину нашого краю для наступних поколінь!`,
      images: [intellect1, intellect2, intellect3, intellect4, intellect5, intellect6]
    },
    {
      id: 2,
      title: 'Наукова конференція (20.05.2025)',
      text: `У нашому ліцеї відбулася щорічна наукова конференція, де учні представили свої дослідницькі проекти.

Найкращі проекти:

1 місце: "Інноваційні методи навчання" - Група 11-А класу
2 місце: "Екологічні проблеми сучасності" - Група 10-Б класу
3 місце: "Розвиток креативного мислення" - Група 9-А класу

Дякуємо всім учасникам за цікаві проекти!`,
      images: ['/img/event2.jpg', '/img/event2_2.jpg']
    }
  ];

  return (
    <div className={styles.intellectPage}>
      <div className={styles.intellectContent}>
        <h1 className={styles.intellectTitle}>Інтелект та обдарованість</h1>
        
        <div className={styles.yearSelector} onClick={toggleYearDropdown}>
          <span className={styles.yearText}>{selectedYear}</span>
          <div className={styles.yearDropdownIcon}></div>
          <div className={`${styles.yearDropdownContent} ${isYearDropdownOpen ? styles.active : ""}`}>
            <a href="#" onClick={() => handleYearSelect('2025')}>2025</a>
          </div>
        </div>
        
        <div className={styles.eventsList}>
          {events.map((event) => (
            <div
              key={event.id}
              className={`${styles.eventItem} ${expandedEvent === event.id ? styles.expanded : ""}`}
            >
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p
                  className={styles.eventText}
                  dangerouslySetInnerHTML={{ __html: event.text }}
                />
                <button
                  className={`${styles.readMoreBtn} ${expandedEvent === event.id ? styles.expanded : ""}`}
                  onClick={() => handleReadMore(event.id)}
                >
                  {expandedEvent === event.id ? "Згорнути" : "Читати далі"}
                </button>
              </div>
              {event.images.length > 0 && (
                <div className={styles.eventImage}>
                  <Image
                    src={event.images[0]}
                    alt="Event image"
                    width={400}
                    height={300}
                    onClick={() => handleImageClick(event.images, 0)}
                  />
                  <div 
                    className={styles.eventImageOverlay}
                    onClick={() => handleImageClick(event.images, 0)}
                  >
                    <span className={styles.viewMoreText}>Переглянути всі фото</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className={`${styles.galleryModal} ${galleryOpen ? styles.active : ""}`}>
          <div className={styles.galleryContent}>
            <Image
              src={currentImage}
              alt="Gallery image"
              width={1200}
              height={800}
            />
            <div className={styles.galleryNav}>
              <button className={styles.galleryPrev} onClick={handlePrevImage}>
                ❮
              </button>
              <button className={styles.galleryNext} onClick={handleNextImage}>
                ❯
              </button>
            </div>
            <button className={styles.galleryClose} onClick={handleGalleryClose}>
              ×
            </button>
            <div className={styles.galleryCounter}>
              {currentImageIndex + 1} /{" "}
              {events.find((item) => item.images.includes(currentImage))?.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
