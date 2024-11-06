// src/components/ServicesAccordion.js
'use client';

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function ServicesAccordion({ services }) {
  return (
    <div className="w-full">
      {services.map((service, index) => (
        <Disclosure key={index} as="div" className="border-b">
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex justify-between items-center w-full py-4 text-left text-xl font-bold text-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75"
                aria-expanded={open}
                aria-controls={`panel-${index}`}
              >
                <h3 id={`heading-${index}`} className="text-slate-900">
                  {service.title}
                </h3>
                <ChevronDownIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-6 h-6 text-slate-500 transition-transform duration-200`}
                  aria-hidden="true"
                />
              </Disclosure.Button>
              <Disclosure.Panel
                id={`panel-${index}`}
                aria-labelledby={`heading-${index}`}
                className="pt-4 pb-2 text-gray-700 transition-opacity duration-200"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
