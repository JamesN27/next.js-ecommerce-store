'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeJerseyFromCart(jerseyId, quantity) {
  const jerseyQuantityCookie = getCookie('cart');

  const jerseyQuantities = !jerseyQuantityCookie
    ? []
    : parseJson(jerseyQuantityCookie);

  const jerseyIndex = jerseyQuantities.findIndex((obj) => {
    return obj.id === jerseyId;
  });

  if (jerseyIndex !== -1) {
    const jersey = jerseyQuantities[jerseyIndex];
    if (jersey.quantity > quantity) {
      jersey.quantity -= quantity;
    } else {
      jerseyQuantities.splice(jerseyIndex, 1);
    }
  }

  await cookies().set('cart', JSON.stringify(jerseyQuantities));
}
