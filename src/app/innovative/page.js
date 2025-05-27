'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/innovative.module.css';
import newProjectImg from '@/assets/new_project.jpg';
import healthCircleImg from '@/assets/health_circle.jpg';
import healthProjectImg from '@/assets/health_prjct.jpg';

const InnovativePage = () => {
  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (sectionId) => {
    setActiveSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <>
      <div className="container">
        <div className="background">
          <div className="gradientBg"></div>
        </div>
        
        <main className={styles.innovativeMain}>
          {/* Головна секція */}
          <section className={styles.innovationSection}>
            <h2 className={styles.innovationTitle}>Інноваційна діяльність</h2>
            
            <div className={styles.innovationContent}>
              <div className={styles.innovationImage}>
                <Image 
                  src={newProjectImg}
                  alt="Професійна орієнтація у новій українській школі"
                  width={350}
                  height={510}
                  className={styles.innovationImg}
                />
              </div>
              
              <div className={styles.innovationText}>
                Одним із пріоритетних напрямків роботи Лубенської спеціалізованої школи №6 є дослідно-експериментальна, 
                проєктна та інноваційна діяльність. Так, у травні цього року школа долучилась до експерименту всеукраїнського 
                рівня за темою «Професійна орієнтація у Новій українській школі». Експеримент проводиться у рамках проєкту «EU4Skills», 
                реалізовується Європейським Союзом та його державами-членами: Німеччиною, Фінляндією, Польщею та Естонією і розрахований на 2021-2026 роки.
              </div>
            </div>
          </section>

          {/* Секція "Дівчата STEM" */}
          <section className={styles.stemGirlsSection}>
            <div className={styles.stemContainer}>
              <h2 className={styles.stemTitle}>Лубенська спеціалізована школа - філіал Спільноти «Дівчата STEM»</h2>
              
              <p className={styles.stemSubtitle}>Лубенська спеціалізована школа І-ІІІ ступенів №6 з 2021р має статус філіалу Спільноти «Дівчата STEM».</p>
              
              <p className={styles.stemText}><span className={styles.stemOrange}><strong>STEM</strong></span> – <span className={styles.stemTerm}>це абревіатура від:</span></p>
              
              <div className={styles.stemAbbreviation}>
                <ul>
                  <li><span className={styles.stemTerm}>Science</span> – наука (фізика, астрономія, хімія, біологія, географія, економіка)</li>
                  <li><span className={styles.stemTerm}>Technology</span> – технології (інформатика, технології)</li>
                  <li><span className={styles.stemTerm}>Engineering</span> – інженерія (робототехніка, 3D-моделювання)</li>
                  <li><span className={styles.stemTerm}>Mathematics</span> – математика.</li>
                </ul>
              </div>
              
              <div className={styles.stemDescription}>
                <p><span className={styles.stemTerm}>Філіали "Дівчата STEM"</span> – це спільнота активних дівчат у закладах загальної середньої та вищої освіти України, 
                  що об'єднуються з метою більшого залучення та збільшення кількості дівчат до Дівчата STEM-напрямів (наука, технології, 
                  інженерія, математика).</p>
                
                <p><strong>Дівчата STEM</strong> – це ініціатива, заснована Центром "Розвиток КСВ" у 2016 році. Вона спрямована на подолання гендерних стереотипів при виборі професії 
                  та на підвищення віри дівчат у власні здібності й можливість побудувати STEM кар'єру в Україні. Саме тому ми об'єднуємо дівчат і жінок з усієї України, 
                  яких єднає захоплення STEM – наукою, технологіями, інженерією, математикою.</p>
                
                <p><strong>Серед завдань Спільноти</strong> – викорінення гендерних стереотипів щодо дівчат і жінок у STEM, залучення талановитих дівчат 
                  до природничо-наукових і технічних дисциплін, підвищення обізнаності про STEM в Україні.</p>
              </div>
            </div>
          </section>

          {/* Секція "Українсько-швейцарський проект" */}
          <section className={styles.healthProjectSection}>
            <div className={styles.healthContainer}>
              <h2 className={styles.healthTitle}>Українсько-швейцарський проєкт "Діємо для здоров'я"</h2>
              
              <div className={styles.healthContent}>
                <div className={styles.healthRow}>
                  <div className={styles.healthImageContainer}>
                    <Image 
                      src={healthCircleImg}
                      alt="Коло здоров'я"
                      width={450}
                      height={450}
                      className={styles.healthImage}
                    />
                  </div>
                  
                  <div className={styles.healthTextContainer}>
                    <div className={styles.healthTextBox}>
                      <p>Лубенська спеціалізована школа І-ІІІ ступенів №6 долучилась до цього інноваційного проєкту, адже загальношкільний підхід до збереження 
                        та зміцнення здоров'я «Модель здорової школи» відповідає стратегічним завданням «Національної стратегії розбудови безпечного та здорового 
                        середовища в новій українській школі», враховує рекомендації ВООЗ, ЮНІСЕФ, Центру контролю над захворюваннями (CDC), моделі «Школа безпечна 
                        і дружня до дитини», досвід багаторічного експерименту зі створення в Україні мережі шкіл сприяння здоров'ю та передбачає міжсекторальну 
                        співпрацю освітян, медичних працівників, дітей, батьків і громади для формування здорового середовища в закладах освіти.</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.healthRow}>
                  <div className={styles.healthTextContainer}>
                    <div className={styles.healthTextBox}>
                      <p>Україно-швейцарський проєкт «Діємо для здоров'я» — це чотирирічний проєкт (листопад 2020 року — листопад 2024 року), 
                        який має на меті зменшити тягар хвороб та запобігти передчасній смертності, а також підвищити тривалість життя чоловіків 
                        та жінок шляхом запровадження інтегрованого підходу до профілактики, лікування та контролю неінфекційних захворювань.</p>
                    </div>
                  </div>
                  
                  <div className={styles.healthImageContainer}>
                    <Image 
                      src={healthProjectImg}
                      alt="Логотип проекту"
                      width={700}
                      height={350}
                      className={styles.healthImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default InnovativePage;
