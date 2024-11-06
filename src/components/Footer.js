import React from 'react';
import Image from 'next/image';
// Import ContactForm if you have it as a separate component
// import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="md:py-14 md:px-8 px-4 py-10">
        <div className="lg:grid grid-cols-3">
          {/* Logo */}
          <div className="mb-4 lg:mb-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={240}
              height={28}
              priority
            />
          </div>

          {/* Footer Description */}
          <p>
            Innovative Project Sales, Leasing, and Marketing Company
          </p>

          {/* Back to Top Button */}
          <div className="hidden lg:block text-right">
            <a
              className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
              href="#"
            >
              Go to Top
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8">
          <p>
            &copy; {new Date().getFullYear()} Iconic Projects Inc. An Iconic Purpose Inc. company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
