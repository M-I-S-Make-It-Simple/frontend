// import Image from "next/image";
// import headerLyceumLogo from "src/assets/header_lyceum_logo.png";
// import languageChange from "src/assets/language_change.png";
// import schoolPhoto1 from "src/assets/school_photo1.jpg";
// import schoolPhoto2 from "src/assets/school_photo2.jpg";
// import schoolPhoto2 from "src/assets/school_photo3.jpg";
// import instagram from "src/assets/Instagram.png";
// import youtube from "src/assets/YouTube.png";
// import facebook from "src/assets/Facebook.png";

// export default function HistoryPage() {
//   return (
//     <>
//         <header class="header">
//         <nav class="nav-container">
//             <div class="logo">
//               <Image src={headerLyceumLogo}  alt="Logo" width={52} height={52} />
//             </div>
//             <div class="nav-links">
//                 <div class="nav-item dropdown">
//                     <a class="nav-link" href="index.html"><span>Про</span><span>ліцей</span></a>
//                     <div class="dropdown-content">
//                         <a href="visitingcard.html">Наша візитка</a>
//                         <a href="history.html">Історія закладу</a>
//                         <a href="innovative.html">Інноваційна діяльність</a>
//                     </div>
//                 </div>
                
//                 <a class="nav-link" href="news.html"><span>Новини</span></a>
                
//                 <div class="nav-item">
//                     <a class="nav-link" href="teaching-staff.html"><span>Педагогічний</span><span>колектив</span></a>
//                 </div>
                
//                 <div class="nav-item dropdown">
//                     <a class="nav-link" href="#"><span>Прозорість</span><span>управління</span></a>
//                     <div class="dropdown-content">
//                         <a href="regulatory-documents.html">Нормативні документи</a>
//                         <a href="financial-reports.html">Фінансова звітність</a>
//                         <a href="public-information.html">Публічна інформація</a>
//                     </div>
//                 </div>
                
//                 <div class="nav-item dropdown">
//                     <a class="nav-link" href="#"><span>Освітній</span><span>процес</span></a>
//                     <div class="dropdown-content">
//                         <a href="intellect.html">Інтелект та обдарованість</a>
//                         <a href="student-self-government.html">Учнівське самоврядування</a>
//                         <a href="project-research.html">Проєктно-дослідницька діяльність</a>
//                         <a href="patriotic-education.html">Національно-патріотичне виховання</a>
//                         <a href="evaluation-criteria.html">Критерії оцінювання</a>
//                         <a href="career-guidance.html">Профорієнтаційна сторінка</a>
//                         <a href="moral-education.html">Морально-етичне виховання</a>
//                         <a href="clubs-studios.html">Клуби та студії</a>
//                         <a href="sportlife.html">СпортLife</a>
//                         <a href="psychological-support.html">Соціально-психологічна підтримка</a>
//                         <a href="anti-bullying.html">Протидія булінгу</a>
//                     </div>
//                 </div>
                
//                 <div class="nav-item dropdown">
//                     <a class="nav-link" href="#"><span>Методична</span><span>робота</span></a>
//                     <div class="dropdown-content">
//                         <a href="teacher-help.html">На допомогу вчителю</a>
//                         <a href="qualification-improvement.html">Підвищення кваліфікації</a>
//                         <a href="teacher-certification.html">Атестація педпрацівників</a>
//                         <a href="methodical-events.html">Основні методичні заходи</a>
//                         <a href="pedagogical-olympus.html">Педагогічний Олімп</a>
//                         <a href="methodical-lifehacks.html">Методичні лайфхаки</a>
//                     </div>
//                 </div>
                
//                 <div class="nav-item dropdown">
//                     <a class="nav-link" href="#"><span>Інформаційна</span><span>сторінка</span></a>
//                     <div class="dropdown-content">
//                         <a href="#">Батькам</a>
//                         <a href="#">Учням</a>
//                     </div>
//                 </div>
                
