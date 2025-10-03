"use client";
import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'
import HeadingTitle from './HeadingTitle';
import { useMediaQuery } from 'react-responsive';


const Experience = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className='w-full xl:px-10 mx-auto mt-40' id='exp'>
            <div className='container'>
                <HeadingTitle title='Experience' className='flex-row-reverse' />
                <p className='text-md lg:text-lg text-center text-neutral-700 dark:text-white/80 mb-20'>
                    From concept to deployment, my journey in web development has been driven by a passion for creating tailored, scalable solutions that empower businesses. Let&apos;s collaborate to build impactful digital experiences that make a difference.
                </p>
                <div className="relative max-w-4xl md:max-w-6xl lg:max-w-4xl mx-auto">
                    {/* timeline line */}
                    <div
                        className="h-screen absolute md:left-1/2 left-0 top-0 -translate-x-1/2 overflow-hidden w-[4px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"

                        style={{ height: isMobile ? 1020 : 980 }}
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
                                className={`relative flex items-center py-4 px-0 justify-center ${index % 2 == 0 ? "md:justify-end" : "md:justify-start"}`
                                }
                                style={{
                                    transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
                                    transition: `all opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0.2s`,
                                }}
                            >

                                {/* circle */}
                                <div className="md:left-1/2 left-0 absolute -translate-x-1/2">
                                    <div className="relative h-6 w-6 bg-violet-300 dark:bg-slate-900 rounded-full border-2 border-violet-400 dark:border-[#323133] flex items-center justify-center z-10">
                                    </div>
                                </div>

                                {/* card */}
                                <div className='px-6'>
                                    <Button
                                        duration={Math.floor(Math.random() * 10000) + 10000}
                                        borderRadius='1.75rem'
                                        className='max-w-sm md:max-w-xs lg:max-w-sm bg-[#f1f1f1] dark:bg-slate-900/80 shadow-xl dark:text-white border-neutral-100 dark:border-slate-800 cursor-default'
                                    >
                                        <div className='p-3 py-6 md:p-6 lg:p-8 gap-6'>
                                            <h1 className='text-start text-violet-400 text-xl md:text-xl font-bold'>{card.title}</h1>
                                            <h4 className='text-start text-slate-800 dark:text-white-200 md:text-sm font-semibold '>{card.timeline}</h4>
                                            <p className='text-start text-slate-800/60 dark:text-white-100 mt-3 font-semibold'>
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

        </div>
    )
}

export default Experience