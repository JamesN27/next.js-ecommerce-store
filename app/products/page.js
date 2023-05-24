import Image from 'next/image';
import Link from 'next/link';

const jerseys = [
  { id: 1, name: 'Denver Nuggets' },
  { id: 2, name: 'Los Angeles Lakers' },
  { id: 3, name: 'San Antonio Spurs' },
  { id: 4, name: 'Milwaukee Bucks' },
  { id: 5, name: 'Atlanta Hawks' },
  { id: 6, name: 'Detroit Pistons' },
  { id: 7, name: 'Sacramento Kings' },
];

const jerseysPerson = [
  { id: 1, name: 'denverperson' },
  { id: 2, name: 'lakersperson' },
  { id: 3, name: 'sanantonioperson' },
  { id: 4, name: 'milwaukeeperson' },
  { id: 5, name: 'atlantaperson' },
  { id: 6, name: 'detroitperson' },
  { id: 7, name: 'sacramentoperson' },
];

export default function ProductsPage() {
  return (
    <main>
      This is my products page
      {jerseys.map((jersey) => (
        <div key={`jersey-${jersey.id}`}>
          <br />
          <p>{jersey.name}</p>
          <Link href={`/products/${jersey.name}`}>
            <Image
              src={`/images/${jersey.name}.png`}
              alt={jersey.name}
              width={300}
              height={300}
            />{' '}
          </Link>
        </div>
      ))}
      <div>
        {jerseysPerson.map((jersey) => (
          <div key={`jersey-${jersey.id}`}>
            <br />
            <Image
              src={`/images/${jersey.name}.png`}
              alt={jersey.name}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
