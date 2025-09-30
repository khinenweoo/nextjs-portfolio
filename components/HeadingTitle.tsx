import React from 'react';
import { cn } from '@/lib/cn';

const HeadingTitle = ({title, className} : {title?: string, className?: string}) => {
  return (
    <>
      <div className={cn(
        "header_section flex justify-center gap-1 mb-10",
        className
      )}>
        <div className="header_line w-full h-[1px] bg-violet-400 dark:bg-[#ebecf3] opacity-40 mt-6"></div>
        <h3>
          <div className="relative w-fit overflow-hidden">
            <span className="header_title text-5xl font-bold text-end text-neutral-700 dark:text-white tracking-tight p-0">
              {title}<span className="p-0 text-purple">.</span>
            </span>
          </div>
        </h3>
      </div>
    </>
  );
}

export default HeadingTitle