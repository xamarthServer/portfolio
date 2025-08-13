"use client";

import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="">
            <div className="fixed top-2.5 left-2.5 px-2.5 py-2.5 cursor-pointer">
                <Image
                    src="/atomb.png"
                    alt="top"
                    width="50"
                    height="50"
                    className=""
                />
            </div>
            <div className="fixed top-2.5 right-2.5 px-2.5 py-2.5 cursor-pointer">
                <Image
                    src="/atomb.png"
                    alt="top"
                    width="50"
                    height="50"
                    className=""
                />
            </div>
        </div>
    )
}
