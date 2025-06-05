'use client';

import { useState } from 'react';
import styles from '@/styles/financialreports.module.css';
import Image from 'next/image';
import firebird3 from '@/assets/firebird3.png';

const FinancialReportsPage = () => {
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
        
        <main className={styles.financialReportsMain}>
          <h2 className={styles.financialReportsTitle}>
            Фінансова звітність
            <Image src={firebird3} alt="Firebird" className={styles.firebirdImage} />
          </h2>

          <div className={styles.reportsSections}>
            {/* Корисна інформація */}
            <section className={styles.usefulInfoSection}>
              <h2 className={styles.sectionTitle}>Корисна інформація</h2>
              <div className={styles.linksContainer}>
                <a href="#" className={styles.reportLink}>Link 1</a>
                <a href="#" className={styles.reportLink}>Link 2</a>
                <a href="#" className={styles.reportLink}>Link 3</a>
              </div>
            </section>

            {/* 2024-2025 */}
            <section className={styles.yearSection}>
              <h2 className={styles.sectionTitle}>2024-2025 рр.</h2>
              <div className={styles.linksContainer}>
                <a href="#" className={styles.reportLink}>Link 1</a>
                <a href="#" className={styles.reportLink}>Link 2</a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default FinancialReportsPage; 