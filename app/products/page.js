import Image from 'next/image';
import Link from 'next/link';
import { getJerseys } from '../database/jerseys.ts';
import style from './productlayout.module.scss';

export default async function ProductsPage() {
  const jerseys = await getJerseys();
  const firstSet = jerseys.slice(0, 3);
  const secondSet = jerseys.slice(3, 6);

  return (
    <main>
      <div>
        <Image
          className={style.productsImage}
          src="/images/productsimage.png"
          alt="Hero Image"
          priority={true}
          layout="fill"
        />
      </div>
      <div className={style.logoContainer}>
        <div className={style.logoItemWest}>
          {firstSet.map((jersey) => (
            <div key={`jersey-${jersey.id}`}>
              <Link href={`/products/${encodeURIComponent(jersey.name)}`}>
                <Image
                  src={`/images4/${encodeURIComponent(jersey.name)}.png`}
                  alt={jersey.name}
                  width={195}
                  height={164}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className={style.logoItemEast}>
          {secondSet.map((jersey) => (
            <div key={`jersey-${jersey.id}`}>
              <Link href={`/products/${encodeURIComponent(jersey.name)}`}>
                <Image
                  src={`/images5/${encodeURIComponent(jersey.name)}.png`}
                  alt={jersey.name}
                  width={195}
                  height={164}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
