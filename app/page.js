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
    </main>
  );
}
