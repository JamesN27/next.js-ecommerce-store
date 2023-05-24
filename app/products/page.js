import Image from 'next/image';

const jerseys = [
  { id: 1, name: 'denver' },
  { id: 3, name: 'lakers' },
  { id: 6, name: 'sanantonio' },
  { id: 2, name: 'milwaukee' },
  { id: 4, name: 'atlanta' },
  { id: 5, name: 'detroit' },
  { id: 7, name: 'sacramento' },
];

const jerseysPerson = [
  { id: 1, name: 'denverperson' },
  { id: 3, name: 'lakersperson' },
  { id: 6, name: 'sanantonioperson' },
  { id: 2, name: 'milwaukeeperson' },
  { id: 4, name: 'atlantaperson' },
  { id: 5, name: 'detroitperson' },
  { id: 7, name: 'sacramentoperson' },
];

export default function ProductsPage() {
  return (
    <main>
      This is my products page
      {jerseys.map((jersey) => (
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
