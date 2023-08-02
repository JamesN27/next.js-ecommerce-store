import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thank You!',
  description: 'Thank You for ordering at Pro Hoops Apparel ',
};

export default function CartLayout({ children }) {
  return (
    <html lang="en">
      <main className={inter.className}>{children}</main>
    </html>
  );
}
