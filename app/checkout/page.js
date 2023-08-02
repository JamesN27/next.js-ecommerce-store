import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getJerseys } from '../database/jerseys';
import CheckoutPageContent from './checkoutPageComponents';
import findOrderedJerseys from './findOrderedJerseys';
import getTotalPrice from './getTotalPrice';

export default async function CheckoutPage() {
  const jerseys = await getJerseys();
  // get all current cakes added to cart as a cookie
  const jerseyQuantityCookie = getCookie('cart');

  // get the same as an array of objects
  const jerseyQuantities = !jerseyQuantityCookie
    ? []
    : parseJson(jerseyQuantityCookie);
  const order = [];
  findOrderedJerseys(order, jerseyQuantities, jerseys);

  // get total price of the current order
  const totalPrice = getTotalPrice(order);

  return <CheckoutPageContent order={order} totalPrice={totalPrice} />;
}
