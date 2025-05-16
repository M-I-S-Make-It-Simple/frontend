import Link from "next/link";
import Image from "next/image";

import headerLogo from "../../assets/header_lyceum_logo.png";
import styles from "../../styles/HeaderFooter.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <Image src={headerLogo} alt="Logo" width={100} />
        </div>
        <div className={styles.navLinks}>
          <div className={`${styles.navItem} ${styles.dropdown}`}>
            <Link className={styles.navLink} href="/public">
              <span>Про</span>
              <span>ліцей</span>
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/visitingcard">Наша візитка</Link>
              <Link href="/history">Історія закладу</Link>
              <Link href="/innovative">Інноваційна діяльність</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
