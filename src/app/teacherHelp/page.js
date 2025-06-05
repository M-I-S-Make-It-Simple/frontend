'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/teacherhelp.module.css';


export default function TeacherHelpPage() {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    setActiveSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.teacherHelpPage}>
      <main className={styles.teacherHelpMain}>
        <div className={styles.titleContainer}>
          <h2 className={styles.teacherHelpTitle}>На допомогу вчителю</h2>
        </div>

        {/* Секція з іграми на перервах */}
        <section className={styles.teacherHelpSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(0) ? styles.active : ''}`}
            onClick={() => toggleSection(0)}
          >
            <h3 className={styles.sectionTitle}>Рухливі ігри на перервах</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>Оптимальний руховий режим — це основна умова нормального зростання організму. Рекомендовані рухливі ігри на перервах:</p>
              <p><span className={styles.gameName}>«М'яч середньому».</span> Гравці утворюють три-чотири кола. У середині кожного кола стоїть ведучий. Він по черзі кидає м'яч своїм гравцям, а гравці кидають м'яч назад ведучому. Одержавши м'яч від останнього свого гравця, ведучий піднімає його вгору. Команда, в якої м'яч менше падав на землю і яка раніше від інших закінчила перекидання м'яча, виграє.</p>
              <p><span className={styles.gameName}>«Кіт і мишка».</span> Діти, взявшись за руки, утворюють загальне коло. Один з гравців зображає «кота», другий – «мишку». Мишка втікає від кота, кіт її наздоганяє. Діти, що стоять у колі, вільно пропускають мишку під руками і намагаються перешкодити котові ввійти в коло. Якщо кіт спіймав мишку, або не може довго її наздогнати, то призначають іншу пару. Вказівка до гри. Щоб кіт швидше спіймав мишку, в колі роблять кілька «воріт», крізь які кіт може вільно вбігати в коло і вибігати з нього.</p>
            </div>
          </div>
        </section>
        
        {/* Додаткові секції з методичними матеріалами */}
        <section className={styles.teacherHelpSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(1) ? styles.active : ''}`}
            onClick={() => toggleSection(1)}
          >
            <h3 className={styles.sectionTitle}>TEXT</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>description description description description description</p>
              <p>description description description description description</p>
              <p>description description description description description</p>
            </div>
          </div>
        </section>
        
        <section className={styles.teacherHelpSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(2) ? styles.active : ''}`}
            onClick={() => toggleSection(2)}
          >
            <h3 className={styles.sectionTitle}>TEXT</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>description description description description description</p>
              <p>description description description description description</p>
              <p>description description description description description</p>
            </div>
          </div>
        </section>
        
        <section className={styles.teacherHelpSection}>
          <div 
            className={`${styles.sectionHeader} ${activeSections.includes(3) ? styles.active : ''}`}
            onClick={() => toggleSection(3)}
          >
            <h3 className={styles.sectionTitle}>TEXT</h3>
            <div className={styles.sectionMarker}></div>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.detailedDescription}>
              <p>description description description description description</p>
              <p>description description description description description</p>
              <p>description description description description description</p>
            </div>
          </div>
        </section>
        
        {/* Секція з корисними документами */}
        <section className={styles.teacherHelpDocuments}>
          <h3 className={styles.documentsTitle}>Корисні документи</h3>
          
          <div className={styles.documentsList}>
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Навчальні програми 2023-2024</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Методичні рекомендації МОН України</a>
            </div>
            
            <div className={styles.documentItem}>
              <div className={styles.documentIcon}></div>
              <a href="#" className={styles.documentLink}>Зразки оформлення документації</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
