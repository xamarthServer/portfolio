"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { UseSectionHash, useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    const linkChanger = UseSectionHash(0.5);

    return (
        <section ref={ref} id="projects" className="mb-28">
            <div className="space h-25"></div>
            <SectionHeading>My Projects</SectionHeading>
            <div className="">
                {
                    projectsData.map((project, index) =>
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    )
                }
            </div>
        </section>
    )
}
