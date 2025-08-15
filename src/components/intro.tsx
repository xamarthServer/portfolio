"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaSquareGithub } from 'react-icons/fa6';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '../../context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home");
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="space h-27.25"></div>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        className=""
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                        }}>
                        <Image
                            src="https://images.unsplash.com/photo-1753625606793-47749a65e80f"
                            alt="logo"
                            width="3024"
                            height="4032"
                            quality="95"
                            priority={true}
                            className="h-62.5 w-62.5 object-cover rounded-full border-8 border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span className="absolute text-3xl bottom-2 right-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.1,
                        }}>
                        <div className="">
                            <Image
                                width="75"
                                height="75"
                                className=""
                                alt="Waving Hand"
                                unoptimized={true}
                                src="https://raw.githubusercontent.com/xamarth/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
                            />
                        </div>
                    </motion.span>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I&apos;m Samarth</span>. I&apos;m a{" "}
                <span className="font-bold">front-end developer</span> with{" "}
                <span className="font-bold">2 years</span> of experience. I enjoy building{" "}
                <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>{"."}
            </motion.h1>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}>
                <Link
                    href="#contact"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                    className="group flex bg-gray-900 text-white px-7 py-3 items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer shadow-lg">
                    Contact Me Here{" "}<BsArrowRight className="group-hover:translate-x-1 group-hover:scale-125 transition" />
                </Link>
                <a
                    href="/cv.pdf"
                    target="_blank"
                    download={false}
                    className="group flex bg-white px-7 py-3 items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer shadow-lg">
                    Download Resume{" "}
                    <HiDownload className="group-hover:translate-y-0.5 group-hover:scale-125 transition" />
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="flex bg-white text-gray-700 p-4 items-center gap-2 text-[1.35rem] rounded-full outline-none hover:text-gray-950 hover:scale-120 active:scale-105 transition cursor-pointer shadow-lg">
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/xamarth"
                    target="_blank"
                    className="flex bg-white text-gray-700 p-4 items-center gap-2 text-[1.35rem] rounded-full outline-none hover:text-gray-950 hover:scale-120 active:scale-105 transition cursor-pointer shadow-lg">
                    <FaSquareGithub />
                </a>
            </motion.div>
            <div className="space h-26.25"></div>
        </section>
    )
}
