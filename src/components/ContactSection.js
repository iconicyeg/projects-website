// src/components/ContactSection.js
'use client';

import React from 'react';
import ContactForm from '../components/ContactForm'; // Adjust the import path as needed

export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="md:px-8 px-4 shadow-md bg-white rounded-b-3xl flex flex-col justify-center md:py-20 py-12 border-b"
    >
      <div className="lg:grid grid-cols-3 gap-20">
        <div className="mb-16 lg:mb-0">
          <h2 className="font-heading md:mb-8 mb-4 text-3xl md:text-4xl lg:text-5xl font-medium">
            Interested in working with us?
          </h2>
          <p className="text-gray-500 mb-6">
            Contact us today to transform your real estate aspirations into lucrative realities with a team that
            embodies experience, enthusiasm, and excellence.
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
