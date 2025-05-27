import Image from 'next/image';
import teachers from '@/assets/teachers.jpg';
import logoPictureVisitCard from '@/assets/logo_picture_visit_card.jpg';
import studyingClass from '@/assets/studying_class.jpg';
import galochka from '@/assets/galochka.png';
import styles from '@/styles/visitingcard.module.css';

export default function VisitingCardPage() {
  return (
    <div className={styles.visitingCardPage}>
      <main>
        {/* Секція: Наша візитка */}
        <section className={`${styles.section} ${styles.ourCard} ${styles.active}`}>
          <h1 className={styles.ourCardTitle}>Наша візитка</h1>
          <div className={styles.ourCardContent}>
            <div className={styles.ourCardImageContainer}>
              <Image src={teachers} alt="Колектив вчителів" className={styles.ourCardImage} width={710} height={400} />
            </div>
            <div className={styles.ourCardInfo}>
              <div className={styles.mainInfoRow}>
                <div className={`${styles.infoBlock} ${styles.mainInfo}`}>
                  <div className={styles.infoContent}>
                    <h2><span>Академічний ліцей</span><span>"Європейський"</span></h2>
                    <p className={styles.location}>м. Лубни, Полтавської області</p>
                    <p className={styles.motto}>"Наші знання - на користь Україні"</p>
                  </div>
                  <Image src={logoPictureVisitCard} alt="Logo" className={styles.infoLogo} width={105} height={105} />
                </div>
                <div className={`${styles.infoBlock} ${styles.specialization}`}>
                  <h3>Спеціалізація</h3>
                  <p>поглиблене вивчення англійської мови</p>
                </div>
              </div>
              <div className={styles.staffInfoRow}>
                <div className={styles.staffInfoColumn}>
                  <div className={styles.infoRow}>
                    <div className={`${styles.infoBlock} ${styles.teachers}`}>
                      <h3>Вчителів</h3>
                      <p>62</p>
                    </div>
                    <div className={`${styles.infoBlock} ${styles.anthem}`}>
                      <h3>Гімн ліцею</h3>
                      <p><a href="https://www.youtube.com/watch?v=7RArC-RZP74&t=2s" target="_blank" rel="noopener noreferrer">покликання &gt;</a></p>
                    </div>
                  </div>
                  <div className={styles.infoRow}>
                    <div className={`${styles.infoBlock} ${styles.totalStaff}`}>
                      <h3>Усього працівників</h3>
                      <p>89</p>
                    </div>
                    <div className={`${styles.infoBlock} ${styles.language}`}>
                      <h3>Мова навчання</h3>
                      <p>українська</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.infoBlock} ${styles.license}`}>
                  <h3>Ліцензований обсяг здобувачів освіти</h3>
                  <p>712</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={`${styles.infoBlock} ${styles.name}`}>
                  <h3>Власне ім'я</h3>
                  <p>The Sun City (Місто Сонця)</p>
                </div>
                <div className={`${styles.infoBlock} ${styles.classes}`}>
                  <h3>Кількість класів</h3>
                  <p>32</p>
                </div>
                <div className={`${styles.infoBlock} ${styles.students}`}>
                  <h3>Фактична<br />к-сть учнів</h3>
                  <p>808</p>
                </div>
              </div>
              <div className={`${styles.infoBlock} ${styles.contacts}`}>
                <div className={styles.address}>
                  <h3>Адреса</h3>
                  <p>вул. Монастирська, 36<br />м. Лубни Полтавської<br />області; 37500</p>
                </div>
                <div className={styles.contactInfo}>
                  <h3>Контакти</h3>
                  <p>0536170838<br />schoolsuncity@ukr.net</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секція: Територія обслуговування */}
        <section id="service-area" className={styles.section}>
          <h1 className={styles.serviceAreaTitle}>Територія обслуговування</h1>
          <div className={styles.serviceAreaContent}>
            <div className={styles.addressColumn}>
              <div className={styles.addressBlock}><p>вул. Вишневецьких</p></div>
              <div className={styles.addressBlock}><p>вул. Монастирська</p></div>
              <div className={styles.addressBlock}><p>вул. Кузні</p></div>
            </div>
            <div className={styles.addressColumn}>
              <div className={styles.addressBlock}><p>вул. Євгенія Чикаленка з І і ІІ провулками</p></div>
              <div className={styles.addressBlock}><p>вул. Грушевського</p></div>
              <div className={styles.addressBlock}><p>вул. Петра Лубенського</p></div>
            </div>
            <div className={styles.addressColumn}>
              <div className={styles.addressBlock}><p>вул. Свободи</p></div>
              <div className={styles.addressBlock}><p>вул. Ботанічна</p></div>
              <div className={styles.addressBlock}><p>вул. Андрія Жука з тупиком</p></div>
            </div>
          </div>
        </section>

        {/* Секція: В ліцеї працюють */}
        <section id="staff" className={styles.section}>
          <div className={styles.staffContent}>
            <h1 className={styles.staffTitle}>В ліцеї працюють</h1>
            <div className={styles.staffItem}>
              <div className={styles.staffMarker}></div>
              <div className={styles.staffInfo}>
                <h3 className={styles.staffName}>«Дивосвіт»</h3>
                <p className={styles.staffDescription}>наукове товариство</p>
              </div>
            </div>
            <div className={styles.staffItem}>
              <div className={styles.staffMarker}></div>
              <div className={styles.staffInfo}>
                <h3 className={styles.staffName}>«LINK»</h3>
                <p className={styles.staffDescription}>європейський клуб</p>
              </div>
            </div>
            <div className={styles.staffItem}>
              <div className={styles.staffMarker}></div>
              <div className={styles.staffInfo}>
                <h3 className={styles.staffName}>«Дивоцвіт»</h3>
                <p className={styles.staffDescription}>студія образотворчого мистецтва</p>
              </div>
            </div>
            <div className={styles.staffItem}>
              <div className={styles.staffMarker}></div>
              <div className={styles.staffInfo}>
                <h3 className={styles.staffName}>«Валері»</h3>
                <p className={styles.staffDescription}>вокальний ансамбль</p>
              </div>
            </div>
            <div className={styles.staffItem}>
              <div className={styles.staffMarker}></div>
              <div className={styles.staffInfo}>
                <h3 className={styles.staffName}>«Карден»</h3>
                <p className={styles.staffDescription}>танцювальний колектив</p>
              </div>
            </div>
          </div>
        </section>

        {/* Секція: Матеріальна база */}
        <section id="facilities" className={styles.section}>
          <h1 className={styles.facilitiesTitle}>Матеріальна база</h1>
          <div className={styles.facilitiesContent}>
            <div className={styles.facilitiesImage}>
              <Image src={studyingClass} alt="Фото матеріальної бази" width={800} height={600} />
            </div>
            <div className={styles.facilitiesInfo}>
              <h2 className={styles.facilitiesSubtitle}>Ліцей має триповерхову будівлю:</h2>
              <div className={styles.facilitiesList}>
                <div className={styles.facilityItem}>
                  <Image src={galochka} alt="Галочка" className={styles.checkIcon} width={24} height={24} />
                  <p>26 класних кімнат і навчальних аудиторій</p>
                </div>
                <div className={styles.facilityItem}>
                  <Image src={galochka} alt="Галочка" className={styles.checkIcon} width={24} height={24} />
                  <p>10 кабінетів англійської мови</p>
                </div>
                <div className={styles.facilityItem}>
                  <Image src={galochka} alt="Галочка" className={styles.checkIcon} width={24} height={24} />
                  <p>сучасні обладнані кабінети інформатики, фізики, хімії, біології, математики, географії,</p>
                </div>
                <div className={styles.facilityItem}>
                  <Image src={galochka} alt="Галочка" className={styles.checkIcon} width={24} height={24} />
                  <p>ресурсний інформаційно-методичний центр, обладнаний комп'ютерами, які мають доступ до мережі Інтернет,</p>
                </div>
                <div className={styles.facilityItem}>
                  <Image src={galochka} alt="Галочка" className={styles.checkIcon} width={24} height={24} />
                  <p>спортивний, актовий і танцювальний зали,</p>
                </div>
                <div className={styles.facilityItem}>
                  <Image src={galochka} alt="Галочка" className={styles.checkIcon} width={24} height={24} />
                  <p>учительський мультимедійний методичний центр, обладнаний меблями-трансформерами, комп'ютерами, DVD-програвачем, супутниковим телебаченням, телевізором з плазмовим екраном, інтерактивною дошкою.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
