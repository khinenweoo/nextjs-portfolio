"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-1/2 w-px h-px bg-gradient-to-b from-zinc-400 via-zinc-500/50 to-transparent" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "rotateX(0deg) scale(1)"
  );

  const onMouseEnter = () => {
    setTransform("rotateX(40deg) scale(0.9)");
  };
  const onMouseLeave = () => {
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative w-full group/pin z-30 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
        }}
        className="w-full h-full"
      >
        <div
          style={{
            transform: transform,
          }}
          className={cn(
            "w-full h-full flex justify-center items-center p-4",
            "bg-gradient-to-r from-[#0b1018] to-[#1a1f27]",
            "rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)]",
            "border border-white/[0.1] group-hover/pin:border-white/[0.2]",
            "transition duration-700 overflow-hidden"
          )}
        >
          <div className={cn(
            "relative z-30 w-full h-full",
            "flex flex-col lg:flex-row xl:flex-row justify-center",
            className
          )}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};
