"use client";

import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../../lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialPosts = await fetchBlogPosts();
        setPosts(initialPosts);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
      }
    };
    fetchData();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 4);
  };

  return (
    <>
      <Head>
        <title>Insights & Industry Trends | Iconic Projects Blog</title>
        <meta name="description" content="Explore industry insights, expert tips, and strategies for property leasing, marketing, and management in Edmonton." />
        <meta property="og:title" content="Insights & Industry Trends | Iconic Projects Blog" />
        <meta property="og:description" content="Stay ahead with expert tips and strategies for property leasing, marketing, and management in Edmonton." />
        <meta property="og:url" content="https://iconicprojects.ca/blog" />
        <meta property="og:image" content="https://iconicprojects.ca/default-blog-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="md:py-20 py-12">
        <div className="border-b md:pb-20 pb-14">
          <div className="lg:grid grid-cols-3 gap-4">
            <span className="text-gray-500">Our Blog</span>
            <div className="col-span-2">
              <h1 className="font-heading dot-end  md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium">
                Our articles offer you insights, tips, and industry trends to keep you informed and ahead of the curve
              </h1>

              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.slice(0, visiblePosts).map((post) => (
                      <Link key={post.fields.slug} href={`/blog/${post.fields.slug}`} passHref>
                        <div className="group bg-white overflow-hidden cursor-pointer" aria-label={post.fields.title}>
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
                          <h3 className="font-medium text-lg">{post.fields.title}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-10">
                    <Link
                      href="/contact"
                      className="inline-flex lg:justify-center justify-start rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
                      aria-label="Contact us"
                    >
                      Get in touch
                    </Link>
                    {visiblePosts < posts.length && (
                      <button
                        onClick={loadMorePosts}
                        className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                        aria-label="Load more blog posts"
                      >
                        Load More
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
