import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { fetchBlogPosts, fetchBlogPostBySlug } from '../../../lib/contentful';

// SEO metadata function
export async function generateMetadata({ params }) {
  const { slug } = await params; // Await params to resolve
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Iconic Projects',
      description: 'The requested post could not be found.',
    };
  }

  const { title, excerpt, publishDate, coverImage } = post.fields;
  const coverImageUrl = coverImage?.fields?.file?.url
    ? `https:${coverImage.fields.file.url}?w=800&h=600&fm=webp&q=75`
    : 'https://iconicprojects.ca/default-image.webp';

  return {
    title: `${title} - Iconic Projects`,
    description: excerpt || '',
    openGraph: {
      title,
      description: excerpt || '',
      url: `https://iconicprojects.ca/blog/${slug}`,
      images: [{ url: coverImageUrl, width: 800, height: 600, alt: title }],
      type: 'article',
      publishedTime: publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt || '',
      images: [coverImageUrl],
    },
    alternates: {
      canonical: `https://iconicprojects.ca/blog/${slug}`,
    },
  };
}

// Static params generation
export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.fields.slug }));
}

// Blog Post Page Component
export default async function BlogPostPage({ params }) {
  const { slug } = await params; // Await params here as well
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
    return null;
  }

  const { title, content, coverImage, tags, publishDate, author, excerpt } = post.fields;
  const coverImageUrl = coverImage?.fields?.file?.url
    ? `https:${coverImage.fields.file.url}?w=1200&h=800&fm=webp&q=75`
    : 'https://iconicprojects.ca/default-image.webp';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: [coverImageUrl],
    author: {
      '@type': 'Person',
      name: author || 'Iconic Projects',
    },
    datePublished: publishDate,
    dateModified: post.sys.updatedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Iconic Projects',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iconicprojects.ca/logo.png',
      },
    },
    description: excerpt || '',
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article className="max-w-4xl mx-auto py-20 px-4">
        <div className="border-b pb-20">
          {tags?.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold mt-8 mb-4">{title}</h1>
          <p className="text-gray-600 mb-6">
            Published on{' '}
            {new Date(publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          {coverImageUrl && (
            <div className="relative w-full h-96 mb-8">
              <Image
                src={coverImageUrl}
                alt={coverImage?.fields?.title || title}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-full text-gray-700">
            {content && documentToReactComponents(content)}
          </div>
        </div>
      </article>
    </>
  );
}
