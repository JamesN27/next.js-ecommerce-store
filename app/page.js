import Image from 'next/image';
import style from './page.module.scss';

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to My Page</h2>
      <Image
        className={style.MainLogo}
        src="/images/nbalogo.jpg"
        alt="NBA Main Logo"
        width={988}
        height={600}
      />
      {/* Content specific to the main page! */}
    </div>
  );
}
