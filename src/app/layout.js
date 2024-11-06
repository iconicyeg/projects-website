import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedLayout from '../components/AnimatedLayout';
import './globals.css';
import Head from 'next/head';
import Script from 'next/script';


// Import the ContactSection component
import ContactSection from '../components/ContactSection';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Iconic Projects</title>
        <meta name="description" content="Iconic Projects" />
        
        {/* Favicons and Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
 {/* Google Analytics Script */}
 <Script src="https://www.googletagmanager.com/gtag/js?id=G-VN3NH43Y5Q" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VN3NH43Y5Q');
        `}
      </Script>
        

        
        {/* Viewport Meta Tag for Responsive Design */}
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="min-h-screen flex flex-col bg-gray-100 font-body">
        <Header />
        <main className="flex-grow transition-all duration-300">
          <div className="bg-white md:px-8 px-4">
            <AnimatedLayout>{children}</AnimatedLayout>
          </div>
          <ContactSection />
        </main>
        <Footer />
      </body>
    </html>
  );
}
