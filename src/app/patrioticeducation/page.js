'use client';

import { useState } from 'react';
import styles from '@/styles/patrioticeducation.module.css';

export default function PatrioticEducationPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  const toggleYearDropdown = () => {
    setIsYearDropdownOpen(!isYearDropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsYearDropdownOpen(false);
  };

  const toggleEvent = (index) => {
    setActiveEvent(activeEvent === index ? null : index);
  };

  return (
    <div className={styles.projectResearchPage}>
      <div className={styles.intellectContent}>
        <h1 className={styles.intellectTitle}>Національно-патріотичне виховання</h1>
        
        <div className={styles.yearSelector} onClick={toggleYearDropdown}>
          <span className={styles.yearText}>{selectedYear}</span>
          <div className={styles.yearDropdownIcon}></div>
          <div className={`${styles.yearDropdownContent} ${isYearDropdownOpen ? styles.active : ''}`}>
            <a href="#" onClick={() => handleYearSelect('2025')}>2025</a>
          </div>
        </div>
        
        <div className={styles.eventsAccordion}>
          {/* Event 1 */}
          <div className={`${styles.eventItem} ${activeEvent === 0 ? styles.active : ''}`}>
            <div className={styles.eventHeader} onClick={() => toggleEvent(0)}>
              <span className={styles.eventTitle}>Text1 Text1 Text1 Text1 Text1</span>
              <div className={styles.eventArrow}></div>
            </div>
            <div className={styles.eventContent}>
              <div className={styles.eventContentWrapper}>
                <div className={styles.eventText}>
                  <div className={styles.contentDivider}></div>
                  <p>Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text.</p>
                </div>
                <div className={styles.eventImage}>
                  <img src="/img/news-placeholder.jpg" alt="Event image" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Event 2 */}
          <div className={`${styles.eventItem} ${activeEvent === 1 ? styles.active : ''}`}>
            <div className={styles.eventHeader} onClick={() => toggleEvent(1)}>
              <span className={styles.eventTitle}>Text2 Text2 Text2 Text2 Text2</span>
              <div className={styles.eventArrow}></div>
            </div>
            <div className={styles.eventContent}>
              <div className={styles.eventContentWrapper}>
                <div className={styles.eventText}>
                  <div className={styles.contentDivider}></div>
                  <p>Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text.</p>
                </div>
                <div className={styles.eventImage}>
                  <img src="/img/news-placeholder.jpg" alt="Event image" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Event 3 */}
          <div className={`${styles.eventItem} ${activeEvent === 2 ? styles.active : ''}`}>
            <div className={styles.eventHeader} onClick={() => toggleEvent(2)}>
              <span className={styles.eventTitle}>Text3 Text3 Text3 Text3 Text3</span>
              <div className={styles.eventArrow}></div>
            </div>
            <div className={styles.eventContent}>
              <div className={styles.eventContentWrapper}>
                <div className={styles.eventText}>
                  <div className={styles.contentDivider}></div>
                  <p>Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text.</p>
                </div>
                <div className={styles.eventImage}>
                  <img src="/img/news-placeholder.jpg" alt="Event image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 