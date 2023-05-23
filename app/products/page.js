import Image from 'next/image';

const jerseys = [
  { id: 1, name: 'denver' },
  { id: 2, name: 'milwaukee' },
  { id: 3, name: 'lakers' },
  { id: 4, name: 'atlanta' },
  { id: 5, name: 'detroit' },
  { id: 6, name: 'sanantonio' },
  { id: 7, name: 'sacramento' },
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
    </main>
  );
}
