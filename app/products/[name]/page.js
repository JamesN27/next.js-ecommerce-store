import Image from 'next/image';
import { getJerseys, getJerseysPerson } from '../../database/jerseys.ts';
import AddToCart from './AddToCart';
import style from './singleProduct.module.scss';

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
    backgroundImage: 'url("/images/test2.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  };

  return (
    <main>
      <div style={heroImageStyle}>
        <div style={backgroundImageStyle} />
        <h1 className={style.title}>{decodedName}</h1>
        <h2 className={style.subtitle}>
          Ball up with this {jersey?.name} and enjoy the great game
        </h2>
        {jersey && (
          <div className={style.singleProduct}>
            <div>{jersey.price}</div>
            <Image
              src={`/images/${encodeURIComponent(jersey.name)}.png`}
              alt={jersey.name}
              width={300}
              height={300}
            />
          </div>
        )}

        {jerseyPerson && (
          <div className={style.singleProduct2}>
            <Image
              src={`/images/${encodeURIComponent(jerseyPerson.name)}.png`}
              alt={jerseyPerson.originalName}
              width={300}
              height={300}
            />
            <div className={style.addToCart}>
              <AddToCart jersey={jersey} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
