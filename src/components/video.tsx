"use client";

import { div } from "framer-motion/client";
import { useRef, useState } from "react";
import React from 'react';

interface VideoProps {
    src: string;
    poster?: string;
}

export default function Video({ src, poster }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const handleMuteToggle = () => {
        setIsMuted((prev) => {
            if (videoRef.current) {
                videoRef.current.muted = !prev;
            }
            return !prev;
        });
    };

    return (
        <div>
            <div className="fixed z-[-99999]">
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    style={{ width: "100%", maxWidth: "0px", opacity: "0" }}
                />
            </div>
            <div className="fixed top-3 left-3 z-[99999]">
                <button onClick={handleMuteToggle}>
                    {isMuted ? "Unmute" : "Mute"}
                </button>
            </div>
        </div>
    );
}
