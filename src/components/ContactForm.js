'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqakewlp");

  if (state.succeeded) {
    return <p className="text-green-600">Thanks for contacting us!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          id="full-name"
          type="text"
          name="full-name"
          required
          placeholder="Full Name"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-slate-500 py-2"
        />
        <ValidationError
          prefix="Full Name"
          field="full-name"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <input
          id="phone-number"
          type="tel"
          name="phone-number"
          required
          placeholder="Phone Number"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-slate-500 py-2"
        />
        <ValidationError
          prefix="Phone Number"
          field="phone-number"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-slate-500 py-2"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Please describe your project"
          rows={4}
          className="w-full border-b border-gray-300 focus:outline-none focus:border-slate-500 py-2 resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex justify-center rounded-full py-2 px-5 bg-slate-900 text-white hover:bg-slate-700 disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
