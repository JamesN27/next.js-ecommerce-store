'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addItemToCart } from './actions';

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
    <>
      <label>
        Quantity
        <button onClick={decrementJersey}>-</button>
        <input data-test-id="product-quantity" value={quantity} readOnly />
        <button onClick={incrementJersey}>+</button>
      </label>
      <form onSubmit={handleAddToCart}>
        <button data-test-id="product-add-to-cart">Add to cart</button>
      </form>
    </>
  );
}
