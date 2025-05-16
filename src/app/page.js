import Image from "next/image";
import logoImage from '../assets/logo_bg.png';

export default function Home() {
  return (
      <>
        <div className="container">
          <div className="background">
            <div className="gradient-bg"></div>
            <div className="logo-image-bg">
              <Image src={logoImage}  alt="Background Logo" width={100} height={50} />
            </div>
          </div>

          <div className="content">
            <h1 className="welcome-text">Ласкаво просимо!</h1>

            <div className="text-container">
              <div className="text-box">
                <p>Якщо Ви шукаєте друзів і партнерів, цікавитеся системою освіти в Україні та хочете переконатися,
                  як вона діє на практиці, маєте бажання віртуально повернутися в дитинство чи поспілкуватися зі
                  своїми вчителями, поділитися життєвими надбаннями, дати добру пораду чи отримати її, або ж намірилися
                  надати нашому ліцею спонсорську допомогу, <span className="bold-text">ласкаво запрошуємо на наш офіційний сайт</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
