import instagramImage from "../../assets/Instagram.png";
import youTubeImage from "../../assets/YouTube.png";
import facebookImage from "../../assets/Facebook.png";
import Image from "next/image";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className="container">
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>
              Слідкуйте за нашими оновленнями !
            </h3>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/european_lyceum_?igsh=OHlpMzNmaWU1bnQx"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagramImage}
                  alt="Instagram"
                  width={52}
                  height={52}
                />
              </a>
              <a
                href="https://www.youtube.com/c/SolarTVLubny"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={youTubeImage}
                  alt="YouTube"
                  width={79}
                  height={52}
                />
              </a>
              <a
                href="https://www.facebook.com/share/19q3p763W2/?mibextid=wwXIfr"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebookImage}
                  alt="Facebook"
                  width={30}
                  height={52}
                />
              </a>
            </div>
          </div>
          <div className={styles.addressSection}>
            <h3>Адреса</h3>
            <p className={styles.addressText}>
              37500 м.Лубни Полтавської
              <br />
              області, вул. Монастирська, 36
            </p>
          </div>
          <div className={styles.contactsSection}>
            <h3>Контакти</h3>
            <p className={styles.contactsText}>
              <a href="tel: (053) 617 08 38">(053) 617 08 38</a>
              <br />
              <a href="mailto:schoolsuncity@ukr.net">schoolsuncity@ukr.net</a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
