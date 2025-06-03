'use client';

import { useState } from 'react';
import styles from '@/styles/methodicalevents.module.css';

export default function MethodicalEventsPage() {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    setActiveSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.methodicalEventsPage}>
      <main className={styles.methodicalEventsMain}>
        <h2 className={styles.methodicalEventsTitle}>Основні методичні заходи</h2>

        {/* Секція з семінарами */}
        <section className={styles.methodicalEventsSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(0) ? styles.active : ''}`}
            onClick={() => toggleSection(0)}
          >
            <h3 className={styles.sectionTitle}>Семінари та конференції</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Регулярні семінари та конференції для педагогічних працівників:</p>
              <p><span className={styles.eventName}>«Сучасні методики навчання».</span> Семінар присвячений новітнім підходам до навчання, використанню цифрових технологій у навчальному процесі.</p>
              <p><span className={styles.eventName}>«Ефективна комунікація з батьками».</span> Практичні заняття з навичок комунікації та побудови конструктивного діалогу з батьками учнів.</p>
            </div>
          </div>
        </section>
        
        {/* Секція з майстер-класами */}
        <section className={styles.methodicalEventsSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(1) ? styles.active : ''}`}
            onClick={() => toggleSection(1)}
          >
            <h3 className={styles.sectionTitle}>Майстер-класи</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Практичні майстер-класи для вчителів:</p>
              <p><span className={styles.eventName}>«Проектне навчання».</span> Майстер-клас з організації та проведення проектних робіт, розвитку креативності серед учнів.</p>
              <p><span className={styles.eventName}>«Інтерактивні методи навчання».</span> Практичні заняття з використання інтерактивних технологій у навчальному процесі.</p>
            </div>
          </div>
        </section>
        
        {/* Секція з методичними об'єднаннями */}
        <section className={styles.methodicalEventsSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(2) ? styles.active : ''}`}
            onClick={() => toggleSection(2)}
          >
            <h3 className={styles.sectionTitle}>Методичні об'єднання</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Робота методичних об'єднань вчителів:</p>
              <p><span className={styles.eventName}>Предметні методичні об'єднання:</span></p>
              <p>- Об'єднання вчителів початкових класів</p>
              <p>- Об'єднання вчителів гуманітарного циклу</p>
              <p>- Об'єднання вчителів природничо-математичного циклу</p>
              <p><span className={styles.eventName}>Тематичні методичні об'єднання:</span></p>
              <p>- Об'єднання класних керівників</p>
              <p>- Об'єднання вчителів-предметників</p>
            </div>
          </div>
        </section>
        
        {/* Секція з корисними документами */}
        <section className={styles.methodicalEventsDocuments}>
          <h3 className={styles.documentsTitle}>Корисні документи</h3>
          
          <div className={styles.documentsList}>
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>План методичної роботи на 2024 рік</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Графік проведення методичних заходів</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Звіти про проведені методичні заходи</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 