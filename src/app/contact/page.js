// src/app/contact/page.js

import Head from 'next/head';

export const metadata = {
  title: 'Contact Us | Iconic Projects',
  description: 'Get in touch with Iconic Projects for property leasing, marketing, and management solutions in Edmonton.',
  openGraph: {
    title: 'Contact Us | Iconic Projects',
    description: 'Reach out to Iconic Projects for expert property management and leasing services in Edmonton.',
    url: 'https://iconicprojects.ca/contact',
    siteName: 'Iconic Projects',
    images: [
      {
        url: 'https://iconicprojects.ca/hero-image.jpg', // Update with an actual image URL if available
        width: 1200,
        height: 630,
        alt: 'Iconic Projects Office',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Iconic Projects',
    description: 'Connect with Iconic Projects for top-notch property leasing and management services.',
    images: ['https://iconicprojects.ca/hero-image.jpg'], // Update with an actual image URL if available
  },
  alternates: {
    canonical: 'https://iconicprojects.ca/contact',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Iconic Projects',
  url: 'https://iconicprojects.ca',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-587-336-3176', // Replace with actual contact number
    contactType: 'Customer Service',
    areaServed: 'CA',
    availableLanguage: ['English'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Only footer visible with main content hidden */}
      <main style={{ display: 'none' }} />
    </>
  );
}
