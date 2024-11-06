// src/app/services/page.js
import Link from 'next/link';
import Image from 'next/image';
import ServicesAccordion from '../../components/ServicesAccordion';
import Head from 'next/head';
import teamImage from '/public/team.webp';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Leasing, Marketing & Property Management',
  provider: {
    '@type': 'Organization',
    name: 'Iconic Projects',
    url: 'https://iconicprojects.ca',
  },
  serviceType: [
    'Market Research',
    'Property Leasing',
    'Marketing Strategies',
    'Automated Leasing Systems',
  ],
};

export const metadata = {
  title: 'Leasing, Marketing & Property Management Services | Iconic Projects Edmonton',
  description: 'Explore our services: market research, automated leasing systems, and high-impact marketing strategies to drive apartment occupancy fast.',
  authors: [{ name: 'Iconic Projects', url: 'https://iconicprojects.ca' }],
  openGraph: {
    title: 'Leasing, Marketing & Property Management Services | Iconic Projects Edmonton',
    description: 'Discover market research, automated leasing, and high-impact marketing to optimize property leasing.',
    url: 'https://iconicprojects.ca/services',
    siteName: 'Iconic Projects',
    images: [
      {
        url: 'https://iconicprojects.ca/team.webp',
        width: 1200,
        height: 630,
        alt: 'Iconic Projects Team working on property management and leasing.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leasing, Marketing & Property Management Services | Iconic Projects',
    description: 'Explore our market research and high-impact leasing solutions.',
    images: ['https://iconicprojects.ca/team.webp'],
  },
};

const services = [
  {
    title: 'Preparation Consulting',
    description: `
      From Sales Forecasting and Marketing Schedules to Competitor and Consumer Behaviour Analysis, you get comprehensive coverage. 
      <ul>
        <li>Sales Forecasting</li>
        <li>Setting targets to satisfy all shareholders.</li>
        <li>Marketing Budgets and Schedules</li>
        <li>Competitor Analysis</li>
        <li>Data-Driven Pricing Strategies</li>
        <li>Lease office setup</li>
        <li>Tour strategies and sales training</li>
      </ul>
    `,
  },
  {
    title: 'Process and Systems',
    description: `
      Process and Systems optimize your lead management through advanced technology and comprehensive reporting.
      <ul>
        <li>Client and Lead Management</li>
        <li>Phone Technology and Digital Systems</li>
        <li>Comprehensive Reporting</li>
        <li>Full Automation and AI Friendly</li>
      </ul>
    `,
  },
  {
    title: 'Promotion and Marketing',
    description: `
      Promotion and Marketing includes everything from staging to social media, ensuring comprehensive project promotion.
      <ul>
        <li>Staging and Photography</li>
        <li>Website Design and Social Media</li>
        <li>Content Creation and Organic Traffic</li>
        <li>Event Planning and Traditional Marketing</li>
      </ul>
    `,
  },
  {
    title: 'On Site Agents',
    description: `
      On-site sales teams meticulously trained to exceed expectations, specializing in high-volume sales to drive impressive conversion rates.
    `,
  },
  {
    title: 'Reporting and Analysis',
    description: `
      Comprehensive data tracking and analysis to guide your decisions, with real-time reporting to keep your project on course.
    `,
  },
];

export default function ServicesPage() {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Leasing, Marketing & Property Management",
              provider: {
                "@type": "Organization",
                name: "Iconic Projects",
                url: "https://iconicprojects.ca",
              },
              serviceType: [
                "Market Research",
                "Property Leasing",
                "Marketing Strategies",
                "Automated Leasing Systems",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                ratingCount: "22",
              },
            }),
          }}
        />
      </Head>

      <main className="flex flex-col min-h-screen">
        <section id="services" className="ul-styled flex flex-col justify-center lg:pt-20 pt-12">
          <div className="lg:grid grid-cols-12 gap-4 mb-12">
            <div className="col-span-4">
              <span className="text-gray-500">Services</span>
            </div>
            <div className="col-span-8">
              <h1 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium ">
                Tailored strategies that comprehend the Edmonton market landscape paired with insightful analyses set the stage for your property&apos;s success
              </h1>
              <h2 className="md:text-2xl text-md mb-8">
                Each project is more than a building; it&apos;s an opportunity to shape how people live and engage with their environment.
              </h2>
  
              <ServicesAccordion services={services} />
            </div>
          </div>
        </section>

        <section id="aboutus" className="ul-styled flex flex-col justify-center lg:pt-20 pt-12">
          <div className="lg:grid grid-cols-3 gap-4 border-b pb-20">
            <span className="text-gray-500">About us</span>
            <div className="col-span-2">
              <h2 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Who We Are and What Drives Us - The Vision Behind Our Success
              </h2>
              <div className="relative w-full mb-6 h-0 pb-[56.25%]">
                <Image
                  src={teamImage}
                  alt="Iconic Projects Team"
                  fill
                  className="saturate-0 object-cover object-bottom"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-700 font-semibold mb-6">
                Our unique leasing strategy combines several key elements to deliver exceptional results.
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl mb-3 font-medium">(1) Preparation</h3>
                <ul className="text-gray-600">
                  <li>Market Research</li>
                  <li>Marketing Budgets and Schedules</li>
                  <li>Competitor Analysis</li>
                </ul>
              </div>
              <div className="mb-10"><h3 className="text-xl mb-3 font-medium">(2) Process
             </h3>
             <p className="text-gray-600">The secret is actually all in the basics, which should never be taken for granted. Iconic has curated an efficient and effective system to manage every detail with a focus on impact and high volume sales.</p>
             <ul className="text-gray-600">
                <li>Automated Lead Management</li>
                <li>Integrated Phone Systems</li>
                <li>Proprietary CRM with AI</li>
                <li>Automated Lease Process</li>
                <li>Digital Booking Systems</li>
             </ul>
             </div>
             <div className="mb-10"><h3 className="text-xl mb-3 font-medium">(3) Promotion
             </h3>
             <p className="text-gray-600">Every project deserves a unique approach, and we love to experiment in the realm of difference. If what has always been done is not working - why don’t we try something different? Be Bold Always.</p>
             <ul className="text-gray-600">
                <li>Staging and Photography</li>
                <li>Website Design and Social Media</li>
                <li>Video and Virtual Tours</li>
                <li>Community Events</li>
                <li>Full Content Creation</li>
             </ul>
             </div>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
