import Image from 'next/image';
import React from 'react';
import heroImage from '../public/images/heroimage.png';
import style from './page.module.scss';

export default function HomePage() {
  return (
    <div>
      <div>
        <div>
          <Image
            className={style.heroImage}
            src={heroImage}
            alt="Hero Image"
            layout="fill"
            priority={true}
          />
        </div>
        <nav className={style.navbar}>{/* Navbar content */}</nav>

      </div>
    </div>
  );
}
