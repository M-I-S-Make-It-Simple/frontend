"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Home,
  Book,
  Users,
  Dumbbell,
  FlaskConical,
  Music,
  GraduationCap,
  Coffee,
} from "lucide-react";
import Image from "next/image";

import styles from "./VirtualTour.module.css";

const VirtualTour = () => {
  const [currentLocation, setCurrentLocation] = useState("entrance");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Тимчасові URL зображень (замініть на свої)
  const locations = {
    entrance: {
      name: "Головний вхід",
      description:
        "Ласкаво просимо до нашого ліцею! Тут кожен ранок починається наша навчальна подорож. Сучасний та затишний вхід створює приємне перше враження.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&crop=center",
      icon: Home,
      connections: ["foyer"],
      highlights: [
        "Сучасний дизайн фасаду",
        "Безпечний вхід з охороною",
        "Інформаційні стенди",
      ],
    },
    foyer: {
      name: "Фойє та рецепція",
      description:
        "Центральне фойє - це серце нашої школи, де учні та відвідувачі отримують необхідну інформацію. Простора та світла зона для зустрічей.",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center",
      icon: Users,
      connections: ["entrance", "corridor1", "library"],
      highlights: [
        "Адміністративна зона",
        "Дошка оголошень",
        "Зона очікування для батьків",
      ],
    },
    corridor1: {
      name: "Коридор 1-го поверху",
      description:
        "Головний коридор з кабінетами початкових класів та основними навчальними приміщеннями. Світлий та просторий простір для комфортного пересування.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center",
      icon: ArrowRight,
      connections: ["foyer", "classroom1", "classroom2", "lab"],
      highlights: [
        "Світлі та просторі коридори",
        "Навчальні стенди",
        "Зони для відпочинку",
      ],
    },
    classroom1: {
      name: "Класна кімната 1-4 класи",
      description:
        "Сучасно обладнана класна кімната для молодших школярів з інтерактивним обладнанням. Створена для комфортного навчання найменших учнів.",
      image:
        "https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=800&h=600&fit=crop&crop=center",
      icon: GraduationCap,
      connections: ["corridor1"],
      highlights: [
        "Інтерактивна дошка",
        "Ергономічні парти",
        "Яскраві навчальні матеріали",
      ],
    },
    classroom2: {
      name: "Класна кімната 5-11 класи",
      description:
        "Просторий клас для старших учнів з сучасним мультимедійним обладнанням. Обладнаний для різноманітних форм навчання.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop&crop=center",
      icon: Book,
      connections: ["corridor1"],
      highlights: [
        "Проектор та екран",
        "Комп'ютерне робоче місце",
        "Зона для групової роботи",
      ],
    },
    library: {
      name: "Бібліотека",
      description:
        "Сучасна шкільна бібліотека з великою колекцією книг та комп'ютерною зоною. Тихе місце для навчання та читання.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      icon: Book,
      connections: ["foyer", "gym"],
      highlights: ["Більше 5000 книг", "Комп'ютерна зона", "Читальний зал"],
    },
    lab: {
      name: "Наукова лабораторія",
      description:
        "Обладнана лабораторія для проведення дослідів з хімії, фізики та біології. Безпечне середовище для практичних занять.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=center",
      icon: FlaskConical,
      connections: ["corridor1"],
      highlights: [
        "Сучасне лабораторне обладнання",
        "Безпечні робочі місця",
        "Навчальні матеріали для експериментів",
      ],
    },
    gym: {
      name: "Спортивний зал",
      description:
        "Великий спортивний зал для уроків фізкультури та спортивних змагань. Простір для активного та здорового способу життя.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      icon: Dumbbell,
      connections: ["library", "music"],
      highlights: [
        "Баскетбольні та волейбольні сітки",
        "Різноманітний спортивний інвентар",
        "Сучасні роздягальні кімнати",
      ],
    },
    music: {
      name: "Музичний клас",
      description:
        "Спеціально обладнаний клас для музичних занять та творчого розвитку. Місце де народжується любов до мистецтва.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
      icon: Music,
      connections: ["gym", "cafeteria"],
      highlights: [
        "Піаніно та синтезатори",
        "Професійна акустична система",
        "Різноманітні музичні інструменти",
      ],
    },
    cafeteria: {
      name: "Їдальня",
      description:
        "Затишна їдальня де учні можуть поїсти та відпочити. Простір для спілкування та відновлення сил протягом навчального дня.",
      image:
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop&crop=center",
      icon: Coffee,
      connections: ["music"],
      highlights: [
        "Здорове та смачне харчування",
        "Комфортні місця для відпочинку",
        "Сучасне кухонне обладнання",
      ],
    },
  };

  const currentRoom = locations[currentLocation];

  const navigateTo = (locationId) => {
    if (currentRoom.connections.includes(locationId)) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentLocation(locationId);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const IconComponent = currentRoom.icon;

  return (
    <div className={styles.container}>
      {/* Заголовок */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <IconComponent size={40} className={styles.headerIcon} />
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>Віртуальна прогулянка</h1>
            <p className={styles.headerSubtitle}>
              Дослідіть наш ліцей не виходячи з дому
            </p>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Основне зображення */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <div
              className={`${styles.imageWrapper} ${isTransitioning ? styles.transitioning : ""}`}
            >
              <Image
                src={currentRoom.image}
                alt={currentRoom.name}
                width={800}
                height={500}
                className={styles.mainImage}
                priority
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/800x500/4A90E2/FFFFFF?text=${encodeURIComponent(currentRoom.name)}`;
                }}
              />

              {/* Оверлей з інформацією */}
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <IconComponent size={32} className={styles.overlayIcon} />
                  <div>
                    <h2 className={styles.overlayTitle}>{currentRoom.name}</h2>
                    <p className={styles.overlaySubtitle}>
                      Поточна локація • Клікніть на доступні переходи
                    </p>
                  </div>
                </div>
              </div>

              {/* Індикатор завантаження */}
              {isTransitioning && (
                <div className={styles.loadingOverlay}>
                  <div className={styles.loadingContent}>
                    <div className={styles.spinner}></div>
                    <p className={styles.loadingText}>Переходимо...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Опис локації */}
          <div className={styles.descriptionSection}>
            <p className={styles.description}>{currentRoom.description}</p>

            {/* Особливості */}
            <div className={styles.highlightsSection}>
              <h3 className={styles.highlightsTitle}>
                <div className={styles.titleAccent}></div>
                Особливості цієї локації:
              </h3>
              <div className={styles.highlightsGrid}>
                {currentRoom.highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightItem}>
                    <div className={styles.highlightDot}></div>
                    <span className={styles.highlightText}>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Бічна панель навігації */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.navigationSection}>
              <h3 className={styles.navigationTitle}>
                <MapPin className={styles.navigationIcon} size={24} />
                Куди йти далі?
              </h3>

              <div className={styles.navigationButtons}>
                {currentRoom.connections.map((connectionId) => {
                  const connectedRoom = locations[connectionId];
                  const ConnectedIcon = connectedRoom.icon;
                  return (
                    <button
                      key={connectionId}
                      onClick={() => navigateTo(connectionId)}
                      className={styles.navigationButton}
                    >
                      <div className={styles.buttonIcon}>
                        <ConnectedIcon size={20} />
                      </div>
                      <span className={styles.buttonText}>
                        {connectedRoom.name}
                      </span>
                      <ArrowRight size={18} className={styles.buttonArrow} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Міні-карта */}
            <div className={styles.mapSection}>
              <h3 className={styles.mapTitle}>Карта локацій</h3>
              <div className={styles.mapGrid}>
                {Object.entries(locations).map(([locationId, location]) => {
                  const LocationIcon = location.icon;
                  const isCurrentLocation = locationId === currentLocation;
                  const isAccessible =
                    currentRoom.connections.includes(locationId);
                  const isClickable = isAccessible || isCurrentLocation;

                  return (
                    <button
                      key={locationId}
                      onClick={() => isAccessible && navigateTo(locationId)}
                      disabled={!isClickable}
                      className={`${styles.mapButton} ${
                        isCurrentLocation
                          ? styles.mapButtonCurrent
                          : isAccessible
                            ? styles.mapButtonAccessible
                            : styles.mapButtonDisabled
                      }`}
                    >
                      <LocationIcon size={18} />
                      <div className={styles.mapButtonText}>
                        {location.name.length > 15
                          ? location.name.substring(0, 12) + "..."
                          : location.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Інструкції */}
            <div className={styles.instructionsSection}>
              <h4 className={styles.instructionsTitle}>
                <span className={styles.instructionsIcon}>💡</span>
                Як користуватися
              </h4>
              <ul className={styles.instructionsList}>
                <li className={styles.instructionItem}>
                  <span className={styles.instructionBullet}>•</span>
                  Обирайте доступні локації для переходу
                </li>
                <li className={styles.instructionItem}>
                  <span className={styles.instructionBullet}>•</span>
                  Читайте опис кожного приміщення
                </li>
                <li className={styles.instructionItem}>
                  <span className={styles.instructionBullet}>•</span>
                  Використовуйте міні-карту для швидкої навігації
                </li>
                <li className={styles.instructionItem}>
                  <span className={styles.instructionBullet}>•</span>
                  Вивчайте особливості кожної локації
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Футер з додатковою інформацією */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          🏫 Хочете відвідати нас особисто?
          <span className={styles.footerHighlight}>
            {" "}
            Зв'яжіться з нами для організації екскурсії!
          </span>
        </p>
        <p className={styles.footerSubtext}>
          Наша адреса та контакти доступні на головній сторінці сайту
        </p>
      </div>
    </div>
  );
};

export default VirtualTour;
