import Image from 'next/image';
import style from './thankyou.module.scss';

export default function ThankYouPage() {
  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your order has been confirmed.</p>

      <div>
        <Image
          className={style.heroImage}
          src="/images/cartbackground.png"
          alt="Hero Image"
          priority={true}
          layout="fill"
        />
      </div>
    </div>
  );
}
