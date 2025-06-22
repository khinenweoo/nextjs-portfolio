import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image';
import HeadingTitle from './HeadingTitle';

const RecentProjects = () => {
    return (
        <div className="w-full md:px-12 xl:px-20 mt-40" id='projects'>
            <HeadingTitle title='Projects' className='flex-row' />
            <p className='text-xl text-center text-gray-300'>
                Explore my portfolio projects, crafted with love, expertise, and creativity.
            </p>
            <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-4">
                {
                    projects.map(({ id, title, des, img, iconLists, link, linkText }) => (
                        <div key={id} className="carousel-item">
                            <div className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[460px] w-[70vw] mx-6'>
                                <PinContainer title={link} href={link}>
                                    <div className='relative flex items-center justify-center sm:w-[460px] w-[70vw] overflow-hidden h-[40vh] mb-10 border rounded-3xl'>
                                        <div className='relative w-full h-full overflow-hidden bg-[#13162d]'>
                                            <Image
                                                src="/bg.png"
                                                alt="background"
                                                fill
                                                sizes="(max-width: 1280px) 298px, 320px"
                                                style={{ objectFit: 'fill' }}
                                            />
                                        </div>
                                        <Image
                                            src={img}
                                            alt={title}
                                            fill
                                            sizes="(max-width: 1280px) 298px, 320px"
                                            className='z-10 absolute bottom-0 w-auto h-auto'
                                            priority
                                        />
                                    </div>
                                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                        {title}
                                    </h1>
                                    <p className='lg:text-md lg:font-normal font-light text-sm line-clamp-4'>
                                        {des}
                                    </p>
                                    <div className='flex items-center justify-between mt-7 mb-3'>
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

                                        <div className='flex justify-center items-center'>
                                            <p className='flex lg:text-xl md:text-xs text-sm text-purple'>{linkText}</p>
                                            <FaLocationArrow className='ms-3'
                                                color='#CBACF9' />
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentProjects