import Image from 'next/image';
import Link from 'next/link';
import { getJerseys } from '../database/jerseys';

const jerseys = getJerseys();

export default function ProductsPage() {
  return (
    <main>
      {jerseys.map((jersey) => (
        <div key={`jersey-${jersey.id}`}>
          <br />
          <p>{jersey.name}</p>
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
