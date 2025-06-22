'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "lottie-react";

import { cn } from "@/lib/cn";
import { leftLists } from '@/data';
import { middleLists } from '@/data';
import { rightLists } from '@/data';


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
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
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

  const [flippedLeft, setFlippedLeft] = useState(Array(leftLists.length).fill(false));
  const [flippedMiddle, setFlippedMiddle] = useState(Array(middleLists.length).fill(false));
  const [flippedRight, setFlippedRight] = useState(Array(rightLists.length).fill(false));

  const handleMouseEnter = (listName: string, index: number) => {
    if (listName === 'left') {
      // Create a copy of the current flipped states
      const updated = [...flippedLeft];
      // Toggle the flipped state for the clicked card
      updated[index] = true;
      // Update the state
      setFlippedLeft(updated);
    } else if (listName === 'middle') {
      const updated = [...flippedMiddle];
      updated[index] = true;
      setFlippedMiddle(updated);
    } else if (listName === 'right') {
      const updated = [...flippedRight];
      updated[index] = true;
      setFlippedRight(updated);
    }
  }

  const handleMouseLeave = (listName: string, index: number) => {
    if (listName === 'left') {
      const updated = [...flippedLeft];
      updated[index] = false;
      setFlippedLeft(updated);
    } else if (listName === 'middle') {
      const updated = [...flippedMiddle];
      updated[index] = false;
      setFlippedMiddle(updated);
    } else if (listName === 'right') {
      const updated = [...flippedRight];
      updated[index] = false;
      setFlippedRight(updated);
    }
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl outline outline-1 outline-[#323133] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(0,0,0)",
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
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full lg:min-h-48 min-h-80 flex flex-col px-5 p-5 lg:p-8"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight max-w-[30%] md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-2xl max-w-full font-bold z-10 pb-3`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 4 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 5 && (
            <div className="flex gap-2 py-3 lg:gap-3 w-fit absolute right-3 lg:right-5">
              {/* tech stack lists */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                {leftLists.map((item, i) => (
                  <div
                    key={i}
                    className="m-1 cursor-pointer"
                  >
                    <ReactCardFlip isFlipped={flippedLeft[i]}>
                      <div
                        onMouseEnter={() => handleMouseEnter('left', i)}
                        onMouseLeave={() => handleMouseLeave('left', i)}
                        className="lg:py-5 lg:px-2 py-4 px-1 text-xs lg:text-base bg-[#232323] opacity-50 
                        lg:opacity-100 text-center border border-[#6a6e75] rounded-sm"
                      >
                        <Image
                          src={item.path}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="w-16 h-10 p-1 mx-auto"
                        />
                      </div>
                      <div
                        onMouseEnter={() => handleMouseEnter('left', i)}
                        onMouseLeave={() => handleMouseLeave('left', i)}
                        className="lg:py-5 lg:px-2 py-4 px-1 text-xs bg-[#232323] opacity-50 
                        lg:opacity-100 border border-[#6a6e75] rounded-sm">
                          <div className=" w-16 h-10 p-1  flex items-center justify-center">
                            {item.title}
                          </div>
                      </div>
                    </ReactCardFlip>

                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                {middleLists.map((item, i) => (
                  <div
                    key={i}
                    className="m-1 cursor-pointer"
                  >
                    <ReactCardFlip isFlipped={flippedMiddle[i]}>
                      <div
                        onMouseEnter={() => handleMouseEnter('middle', i)}
                        onMouseLeave={() => handleMouseLeave('middle', i)}
                        className="lg:py-5 lg:px-2 py-4 px-1 text-xs lg:text-base bg-[#232323] opacity-50 
                        lg:opacity-100 text-center border border-[#6a6e75] rounded-sm"
                      >
                        <Image
                          src={item.path}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="w-16 h-10 p-1 mx-auto"
                        />
                      </div>
                      <div
                        onMouseEnter={() => handleMouseEnter('middle', i)}
                        onMouseLeave={() => handleMouseLeave('middle', i)}
                        className="lg:py-5 lg:px-2 py-4 px-1 text-xs bg-[#232323] opacity-50 
                        lg:opacity-100 border border-[#6a6e75] rounded-sm">
                          <div className=" w-16 h-10 p-1  flex items-center justify-center">
                            {item.title}
                          </div>
                      </div>
                    </ReactCardFlip>

                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                {rightLists.map((item, i) => (
                  <div
                    key={i}
                    className="m-1 cursor-pointer"
                  >
                    <ReactCardFlip isFlipped={flippedRight[i]}>
                      <div
                        onMouseEnter={() => handleMouseEnter('right', i)}
                        onMouseLeave={() => handleMouseLeave('right', i)}
                        className="lg:py-5 lg:px-2 py-4 px-1 text-xs lg:text-base bg-[#232323] opacity-50 
                        lg:opacity-100 text-center border border-[#6a6e75] rounded-sm"
                      >
                        <Image
                          src={item.path}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="w-16 h-10 p-1 mx-auto"
                        />
                      </div>
                      <div
                        onMouseEnter={() => handleMouseEnter('right', i)}
                        onMouseLeave={() => handleMouseLeave('right', i)}
                        className="lg:py-5 lg:px-2 py-4 px-1 text-xs bg-[#232323] opacity-50 
                        lg:opacity-100 border border-[#6a6e75] rounded-sm">
                          <div className=" w-16 h-10 p-1  flex items-center justify-center">
                            {item.title}
                          </div>
                      </div>
                    </ReactCardFlip>

                  </div>
                ))}
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
                otherClasses="!bg-[#161A31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};