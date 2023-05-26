import './globals.scss';
import Link from 'next/link';
import style from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Home | Pro Hoops Apparel',
    template: '%s | Pro Hoops Apparel',
  },
  description:
    'Get your brandnew NBA gear here and ball up for the great game ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav className={style.navbar}>
            <div>
              <h1>Pro Hoops Apparel </h1>
            </div>
            <div className={style.navbarLinksRight}>
              <div className={style.navbarLinks}>
                <Link href="http://localhost:3000"> Home</Link>{' '}
                <Link href="http://localhost:3000/products"> Products</Link>{' '}
              </div>
            </div>
            <div className={style.cartLink}>
              <Link href="http://localhost:3000/cart">Cart</Link>🏀{' '}
            </div>
          </nav>
          <div className={style.mainContent}>{children}</div>
        </main>
      </body>
    </html>
  );
}