//                 <div class="nav-item dropdown">
//                     <a class="nav-link" href="#"><span>Інше</span></a>
//                     <div class="dropdown-content">
//                         <a href="#">Літературний сайт Володимира Малика</a>
//                         <a href="#">Лубенська міська рада</a>
//                         <a href="#">Міністерство освіти і науки України</a>
//                         <a href="#">Український центр оцінювання якості освіти</a>
//                         <a href="#">Харківський регіональний центр оцінювання якості освіти</a>
//                     </div>
//                 </div>
//             </div>
//             <div class="language-switcher">
//                              <Image src={languageChange}  alt="languageChange" width={32} height={38} />
//             </div>
//         </nav>
    
//         <hr />
//     </header>

//     <main class="history-content">
        
//         <section class="school-building">
//             <h2 class="section-title">Будівля школи</h2>
            
//             {/* Блок 1 - текст по центру  */}
//             <div class="history-block">
//                 <div class="history-image">
//               <Image src={schoolPhoto1}  alt="schoolPhoto1" width={380} height={260} />
//                 </div>
//                 <div class="history-text">
//                     <p>Спочатку школа №6 була розташована в одноповерховому будинку по вулиці Лисенка (сьогодні тут знаходиться Лубенська художня школа).</p>
//                 </div>
//             </div>
            
//             {/* <!-- Блок 2 - текст розтягнутий --> */}
//             <div class="history-block">
//                 <div class="history-image">
//               <Image src={schoolPhoto2}  alt="schoolPhoto2" width={380} height={260} />
//                 </div>
//                 <div class="history-text">
//                     <p>Приміщення школи розбудовувалося в роки, коли її очолював Сахно Володимир Іванович, а заступником директора був Горбенко Іван Іванович. У 1967 році по вулиці Карла Маркса зведено нове приміщення для навчання.</p>
//                 </div>
//             </div>
            
//            {/* Блок 3 - текст на всю ширину */}
//             <div class="history-block">
//                 <div class="history-image">
//               <Image src={schoolPhoto3}  alt="schoolPhoto3" width={380} height={260} />
//                 </div>
//                 <div class="history-text">
//                     <p>Організацією будівництва займалася директор школи Чабаненко Олександра Іванівна за активної підтримки всього педагогічного, батьківського й учнівського колективів. Держава відзначила її працю орденом Трудового Червоного Прапора. Особливий ентузіазм виявили вчителі праці Бабич Костянтин Володимирович, Баранов Микола Іванович, Кулініч Микола Олександрович, технічний працівник школи Балацький Петро Трохимович, учителі фізкультури та початкової військової підготовки Зозуля Олексій Іванович та Сластьон Петро Никифорович.</p>
//                 </div>
//             </div>
//         </section>
//     </main>

//     <footer class="footer">
//         <div class="footer-content">
//             <div class="social-section">
//                 <h3 class="social-title">Слідкуйте за нашими оновленнями !</h3>
//                 <div class="social-icons">
//                     <a href="#" class="social-icon">
//               <Image src={instagram}  alt="instagram" width={53} height={53} />
//                     </a>
//                     <a href="https://www.youtube.com/c/SolarTVLubny" class="social-icon" target="_blank" rel="noopener noreferrer">
//               <Image src={youtube}  alt="youTube" width={79} height={53} />
//                     </a>
//                     <a href="#" class="social-icon">
//               <Image src={facebook}  alt="facebook" width={30} height={53} />
//                     </a>
//                 </div>
//             </div>
//             <div class="address-section">
//                 <h3>Адреса</h3>
//                 <p class="address-text">37500 м.Лубни Полтавської <br /> області, вул. Монастирська, 36</p>
//             </div>
//             <div class="contacts-section">
//                 <h3>Контакти</h3>
//                 <p class="contacts-text">
//                    <a href="tel: (053) 617 08 38">(053) 617 08 38</a><br />
//                     <a href="mailto:schoolsuncity@ukr.net">schoolsuncity@ukr.net</a>
//                 </p>
//             </div>
//         </div>
//     </footer>
//     </>
//   );
// }
