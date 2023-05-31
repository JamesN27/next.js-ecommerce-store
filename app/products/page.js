import Image from 'next/image';
import Link from 'next/link';
import { getJerseys } from '../database/jerseys';
import style from './productlayout.module.scss';

const jerseys = getJerseys();

export default function ProductsPage() {
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
      {jerseys.map((jersey) => (
        <div key={`jersey-${jersey.id}`}>
          <br />
          <p>{jersey.name}</p>
          <div>{jersey.price}</div>
          <Link href={`/products/${encodeURIComponent(jersey.name)}`}>
            <Image
              src={`/images/${encodeURIComponent(jersey.name)}.png`}
              alt={jersey.name}
              width={300}
              height={300}
            />
          </Link>
        </div>
      ))}
    </main>
  );
}
