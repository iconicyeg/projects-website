// components/ProjectsCarousel.js
'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-custom.css';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import { fetchProjects } from '../lib/contentful'; // Ensure this import is correct

export default function ProjectsCarousel() {
  const [projects, setProjects] = useState(null); // Initialize as null
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects(); // Fetch projects from Contentful
        setProjects(data); // Set projects data
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    loadProjects();
  }, []);

  if (!projects) {
    return <p>Loading...</p>; // Show loading message until projects are loaded
  }

  return (
    <>
      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          pagination={{ clickable: true }}
          className="mySwiper flex flex-row gap-2"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.fields.coverImage && (
                  <div className="relative w-full h-80 overflow-hidden">
                    <Image
                      src={`https:${project.fields.coverImage.fields.file.url}?w=800&h=600&fm=webp&q=75`}
                      alt={project.fields.coverImage.fields.title || project.fields.title}
                      fill
                      className="object-cover hover:scale-110 duration-200 ease-in-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="mt-2 flex justify-between flex-wrap">
                  <p className="text-medium">{project.fields.title}</p>
                  <p className="text-medium text-gray-400">
                    {project.fields.unitsNumber} Unit Rental Building
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
