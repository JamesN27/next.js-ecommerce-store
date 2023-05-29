import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Products',
  description:
    'Get your brandnew NBA gear here and ball up for the great game ',
};

export default function ProductsLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <main className={inter.className}>{children}</main>
    </html>
  );
}
