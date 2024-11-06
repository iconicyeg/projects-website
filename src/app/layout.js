// Remove this import
// import Head from 'next/head';

// Keep your other imports
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedLayout from '../components/AnimatedLayout';
import './globals.css';

// Import the ContactSection component
import ContactSection from '../components/ContactSection';
// Import the Analytics component
import Analytics from '../components/Analytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons and Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Viewport Meta Tag for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-100 font-body">
        {/* Include the Analytics component */}
        <Analytics />
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
