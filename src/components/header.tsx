"use client";

import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '../../context/active-section-context';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className="z-[999] relative flex items-center justify-center">
            <motion.div className="headr fixed top-0 h-[4.5rem] w-full rounded-none shadow-lg shadow-lg/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}>
            </motion.div>

            <motion.nav className="flex fixed top-[0.15rem] h-12 py-2 sm:top-[1.6rem] sm:h-[initial] sm:py-0 items-center justify-center rounded-full"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <motion.ul className="flex flex-wrap items-center justify-center h-full font-medium sm:w-[initial] sm:flex-nowrap rounded-full sm:gap-3 gap-y-1 text-[var(--ulText)]"
                    initial={{ y: -90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}>
                    {
                        links.map(link => (
                            <motion.li className="relative h-3/4 flex items-center rounded-full cursor-pointer bg-[var(--liBg)] hover:bg-[var(--liHovrBg)] hover:rounded-full hover:h-8 hover:shadow-lg hover:shadow-lg/[0.03] hover:backdrop-blur-[0.5rem] hover:scale-125 active:scale-105 transition" key={link.hash}
                                initial={{ y: -80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <Link
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name)
                                        setTimeOfLastClick(Date.now())
                                    }}
                                    // dark:text-gray-300 dark:hover:text-gray-200
                                    // light:text-gray-950 dark:text-gray-200 hover:text-gray-200
                                    className={clsx("flex w-full items-center justify-center px-3 py-3 transition text-shadow-lg text-[var(--liText)]  hover:text-[var(--liHovrText)]",
                                        { "actvTxt": activeSection === link.name })}>
                                    {link.name}
                                    {
                                        link.name === activeSection && (
                                            <motion.span
                                                layoutId="activeSection"
                                                initial={{ y: 80, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    //     type: "spring",
                                                    //     stiffness: 380,
                                                    //     damping: 30,
                                                }}
                                                // bg-gray-100 dark:bg-gray-800
                                                className="actvBubble bg-[var(--actvBubble)] border rounded-full absolute inset-0 -z-10 my-0.5">
                                            </motion.span>
                                        )
                                    }
                                </Link>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </motion.nav>
        </header>
    )
}
