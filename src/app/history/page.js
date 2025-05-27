import styles from "@/styles/history.module.css";
import Image from "next/image";
import schoolPhoto1 from "@/assets/school_photo1.jpg";
import schoolPhoto2 from "@/assets/school_photo2.jpg";
import schoolPhoto3 from "@/assets/school_photo3.jpg";

export default function HistoryPage() {
  return (
    <>
      <main className={styles.historyContent}>
        <section className={styles.schoolBuilding}>
          <h2 className={styles.sectionTitle}>Будівля школи</h2>

          {/* Блок 1 - текст по центру */}
          <div className={styles.historyBlock}>
            <div className={styles.historyImage}>
              <Image
                src={schoolPhoto1}
                alt="schoolPhoto1"
                width={380}
                height={260}
              />
            </div>
            <div className={styles.historyText}>
              <p>
                Спочатку школа №6 була розташована в одноповерховому будинку по
                вулиці Лисенка (сьогодні тут знаходиться Лубенська художня
                школа).
              </p>
            </div>
          </div>

          {/* Блок 2 - текст розтягнутий  */}
          <div className={styles.historyBlock}>
            <div className={styles.historyImage}>
              <Image
                src={schoolPhoto2}
                alt="schoolPhoto2"
                width={380}
                height={260}
              />
            </div>
            <div className={styles.historyText}>
              <p>
                Приміщення школи розбудовувалося в роки, коли її очолював Сахно
                Володимир Іванович, а заступником директора був Горбенко Іван
                Іванович. У 1967 році по вулиці Карла Маркса зведено нове
                приміщення для навчання.
              </p>
            </div>
          </div>

          {/* Блок 3 - текст на всю ширину  */}
          <div className={styles.historyBlock}>
            <div className={styles.historyImage}>
              <Image
                src={schoolPhoto3}
                alt="schoolPhoto3"
                width={380}
                height={260}
              />
            </div>
            <div className={styles.historyText}>
              <p>
                Організацією будівництва займалася директор школи Чабаненко
                Олександра Іванівна за активної підтримки всього педагогічного,
                батьківського й учнівського колективів. Держава відзначила її
                працю орденом Трудового Червоного Прапора. Особливий ентузіазм
                виявили вчителі праці Бабич Костянтин Володимирович, Баранов
                Микола Іванович, Кулініч Микола Олександрович, технічний
                працівник школи Балацький Петро Трохимович, учителі фізкультури
                та початкової військової підготовки Зозуля Олексій Іванович та
                Сластьон Петро Никифорович.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
