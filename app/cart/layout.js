import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cart',
  description:
    'Get your brandnew NBA gear here and ball up for the great game ',
};

export default function CartLayout({ children }) {
  return (
    <html lang="en">
      <main className={inter.className}>{children}</main>
    </html>
  );
}
