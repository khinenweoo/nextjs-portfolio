"use client";
import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'
import HeadingTitle from './HeadingTitle';
import { useMediaQuery } from 'react-responsive';


const Experience = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className='w-full px-6 md:px-12 xl:px-20 mt-40' id='exp'>
            <HeadingTitle title='Experience' className='flex-row-reverse'/>
            <p className='text-xl text-center text-gray-300 mb-20'>
                From concept to deployment, my journey in web development has been driven by a passion for creating tailored, scalable solutions that empower businesses. Let&apos;s collaborate to build impactful digital experiences that make a difference.
            </p>
            <div className="relative max-w-4xl mx-auto">
                {/* timeline line */}
                <div 
                    className="h-screen absolute md:left-1/2 left-0 top-0 -translate-x-1/2 overflow-hidden w-[4px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"

                    style={{ height: isMobile? 830 : 800 }}
                >
                    <div className='absolute inset-x-0 top-0 w-[4px] bg-gradient-to-b from-gray-800 to-slate-900'
                        style={{ height: 0, opacity: 0 }}
                    ></div>
                </div>
                {/* first row */}
                {
                    workExperience.map((card, index) => (
                        <div 
                        key={card.id}
                        className={`relative flex items-center py-2 px-0 justify-center ${
                            index % 2 == 0? "md:justify-end" : "md:justify-start"
                        }`}
                        >

                            {/* circle */}
                            <div className="md:left-1/2 left-0 absolute -translate-x-1/2">
                                <div className="relative h-6 w-6 bg-slate-900 rounded-full border-2 border-[#323133] flex items-center justify-center z-10">
                                </div>
                            </div>
            
                            {/* card */}
                            <div className='px-6'>
                                <Button
                                duration={Math.floor(Math.random() * 10000) + 10000}
                                borderRadius='1.75rem'
                                className='max-w-sm text-white border-neutral-200 dark:border-slate-800 cursor-default'
                                >
                                    <div className='p-3 py-6 md:p-4 lg:p-6 gap-2'>
                                        <h1 className='text-start text-xl md:text-xl font-bold'>{card.title}</h1>
                                        <h4 className='text-start text-white-200 md:text-sm font-semibold '>{card.timeline}</h4>
                                        <p className='text-start text-white-100 mt-3 font-semibold'>
                                            {card.desc}
                                        </p>

                                    </div>
                                </Button>
                            </div>
                        </div>
                    ))
                }



            </div>

        </div>
    )
}

export default Experience