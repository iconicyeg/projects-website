import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { fetchBlogPosts } from '../lib/contentful';
import Script from 'next/script';

export const metadata = {
  title: 'Expert Property Leasing Solutions in Edmonton | Iconic Projects',
  description:
    'Maximize property value with Iconic Projects. We specialize in leasing and marketing for apartment buildings in Edmonton.',
  authors: [{ name: 'Iconic Projects', url: 'https://iconicprojects.ca' }],
  openGraph: {
    title: 'Expert Property Leasing Solutions in Edmonton | Iconic Projects',
    description: 'Maximize property value with Iconic Projects.',
    url: 'https://iconicprojects.ca',
    siteName: 'Iconic Projects',
    images: [
      {
        url: 'https://iconicprojects.ca/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Hero Image showing project leasing solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Property Leasing Solutions in Edmonton | Iconic Projects',
    description: 'Maximize property value with Iconic Projects.',
    images: ['https://iconicprojects.ca/hero-image.webp'],
  },
};

const ProjectCarousel = dynamic(() => import('../components/ProjectCarousel'));

export default async function HomePage() {
  const latestPosts = await fetchBlogPosts(4);

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Iconic Projects",
            url: "https://iconicprojects.ca",
            logo: "https://iconicprojects.ca/logo.webp",
            sameAs: ["https://www.linkedin.com/company/iconicprojects"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-587-336-3176",
              contactType: "Customer Service",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "22",
            },
            video: {
              "@type": "VideoObject",
              embedUrl: "https://player.vimeo.com/video/1023386914?autoplay=1&muted=1&loop=1",
              thumbnailUrl: "https://i.vimeocdn.com/video/thumbnail.jpg",
              name: "Iconic Walk Video",
              description: "Showcasing our expertise and project successes.",
              duration: "PT14S",
              uploadDate: "2024-10-25T14:57:32-04:00",
            }
          }),
        }}
      />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center md:py-20 py-12 border-b">
        <h1 className="text-3xl lg:text-6xl font-medium text-gray-900 mb-6 leading-tight dot-end">
          Discover your project&apos;s potential and redefine the standards of industry expectations
        </h1>
        <div className="lg:flex gap-8 items-center">
          <p className="text-gray-500 max-w-2xl lg:mb-0 mb-4">
            Project sales and leasing services that are custom-made for developers and property owners who demand
            exceptional outcomes.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section id="projects" className="flex flex-col justify-center md:py-20 py-12 border-b">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 md:mb-8 dot-end">Projects</h2>
        <ProjectCarousel />
      </section>
      
      <section id="aboutus" className="flex flex-col justify-center md:py-20 py-12 border-b">
        <div className="lg:grid grid-cols-3 gap-4">
  <span className="text-gray-500">About us</span>
  <div className="col-span-2 lg:mt-0 mt-2">
    <h2 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">Who We Are and What Drives Us - The Vision Behind Our Success</h2>
    <div className="md:grid flex flex-col grid-cols-2 gap-4 mb-6">
      {/* Video */}
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          src="https://player.vimeo.com/video/1023386914?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Iconic Walk Video"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>


      {/* Image */}
      <div className="relative w-full h-0 pb-[56.25%]">
        <Image
          src="/edmonton.webp"
          alt="Edmonton"
          layout="fill"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
    <p className="text-gray-700 font-semibold mb-6">At Iconic Projects, we leverage our collective expertise to ensure rapid and effective sale or lease-ups for both new and underperforming properties.</p>
    <p className="text-gray-500 mb-6">By fostering a collaborative environment among marketing experts, property management teams, and your internal staff, we optimize the leasing or sales process. This approach allows us to provide your clients with unparalleled service.</p>
    <p className="text-gray-500 mb-6">Tailored strategies that comprehend the industry market landscape paired with insightful analyses set the stage for your property&apos;s success. Each project is more than a building; it&apos;s an opportunity to shape how people live and engage with their environment.
    </p>
<p className="text-gray-500 mb-8">
  Don&apos;t just build—inspire. Don&apos;t just invest—transform. Begin your urban revolution with us.
</p>    <div className="flex gap-3">
    <Link
            href="/contact"
            className="inline-flex justify-center rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
          >
            Get in touch
          </Link>
          <Link
            href="/services#aboutus"
            className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
          >       
Learn more
          </Link>
    </div>
    </div>
