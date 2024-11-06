// src/app/blog/page.js
"use client";

import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../../lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const initialPosts = await fetchBlogPosts();
      setPosts(initialPosts);
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
      </Head>

      <section className="py-20">
        <div className="border-b pb-20 mx-auto px-4">
          <div className="lg:grid grid-cols-3 gap-4">
            <span className="text-gray-500">Our Blog</span>
            <div className="col-span-2">
              <h1 className="font-heading dot-end mt-3 lg:mt-0 mb-10 text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Our articles offer you insights, tips, and industry trends to keep you informed and ahead of the curve
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.slice(0, visiblePosts).map((post) => (
                  <Link key={post.fields.slug} href={`/blog/${post.fields.slug}`} passHref>
                    <div className="group bg-white overflow-hidden cursor-pointer">
                      <div className="relative mb-2 overflow-hidden">
                        {post.fields.coverImage && (
                          <div className="relative w-full h-60">
                            <Image
                              src={`https:${post.fields.coverImage.fields.file.url}?w=400&h=300&fm=webp&q=75`}
                              alt={post.fields.coverImage.fields.title || post.fields.title}
                              fill
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
                      <h3>{post.fields.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex gap-3 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex lg:justify-center justify-start rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700"
                >
                  Get in touch
                </Link>
                {visiblePosts < posts.length && (
                  <button
                    onClick={loadMorePosts}
                    className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                  >
                    View More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
