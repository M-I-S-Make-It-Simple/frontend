"use client";

import Image from "next/image";
import newsPhoto11 from "@/assets/news_photo1.1.png";
import newsPhoto12 from "@/assets/news_photo1.2.png";
import newsPhoto21 from "@/assets/news_photo2.1.png";
import newsPhoto22 from "@/assets/news_photo2.2.png";
import newsPhoto23 from "@/assets/news_photo2.3.png";
import styles from "@/styles/news.module.css";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [expandedNews, setExpandedNews] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const loadNews = async () => {
    try {
      console.log(" --- start ---");
      const response = await fetch(
        "https://admin-panel-git-new-branch-slava-v-ukrainis-projects.vercel.app/api/news",
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("News loaded:", data);

      // Обновите состояние
      // setNews(data); // или как у вас называется state

      return data;
    } catch (error) {
      console.error("Error loading news:", error);

      return null;
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const news = [
    {
      id: 1,
      title:
        'Олімпіада "Всесвіт знань. Весна-2025" з української мови (23.05.2025)',
      text: `Старшокласники Академічного ліцею "Європейський" продемонстрували глибокі знання та любов до рідного слова, узявши участь у Всеукраїнській дистанційній олімпіаді "Всесвіт знань. Весна-2025" з української мови.

З великою гордістю повідомляємо, що серед учасників є наші переможці:

1 місце: Глущенко Юлія, Єрченко Анастасія, Хоменко Євгенія,
2 місце: Москаленко Софія, Гребінник Дар'я, Петренко Олександр,
3 місце: Корнієнко Ангеліна, Андрієвська Віра, Моротченко Яна, Гашко Поліна (учитель -Тетяна Хоменко).

Щиро вітаємо всіх учнів, які долучилися до цього інтелектуального змагання, та бажаємо подальших успіхів!`,
      images: [newsPhoto11, newsPhoto12],
    },
    {
      id: 2,
      title:
        "Обласний літературний конкурс «Відлуння заповітів земляків» (23.05.2025)",
      text: `20 травня в Полтаві відбувся обласний літературний конкурс «Відлуння заповітів земляків», присвячений 90-річчю від дня народження нашого земляка, видатного українського поета Василя Симоненка.

Академічний ліцей "Європейський" гідно представила Євгенія ХОМЕНКО, учениця 11-Б класу, яка виступила в номінації «Дослідницька робота». Її науковим керівником стала вчителька української мови та літератури Інна ЛЕВЧЕНКО.

У своєму дослідженні Євгенія розкрила глибину художнього слова Василя Симоненка, поєднавши науковий аналіз із творчим підходом. Захист учениці супроводжувався зворушливим виконанням пісні на слова "витязя молодої української поезії".

За підсумками конкурсу Євгенія ХОМЕНКО нагороджена Дипломом ІІІ ступеня. Щиро вітаємо одинадцятикласницю та її наставницю — Інну ЛЕВЧЕНКО — з високою відзнакою, бажаємо нових творчих і наукових здобутків!`,
      images: [newsPhoto21, newsPhoto22, newsPhoto23],
    },
    {
      id: 3,
      title: "Міжнародний конкурс з англійської мови (18.05.2025)",
      text: `Наші учні успішно представили ліцей на Міжнародному конкурсі з англійської мови, показавши відмінне володіння мовою та знання культури англомовних країн.

Результати конкурсу:

1 місце: Марченко Катерина, Лисенко Олександр
2 місце: Кравченко Юлія, Ткаченко Максим
3 місце: Гончаренко Анна, Шевчук Олег (учитель - Марія Сидоренко)

Пишаємося нашими учнями та їх досягненнями!`,
      images: [],
    },
    {
      id: 4,
      title: 'Науково-практична конференція "Молоді дослідники" (15.05.2025)',
      text: `У нашому ліцеї відбулася щорічна науково-практична конференція "Молоді дослідники", де учні представили свої наукові проекти та дослідження.

Переможці конференції:

1 місце: Проект "Екологічні проблеми сучасності" - Група 10-А класу
2 місце: Проект "Інноваційні технології в освіті" - Група 11-Б класу
3 місце: Проект "Розвиток креативного мислення" - Група 9-В класу

Дякуємо всім учасникам за цікаві проекти та наукові дослідження!`,
      images: [],
    },
  ];

  const handleReadMore = (id) => {
    setExpandedNews(expandedNews === id ? null : id);
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
    const currentNews = news.find((item) => item.images.includes(currentImage));
    if (currentNews) {
      const currentIndex = currentNews.images.indexOf(currentImage);
      const prevIndex =
        (currentIndex - 1 + currentNews.images.length) %
        currentNews.images.length;
      setCurrentImage(currentNews.images[prevIndex]);
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleNextImage = () => {
    const currentNews = news.find((item) => item.images.includes(currentImage));
    if (currentNews) {
      const currentIndex = currentNews.images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % currentNews.images.length;
      setCurrentImage(currentNews.images[nextIndex]);
      setCurrentImageIndex(nextIndex);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.gradientBg}></div>
      </div>

      <main className={styles.newsMain}>
        <h2 className={styles.newsStreamTitle}>Стрічка новин</h2>

        <div className={styles.newsList}>
          {news.map((item) => (
            <div
              key={item.id}
              className={`${styles.newsItem} ${expandedNews === item.id ? styles.expanded : ""}`}
            >
              <div className={styles.newsContent}>
                <h3 className={styles.newsItemTitle}>{item.title}</h3>
                <p
                  className={styles.newsItemText}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
                <button
                  className={`${styles.readMoreBtn} ${expandedNews === item.id ? styles.expanded : ""}`}
                  onClick={() => handleReadMore(item.id)}
                >
                  {expandedNews === item.id ? "Згорнути" : "Читати далі"}
                </button>
              </div>
              {item.images.length > 0 && (
                <div className={styles.newsImage}>
                  <Image
                    src={item.images[0]}
                    alt="News image"
                    width={400}
                    height={300}
                    onClick={() => handleImageClick(item.images, 0)}
                  />
                  <a
                    href="#"
                    className={styles.newsImageOverlay}
                    onClick={(e) => {
                      e.preventDefault();
                      handleImageClick(item.images, 0);
                    }}
                  >
                    <span className={styles.viewMoreText}>
                      Переглянути більше
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div
          className={`${styles.galleryModal} ${galleryOpen ? styles.active : ""}`}
        >
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
            <button
              className={styles.galleryClose}
              onClick={handleGalleryClose}
            >
              ×
            </button>
            <div className={styles.galleryCounter}>
              {currentImageIndex + 1} /{" "}
              {
                news.find((item) => item.images.includes(currentImage))?.images
                  .length
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
