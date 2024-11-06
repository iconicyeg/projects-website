// src/app/blog/layout.js
import Head from 'next/head';

export const metadata = {
  title: 'Insights & Industry Trends | Iconic Projects Blog',
  description: 'Stay ahead of the curve with Iconic Projects’ blog. Explore industry insights, expert tips, and strategies for property leasing, marketing, and management in Edmonton.',
  openGraph: {
    title: 'Insights & Industry Trends | Iconic Projects Blog',
    description: 'Explore industry insights, expert tips, and strategies for property leasing, marketing, and management in Edmonton.',
    url: 'https://iconicprojects.ca/blog',
    siteName: 'Iconic Projects',
    images: [
      {
        url: 'https://iconicprojects.ca/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Iconic Projects Blog Header',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Industry Trends | Iconic Projects Blog',
    description: 'Stay ahead of the curve with expert tips and strategies for property leasing, marketing, and management in Edmonton.',
    images: ['https://iconicprojects.ca/hero-image.webp'],
  },
};

export default function BlogLayout({ children }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Iconic Projects Blog",
              "url": "https://iconicprojects.ca/blog",
              "description": metadata.description,
              "image": metadata.openGraph.images[0].url,
              "publisher": {
                "@type": "Organization",
                "name": "Iconic Projects",
                "url": "https://iconicprojects.ca"
              }
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
