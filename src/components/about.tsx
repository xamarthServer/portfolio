"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            id="about"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="flex flex-col h-screen max-w-[42rem] text-center leading-8 items-center justify-center">
            {/* <div className="space h-26.25"></div> */}
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3 text-xl">
                I am currently pursuing a{" "}
                <span className="font-medium">B.Tech</span> in{" "}
                <span className="font-medium">Computer Science</span> from{" "}
                <span className="font-medium">Shri Ram Group</span>, where I have developed a strong passion for programming and technology. Driven by curiosity and dedication, I regularly work on sharpening my coding skills through coursework, personal projects, and exploring the latest advancements in the field. My core stack is{" "}
                <span className="font-medium">React, Next.js, Node.js</span> and{" "}
                <span className="font-medium">MongoDB</span>.{" "}
                I am always looking to learn new technologies. I am also familiar with{" "}
                <span className="font-medium">TypeScript</span> and{" "}
                <span className="font-medium">Python</span>.{" "}
                Eager to gain real-world experience and apply my knowledge, I am actively seeking a part-time position that will allow me to contribute to exciting projects while continuing to learn and grow as a developer.
            </p>

            <p className="mb-3 text-xl">
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and playing with my cat. I also enjoy{" "}
                <span className="font-medium">learning new things</span>.{" "}
                I am currently learning about{" "}
                <span className="font-medium">Graphics Designing & 3D Animation</span>.{" "}
                I'm also learning how to play the guitar.
            </p>
        </motion.section>
    )
}
