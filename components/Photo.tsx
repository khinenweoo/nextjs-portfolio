"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1, transition: { delay: 1, duration: 0.2, ease: 'easeIn' },
            }} className="flex justify-center relative h-full">
                
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{
                        opacity: 1, transition: { delay: 1, duration: 0.2, ease: 'easeInOut' },
                    }}
                    className="w-[70vw] h-[300px] md:w-[260px] md:h-[260px] mix-blend-lighten relative z-20 overflow-hidden"
                >
                    <Image
                        src="/profile.jpg"
                        priority
                        quality={100}
                        fill
                        sizes="(max-width: 1280px) 400px, 360px"
                        alt="profile"
                        className="rounded-xl border-slate-600 border-2"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}



export default Photo