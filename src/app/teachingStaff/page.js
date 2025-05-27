'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/teachingstaff.module.css';
import derkachPhoto from '@/assets/derkach.jpg';

export default function TeachingStaffPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Адміністрація');
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.teachingStaffPage}>
      <main>
        <div className={styles.titleSection}>
          <h1 className={styles.pedagogicalTitle}>Педагогічний колектив</h1>
          <div className={styles.yearSelector} ref={dropdownRef}>
            <button className={`${styles.yearButton} ${isDropdownOpen ? styles.active : ''}`} onClick={toggleDropdown}>
              <span className={styles.yearText}>{selectedItem}</span>
              <span className={styles.yearArrow}></span>
            </button>
            <div className={`${styles.yearDropdownContent} ${isDropdownOpen ? styles.active : ''}`}>
              <a 
                href="#" 
                className={selectedItem === 'Адміністрація' ? styles.selected : ''}
                onClick={() => handleItemSelect('Адміністрація')}
              >
                Адміністрація
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Початкових класів' ? styles.selected : ''}
                onClick={() => handleItemSelect('Початкових класів')}
              >
                Початкових класів
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Гуманітарних та суспільних дисциплін' ? styles.selected : ''}
                onClick={() => handleItemSelect('Гуманітарних та суспільних дисциплін')}
              >
                Гуманітарних та суспільних дисциплін
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Іноземних мов' ? styles.selected : ''}
                onClick={() => handleItemSelect('Іноземних мов')}
              >
                Іноземних мов
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Точних та природничих наук' ? styles.selected : ''}
                onClick={() => handleItemSelect('Точних та природничих наук')}
              >
                Точних та природничих наук
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Виховної роботи' ? styles.selected : ''}
                onClick={() => handleItemSelect('Виховної роботи')}
              >
                Виховної роботи
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Фізичної культури, ЗУ та трудового навчання' ? styles.selected : ''}
                onClick={() => handleItemSelect('Фізичної культури, ЗУ та трудового навчання')}
              >
                Фізичної культури, ЗУ та трудового навчання
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Ресурсний інформаційно-методичний центр' ? styles.selected : ''}
                onClick={() => handleItemSelect('Ресурсний інформаційно-методичний центр')}
              >
                Ресурсний інформаційно-методичний центр
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Обслуговуючий персонал' ? styles.selected : ''}
                onClick={() => handleItemSelect('Обслуговуючий персонал')}
              >
                Обслуговуючий персонал
              </a>
              <a 
                href="#" 
                className={selectedItem === 'Майстри педагогічної ниви' ? styles.selected : ''}
                onClick={() => handleItemSelect('Майстри педагогічної ниви')}
              >
                Майстри педагогічної ниви
              </a>
            </div>
          </div>
        </div>

        <h2 className={styles.administrationTitle}>Адміністрація</h2>

        <div className={styles.adminCardsContainer}>
          {/* Директор школи */}
          <div className={styles.adminCard}>
            <div className={styles.adminPhoto}>
              <Image 
                src={derkachPhoto}
                alt="Деркач Лариса Анатоліївна" 
                width={160} 
                height={226}
              />
            </div>
            <div className={styles.adminInfo}>
              <div className={styles.adminName}>Деркач Лариса Анатоліївна</div>
              <div className={styles.adminPosition}>Директор школи</div>
            </div>
            <div className={styles.adminBio}>
              <p>
                Директор школи<br />
                Учитель фізики, спеціаліст вищої кваліфікаційної категорії, учитель-методист.<br />
                Переможниця VI обласного конкурсу «Успішна жінка Полтавщини-2019».<br />
                1995р. закінчила Черкаський педагогічний інститут<br />
                2006р. випустила 11-В (математичний) клас.
              </p>
            </div>
          </div>

          {/* Заступник директора 1 */}
          <div className={styles.adminCard}>
            <div className={styles.adminPhoto}>
              <Image 
                src="/img/admin_placeholder.jpg" 
                alt="Фото" 
                width={160} 
                height={226}
              />
            </div>
            <div className={styles.adminInfo}>
              <div className={styles.adminName}>Ім'я Прізвище</div>
              <div className={styles.adminPosition}>Посада</div>
            </div>
            <div className={styles.adminBio}>
              <p>
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
              </p>
            </div>
          </div>

          {/* Заступник директора 2 */}
          <div className={styles.adminCard}>
            <div className={styles.adminPhoto}>
              <Image 
                src="/img/admin_placeholder.jpg" 
                alt="Фото" 
                width={160} 
                height={226}
              />
            </div>
            <div className={styles.adminInfo}>
              <div className={styles.adminName}>Ім'я Прізвище</div>
              <div className={styles.adminPosition}>Посада</div>
            </div>
            <div className={styles.adminBio}>
              <p>
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
              </p>
            </div>
          </div>

          {/* Заступник директора 3 */}
          <div className={styles.adminCard}>
            <div className={styles.adminPhoto}>
              <Image 
                src="/img/admin_placeholder.jpg" 
                alt="Фото" 
                width={160} 
                height={226}
              />
            </div>
            <div className={styles.adminInfo}>
              <div className={styles.adminName}>Ім'я Прізвище</div>
              <div className={styles.adminPosition}>Посада</div>
            </div>
            <div className={styles.adminBio}>
              <p>
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
              </p>
            </div>
          </div>

          {/* Заступник директора 4 */}
          <div className={styles.adminCard}>
            <div className={styles.adminPhoto}>
              <Image 
                src="/img/admin_placeholder.jpg" 
                alt="Фото" 
                width={160} 
                height={226}
              />
            </div>
            <div className={styles.adminInfo}>
              <div className={styles.adminName}>Ім'я Прізвище</div>
              <div className={styles.adminPosition}>Посада</div>
            </div>
            <div className={styles.adminBio}>
              <p>
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
              </p>
            </div>
          </div>

          {/* Заступник директора 5 */}
          <div className={styles.adminCard}>
            <div className={styles.adminPhoto}>
              <Image 
                src="/img/admin_placeholder.jpg" 
                alt="Фото" 
                width={160} 
                height={226}
              />
            </div>
            <div className={styles.adminInfo}>
              <div className={styles.adminName}>Ім'я Прізвище</div>
              <div className={styles.adminPosition}>Посада</div>
            </div>
            <div className={styles.adminBio}>
              <p>
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
              </p>
            </div>
          </div>

          {/* Заступник директора 6 */}
          <div className={styles.adminCard}>
            <div className={styles.adminPhoto}>
              <Image 
                src="/img/admin_placeholder.jpg" 
                alt="Фото" 
                width={160} 
                height={226}
              />
            </div>
            <div className={styles.adminInfo}>
              <div className={styles.adminName}>Ім'я Прізвище</div>
              <div className={styles.adminPosition}>Посада</div>
            </div>
            <div className={styles.adminBio}>
              <p>
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
                enter text enter text enter text enter text enter text <br />
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 