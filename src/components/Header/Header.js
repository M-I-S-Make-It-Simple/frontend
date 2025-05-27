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
            <Link className={styles.navLink} href="/index">
              <span>{t("aboutLyceum")}</span>
              <span>{t("lyceum")}</span>
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
            <Link className={styles.navLink} href="/teaching-staff">
              <span>{t("teaching")}</span>
              <span>{t("staff")}</span>
            </Link>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("transparency")}</span>
              <span>{t("management")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/regulatory-documents">
                {t("regulatoryDocuments")}
              </Link>
              <Link href="/financial-reports">{t("financialReports")}</Link>
              <Link href="/public-information">{t("publicInformation")}</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("educational")}</span>
              <span>{t("process")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/intellect">{t("intellectAndTalent")}</Link>
              <Link href="/student-self-government">
                {t("studentSelfGovernment")}
              </Link>
              <Link href="/project-research">{t("projectResearch")}</Link>
              <Link href="/patriotic-education">{t("patrioticEducation")}</Link>
              <Link href="/evaluation-criteria">{t("evaluationCriteria")}</Link>
              <Link href="/career-guidance">{t("careerGuidance")}</Link>
              <Link href="/moral-education">{t("moralEducation")}</Link>
              <Link href="/clubs-studios">{t("clubsAndStudios")}</Link>
              <Link href="/sportlife">{t("sportLife")}</Link>
              <Link href="/psychological-support">
                {t("psychologicalSupport")}
              </Link>
              <Link href="/anti-bullying">{t("antiBullying")}</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>{t("methodical")}</span>
              <span>{t("work")}</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/teacher-help">{t("teacherHelp")}</Link>
              <Link href="/qualification-improvement">
                {t("qualificationImprovement")}
              </Link>
              <Link href="/teacher-certification">
                {t("teacherCertification")}
              </Link>
              <Link href="/methodical-events">{t("methodicalEvents")}</Link>
              <Link href="/pedagogical-olympus">{t("pedagogicalOlympus")}</Link>
              <Link href="/methodical-lifehacks">
                {t("methodicalLifehacks")}
              </Link>
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
              <Link href="http://malyk.ho.ua/">{t("malikLiterarySite")}</Link>
              <Link href="https://lubnyrada.gov.ua/">
                {t("lubensCityCouncil")}
              </Link>
              <Link href="https://www.mon.gov.ua/">
                {t("ministryEducation")}
              </Link>
              <Link href="https://testportal.gov.ua">
                {t("ukrainianCenterEducation")}
              </Link>
              <Link href="https://zno-kharkiv.org.ua/">
                {t("kharkivRegionalCenter")}
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
              href="/teaching-staff"
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
                {t("regulatoryDocuments")}
              </Link>
              <Link href="/financial-reports" onClick={closeMobileMenu}>
                {t("financialReports")}
              </Link>
              <Link href="/public-information" onClick={closeMobileMenu}>
                {t("publicInformation")}
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
                {t("studentSelfGovernment")}
              </Link>
              <Link href="/project-research" onClick={closeMobileMenu}>
                {t("projectResearch")}
              </Link>
              <Link href="/patriotic-education" onClick={closeMobileMenu}>
                {t("patrioticEducation")}
              </Link>
              <Link href="/evaluation-criteria" onClick={closeMobileMenu}>
                {t("evaluationCriteria")}
              </Link>
              <Link href="/career-guidance" onClick={closeMobileMenu}>
                {t("careerGuidance")}
              </Link>
              <Link href="/moral-education" onClick={closeMobileMenu}>
                {t("moralEducation")}
              </Link>
              <Link href="/clubs-studios" onClick={closeMobileMenu}>
                {t("clubsAndStudios")}
              </Link>
              <Link href="/sportlife" onClick={closeMobileMenu}>
                {t("sportLife")}
              </Link>
              <Link href="/psychological-support" onClick={closeMobileMenu}>
                {t("psychologicalSupport")}
              </Link>
              <Link href="/anti-bullying" onClick={closeMobileMenu}>
                {t("antiBullying")}
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
                {t("teacherHelp")}
              </Link>
              <Link href="/qualification-improvement" onClick={closeMobileMenu}>
                {t("qualificationImprovement")}
              </Link>
              <Link href="/teacher-certification" onClick={closeMobileMenu}>
                {t("teacherCertification")}
              </Link>
              <Link href="/methodical-events" onClick={closeMobileMenu}>
                {t("methodicalEvents")}
              </Link>
              <Link href="/pedagogical-olympus" onClick={closeMobileMenu}>
                {t("pedagogicalOlympus")}
              </Link>
              <Link href="/methodical-lifehacks" onClick={closeMobileMenu}>
                {t("methodicalLifehacks")}
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
