"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/assets/logo_without_background.ico.png";
import firebirdImg from "@/assets/firebird.png";
import virtualImg from "@/assets/virtual.jpg";
import testImage from "@/assets/test.jpg";
import faqImg from "@/assets/FAQ.jpg";
import Link from "next/link";
import FAQSection from "@/components/FAQSection/FAQSection";

export default function MainPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const finalValues = [780, 60, 46, 6];

  // FAQ данні
  const faqOptions = [
    {
      label: "Які іноземні мови у вас вивчаються?",
      text: "Англійська мова як перша іноземна та німецька/французька як друга іноземна мова.",
    },
    {
      label: "Який формат навчання у вашому закладі?",
      text: "Усі класи, крім 6 і 7 знаходяться на офлайн навчанні, відвідуючи школу щодня. Паралелі 6-7 класів — на змішаному. Вони ходять до школи через день.",
    },
    {
      label: "Які профілі навчання пропонуються в десятих класах?",
      text: "Іноземна філологія, українська філологія, історичний профіль, математичний, хіміко-біологічний, фізико-математичний.",
    },
    {
      label: "Які гуртки пропонує ваш навчальний заклад?",
      text: "Вокал, хореографія, спортивні секції, театральна студія, художній гурток.",
    },
    {
      label: "Чи проводиться набір у 5-ті класи?",
      text: "Так. Починаючи з 5-го класу буде реалізуватися допрофільне навчання з англійської мови та математики.",
    },
    {
      label: "Який режим роботи закладу під час повітряної тривоги?",
      text: "Уроки продовжуються в безпечному місці.",
    },
  ];

  const animateNumber = (start, end, duration, callback) => {
    const startTime = Date.now();
    const range = end - start;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + range * easeOutQuart);

      callback(current);

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          finalValues.forEach((value, index) => {
            setTimeout(() => {
              animateNumber(0, value, 2000, (current) => {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = current;
                  return newCounters;
                });
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <>
      <div className="container">
        <div className="background">
          <div className="gradient-bg"></div>
          <div className="logo-image-bg">
            <Image src={logo} alt="Background Logo" />
          </div>
        </div>

        <div className="content">
          <h1 className="welcome-text">Ласкаво просимо!</h1>

          <div className="text-container">
            <div className="text-box">
              <p>
                Якщо Ви шукаєте друзів і партнерів, цікавитеся системою освіти в
                Україні та хочете переконатися, як вона діє на практиці, маєте
                бажання віртуально повернутися в дитинство чи поспілкуватися зі
                своїми вчителями, поділитися життєвими надбаннями, дати добру
                пораду чи отримати її, або ж намірилися надати нашому ліцею
                спонсорську допомогу,{" "}
                <span className="bold-text">
                  ласкаво запрошуємо на наш офіційний сайт
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="useful-functions">
        <h2 className="section-title">Корисні функції нашого сайту</h2>
        <p className="section-subtitle">Рекомендуємо спробувати!</p>

        <div className="cards-container">
          <a href="#" className="card wide-card">
            <Image src={virtualImg} alt="Віртуальна прогулянка" />
            <div className="card-gradient"></div>
            <h3 className="card-title">Віртуальна прогулянка</h3>
          </a>

          <div className="cards-row">
            <a href="#" className="card">
              <Image src={testImage} alt="Профільні тести" />
              <div className="card-gradient"></div>
              <h3 className="card-title">Профільні тести</h3>
            </a>

            <Link href="#faq-section" className="card">
              <Image src={faqImg} alt="FAQ" />
              <div className="card-gradient"></div>
              <h3 className="card-title">FAQ</h3>
            </Link>
          </div>
        </div>
      </section>

      <div ref={sectionRef} className="statistics-section">
        <div className="statistics-content">
          <div className="stat-item">
            <h2 className="stat-number">{counters[0].toLocaleString()}</h2>
            <p className="stat-text">учнів здобувають освіту у нашому ліцеї</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">{counters[1].toLocaleString()}</h2>
            <p className="stat-text">вчителів працюють у ліцеї на даний час</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">{counters[2].toLocaleString()}</h2>
            <p className="stat-text">
              переможців національної програми обміну FLEX
            </p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">{counters[3].toLocaleString()}</h2>
            <p className="stat-text">учнів склали НМТ 2024 на 200 балів</p>
          </div>
        </div>
      </div>

      <FAQSection
        options={faqOptions}
        title="FAQ (поширені запитання)"
        image={firebirdImg}
        imageAlt="Жар-птиця"
      />
    </>
  );
}
