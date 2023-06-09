'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { removeJerseyFromCart } from './actions';

export default function RemoveFromCart(props) {
  const [quantityToRemove, setQuantityToRemove] = useState(1); // Initial quantity to remove is set to 1
  const router = useRouter();

  const handleRemove = async (event) => {
    event.preventDefault();
    router.refresh();
    await removeJerseyFromCart(props.jerseyId, quantityToRemove);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (Number.isInteger(value) && value > 0) {
      setQuantityToRemove(value);
    }
  };

  return (
    <form onSubmit={handleRemove}>
      <input
        type="number"
        min="1"
        value={quantityToRemove}
        onChange={handleQuantityChange}
      />
      <button>Remove</button>
    </form>
  );
}
