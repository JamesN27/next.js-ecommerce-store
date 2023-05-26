import Image from 'next/image';
import { getJerseys, getJerseysPerson } from '../../database/jerseys';
import AddToCart from './AddToCart';

const jerseys = getJerseys();
const jerseysPerson = getJerseysPerson();

export const dynamic = 'force-dynamic';

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
          The requested jersey does not exist, please choose a regular NBA
          jersey.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>{decodedName}</h1>
      <h2>Ball up with this {jersey.name} Jersey and enjoy the great game</h2>
      {jersey && (
        <div>
          <div> {jersey.price} </div>
          <Image
            src={`/images/${encodeURIComponent(jersey.name)}.png`}
            alt={jersey.name}
            width={300}
            height={300}
          />
          <AddToCart jersey={jersey} />
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
