import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Checkout',
  description: 'Fill in the form and get ready for your order ',
};

export default function CartLayout({ children }) {
  return (
    <html lang="en">
      <main className={inter.className}>{children}</main>
    </html>
  );
}
