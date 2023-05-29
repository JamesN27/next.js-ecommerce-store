import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.png';
import style from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Home | Pro Hoops Apparel',
    template: '%s | Pro Hoops Apparel',
  },
  description: 'Get your brandnew NBA gear here and ball up for the great game',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav className={style.navbar}>
            <div className={style.mainLogo}>
              <Image src={logo} alt="Logo" width={500} height={500} />
            </div>

            <div className={style.navbarLinks}>
              <Link href="http://localhost:3000" className={style.homeLink}>
                Home
              </Link>
              <Link
                href="http://localhost:3000/products"
                className={style.productsLink}
              >
                Products
              </Link>
              <div className={style.test}>
                <Link
                  href="http://localhost:3000/cart"
                  className={style.cartLink}
                >
                  Cart
                </Link>
              </div>
            </div>
          </nav>

          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
