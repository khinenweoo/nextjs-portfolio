// MultipleFiles/RecentProjects.tsx
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image';
import HeadingTitle from './HeadingTitle';

const RecentProjects = () => {
    return (
        <div className="w-full md:px-12 xl:px-20 mt-40" id='projects'>
            <HeadingTitle title='Projects' className='flex-row' />
            <p className='text-xl text-center text-gray-300 mb-12'>
                Explore my portfolio projects, crafted with love, expertise, and creativity.
            </p>
            <div className="carousel carousel-center rounded-box w-full space-x-2">
                {
                    projects.map(({ id, title, des, img, iconLists, link }) => (
                        <div key={id} className="carousel-item relative w-full" id={`slide${id}`}>

                            <div className='proj_container
                                h-[35rem] sm:h-[30rem] lg:h-[30rem] xl:h-[30rem]
                                w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[85%]
                                mx-auto overflow-hidden
                            '>
                                <PinContainer title={link} href={link}>
                                    <div className='proj_image
                                        relative
                                        w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-auto xl:h-auto
                                        lg:w-[55%] xl:w-[55%]
                                        mb-4 xl:mb-0 xl:mr-8
                                    '>
                                        <div className='relative w-full h-full'>
                                            <Image
                                                src={img}
                                                alt={title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                                                className='rounded-xl object-cover w-full h-full'
                                                priority
                                            />
                                        </div>
                                    </div>
                                    {/* Adjusted proj_body for responsiveness */}
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
                                                <div className='p-3 rounded-full bg-radial'>
                                                    <FaLocationArrow className=''
                                                        color='#CBACF9' />
                                                </div>
                                                <div className='p-3 rounded-full bg-radial'>
                                                    <FaGithub className=''
                                                        color='#CBACF9' />
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>

                            <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/4 justify-end">
                                <a href={`#slide${id - 1}`} className="btn btn-circle hidden">❮</a>
                                <a href={`#slide${id + 1}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentProjects
