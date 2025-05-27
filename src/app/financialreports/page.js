'use client';

import { useState } from 'react';
import styles from '@/styles/financialreports.module.css';

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
        
        <main className={styles.regulatoryDocumentsMain}>
          <h2 className={styles.regulatoryDocumentsTitle}>Фінансова звітність</h2>

          <div className={styles.documentsSections}>
            {/* Корисна інформація */}
            <section className={styles.usefulInfoSection}>
              <h2 className={styles.sectionTitle}>Корисна інформація</h2>
              <div className={styles.linksContainer}>
                <a href="#" className={styles.documentLink}>Link 1</a>
                <a href="#" className={styles.documentLink}>Link 2</a>
                <a href="#" className={styles.documentLink}>Link 3</a>
              </div>
            </section>

            {/* 2024-2025 */}
            <section className={styles.yearSection}>
              <h2 className={styles.sectionTitle}>2024-2025 рр.</h2>
              <div className={styles.linksContainer}>
                <a href="#" className={styles.documentLink}>Link 1</a>
                <a href="#" className={styles.documentLink}>Link 2</a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default FinancialReportsPage; 