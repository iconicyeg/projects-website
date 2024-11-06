// components/ProjectModal.js
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      const imageUrl = `https:${file.url}`;
      return (
        <div className="my-4">
          <Image
            src={imageUrl}
            alt={title || 'Contentful Image'}
            width={600}
            height={400}
            className="object-contain w-full h-auto"
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {children}
      </a>
    ),
  },
};

export default function ProjectModal({ project, onClose }) {
  return (
    <Transition.Root show={!!project} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="flex min-h-full items-start justify-start md:px-10 md:pt-10 pt-4 px-4 lg:p-0">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative lg:w-4/6 lg:min-h-screen bg-white shadow-xl">
              <button
                type="button"
                className="lg:bg-transparent bg-white/80 px-3 lg:px-0 pb-1 lg:pb-0 rounded-full lg:text-white text-4xl hover:text-gray-200 absolute lg:-right-8 lg:top-4 top-4 right-4 z-10"
                onClick={onClose}
              >
                &times;
              </button>

              {project && (
                <>
                  <div className="relative overflow-hidden">
                    <div className="h-[60%] w-full absolute bg-gradient-to-t from-black/80 to-transparent bottom-0 left-0"></div>
                    {project.fields.coverImage && (
                      <Image
                        src={`https:${project.fields.coverImage.fields.file.url}`}
                        alt={project.fields.coverImage.fields.title || project.fields.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-80"
                      />
                    )}
                    <div className="px-6 py-4 absolute left-0 bottom-0 z-20 text-white flex flex-col md:flex-row items-start gap-2 md:items-center w-full justify-between">
                      <h2 className="font-heading text-4xl font-semibold">{project.fields.title}</h2>
                      {project.fields.unitsNumber && (
                        <span className="inline-block bg-white rounded px-2 py-1 text-xs text-gray-700 mr-2">
                          {project.fields.unitsNumber} Units Rental Building
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 project-content">
                    {project.fields.content &&
                      documentToReactComponents(project.fields.content, renderOptions)}
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
