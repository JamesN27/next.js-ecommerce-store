'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addItemToCart(jersey) {
  const cartCookie = getCookie('cart');

  const cartItems = !cartCookie ? [] : parseJson(cartCookie);

  const itemToUpdate = cartItems.find((item) => {
    return item.id === jersey.id;
  });

  if (itemToUpdate) {
    itemToUpdate.quantity += 1;
  } else {
    cartItems.push({ id: jersey.id, quantity: 1 });
  }

  await cookies().set('cart', JSON.stringify(cartItems));
}
