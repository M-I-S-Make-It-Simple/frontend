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
import { useTranslation } from "@/contexts/TranslationProvider";

export default function MainPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const finalValues = [780, 60, 46, 6];

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
          <h1 className="welcome-text">{t("welcome")}</h1>

          <div className="text-container">
            <div className="text-box">
              <p>
                {t("welcomeDescription")}{" "}
                <span className="bold-text">{t("welcomeHighlight")}</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="useful-functions">
        <h2 className="section-title">{t("usefulFunctions")}</h2>
        <p className="section-subtitle">{t("recommendTry")}</p>

        <div className="cards-container">
          <a href="#" className="card wide-card">
            <Image src={virtualImg} alt={t("virtualTour")} />
            <div className="card-gradient"></div>
            <h3 className="card-title">{t("virtualTour")}</h3>
          </a>

          <div className="cards-row">
            <a href="#" className="card">
              <Image src={testImage} alt={t("profileTests")} />
              <div className="card-gradient"></div>
              <h3 className="card-title">{t("profileTests")}</h3>
            </a>

            <Link href="#faq-section" className="card">
              <Image src={faqImg} alt={t("faq")} />
              <div className="card-gradient"></div>
              <h3 className="card-title">{t("faq")}</h3>
            </Link>
          </div>
        </div>
      </section>

      <div ref={sectionRef} className="statistics-section">
        <div className="statistics-content">
          <div className="stat-item">
            <h2 className="stat-number">{counters[0].toLocaleString()}</h2>
            <p className="stat-text">{t("studentsCount")}</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">{counters[1].toLocaleString()}</h2>
            <p className="stat-text">{t("teachersCount")}</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">{counters[2].toLocaleString()}</h2>
            <p className="stat-text">{t("flexWinners")}</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">{counters[3].toLocaleString()}</h2>
            <p className="stat-text">{t("examResults")}</p>
          </div>
        </div>
      </div>

      <FAQSection
        options={t("faqData")}
        title={t("faqTitle")}
        image={firebirdImg}
        imageAlt="Жар-птиця"
      />
    </>
  );
}
