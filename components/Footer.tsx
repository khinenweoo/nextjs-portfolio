import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full pb-10" id='contact'>
            <div className="w-full left-0 -bottom-72 min-h-52 relative">
            <Image 
                    src="/footer-grid.svg" 
                    alt="grid" 
                    fill
                    className="opacity-50 object-cover"
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how can I help you achieve your goals. </p>
                <a href="mailto:devkhinenweoo@gmail.com">
                    <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">© 2024 Khine Nwe Oo.</p>
                <div className="flex items-center md:gp-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div
                         key={profile.id}
                         className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <Image 
                              src={profile.img}
                              alt="icons"
                              width={20}
                              height={20}
                              className="w-auto h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
