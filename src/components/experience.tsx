"use client";

import React from 'react';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useTheme } from '../../context/theme-context';

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme();
    return (
        <section ref={ref} id="experience" className="mb-28 sm:mb-40">
            <div className="space h-25"></div>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid #9ca3af",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: "white",
                                    fontSize: "1.5rem",
                                }}
                                contentStyle={{
                                    // background: "#f3f4f6",
                                    background:
                                        theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}>
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
}
