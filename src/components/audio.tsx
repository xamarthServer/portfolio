"use client";

import React, { useRef, useState } from "react";

interface AudioProps {
    src: string;
}

export default function Audio({ src }: AudioProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const handleMuteToggle = () => {
        setIsMuted((prev) => {
            if (audioRef.current) {
                audioRef.current.muted = !prev;
            }
            return !prev;
        });
    };

    // Optionally trigger play on mount for autoplay fallback (may require user interaction for sound)
    // useEffect(() => {
    //   audioRef.current?.play();
    // }, []);

    return (
        <div className="fixed z-9999">
            <audio
                ref={audioRef}
                src={src}
                autoPlay
                loop
                muted={isMuted}
                style={{ width: "10%" }}
            />
            <button onClick={handleMuteToggle}>
                {isMuted ? "unmute" : "mute"}
            </button>
        </div>
    );
}