</div>
      </section>
      <section id="services" className="flex flex-col justify-center lg:pt-20 pt-12">
        <div className="lg:grid grid-cols-12 gap-4 lg:mb-12">
          <div className="col-span-4"><span className="text-gray-500">Services</span></div>
          <div className="col-span-8">
              <h2 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">We Handle the Planning, Systems, and Marketing, So You Can Focus on What’s Next</h2>
            </div>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 py-10 border-b">
        <span className="md:text-md text-xl font-bold md:font-medium text-gray-900 lg:mr-0 mr-2">(1)</span>
          <span className="md:text-md text-xl font-bold md:font-medium text-gray-900">
          Preparation Consulting</span>
          <p className="text-gray-500 lg:mt-0 mt-3">
          From Sales Forecasting and Marketing Schedules to Competitor and Consumer Behaviour Analysis, you get comprehensive coverage. Data-Driven Pricing Strategies help optimize profits. You also benefit from lease office setup, staging coordination, tour strategies, sales training, suite release planning, and project website development.
          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 py-10 border-b">
        <span className="md:text-md text-xl font-bold md:font-medium text-gray-900 lg:mr-0 mr-2">(2)</span>
          <span className="text-gray-900 md:text-md text-xl font-bold md:font-medium ">
          Process and Systems</span>
          <p className="text-gray-500 lg:mt-0 mt-3">
          Process and Systems optimizes your lead management through advanced phone technology and digital systems. Risk Management ensures security, while Comprehensive Reporting provides clear insights. The service also includes Full Automation and AI-Friendly technology, streamlining workflows and boosting efficiency.          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 py-10 border-b">
        <span className="md:text-md text-xl font-bold md:font-medium text-gray-900 lg:mr-0 mr-2">(3)</span>
          <span className="md:text-md text-xl font-bold md:font-medium text-gray-900">
          Promotion and Marketing</span>
          <p className="text-gray-500 lg:mt-0 mt-3">
          Promotion and Marketing includes everything from Staging and Photography to Website Design and Social Media. You get Engaging Content that drives Organic Traffic, along with Event Planning and Traditional Marketing, ensuring a comprehensive approach to promoting your project.          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 py-10 border-b">
        <span className="md:text-md text-xl font-bold md:font-medium text-gray-900 lg:mr-0 mr-2">(4)</span>
          <span className="md:text-md text-xl font-bold md:font-medium text-gray-900">
          On Site Agents</span>
          <p className="text-gray-500 lg:mt-0 mt-3">
          On site sales teams to complement each unique project Meticulously trained to surpass both your and your customers&apos; expectations. Specializing in high-volume sales, our agents guarantee dynamic engagement to drive impressive conversion rates.          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 py-10 border-b">
        <span className="md:text-md text-xl font-bold md:font-medium text-gray-900 lg:mr-0 mr-2">(5)</span>
          <span className="md:text-md text-xl font-bold md:font-medium text-gray-900">
          Reporting and Analysis</span>
          <p className="text-gray-500 lg:mt-0 mt-3">
          You gain clear insights that guide your decisions through comprehensive data tracking and in-depth analysis. Real-time reports and customized metrics allow you to understand performance and seize new opportunities. Stay ahead of trends, manage risks, and optimize results with a solution designed to keep your project on course.          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-12 mt-12">
          <div className="col-span-4 hidden lg:block"></div>
          <div className="col-span-12 md:col-span-8">
          <div className="flex gap-3">
    <Link
            href="/contact"
            className="inline-flex lg:justify-center justify-start rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
          >       
Learn more
          </Link>
    </div>            </div>
        </div>
      </section>

      <section id="experience" className="flex flex-col justify-center md:py-20 py-12 border-b">
      <span className="text-gray-500 mb-3">Our Experience</span>
      <h2 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">We possess the experience essential for achieving unparalleled sales and lease-up outcomes</h2>
        <div className="lg:grid flex flex-col grid-cols-3 gap-8 lg:gap-16">
          
  <div className="lg:order-first order-last">
  <Link
            href="/contact"
            className="inline-flex justify-center rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
          >
            Get in touch
          </Link>
  </div>
  <div className="relative w-full md:h-[460px] h-[300px]">
  <Image
    src="/experience.webp"
    alt="Experience Image"
    layout="fill"
    className="object-cover"
    loading="lazy"
  />
</div>
    <p className="text-gray-500">Iconic Projects specializes in rapid project sales and leasing, with a proven track record of success.<br></br><br></br> Our team is composed of industry veterans, marketing experts, tech innovators, and sales professionals, all dedicated to delivering exceptional results. <br></br>We harness advanced technology, data-driven insights, and strategic planning to drive your projects forward. <br></br><br></br>Whether it&apos;s market research, on-site sales teams or comprehensive marketing campaigns, our expertise ensures that your project stands out and succeeds. <br></br><br></br>Trust us to bring vision, innovation, and unparalleled execution to every endeavor.</p>
