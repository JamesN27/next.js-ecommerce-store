import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getJerseys } from '../database/jerseys';
import RemoveFromCart from './RemoveButton';

export default function CartPage() {
  const jerseyQuantityCookie = getCookie('cart');
  const jerseyQuantities = !jerseyQuantityCookie
    ? []
    : parseJson(jerseyQuantityCookie);

  const order = [];
  function findOrderedJerseys() {
    for (let i = 0; i < jerseyQuantities.length; i++) {
      const orderedJersey = getJerseys().find(
        (jersey) => jersey.id === jerseyQuantities[i]['id'],
      );
      if (orderedJersey && orderedJersey.id === jerseyQuantities[i]['id']) {
        order.push({
          ...orderedJersey,
          quantity: jerseyQuantities[i]['quantity'],
        });
      }
    }
    return order;
  }
  findOrderedJerseys();

  function getTotalPrice() {
    if (order.length > 0) {
      const eachJerseyPrice = order.map((obj) => {
        const priceNumber = parseFloat(obj.price.replace('€', ''));
        return priceNumber * obj.quantity;
      });
      const totalPrice = eachJerseyPrice.reduce((acc, currentValue) => {
        return acc + currentValue;
      }, 0);
      return totalPrice.toFixed(2);
    } else {
      return '0.00';
    }
  }
  const totalPrice = getTotalPrice();

  return (
    <main>
      <h1>Shopping cart</h1>
      {order.length > 0 && (
        <ul>
          {order.map((item) => {
            return (
              <li
                data-test-id={`cart-product-${item.id}`}
                key={`jersey-${item.id}`}
              >
                {`${item.name} Jersey €${item.price}`}
                <div data-test-id={`cart-product-quantity-${item.id}`}>
                  Quantity: {item.quantity}
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div data-test-id="cart-total">Total price: €{totalPrice}</div>
      {order.length === 0 && <div>Nothing in the cart</div>}
      <RemoveFromCart />
    </main>
  );
}
