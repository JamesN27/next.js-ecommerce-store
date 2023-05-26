'use client';

import { useRouter } from 'next/navigation';
import { removeJerseyFromCart } from './actions';

export default function RemoveFromCart(props) {
  const router = useRouter();

  return (
    <form
      action={async () => {
        router.refresh();
        await removeJerseyFromCart(props.jerseyId);
      }}
    >
      <button>Remove</button>
    </form>
  );
}
