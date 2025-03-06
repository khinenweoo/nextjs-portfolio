import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="skills" className='xl:px-20 md:px-12'>
        <div className="header_section flex justify-center flex-row gap-1 mb-10">
            <div className="header_line w-full h-[1px] bg-[#ebecf3] opacity-30 mt-6"></div>
            <h3>
              <div className="relative w-fit overflow-hidden">
                <span className="header_title text-5xl font-bold text-end tracking-tight p-0">
                  Skills<span className="p-0 text-purple">.</span>
                </span>
              </div>
            </h3>
        </div>
        <BentoGrid>
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
             ))}
        </BentoGrid>
    </section>
  )
}

export default Grid