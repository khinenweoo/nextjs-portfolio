import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import HeadingTitle from './HeadingTitle'

const Grid = () => {
  return (
    <section id="skills" className='mx-auto xl:px-10 mt-40'>
      <div className='container'>
        <HeadingTitle title='Skills' className='flex-row' />
        <BentoGrid>
          {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
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
      </div>
    </section>
  )
}

export default Grid