'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeJerseyFromCart(jerseyId) {
  const jerseyQuantityCookie = getCookie('cart');

  const jerseyQuantities = !jerseyQuantityCookie
    ? []
    : parseJson(jerseyQuantityCookie);

  const jerseyToRemove = jerseyQuantities.findIndex((obj) => {
    return obj.id === jerseyId;
  });

  jerseyQuantities.splice(jerseyToRemove, 1);

  await cookies().set('cart', JSON.stringify(jerseyQuantities));
}
