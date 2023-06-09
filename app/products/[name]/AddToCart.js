'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addItemToCart } from './actions';
import style from './singleProduct.module.scss';

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  function decrementJersey() {
    if (quantity <= 1) {
      return quantity;
    }
    setQuantity(quantity - 1);
  }
  function incrementJersey() {
    setQuantity(quantity + 1);
  }

  async function handleAddToCart(e) {
    e.preventDefault();
    await addItemToCart(props.jersey, quantity);
    router.refresh();
  }

  return (
    <div className="add-to-cart">
      <label>
        Quantity
        <button className={style.numberButton1} onClick={decrementJersey}>
          -
        </button>
        <input
          className={style.quantityInput}
          type="number"
          value={quantity}
          readOnly
        />
        <button className={style.numberButton2} onClick={incrementJersey}>
          +
        </button>
      </label>
      <form onSubmit={handleAddToCart}>
        <button className="add-to-cart-button">Add to Cart</button>
      </form>
    </div>
  );
}
