"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Social from "./Social";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero mx-auto xl:px-20 md:px-12 md:pt-10 pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 
            md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] 
            w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-60 h-[80vh]
            w-[50vw]"
          fill="blue"
        />
      </div>

      <div
        className="h-screen w-full dark:bg-[#000] bg-white 
            dark:bg-grid-white/[0.01] bg-grid-black/[0.2] 
            flex justify-center absolute top-0 left-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative flex md:flex-row flex-col items-center justify-center z-10">
        <div className="w-full lg:w-7/12 text-left sm:order-none order-1 flex flex-col justify-center">
          <h3 className="h3">
            Hi, I'm
            <TextGenerateEffect className="h1" words="Khine Nwe Oo" />
          </h3>
          <h3 className="text-xl">Full Stack Developer</h3>
          <p className="max-w-[500px] text-left mb-6 text-white/80">
            I excel at crafting elegant digital experiences and I am passionate
            about leveraging the latest technologies to deliver cutting-edge web
            solutions.
          </p>
          <div className="flex flex-col items-start gap-4">
            <div className="">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-purple rounded-full flex justify-center items-center text-purple text-base hover:bg-purple hover:text-primary hover:transition-all duration-500"
              />
            </div>
            <a href="#about" className="relative w-16">
              <MagicButton
                title="Let's Talk"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* animate image */}
        <div className="w-5/12 h-0 lg:h-screen lg:right-12 order-2 invisible lg:visible">
          {/* programming icons */}
          <div className="relative flex items-center justify-between w-full h-auto">
            <motion.div
              className="lg:w-14 lg:h-14 w-14 h-14 absolute left-8 top-16"
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
              className="lg:w-14 lg:h-14 w-12 h-12 absolute -right-6 top-20"
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
          <div className="flex justify-content-end w-full h-full">
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
               className="w-[90%] h-[90%] right-80 top-30"
     
            >
              <Image
                src="/hero_bg.svg"
                alt="icon"
                width={290}
                height={260}
                className="object-center w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
