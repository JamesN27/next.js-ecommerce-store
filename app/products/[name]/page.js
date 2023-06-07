import Image from 'next/image';
import { getJerseys, getJerseysPerson } from '../../database/jerseys.ts';
import AddToCart from './AddToCart';

export const dynamic = 'force-dynamic';

export default async function SingleProductsPage({ params }) {
  const jerseys = await getJerseys();
  const jerseysPerson = getJerseysPerson();
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

  // Forgive me but I had to use CSS inline styling here, do not ask me why, there was just no other way to get this god damned background picture to work

  const heroImageStyle = {
    height: 400,
  };

  const backgroundImageStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/test.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  };

  return (
    <main>
      <div style={heroImageStyle}>
        <div style={backgroundImageStyle} />
        <h1>{decodedName}</h1>
        <h2>Ball up with this {jersey?.name} and enjoy the great game</h2>
        {jersey && (
          <div>
            <div>{jersey.price}</div>
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
      </div>
    </main>
  );
}
