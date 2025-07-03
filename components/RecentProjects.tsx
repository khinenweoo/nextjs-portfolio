"use client";
import { projects } from '@/data'
import HeadingTitle from './HeadingTitle';
import ProjectCard from './ProjectCard';

const RecentProjects = () => {
    return (
        <div className="w-full md:px-12 xl:px-20 mt-40" id='projects'>
            <HeadingTitle title='Projects' className='flex-row' />
            <p className='text-xl text-center text-gray-300 mb-12'>
                Explore my portfolio projects, crafted with love, expertise, and creativity.
            </p>
            <div className="carousel carousel-center bg-neutral rounded-box w-full">
                {
                    projects.map(({ id, title, des, img, iconLists, link}) => (
                        // Wrap each carousel item in its own component to manage its state
                        <ProjectCard
                            key={id}
                            id={id}
                            title={title}
                            des={des}
                            img={img}
                            iconLists={iconLists}
                            link={link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentProjects
