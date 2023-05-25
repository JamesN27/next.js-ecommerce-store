import Image from 'next/image';
import style from './page.module.scss';

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to My Page</h2>
      <Image
        className={style.MainLogo}
        src="/images/nbalogo.jpg"
        alt="Main Image"
        width={988}
        height={600}
      />
      {/* Other content specific to the page */}
    </div>
  );
}
