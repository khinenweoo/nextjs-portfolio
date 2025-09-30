'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "lottie-react";

import { cn } from "@/lib/cn";
import { techList } from '@/data';


import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import Image from 'next/image';
import ReactCardFlip from 'react-card-flip';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    const text = "devkhinenweoo@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const [flippedCard, setFlippedCard] = useState(Array(techList.length).fill(false));
  //state to store timeouts for each card
  const [flipTimeouts, setFlipTimeouts] = useState<(NodeJS.Timeout | undefined)[]>([]);

  const handleMouseEnter = (listName: string, index: number) => {
    if (listName === 'card') {
      if (flipTimeouts[index]) {
        clearTimeout(flipTimeouts[index]);
        const updatedTimeouts = [...flipTimeouts];
        updatedTimeouts[index] = undefined;
        setFlipTimeouts(updatedTimeouts);
      }

      // Create a copy of the current flipped states
      const updated = [...flippedCard];
      // Toggle the flipped state for the clicked card
      updated[index] = true;
      // Update the state
      setFlippedCard(updated);
    } 
  }

const handleMouseLeave = (listName: string, index: number) => {
  if (listName === 'card') {
    // Set a timeout to flip the card back after a delay (e.g., 1000ms = 1 second)
    const timeoutId = setTimeout(() => {
      const updated = [...flippedCard];
      updated[index] = false;
      setFlippedCard(updated);
      // Clear the timeout reference after it executes
      const updatedTimeouts = [...flipTimeouts];
      updatedTimeouts[index] = undefined;
      setFlipTimeouts(updatedTimeouts);
    }, 1000); // Adjust this value for the desired delay in milliseconds
    // Store the timeout ID
    const updatedTimeouts = [...flipTimeouts];
    updatedTimeouts[index] = timeoutId;
    setFlipTimeouts(updatedTimeouts);
  } 
}

  return (

    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl outline outline-1 outline-[#323133] group/bento transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundColor:
          "linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(29,7,32,1) 59%, rgba(157,127,147,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={300}
              height={300}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={220}
              height={240}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-30 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col px-5 p-5 lg:p-8"
          )}
        >

          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-md md:text-lg xl:text-xl text-neutral-700 dark:text-white font-bold z-10`}
          >
            {title}
          </div>
          <div className="md:text-sm xl:text-md text-align mt-4 leading-6 dark:text-white/80">
            {description}
          </div>

          {/* for the github 3d globe */}
          {id === 4 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 5 && (
            <div className="relative mt-4 h-full py-3">
              <div className="w-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
                {
                  techList.map((item, i) => (
                    <div 
                      key={i}
                      className=""
                    >
                      <div className="m-1 cursor-pointer">
                        <ReactCardFlip isFlipped={flippedCard[i]}>
                          <div
                            onMouseEnter={() => handleMouseEnter('card', i)}
                            onMouseLeave={() => handleMouseLeave('card', i)}
                            className="lg:py-5 lg:px-2 py-4 px-1 text-xs lg:text-base bg-[#f1f1f1] dark:bg-[#232323] opacity-90 
                            lg:opacity-100 text-center border border-[#6a6e75] rounded-sm"
                          >
                            <Image
                              src={item.path}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="w-14 h-8 p-1 mx-auto"
                            />
                          </div>
                          <div
                            onMouseEnter={() => handleMouseEnter('card', i)}
                            onMouseLeave={() => handleMouseLeave('card', i)}
                            className="lg:py-5 lg:px-2 py-4 px-1 text-xs bg-[#f1f1f1] dark:bg-[#232323] opacity-90 
                            lg:opacity-100 border border-[#6a6e75] rounded-sm">
                              <div className="w-14 h-8 p-1 mx-auto text-xs flex justify-center">
                                {item.title}
                              </div>
                          </div>
                        </ReactCardFlip>

                      </div>
                    </div>
                  ))
                }
             
              </div>
            </div>

          )}
          {id === 6 && (
            <div className="mt-5 relative">

              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Image
                  src="/confetti.gif"
                  alt="confetti"
                  width={400}  // specify width
                  height={200} // specify height
                  priority={false} // optional: set to true if this is above the fold
                  className="w-auto h-auto" // maintain aspect ratio
                />

                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};