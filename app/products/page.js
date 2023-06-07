import Image from 'next/image';
import Link from 'next/link';
import { getJerseys } from '../database/jerseys.ts';
import style from './productlayout.module.scss';

//

export default async function ProductsPage() {
  const jerseys = await getJerseys();
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

          <Link href={`/products/${encodeURIComponent(jersey.name)}`}>
            <Image
              src={`/images2/${encodeURIComponent(jersey.name)}.png`}
              alt={jersey.name}
              width={150}
              height={126}
            />
          </Link>
        </div>
      ))}
    </main>
  );
}
