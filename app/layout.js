import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
      <body className={inter.className}>
        <nav>
          <Link href="http://localhost:3000"> Home</Link>{' '}
          <Link href="http://localhost:3000/products"> Products</Link>{' '}
          <Link href="http://localhost:3000/cart"> Cart</Link>{' '}
        </nav>
        {children}
      </body>
    </html>
  );
}