</div>
      </section>

      <section id="ourteam" className="flex flex-col justify-center md:py-20 py-12 border-b">
      <div className="lg:grid grid-cols-3 gap-16">
        <span className="text-gray-500">Our Team</span>
        <div className="col-span-2 md:mt-0 mt-3">
          <h2 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            We consist of marketing specialists, tech innovators, sales executives, and construction professionals who consistently deliver outstanding results for our clients
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 lg:gap-10 mb-16">
            
            {/* Team Member 1 */}
            <div>
              <div className="relative w-full mb-2">
                <Image
                  src="/team/caitlin.webp"
                  alt="Caitlin Jane Heine"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-900 font-bold">Caitlin Jane Heine</p>
              <p className="text-gray-500">Chief Sales Officer</p>
            </div>

            {/* Team Member 2 */}
            <div>
              <div className="relative w-full mb-2">
                <Image
                  src="/team/michael.webp"
                  alt="Michael van Buteselaar"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-900 font-bold">Michael van Buteselaar</p>
              <p className="text-gray-500">Director of Projects</p>
            </div>

            {/* Team Member 3 */}
            <div>
              <div className="relative w-full mb-2">
                <Image
                  src="/team/ludo.webp"
                  alt="Ludovic Aubertin"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-900 font-bold">Ludovic Aubertin</p>
              <p className="text-gray-500">Director of Leasing</p>
            </div>

            {/* Team Member 4 */}
            <div>
              <div className="relative w-full mb-2">
                <Image
                  src="/team/dmytro.webp"
                  alt="Dmytro Lavryshyn"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-900 font-bold">Dmytro Lavryshyn</p>
              <p className="text-gray-500">IT Business Analyst</p>
            </div>

            {/* Team Member 5 */}
            <div>
              <div className="relative w-full mb-2">
                <Image
                  src="/team/olena.webp"
                  alt="Olena Dziuba"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-900 font-bold">Olena Dziuba</p>
              <p className="text-gray-500">Leasing Manager</p>
            </div>

            {/* Team Member 6 */}
            <div>
              <div className="relative w-full mb-2">
                <Image
                  src="/team/sarah.webp"
                  alt="Sarah Picco"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-900 font-bold">Sarah Picco</p>
              <p className="text-gray-500">Leasing Agent</p>
            </div>

            {/* Team Member 7 */}
            <div>
              <div className="relative w-full mb-2">
                <Image
                  src="/team/max.webp"
                  alt="Max Pryimak"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <p className="text-gray-900 font-bold">Max Pryimak</p>
              <p className="text-gray-500">Marketing Manager</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>

      <section id="posts" className="flex flex-col justify-center lg:pt-20 pt-12">
      <div className="lg:grid grid-cols-3 gap-4 border-b pb-20">
        <span className="text-gray-500">Latest Posts</span>
        <div className="col-span-2 mt-3 md:mt-0">
          <h2 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium">
            Our articles offer you insights, tips, and industry trends to keep you informed and ahead of the curve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
  <Link key={post.fields.slug} href={`/blog/${post.fields.slug}`} passHref>
    <div className="group bg-white overflow-hidden cursor-pointer">
      <div className="relative mb-2 overflow-hidden">
        {post.fields.coverImage && (
          <div className="relative w-full h-60">
            <Image
              src={`https:${post.fields.coverImage.fields.file.url}?w=400&h=300&fm=webp&q=75`}
              alt={post.fields.coverImage.fields.title || post.fields.title}
              fill
              loading="lazy"
              className="object-cover saturate-25 group-hover:saturate-75 group-hover:scale-110 ease-in-out duration-200"
            />
          </div>
        )}
        
        {/* Display tags if available */}
        {post.fields.tags && post.fields.tags.length > 0 && (
          <div className="absolute top-3 left-3">
            {post.fields.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-white rounded px-2 py-1 text-xs text-gray-700 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Title */}
        <h3>{post.fields.title}</h3>
    </div>
  </Link>
))}
<div className="flex gap-3">
    <Link
            href="/contact"
            className="inline-flex lg:justify-center justify-start rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
          >
            Get in touch
          </Link>
          <Link
            href="/blog"
            className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
          >       
View More
          </Link>
    </div>
            </div>
          </div>
        </div>
      </section>


       
    </div>
    </>
  );
  
}
