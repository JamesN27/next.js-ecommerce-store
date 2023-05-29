import Image from 'next/image';
import heroImage from '../public/images/heroimage.png';
import style from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div>
        <Image
          className={style.heroImage}
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          priority={true}
        />
      </div>
      <div className={style.companyBox}>
        <h2>Welcome to Pro Hoops Apparel!</h2>
        <p>
          Your destination for NBA Jerseys! Step into the world of basketball
          fashion and embrace the spirit of the game. <br /> Discover the latest
          jerseys worn by your favorite NBA players, from the electrifying dunks
          of LeBron James to the mesmerizing handles of Stephen Curry. <br />{' '}
          Join the passionate NBA community, elevate your style, and be a part
          of basketball history. Shop now at Pro Hoops Apparel and score your
          own piece of NBA greatness!
        </p>
      </div>
    </main>
  );
}
