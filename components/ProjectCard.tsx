"use client";
import React, { useRef, useState } from "react";
import { FaBuilding, FaClock, FaArrowRight } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaMapMarker } from "react-icons/fa";
import Image from 'next/image';

interface ProjectCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  short_des: string;
  img: string;
  iconLists: string[];
  link: string;
  gitrepo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, company, location, period, short_des, img, iconLists, link, gitrepo }) => {

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
      className="relative w-full"
    >
      <div
        className="w-full h-full transition-all ease-in-out duration-400"
      >
        <div
          className='proj_card relative w-full z-30 flex flex-col justify-center bg-[#f1f1f1] shadow-md shadow-slate-400/80 dark:shadow-slate-950 rounded-xl
            dark:bg-gradient-to-r dark:from-[#0b1018] dark:to-[#1a1f27] border border-solid border-slate-900 px-4 py-6 tranisition-all'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
        >
          <div className='proj_image
              relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh]
          '>
            <div className='relative w-full h-full'>
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 90vw"
                className='rounded-2xl object-fit w-full h-auto'
                priority
              />
            </div>
          </div>
          <div className='proj_body
              relative w-full 
              mt-6
              sm:px-2
          '>

            <h1 className='text-slate-800 dark:text-white-100 font-extrabold text-md lg:text-xl md:text-lg'>
              {title}
            </h1>
            <p className='text-slate-900/80 dark:text-white-100 text-sm mt-3 mb-4 font-semibold lg:font-normal font-light line-clamp-5'>
              {short_des}
            </p>

            <div className="proj_type flex flex-row mobile-sm:gap-4 gap-2 items-center mb-1">
              <FaBuilding className='text-slate-900/80 dark:text-white text-md' />  <p className="text-sm md:text-md font-lexend font-normal text-slate-900/60 dark:text-white ">Company: <span className="dark:text-purple text-violet-400 font-bold">{company}</span></p>
            </div>
            <div className="proj_type flex flex-row mobile-sm:gap-4 gap-2 items-center mb-1">
              <FaMapMarker className='text-slate-900/80 dark:text-white text-md' /> <p className="text-sm md:text-md font-lexend font-normal text-slate-900/60 dark:text-white ">Location: <span className="dark:text-purple text-violet-400 font-bold">{location}</span></p>
            </div>
            <div className="proj_type flex flex-row mobile-sm:gap-4 gap-2 items-center mb-1">
              <FaClock className='text-slate-900/80 dark:text-white text-md' /> <p className="text-sm md:text-md font-lexend font-normal text-slate-900/60 dark:text-white ">Period: <span className="dark:text-purple text-violet-400 text-sm font-bold">{period}</span></p>
            </div>

            <div className='w-full mt-3 flex justify-start items-center'>
              {iconLists.map((icon, index) => (
                <div
                  key={icon}
                  className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-9 h-9 flex justify-center items-center'
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

            <div className='mt-4'>
              <div className='w-full flex justify-between items-center'>
                <a className='' target="_blank" aria-label="View Live Demo" 
                  href={link}
                >
                  <button
                    className="w-full flex py-3 px-4 rounded-lg dark:bg-radial shadow-lg shadow-slate-400 dark:shadow-violet-400/50 hover:bg-violet-200 dark:hover:bg-violet-700 transition-all ease-in duration-300 disabled:pointer-events-none"
                  >
                    <FaArrowRight className="text-slate-800 dark:text-white" /><span className="text-sm pl-2">View</span>
                  </button>
                </a>
                <a className='' target="_blank" aria-label="View GitHub Repo" href={gitrepo}
                >
                  <button
                    className="hover:text-violet-500"
                  >
                    <FaGithub className='text-slate-800 text-3xl dark:text-white' />
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