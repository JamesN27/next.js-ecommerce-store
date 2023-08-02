import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getJerseys } from '../database/jerseys.ts';
import style from './cartlayout.module.scss';
import RemoveFromCart from './RemoveButton';

export default async function CartPage() {
  const jerseyQuantityCookie = getCookie('cart');
  const jerseyQuantities = !jerseyQuantityCookie
    ? []
    : parseJson(jerseyQuantityCookie);

  const order = [];

  async function findOrderedJerseys() {
    const jerseys = await getJerseys();

    for (let i = 0; i < jerseyQuantities.length; i++) {
      const orderedJersey = jerseys.find(
        (jersey) => jersey.id === jerseyQuantities[i]['id'],
      );

      if (orderedJersey) {
        order.push({
          ...orderedJersey,
          quantity: jerseyQuantities[i]['quantity'],
        });
      }
    }

    return order;
  }

  await findOrderedJerseys();

  function getTotalPrice() {
    if (order.length > 0) {
      const eachJerseyPrice = order.map((obj) => {
        const priceNumber = parseFloat(obj.price.replace());
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
      <div>
        <Image
          className={style.heroImage}
          src="/images/cartbackground.png"
          alt="Hero Image"
          priority={true}
          layout="fill"
        />
      </div>
      <div className={style.cartContainer}>
        <h1 className={style.headingText}>Shopping cart</h1>
        {order.length > 0 && (
          <ul>
            {order.map((item) => {
              return (
                <li
                  data-test-id={`cart-product-${item.id}`}
                  key={`jersey-${item.id}`}
                >
                  {`${item.name}  ${item.price}`}
                  <div data-test-id={`cart-product-quantity-${item.id}`}>
                    Quantity: {item.quantity}
                  </div>
                  <RemoveFromCart jerseyId={item.id} quantity={item.quantity} />
                </li>
              );
            })}
          </ul>
        )}
        <div data-test-id="cart-total">Total price: {totalPrice}$</div>
        {order.length === 0 && <div>Nothing in the cart</div>}
        <Link href="http://localhost:3000/checkout">
          <p>Proceed to Checkout</p>
        </Link>
      </div>
    </main>
  );
}
