import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import HeadingTitle from './HeadingTitle'

const Grid = () => {
  return (
    <section id="skills" className='xl:px-20 md:px-12 mt-40'>
        <HeadingTitle title='Skills' className='flex-row' />
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