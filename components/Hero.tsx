import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { sectionImages } from '@/data'
import Social from './Social'
import Photo from './Photo'

const Hero = () => {
  return (
    <div className="pb-20 pt-10 px-20">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 
            md:-top-20 h-screen' fill='white' />
            <Spotlight className='-top-10 left-full h-[80vh] 
            w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh]
            w-[50vw]' fill='blue' />
        </div>
        
        <div className="h-screen w-full dark:bg-black-100 bg-white  
            dark:bg-grid-white/[0.01] bg-grid-black/[0.2] 
            flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

      
      <div className='flex flex-col xl:flex-row items-center justify-between relative mb-20 z-10'>
        <div className='text-center xl:text-left order-2 xl:order-none'>
          <h3 className='text-xl'>Software Developer</h3>
          <h1 className='h1'>
            Hello, I'm <br/> 
            <TextGenerateEffect
            className='h1'
            words='Khine Nwe'
            />
          </h1>
          <p className='max-w-[500px] mb-9 text-white/80'>I excel at crafting elegant digital experiences and I am passionate about leveraging the latest technologies to deliver cutting-edge web solutions.</p>
          <div className='flex flex-col xl:flex-row items-center gap-8'>
            <a href="#about">
              <MagicButton 
                title="Show my work"
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
            <div className='md:mt-6 mb-8 xl:mb-0'>
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-purple rounded-full flex justify-center items-center text-purple text-base hover:bg-purple hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className='order-1 xl:order-none mb-8 xl:mb-0'>
          <Photo />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center relative mt-40 mb-20 z-10">

        <div className="w-full flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xl text-center text-blue-100 max-w-80 mb-8">
             About Me
          </p>
          
          <p className='text-center md:tracking-wider mb-4 lg:text-1xl leading-10'>
          Hey, I'm a Full-Stack Developer with 4+ years of experience in web development. My expertise in Laravel for API and Backend development, 
          coupled with a profound knowledge of MERN (MongoDB, Express.js, React, Node.js) stacks, positions me uniquely in the 
          digital landscape. I have honed my skills in crafting scalable and efficient web applications, primarily using PHP. 
          I consistently strive to meet my client's visions and I am always open to feedback and communication.
          Let's collaborate to make your digital vision a reality!
          </p>

        </div>
      </div>

    </div>
  )
}

export default Hero