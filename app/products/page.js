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
  {
    id: 1,
    name: 'denverperson',
    originalName: 'Denver Nuggets',
    personName: 'Denver Person',
  },
  {
    id: 2,
    name: 'lakersperson',
    originalName: 'Los Angeles Lakers',
    personName: 'Lakers Person',
  },
  {
    id: 3,
    name: 'sanantonioperson',
    originalName: 'San Antonio Spurs',
    personName: 'San Antonio Person',
  },
  {
    id: 4,
    name: 'milwaukeeperson',
    originalName: 'Milwaukee Bucks',
    personName: 'Milwaukee Person',
  },
  {
    id: 5,
    name: 'atlantaperson',
    originalName: 'Atlanta Hawks',
    personName: 'Atlanta Person',
  },
  {
    id: 6,
    name: 'detroitperson',
    originalName: 'Detroit Pistons',
    personName: 'Detroit Person',
  },
  {
    id: 7,
    name: 'sacramentoperson',
    originalName: 'Sacramento Kings',
    personName: 'Sacramento Person',
  },
];

export default function ProductsPage() {
  return (
    <main>
      This is my products page
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
      <div>
        {jerseysPerson.map((jersey) => (
          <div key={`jersey-${jersey.name}`}>
            <br />
            <p>{jersey.originalName}</p>
            <Link
              href={`/products/${encodeURIComponent(jersey.originalName)}`}
              as={`/products/${encodeURIComponent(jersey.name)}`}
            >
              <Image
                src={`/images/${encodeURIComponent(jersey.name)}.png`}
                alt={jersey.originalName}
                width={300}
                height={300}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
