import Image from 'next/image';
import style from './thankyou.module.scss';

export default function ThankYouPage() {
  return (
    <div className={style.thankyouInput}>
      <h1>Basketball Swag Secured!</h1>
      <p>Order confirmed. Let's ball!</p>

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
