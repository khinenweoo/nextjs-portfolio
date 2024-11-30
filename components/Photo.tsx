"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1, transition: { delay: 2, duration: 0.2, ease: 'easeIn' },
            }}>
                {/* Image */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{
                        opacity: 1, transition: { delay: 2, duration: 0.2, ease: 'easeInOut' },
                    }}
                    className="w-[298px] h-[298px] xl:w-[320px] xl:h-[320px] mix-blend-lighten absolute">

                    {/* (max-width: 1280px) 298px: For screens up to 1280px (before xl breakpoint), use 298px.
                    320px: For larger screens (xl and above), use 320px */}
                    <Image
                        src="/assets/profile.jpg"
                        priority
                        quality={100}
                        fill
                        sizes="(max-width: 1280px) 298px, 316px"
                        alt="profile"
                        className="object-cover rounded-full"
                    />
                </motion.div>

                {/* circle */}
                <motion.svg 
                    className="w-[300px] xl:w-[326px] h-[300px] xl:h-[326px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#9f73e1"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo