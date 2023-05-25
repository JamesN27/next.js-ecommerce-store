import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import style from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home | Jimsis NBA merch',
    template: '%s | Jimsis NBA merch',
  },
  description:
    'Get your brandnew NBA gear here and ball up for the great game ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>
          <nav className={style.navbar}>
            <Link href="http://localhost:3000"> Home</Link>{' '}
            <Link href="http://localhost:3000/products"> Products</Link>{' '}
            <Link href="http://localhost:3000/cart"> Cart</Link>{' '}
          </nav>

          {children}
        </main>
      </body>
    </html>
  );
}
