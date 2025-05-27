'use client';

import { useState } from 'react';
import styles from '@/styles/qualificationimprovement.module.css';

export default function QualificationImprovementPage() {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    setActiveSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.qualificationImprovementPage}>
      <main className={styles.qualificationImprovementMain}>
        <h2 className={styles.qualificationImprovementTitle}>Підвищення кваліфікації</h2>

        {/* Секція з курсами підвищення кваліфікації */}
        <section className={styles.qualificationImprovementSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(0) ? styles.active : ''}`}
            onClick={() => toggleSection(0)}
          >
            <h3 className={styles.sectionTitle}>Курси підвищення кваліфікації</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Регулярне підвищення кваліфікації - це важлива складова професійного розвитку педагогічних працівників. Наші курси спрямовані на:</p>
              <p><span className={styles.courseName}>«Сучасні методики навчання».</span> Курс охоплює новітні підходи до навчання, використання цифрових технологій у навчальному процесі, а також методи розвитку критичного мислення у учнів.</p>
              <p><span className={styles.courseName}>«Психологічна підтримка учнів».</span> Програма фокусується на розвитку навичок психологічної підтримки учнів, розпізнаванні та запобіганні булінгу, а також створенні позитивного клімату в класі.</p>
            </div>
          </div>
        </section>
        
        {/* Секція з семінарами */}
        <section className={styles.qualificationImprovementSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(1) ? styles.active : ''}`}
            onClick={() => toggleSection(1)}
          >
            <h3 className={styles.sectionTitle}>Семінари та тренінги</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Регулярні семінари та тренінги для вчителів:</p>
              <p><span className={styles.courseName}>«Ефективна комунікація з батьками».</span> Практичні заняття з навичок комунікації, вирішення конфліктних ситуацій та побудови конструктивного діалогу з батьками учнів.</p>
              <p><span className={styles.courseName}>«Проектне навчання».</span> Майстер-клас з організації та проведення проектних робіт, розвитку креативності та командного духу серед учнів.</p>
            </div>
          </div>
        </section>
        
        {/* Секція з вебінарами */}
        <section className={styles.qualificationImprovementSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(2) ? styles.active : ''}`}
            onClick={() => toggleSection(2)}
          >
            <h3 className={styles.sectionTitle}>Вебінари та онлайн-курси</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Онлайн-формати навчання для зручності вчителів:</p>
              <p><span className={styles.courseName}>«Цифрова грамотність педагога».</span> Серія вебінарів про використання сучасних цифрових інструментів у навчальному процесі.</p>
              <p><span className={styles.courseName}>«Дистанційне навчання».</span> Практичний курс з організації ефективного дистанційного навчання та використання онлайн-платформ.</p>
            </div>
          </div>
        </section>
        
        {/* Секція з корисними документами */}
        <section className={styles.qualificationImprovementDocuments}>
          <h3 className={styles.documentsTitle}>Корисні документи</h3>
          
          <div className={styles.documentsList}>
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Положення про підвищення кваліфікації педагогічних працівників</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Графік курсів підвищення кваліфікації на 2024 рік</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Зразки документів про підвищення кваліфікації</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 