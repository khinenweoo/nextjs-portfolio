"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaArrowRight } from "react-icons/fa";
import Social from "./Social";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero mx-auto xl:px-10 pt-30 lg:mb-0 xl:pt-10">

      <div
        className="relative h-screen w-full flex justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center" />
      </div>

      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center justify-center z-10">
          <div className="w-full md:w-6/12 lg:w-7/12 text-left order-1 flex flex-col justify-center">
            <h3 className="h3">
              Hi, I&apos;m 
              <TextGenerateEffect className="h1" words="Khine Nwe Oo" />
            </h3>
            <p className="max-w-[500px] text-base font-medium xl:text-md text-left py-4 dark:text-white/80">
              A skilled Full-Stack Web Developer with over 5 years of experience in building dynamic, responsive, and high-performing web applications for individuals, startups, and enterprises.
            </p>
            <div className="flex flex-col items-start gap-4">
              <div className="">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border border-gray-200 dark:border-purple-500 rounded-full flex justify-center items-center text-slate-700 dark:text-purple text-base shadow-xl hover:bg-violet-300 dark:hover:bg-purple hover:text-primary hover:transition-all duration-500"
                />
              </div>
              <a href="#about" className="relative w-16">
                <MagicButton
                  title="Let's Talk"
                  icon={<FaArrowRight />}
                  position="right"
                />
              </a>
            </div>
          </div>

          {/* animate image */}
          <div className="order-2 w-full md:w-6/12 lg:w-5/12 h-60vh xl:h-screen lg:right-12 pt-6 hidden md:block">
            {/* programming icons */}
            <div className="relative flex items-center justify-between w-full h-auto">
              <motion.div
                className="lg:w-14 lg:h-14 w-14 h-14 absolute left-8 bottom-10 md:top-24 lg:top-20"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <motion.div
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/icons/Node.js.svg"
                    alt="react"
                    width={140}
                    height={140}
                    className="w-full h-full p-2"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="lg:w-14 lg:h-14 w-12 h-12 absolute right-0 top-20"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/icons/React.svg"
                    alt="react"
                    width={130}
                    height={130}
                    className="w-full h-full p-2"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* img div */}
            <div className="relative flex justify-content-end w-full xl:min-h-screen">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 4 },
                }}
                whileInView={{
                  y: [-10, 10],
                  transition: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                className="absolute w-3/4 h-auto right-14 -bottom-28 lg:-bottom-24 xl:bottom-40"
              >
                <Image
                  src="/dev_hero.webp"
                  alt="icon"
                  width={280}
                  height={260}
                  className="object-center w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
