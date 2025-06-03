'use client';

import { useState } from 'react';
import styles from '@/styles/methodicallifehacks.module.css';

export default function MethodicalLifehacksPage() {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    setActiveSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.methodicalLifehacksPage}>
      <main className={styles.methodicalLifehacksMain}>
        <h2 className={styles.methodicalLifehacksTitle}>Методичні лайфхаки</h2>

        {/* Секція з інтерактивними методами */}
        <section className={styles.methodicalLifehacksSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(0) ? styles.active : ''}`}
            onClick={() => toggleSection(0)}
          >
            <h3 className={styles.sectionTitle}>Інтерактивні методи навчання</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Інтерактивні методи навчання - це сучасний підхід до організації навчального процесу, який передбачає активну взаємодію між учасниками.</p>
              <p><span className={styles.lifehackName}>Метод "Мозковий штурм"</span></p>
              <p>- Створення вільної атмосфери для генерації ідей</p>
              <p>- Заборона критики на етапі генерації</p>
              <p>- Кількість ідей важливіша за їх якість</p>
              <p><span className={styles.lifehackName}>Метод "Коло ідей"</span></p>
              <p>- По чергове висловлення думок кожним учасником</p>
              <p>- Можливість розвивати ідеї попередників</p>
              <p>- Структурований обмін думками</p>
            </div>
          </div>
        </section>
        
        {/* Секція з техніками активізації */}
        <section className={styles.methodicalLifehacksSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(1) ? styles.active : ''}`}
            onClick={() => toggleSection(1)}
          >
            <h3 className={styles.sectionTitle}>Техніки активізації уваги</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Ефективні техніки для підтримки уваги учнів під час уроку:</p>
              <p><span className={styles.lifehackName}>Техніка "Зміна діяльності"</span></p>
              <p>- Чергування різних видів активності</p>
              <p>- Використання мультимедійних засобів</p>
              <p>- Фізичні вправи для розвантаження</p>
              <p><span className={styles.lifehackName}>Техніка "Несподіваність"</span></p>
              <p>- Впровадження незвичних елементів уроку</p>
              <p>- Використання загадок та головоломок</p>
              <p>- Створення ситуацій невизначеності</p>
            </div>
          </div>
        </section>
        
        {/* Секція з оцінюванням */}
        <section className={styles.methodicalLifehacksSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(2) ? styles.active : ''}`}
            onClick={() => toggleSection(2)}
          >
            <h3 className={styles.sectionTitle}>Ефективні системи оцінювання</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Сучасні підходи до оцінювання навчальних досягнень:</p>
              <p><span className={styles.lifehackName}>Формувальне оцінювання</span></p>
              <p>- Зворотній зв'язок під час навчання</p>
              <p>- Самооцінювання та взаємооцінювання</p>
              <p>- Критеріальне оцінювання</p>
              <p><span className={styles.lifehackName}>Портфоліо досягнень</span></p>
              <p>- Збір найкращих робіт учня</p>
              <p>- Відстеження прогресу</p>
              <p>- Рефлексія навчального процесу</p>
            </div>
          </div>
        </section>
        
        {/* Секція з корисними документами */}
        <section className={styles.methodicalLifehacksDocuments}>
          <h3 className={styles.documentsTitle}>Корисні документи</h3>
          
          <div className={styles.documentsList}>
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Збірка інтерактивних методів навчання</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Практичні поради щодо активізації уваги</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Методичні рекомендації щодо оцінювання</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 