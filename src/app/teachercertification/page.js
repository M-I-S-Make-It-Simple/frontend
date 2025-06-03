'use client';

import { useState } from 'react';
import styles from '@/styles/teachercertification.module.css';

export default function TeacherCertificationPage() {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    setActiveSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.teacherCertificationPage}>
      <main className={styles.teacherCertificationMain}>
        <h2 className={styles.teacherCertificationTitle}>Атестація педпрацівників</h2>

        {/* Секція з загальною інформацією */}
        <section className={styles.teacherCertificationSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(0) ? styles.active : ''}`}
            onClick={() => toggleSection(0)}
          >
            <h3 className={styles.sectionTitle}>Загальна інформація про атестацію</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Атестація педагогічних працівників - це комплексна оцінка їх професійної діяльності, спрямована на стимулювання професійного зростання та підвищення якості освіти.</p>
              <p><span className={styles.certificationName}>Основні цілі атестації:</span></p>
              <p>- Визначення відповідності педагогічних працівників займаній посаді</p>
              <p>- Стимулювання професійного зростання педагогів</p>
              <p>- Підвищення ефективності та якості педагогічної діяльності</p>
            </div>
          </div>
        </section>
        
        {/* Секція з порядком проведення */}
        <section className={styles.teacherCertificationSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(1) ? styles.active : ''}`}
            onClick={() => toggleSection(1)}
          >
            <h3 className={styles.sectionTitle}>Порядок проведення атестації</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Атестація проводиться відповідно до встановленого порядку:</p>
              <p><span className={styles.certificationName}>Етапи атестації:</span></p>
              <p>1. Підготовчий етап - формування атестаційної комісії, розробка критеріїв оцінювання</p>
              <p>2. Основной етап - проведення оцінювання професійної діяльності педагогів</p>
              <p>3. Заключний етап - підведення підсумків та прийняття рішень</p>
            </div>
          </div>
        </section>
        
        {/* Секція з критеріями оцінювання */}
        <section className={styles.teacherCertificationSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(2) ? styles.active : ''}`}
            onClick={() => toggleSection(2)}
          >
            <h3 className={styles.sectionTitle}>Критерії оцінювання</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>При проведенні атестації враховуються такі критерії:</p>
              <p><span className={styles.certificationName}>Професійна компетентність:</span></p>
              <p>- Якість навчально-виховного процесу</p>
              <p>- Використання сучасних методик навчання</p>
              <p>- Результати навчальної діяльності учнів</p>
              <p><span className={styles.certificationName}>Професійний розвиток:</span></p>
              <p>- Участь у методичній роботі</p>
              <p>- Підвищення кваліфікації</p>
              <p>- Розробка навчально-методичних матеріалів</p>
            </div>
          </div>
        </section>
        
        {/* Секція з корисними документами */}
        <section className={styles.teacherCertificationDocuments}>
          <h3 className={styles.documentsTitle}>Корисні документи</h3>
          
          <div className={styles.documentsList}>
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Положення про атестацію педагогічних працівників</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Графік проведення атестації на 2024 рік</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Зразки документів для атестації</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 