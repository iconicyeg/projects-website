import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedLayout from '../components/AnimatedLayout';
import './globals.css';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

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
        <link
  rel="preload"
  href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Red+Hat+Display:wght@600&display=swap"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Red+Hat+Display:wght@600&display=swap"
  />
</noscript>

        
        {/* Viewport Meta Tag for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="min-h-screen flex flex-col bg-gray-100 font-body">
        <Header />
        <main className="flex-grow transition-all duration-300">
          <div className="bg-white md:px-8 px-4">
            <AnimatedLayout>{children}</AnimatedLayout>
          </div>
           {/* Contact Section */}
      <section
        id="contacts"
        className="md:px-8 px-4 shadow-md bg-white rounded-b-3xl flex flex-col justify-center md:py-20 py-12 border-b"
      >
        <div className="lg:grid grid-cols-3 gap-20">
          <div className="mb-16 lg:mb-0">
            <h2 className="font-heading mb-4 text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">Interested in working with us?</h2>
            <p className="text-gray-500 mb-6">
              Contact us today to transform your real estate aspirations into lucrative realities with a team that embodies experience, enthusiasm, and excellence.
            </p>
            <div className="flex flex-col items-start gap-3">
              <a
                className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                href="tel:5873363176"
              >
                phone: 587 336 3176
              </a>
              <a
                className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                href="mailto:hello@iconicprojects.ca"
              >
                hello@iconicprojects.ca
              </a>
              <a
                className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                target="_blank"
                href="https://www.instagram.com/iconic.projects.yeg"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-span-2">
           
            <ContactForm />
          </div>
        </div>
      </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
