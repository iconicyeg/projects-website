import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedLayout from '../components/AnimatedLayout';
import './globals.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Website</title>
        <meta name="description" content="A simple website built with Next.js" />
        
        {/* Favicons and Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Viewport Meta Tag for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="min-h-screen flex flex-col bg-gray-100 font-body">
        <Header />
        <main className="flex-grow transition-all duration-300">
          <div className="bg-white px-8">
            <AnimatedLayout>{children}</AnimatedLayout>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
