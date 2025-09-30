"use client";
import { projects } from '@/data'
import HeadingTitle from './HeadingTitle';
import ProjectCard from './ProjectCard';
import React, { useState } from 'react';


const RecentProjects = () => {
    const [filters, setFilters] = useState({
        All: true,
        Companies: false,
        Personal: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const ariaLabel = e.target.getAttribute("aria-label");

        if (!ariaLabel) return;

        if (ariaLabel === "All") {
            setFilters({
                All: checked,
                Companies: false,
                Personal: false,
            });

        } else {
            setFilters((prev) => ({
                ...prev,
                All: false,
                [ariaLabel]: checked,
            }));

        }

    };

    const handleReset = () => {
        setFilters({ All: true, Companies: false, Personal: false });
    };

    const filteredProjects = projects.filter((project) => {
        if (filters.All) return true;
        if (filters.Companies && project.type === "Companies") return true;
        if (filters.Personal && project.type === "Personal") return true;
        return false;
    });
    return (
        <div className="w-full md:px-12 xl:px-20 mt-40" id='projects'>
            <HeadingTitle title='Projects' className='flex-row' />
            <p className='text-md lg:text-lg text-center text-neutral-700 dark:text-white/80 mb-12'>
                Explore my portfolio projects, crafted with love, expertise, and creativity.
            </p>
            <div>
                <p className=" xl:text-base md:text-sm text-xs font-lexend font-semibold text-black dark:text-white mb-4">
                    Filter by
                </p>

                <form className='mb-4'>
                    <input
                        className="btn btn-soft btn-default mr-1"
                        type="checkbox"
                        name="frameworks"
                        aria-label="All"
                        checked={filters.All}
                        onChange={handleChange}
                    />
                    <input
                        className="btn btn-soft btn-default mr-1"
                        type="checkbox"
                        name="frameworks"
                        aria-label="Companies"
                        checked={filters.Companies}
                        onChange={handleChange}
                    />
                    <input
                        className="btn btn-soft btn-default mr-1"
                        type="checkbox"
                        name="frameworks"
                        aria-label="Personal"
                        checked={filters.Personal}
                        onChange={handleChange}
                    />

                    <input
                        className="btn btn-soft"
                        type="reset"
                        value="×"
                        onClick={handleReset}
                    />
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-neutral rounded-box w-full">
                {
                    filteredProjects.map(({ id, title, company, location, period, short_des, img, iconLists, link, gitrepo }) => (
                        // Wrap each carousel item in its own component to manage its state
                        <ProjectCard
                            key={id}
                            id={id}
                            company={company}
                            location={location}
                            period={period}
                            title={title}
                            short_des={short_des}
                            img={img}
                            iconLists={iconLists}
                            link={link}
                            gitrepo={gitrepo}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentProjects
