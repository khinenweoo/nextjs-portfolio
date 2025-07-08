"use client";
import React, { useRef, useState } from "react";
import { FaLocationArrow } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image';

interface ProjectCardProps {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  gitrepo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, des, img, iconLists, link, gitrepo }) => {

  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    if (!ref.current) return;
    // get card dimensions
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // calculate mouse position relative to center
    const x = e?.clientX - rect.left;
    const y = e?.clientY - rect.top;

    // Convert to percentage (0-1) then to degrees (-9 to 9)
    const xPercent = (x / width) * 2 - 1; // Range: -1 to 1
    const yPercent = (y / height) * 2 - 1; // Range: -1 to 1
    
    // Apply rotation (multiply by max desired rotation degrees)
    setRotation({
      x: yPercent * 10,  
      y: xPercent * -10
    });

  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // Reset to flat position
  }

  return (
    <div
      key={id}
      className="carousel-item relative w-full md:w-4/5 lg:w-4/5 xl:w-4/5 space-x-4 p-6"
    >
      <div
        className="w-full h-full transition ease-in-out duration-150"
      >
        <div
          className='proj_card relative 
            w-full flex flex-col lg:flex-row xl:flex-row justify-center
            bg-gradient-to-r from-[#0b1018] to-[#1a1f27]
            rounded-2xl inset-shadow-lg inset-shadow-indigo-500/50 px-4 py-6
            tranisition-all duration-200 ease-linear'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
        >
          <div className='proj_image
              relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-auto xl:h-auto lg:w-[55%] xl:w-[55%]
          '>
            <div className='relative w-full h-full'>
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 90vw"
                className='rounded-2xl object-cover w-full h-auto'
                priority
              />
            </div>
          </div>
          <div className='proj_body
              relative w-full lg:w-[45%] xl:w-[45%]
              mt-6 xl:mt-0
              px-4 sm:px-6
          '>

            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
              {title}
            </h1>
            <p className='lg:font-normal font-light text-md line-clamp-6'>
              {des}
            </p>
            <div className='flex items-center justify-between mt-7'>
              <div className='flex items-center'>
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                    style={{
                      transform: `translateX(-${5 * index * 2}px)`
                    }}
                  >
                    <Image
                      src={icon}
                      alt={icon}
                      width={32}
                      height={32}
                      className='w-auto h-auto p-2'
                    />
                  </div>
                ))}
              </div>

              <div className='flex justify-center items-center gap-2'>
                <a className='' target="_blank" aria-label="View Live Demo" 
                  href={link}
                >
                  <button
                    className="px-4 py-3 rounded-full bg-radial shadow-xl shadow-blue-500/50 hover:bg-darkpurple transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <FaLocationArrow className="text-white" />
                  </button>
                </a>
                <a className='' target="_blank" aria-label="View GitHub Repo" href={gitrepo}
                >
                  <button
                    className="px-4 py-3 rounded-full bg-radial shadow-xl shadow-blue-500/50 hover:bg-darkpurple transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <FaGithub className='text-white' />
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard