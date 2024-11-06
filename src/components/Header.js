'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('navigation-active');
    } else {
      document.body.classList.remove('navigation-active');
    }
  }, [navOpen]);

  return (
    <header className={`md:py-5 md:px-8  px-4 py-3 transition-all duration-200 ${navOpen ? '' : 'bg-white'}`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={240} // Adjusted width for smaller logo
              height={28} // Adjusted height for smaller logo
              priority
            />
          </Link>

          {/* Hamburger Menu Icon */}
          <div className="open-nav cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar bar2"></div>
          </div>
        </div>

        {/* Navigation Links */}
        {navOpen && (
          <div className="navigation transition-all duration-300">
            <div className="py-10">
              <div className="md:grid grid-cols-3 flex flex-col gap-10">
                {/* Intro Text */}
                <p className="text-gray-900">
                  We are a leading property management and leasing firm,
                  specializing in purpose-built rental properties.
                </p>

                {/* Navigation Links */}
                <nav className="flex flex-col text-black text-3xl gap-6">
                  <Link href="/services" className="m-0 hover:underline">
                    Services
                  </Link>
                  <Link href="/blog" className="m-0 hover:underline">
                    Blog
                  </Link>
                  <Link href="/contact" className="m-0 hover:underline">
                    Contact
                  </Link>
                </nav>

                {/* Social Media Link */}
                <a className="text-gray-900" target="_blank" href="https://www.instagram.com/iconic.projects.yeg">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
