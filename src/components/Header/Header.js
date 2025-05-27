"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

import headerLogo from "../../assets/header_lyceum_logo.png";
import languageChange from "../../assets/language_change.png";
import enImageLang from "../../assets/en.svg";
import styles from "../../styles/HeaderFooter.module.css";
import { useTranslation } from "@/contexts/TranslationProvider";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale, changeLanguage } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={headerLogo} alt="Logo" width={52} height={52} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="/index">
              <span>Про</span>
              <span>ліцей</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/visitingcard">Наша візитка</Link>
              <Link href="/history">Історія закладу</Link>
              <Link href="/innovative">Інноваційна діяльність</Link>
            </div>
          </div>

          <Link className={styles.navLink} href="/news">
            <span>Новини</span>
          </Link>

          <div className={styles.navItem}>
            <Link className={styles.navLink} href="/teaching-staff">
              <span>Педагогічний</span>
              <span>колектив</span>
            </Link>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>Прозорість</span>
              <span>управління</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/regulatory-documents">Нормативні документи</Link>
              <Link href="/financial-reports">Фінансова звітність</Link>
              <Link href="/public-information">Публічна інформація</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>Освітній</span>
              <span>процес</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/intellect">Інтелект та обдарованість</Link>
              <Link href="/student-self-government">
                Учнівське самоврядування
              </Link>
              <Link href="/project-research">
                Проєктно-дослідницька діяльність
              </Link>
              <Link href="/patriotic-education">
                Національно-патріотичне виховання
              </Link>
              <Link href="/evaluation-criteria">Критерії оцінювання</Link>
              <Link href="/career-guidance">Профорієнтаційна сторінка</Link>
              <Link href="/moral-education">Морально-етичне виховання</Link>
              <Link href="/clubs-studios">Клуби та студії</Link>
              <Link href="/sportlife">СпортLife</Link>
              <Link href="/psychological-support">
                Соціально-психологічна підтримка
              </Link>
              <Link href="/anti-bullying">Протидія булінгу</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>Методична</span>
              <span>робота</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/teacher-help">На допомогу вчителю</Link>
              <Link href="/qualification-improvement">
                Підвищення кваліфікації
              </Link>
              <Link href="/teacher-certification">
                Атестація педпрацівників
              </Link>
              <Link href="/methodical-events">Основні методичні заходи</Link>
              <Link href="/pedagogical-olympus">Педагогічний Олімп</Link>
              <Link href="/methodical-lifehacks">Методичні лайфхаки</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>Інформаційна</span>
              <span>сторінка</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/parents">Батькам</Link>
              <Link href="/students">Учням</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>Інше</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="http://malyk.ho.ua/">
                Літературний сайт Володимира Малика
              </Link>
              <Link href="https://lubnyrada.gov.ua/">
                Лубенська міська рада
              </Link>
              <Link href="https://www.mon.gov.ua/">
                Міністерство освіти і науки України
              </Link>
              <Link href="https://testportal.gov.ua">
                Український центр оцінювання якості освіти
              </Link>
              <Link href="https://zno-kharkiv.org.ua/">
                Харківський регіональний центр оцінювання якості освіти
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.languageSwitcher}>
          <Box
            onClick={() => {
              changeLanguage(locale === "uk" ? "en" : "uk");
            }}
          >
            <Image
              src={locale === "uk" ? languageChange : enImageLang}
              alt="languageChange"
              width={32}
              height={38}
            />
          </Box>
        </div>

        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>
      </nav>

      <div
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ""}`}
        onClick={closeMobileMenu}
      ></div>

      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <button
            className={styles.closeButton}
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>

        <div className={styles.mobileNavLinks}>
          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="/index"
              onClick={closeMobileMenu}
            >
              Про ліцей
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/visitingcard" onClick={closeMobileMenu}>
                Наша візитка
              </Link>
              <Link href="/history" onClick={closeMobileMenu}>
                Історія закладу
              </Link>
              <Link href="/innovative" onClick={closeMobileMenu}>
                Інноваційна діяльність
              </Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="/news"
              onClick={closeMobileMenu}
            >
              Новини
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="/teaching-staff"
              onClick={closeMobileMenu}
            >
              Педагогічний колектив
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="#"
              onClick={closeMobileMenu}
            >
              Прозорість управління
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/regulatory-documents" onClick={closeMobileMenu}>
                Нормативні документи
              </Link>
              <Link href="/financial-reports" onClick={closeMobileMenu}>
                Фінансова звітність
              </Link>
              <Link href="/public-information" onClick={closeMobileMenu}>
                Публічна інформація
              </Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="#"
              onClick={closeMobileMenu}
            >
              Освітній процес
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/intellect" onClick={closeMobileMenu}>
                Інтелект та обдарованість
              </Link>
              <Link href="/student-self-government" onClick={closeMobileMenu}>
                Учнівське самоврядування
              </Link>
              <Link href="/project-research" onClick={closeMobileMenu}>
                Проєктно-дослідницька діяльність
              </Link>
              <Link href="/patriotic-education" onClick={closeMobileMenu}>
                Національно-патріотичне виховання
              </Link>
              <Link href="/evaluation-criteria" onClick={closeMobileMenu}>
                Критерії оцінювання
              </Link>
              <Link href="/career-guidance" onClick={closeMobileMenu}>
                Профорієнтаційна сторінка
              </Link>
              <Link href="/moral-education" onClick={closeMobileMenu}>
                Морально-етичне виховання
              </Link>
              <Link href="/clubs-studios" onClick={closeMobileMenu}>
                Клуби та студії
              </Link>
              <Link href="/sportlife" onClick={closeMobileMenu}>
                СпортLife
              </Link>
              <Link href="/psychological-support" onClick={closeMobileMenu}>
                Соціально-психологічна підтримка
              </Link>
              <Link href="/anti-bullying" onClick={closeMobileMenu}>
                Протидія булінгу
              </Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="#"
              onClick={closeMobileMenu}
            >
              Методична робота
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/teacher-help" onClick={closeMobileMenu}>
                На допомогу вчителю
              </Link>
              <Link href="/qualification-improvement" onClick={closeMobileMenu}>
                Підвищення кваліфікації
              </Link>
              <Link href="/teacher-certification" onClick={closeMobileMenu}>
                Атестація педпрацівників
              </Link>
              <Link href="/methodical-events" onClick={closeMobileMenu}>
                Основні методичні заходи
              </Link>
              <Link href="/pedagogical-olympus" onClick={closeMobileMenu}>
                Педагогічний Олімп
              </Link>
              <Link href="/methodical-lifehacks" onClick={closeMobileMenu}>
                Методичні лайфхаки
              </Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="#"
              onClick={closeMobileMenu}
            >
              Інформаційна сторінка
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/parents" onClick={closeMobileMenu}>
                Батькам
              </Link>
              <Link href="/students" onClick={closeMobileMenu}>
                Учням
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </header>
  );
};

export default Header;
