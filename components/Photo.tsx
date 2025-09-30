"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative hidden lg:block">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1, transition: { delay: 1, duration: 0.2, ease: 'easeIn' },
            }} className="flex justify-start relative h-full md:mr-8">
                
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{
                        opacity: 1, transition: { delay: 1, duration: 0.2, ease: 'easeInOut' },
                    }}
                    className="absolute left-10 top-8 w-[50vw] h-[260px] md:w-[260px] md:h-[260px] z-20"
                >
                    <Image
                        src="/profile2.jpg"
                        priority
                        quality={100}
                        fill
                        sizes="(max-width: 768px) 50vw, 260px"
                        alt="profile"
                        className="border-violet-200 border-1"
                    />
                </motion.div>
                {/* Overlapping Foreground Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.3 } }}
                    className="relative w-[50vw] max-w-[240px] h-[240px] md:w-[180px] md:h-[180px] z-10"
                >
                    <div className="md:left-20 md:w-20 md:h-20 lg:w-44 lg:h-40 bg-[#e59e2cbd] border-violet-300"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.3 } }}
                    className="absolute md:top-30 lg:top-1/3 lg:left-2/4 w-[20vw] max-w-[240px] h-[220px] md:w-[180px] md:h-[180px] z-10"
                >
                    <div className="md:left-20 md:w-20 md:h-20 lg:w-44 lg:h-40 bg-zinc-900 dark:bg-neutral-600 border-violet-300"></div>
                </motion.div>
            </motion.div>
        </div>
    )
}



export default Photo