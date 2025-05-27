"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

import headerLogo from "../../assets/header_lyceum_logo.png";
import languageChange from "../../assets/language_change.png";
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
            <Link className={styles.navLink} href="#">
              <span>Про</span>
              <span>ліцей</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/visitingcard">{t("ourCard")}</Link>
              <Link href="/history">{t("history")}</Link>
              <Link href="/innovative">{t("innovation")}</Link>
            </div>
          </div>

          <Link className={styles.navLink} href="/news">
            <span>{t("news")}</span>
          </Link>

          <div className={styles.navItem}>
            <Link className={styles.navLink} href="/teachingstaff">
              <span>Педагогічний</span>
              <span>колектив</span>
            </Link>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("transparency")}</span>
              <span>{t("management")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/regulatorydocuments">Нормативні документи</Link>
              <Link href="/financialreports">Фінансова звітність</Link>
              <Link href="/publicinformation">Публічна інформація</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("educational")}</span>
              <span>{t("process")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/intellect">Інтелект та обдарованість</Link>
              <Link href="/studentselfgovernment">
                Учнівське самоврядування
              </Link>
              <Link href="/projectresearch">
                Проєктно-дослідницька діяльність
              </Link>
              <Link href="/patrioticeducation">
                Національно-патріотичне виховання
              </Link>
              <Link href="/evaluationcriteria">Критерії оцінювання</Link>
              <Link href="/careerguidance">Профорієнтаційна сторінка</Link>
              <Link href="/moraleducation">Морально-етичне виховання</Link>
              <Link href="/clubsstudios">Клуби та студії</Link>
              <Link href="/sportlife">СпортLife</Link>
              <Link href="/psychologicalsupport">
                Соціально-психологічна підтримка
              </Link>
              <Link href="/antibullying">Протидія булінгу</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("methodical")}</span>
              <span>{t("work")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/teacherhelp">На допомогу вчителю</Link>
              <Link href="/qualificationimprovement">
                Підвищення кваліфікації
              </Link>
              <Link href="/teachercertification">
                Атестація педпрацівників
              </Link>
              <Link href="/methodicalevents">Основні методичні заходи</Link>
              <Link href="/pedagogicalolympus">Педагогічний Олімп</Link>
              <Link href="/methodicallifehacks">Методичні лайфхаки</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("information")}</span>
              <span>{t("page")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/parents">{t("parents")}</Link>
              <Link href="/students">{t("students")}</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("other")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="http://malyk.ho.ua/" target="_blank">Літературний сайт Володимира Малика</Link>
              <Link href="https://lubnyrada.gov.ua/" target="_blank">Лубенська міська рада</Link>
              <Link href="https://www.mon.gov.ua/" target="_blank">Міністерство освіти і науки України</Link>
              <Link href="https://testportal.gov.ua" target="_blank">Український центр оцінювання якості освіти</Link>
              <Link href="https://zno-kharkiv.org.ua/" target="_blank">
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
              src={languageChange}
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
              {t("aboutLyceumFull")}
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/visitingcard" onClick={closeMobileMenu}>
                {t("ourCard")}
              </Link>
              <Link href="/history" onClick={closeMobileMenu}>
                {t("history")}
              </Link>
              <Link href="/innovative" onClick={closeMobileMenu}>
                {t("innovation")}
              </Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="/news"
              onClick={closeMobileMenu}
            >
              {t("news")}
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="/teachingstaff"
              onClick={closeMobileMenu}
            >
              {t("teachingStaff")}
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <Link
              className={styles.mobileNavLink}
              href="#"
              onClick={closeMobileMenu}
            >
              {t("transparencyManagement")}
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
              {t("educationalProcess")}
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/intellect" onClick={closeMobileMenu}>
                {t("intellectAndTalent")}
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
                {t("sportLife")}
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
              {t("methodicalWork")}
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
              {t("informationPage")}
            </Link>
            <div className={styles.mobileDropdownContent}>
              <Link href="/parents" onClick={closeMobileMenu}>
                {t("parents")}
              </Link>
              <Link href="/students" onClick={closeMobileMenu}>
                {t("students")}
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
