import Link from "next/link";
import Image from "next/image";

import headerLogo from "../../assets/header_lyceum_logo.png";
import languageChange from "../../assets/language_change.png";
import styles from "../../styles/HeaderFooter.module.css";

const Header = () => {
  return (
  <header className={styles.header}>
  <nav className={styles.navContainer}>
    <div className={styles.logo}>
      <Image src={headerLogo} alt="Logo" width={52} height={52} />
    </div>

    <div className={styles.navLinks}>
      <div className={`${styles.navItem} ${styles.dropdown}`}>
        <a className={styles.navLink} href="index.html">
          <span>Про</span><span>ліцей</span>
        </a>
        <div className={styles.dropdownContent}>
          <a href="visitingcard.html">Наша візитка</a>
          <a href="history.html">Історія закладу</a>
          <a href="innovative.html">Інноваційна діяльність</a>
        </div>
      </div>

      <a className={styles.navLink} href="news.html">
        <span>Новини</span>
      </a>

      <div className={styles.navItem}>
        <a className={styles.navLink} href="teaching-staff.html">
          <span>Педагогічний</span><span>колектив</span>
        </a>
      </div>

      <div className={`${styles.navItem} ${styles.dropdown}`}>
        <a className={styles.navLink} href="#">
          <span>Прозорість</span><span>управління</span>
        </a>
        <div className={styles.dropdownContent}>
          <a href="regulatory-documents.html">Нормативні документи</a>
          <a href="financial-reports.html">Фінансова звітність</a>
          <a href="public-information.html">Публічна інформація</a>
        </div>
      </div>

      <div className={`${styles.navItem} ${styles.dropdown}`}>
        <a className={styles.navLink} href="#">
          <span>Освітній</span><span>процес</span>
        </a>
        <div className={styles.dropdownContent}>
          <a href="intellect.html">Інтелект та обдарованість</a>
          <a href="student-self-government.html">Учнівське самоврядування</a>
          <a href="project-research.html">Проєктно-дослідницька діяльність</a>
          <a href="patriotic-education.html">Національно-патріотичне виховання</a>
          <a href="evaluation-criteria.html">Критерії оцінювання</a>
          <a href="career-guidance.html">Профорієнтаційна сторінка</a>
          <a href="moral-education.html">Морально-етичне виховання</a>
          <a href="clubs-studios.html">Клуби та студії</a>
          <a href="sportlife.html">СпортLife</a>
          <a href="psychological-support.html">Соціально-психологічна підтримка</a>
          <a href="anti-bullying.html">Протидія булінгу</a>
        </div>
      </div>

      <div className={`${styles.navItem} ${styles.dropdown}`}>
        <a className={styles.navLink} href="#">
          <span>Методична</span><span>робота</span>
        </a>
        <div className={styles.dropdownContent}>
          <a href="teacher-help.html">На допомогу вчителю</a>
          <a href="qualification-improvement.html">Підвищення кваліфікації</a>
          <a href="teacher-certification.html">Атестація педпрацівників</a>
          <a href="methodical-events.html">Основні методичні заходи</a>
          <a href="pedagogical-olympus.html">Педагогічний Олімп</a>
          <a href="methodical-lifehacks.html">Методичні лайфхаки</a>
        </div>
      </div>

      <div className={`${styles.navItem} ${styles.dropdown}`}>
        <a className={styles.navLink} href="#">
          <span>Інформаційна</span><span>сторінка</span>
        </a>
        <div className={styles.dropdownContent}>
          <a href="#">Батькам</a>
          <a href="#">Учням</a>
        </div>
      </div>

      <div className={`${styles.navItem} ${styles.dropdown}`}>
        <a className={styles.navLink} href="#">
          <span>Інше</span>
        </a>
        <div className={styles.dropdownContent}>
          <a href="#">Літературний сайт Володимира Малика</a>
          <a href="#">Лубенська міська рада</a>
          <a href="#">Міністерство освіти і науки України</a>
          <a href="#">Український центр оцінювання якості освіти</a>
          <a href="#">Харківський регіональний центр оцінювання якості освіти</a>
        </div>
      </div>
    </div>

    <div className={styles.languageSwitcher}>
      <Image src={languageChange} alt="languageChange" width={32} height={38} />
    </div>
  </nav>

  <hr />
</header>
  );
};

export default Header;
