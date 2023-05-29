import Image from 'next/image';
import React from 'react';
import heroImage from '../public/images/heroimage.png';
import HomePageLayout from './HomePageLayout';
import style from './page.module.scss';

export default function HomePage() {
  return (
    <HomePageLayout>
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
    </HomePageLayout>
  );
}
