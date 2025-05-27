'use client';

import { useState } from 'react';
import styles from '@/styles/pedagogicalolympus.module.css';

export default function PedagogicalOlympusPage() {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    setActiveSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.pedagogicalOlympusPage}>
      <main className={styles.pedagogicalOlympusMain}>
        <h2 className={styles.pedagogicalOlympusTitle}>Педагогічний Олімп</h2>

        {/* Секція з загальною інформацією */}
        <section className={styles.pedagogicalOlympusSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(0) ? styles.active : ''}`}
            onClick={() => toggleSection(0)}
          >
            <h3 className={styles.sectionTitle}>Про конкурс</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Педагогічний Олімп - це щорічний конкурс професійної майстерності педагогічних працівників, спрямований на виявлення та підтримку талановитих вчителів.</p>
              <p><span className={styles.olympusName}>Цілі конкурсу:</span></p>
              <p>- Підвищення престижу педагогічної професії</p>
              <p>- Розвиток творчого потенціалу педагогів</p>
              <p>- Поширення передового педагогічного досвіду</p>
            </div>
          </div>
        </section>
        
        {/* Секція з номінаціями */}
        <section className={styles.pedagogicalOlympusSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(1) ? styles.active : ''}`}
            onClick={() => toggleSection(1)}
          >
            <h3 className={styles.sectionTitle}>Номінації конкурсу</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Конкурс проводиться у наступних номінаціях:</p>
              <p><span className={styles.olympusName}>«Вчитель року»</span> - для вчителів-предметників</p>
              <p><span className={styles.olympusName}>«Класний керівник року»</span> - для класних керівників</p>
              <p><span className={styles.olympusName}>«Молодий педагог»</span> - для вчителів з досвідом роботи до 5 років</p>
              <p><span className={styles.olympusName}>«Інноваційний педагог»</span> - для вчителів, що використовують сучасні методики навчання</p>
            </div>
          </div>
        </section>
        
        {/* Секція з етапами конкурсу */}
        <section className={styles.pedagogicalOlympusSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(2) ? styles.active : ''}`}
            onClick={() => toggleSection(2)}
          >
            <h3 className={styles.sectionTitle}>Етапи конкурсу</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Конкурс складається з наступних етапів:</p>
              <p><span className={styles.olympusName}>1. Заочний етап:</span></p>
              <p>- Подача заявок та конкурсних матеріалів</p>
              <p>- Експертиза представлених матеріалів</p>
              <p><span className={styles.olympusName}>2. Очний етап:</span></p>
              <p>- Презентація педагогічного досвіду</p>
              <p>- Відкритий урок</p>
              <p>- Майстер-клас</p>
              <p><span className={styles.olympusName}>3. Фінальний етап:</span></p>
              <p>- Публічна презентація</p>
              <p>- Нагородження переможців</p>
            </div>
          </div>
        </section>
        
        {/* Секція з корисними документами */}
        <section className={styles.pedagogicalOlympusDocuments}>
          <h3 className={styles.documentsTitle}>Корисні документи</h3>
          
          <div className={styles.documentsList}>
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Положення про конкурс "Педагогічний Олімп"</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Графік проведення конкурсу на 2024 рік</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Критерії оцінювання конкурсних матеріалів</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 