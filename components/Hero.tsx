"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Social from "./Social";
import Photo from "./Photo";
import Image from "next/image";
import { motion } from "framer-motion";
import HeadingTitle from "./HeadingTitle";

const Hero = () => {
  return (
    <div className="hero mx-auto xl:px-20 md:px-12">
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
            flex items-center justify-center absolute top-0 left-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative flex md:flex-row flex-col items-center justify-center z-10">
        <div className="w-full lg:w-7/12 text-left sm:order-none order-1 flex flex-col justify-center">
          <h4 className="h4">
            Hi, my name is
            <br />
            <TextGenerateEffect className="h1" words="Khine Nwe Oo" />
          </h4>
          <h3 className="text-xl">Full Stack Developer</h3>
          <p className="max-w-[500px] text-left mb-9 text-white/80">
            I excel at crafting elegant digital experiences and I am passionate
            about leveraging the latest technologies to deliver cutting-edge web
            solutions.
          </p>
          <div className="flex flex-col items-start gap-4">
            <a href="#about" className="relative w-30">
              <MagicButton
                title="Let's work together"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <div className="md:mt-4 mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-purple rounded-full flex justify-center items-center text-purple text-base hover:bg-purple hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* animate image */}
        <div className="w-5/12 h-0 lg:h-screen lg:right-12 order-2 invisible lg:visible">
          {/* programming icons */}
          <div className="relative flex items-center justify-between w-full h-auto">
            <motion.div
              className="lg:w-18 lg:h-18 w-16 h-16 absolute left-4 top-16"
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
                  src="/reactjs_icon.svg"
                  alt="react"
                  width={140}
                  height={140}
                  className="w-full h-full p-2"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:w-20 lg:h-20 w-16 h-16 absolute -right-10 top-20"
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
                  src="/nodejs_icon.svg"
                  alt="react"
                  width={160}
                  height={160}
                  className="w-full h-full p-2"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* img div */}
          <div className="flex justify-center h-full">
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
              className="absolute right-0 bottom-32"
            >
              <Image
                src="/developer_illustra.png"
                alt="icon"
                width={340}
                height={320}
                className="object-cover object-center w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative mt-40 mb-30 z-10" id="about">
        <HeadingTitle title="About" className="flex-row-reverse" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

          <div className="col-span-2">
            <p className="text-left md:tracking-wide mb-4 lg:text-1xl leading-8">
            Hey, I&apos;m a Full-Stack Developer based in Bangkok, passionate about crafting dynamic and efficient web applications.
            I have over four years of experience in web development. I specialize in both backend and frontend, primarily PHP, Laravel, Node.js and React.
            </p>
            <p>
            A fast learner with a keen eye for innovation, I thrive on leveraging the best tools to build impactful digital solutions.
            I consistently strive to meet my client&apos; visions and I am always open to
            feedback and communication. Let&apos;collaborate to make your digital vision a reality!
            </p>
            <a href="/resume.pdf" target="_blank" className="max-w-max">
              <div className="about_link flex items-center gap-2">
                <span className="text-purple hover:underline text-lg animate-bounce">Get My Resume </span>
                <div className="lg:w-18 lg:h-14 w-16 h-14 ">
                  <Image
                      src="/download_pdf_icon.svg"
                      alt="react"
                      width={80}
                      height={80}
                      className="w-full h-full"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center h-0 lg:h-full invisible lg:visible">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
