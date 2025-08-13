// "use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageDivider() {
    return (
        <motion.div
            className="bg-gray-200 my-25 h-8 w-1 rounded-full hidden sm:block"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.125,
            }}
        />
    )
}
