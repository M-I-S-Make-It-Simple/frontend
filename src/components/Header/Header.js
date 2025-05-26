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
            <Link className={styles.navLink} href="/">
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
              <Link href="pedagogical-olympus.html">Педагогічний Олімп</Link>
              <Link href="methodical-lifehacks.html">Методичні лайфхаки</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>Інформаційна</span>
              <span>сторінка</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Батькам</Link>
              <Link href="#">Учням</Link>
            </div>
          </div>

          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="#">
              <span>Інше</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Літературний сайт Володимира Малика</Link>
              <Link href="#">Лубенська міська рада</Link>
              <Link href="#">Міністерство освіти і науки України</Link>
              <Link href="#">Український центр оцінювання якості освіти</Link>
              <Link href="#">
                Харківський регіональний центр оцінювання якості освіти
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.languageSwitcher}>
          <Image
            src={languageChange}
            alt="languageChange"
            width={32}
            height={38}
          />
        </div>
      </nav>

      <hr />
    </header>
  );
};

export default Header;
