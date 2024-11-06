// src/app/blog/layout.js

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
          url: 'https://iconicprojects.ca/default-blog-image.webp',
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
      images: ['https://iconicprojects.ca/default-blog-image.webp'],
    },
  };
  
  export default function BlogLayout({ children }) {
    return <>{children}</>;
  }
  