'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addItemToCart(jersey, quantity) {
  const cartCookie = getCookie('cart');
  const cartItems = !cartCookie ? [] : parseJson(cartCookie);

  const itemToUpdate = cartItems.find((item) => item.id === jersey.id);

  if (itemToUpdate) {
    itemToUpdate.quantity += quantity;
  } else {
    cartItems.push({ id: jersey.id, quantity });
  }

  await cookies().set('cart', JSON.stringify(cartItems));
}
