import Image from 'next/image';

export const dynamic = 'force-dynamic';

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

export default function SingleProductsPage({ params }) {
  const decodedName = decodeURIComponent(params.name);
  const jersey = jerseys.find((item) => item.name === decodedName);
  const jerseyPerson = jerseysPerson.find(
    (person) => person.originalName === decodedName,
  );

  if (!jersey && !jerseyPerson) {
    return (
      <main>
        <h1>Jersey Not Found</h1>
        <p>
          The requested jersey does not exist my friend, please chose a regular
          NBA jersey.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>{decodedName}</h1>
      <h2> Ball up with this {jersey.name} Jersey and enjoy the great game</h2>
      {jersey && (
        <div>
          <Image
            src={`/images/${encodeURIComponent(jersey.name)}.png`}
            alt={jersey.name}
            width={300}
            height={300}
          />
        </div>
      )}
      {jerseyPerson && (
        <div>
          <Image
            src={`/images/${encodeURIComponent(jerseyPerson.name)}.png`}
            alt={jerseyPerson.originalName}
            width={300}
            height={300}
          />
        </div>
      )}
    </main>
  );
}
