import React from 'react';
import Image from 'next/image';
// Import ContactForm if you have it as a separate component
// import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contacts"
        className="px-8 shadow-md mb-8 bg-white rounded-b-3xl flex flex-col justify-center py-20 border-b"
      >
        <div className="lg:grid grid-cols-3 gap-20">
          <div className="mb-16 lg:mb-0">
            <h2 className="text-5xl font-medium leading-tight mb-4 font-heading">Interested in working with us?</h2>
            <p className="text-gray-500 mb-6">
              Contact us today to transform your real estate aspirations into lucrative realities with a team that embodies experience, enthusiasm, and excellence.
            </p>
            <div className="flex flex-col items-start gap-3">
              <a
                className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                href="tel:5873363176"
              >
                phone: 587 336 3176
              </a>
              <a
                className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                href="mailto:hello@iconicprojects.ca"
              >
                hello@iconicprojects.ca
              </a>
              <a
                className="inline-flex justify-center rounded-full py-2 px-5 text-slate-900 bg-gray-200 hover:bg-gray-300"
                target="_blank"
                href="https://www.instagram.com/iconic.projects.yeg"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-span-2">
            {/* Uncomment the line below if you have a ContactForm component */}
            {/* <ContactForm /> */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-14 px-8">
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
