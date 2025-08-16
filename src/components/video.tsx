"use client";

import { useRef, useState } from "react";
import React from 'react';

interface VideoProps {
    src: string;
    poster?: string;
}

export default function Video({ src, poster }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const play = (<svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.8894 5.1786V16.4786C20.8894 18.4586 19.2794 20.0686 17.2994 20.0686C15.3294 20.0686 13.7094 18.4586 13.7094 16.4786C13.7094 14.5086 15.3294 12.8986 17.2994 12.8986C18.1394 12.8986 18.8894 13.1886 19.4994 13.6686V7.7186L10.2894 10.3386V18.4086C10.2894 20.3886 8.66937 21.9986 6.69937 21.9986C4.71937 21.9986 3.10938 20.3886 3.10938 18.4086C3.10938 16.4386 4.71937 14.8286 6.69937 14.8286C7.52938 14.8286 8.27938 15.1186 8.88938 15.5886V6.7486C8.88938 5.2786 9.77938 4.1386 11.1894 3.7586L16.9694 2.1786C18.1394 1.8586 19.1294 1.9686 19.8294 2.5086C20.5394 3.0386 20.8894 3.9386 20.8894 5.1786Z" fill="var(--moonSun)"></path> </g></svg>);
    const pause = (<svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M7.54721 7.272L5.51262 5.23741C5.1221 4.84689 5.1221 4.21372 5.51262 3.8232C5.90314 3.43267 6.53631 3.43267 6.92683 3.8232L21.9268 18.8232C22.3174 19.2137 22.3174 19.8469 21.9268 20.2374C21.5363 20.6279 20.9031 20.6279 20.5126 20.2374L18.4203 18.1451C18.3662 18.4135 18.3122 18.6589 18.2601 18.8803C17.9494 20.2016 16.7594 21 15.5063 21C14.755 21 14.0311 20.7184 13.4773 20.2107L10.5481 17.5257C10.1793 17.1876 9.69707 17 9.19669 17H9C6.79086 17 5 15.2091 5 13V11C5 9.30335 6.05633 7.85341 7.54721 7.272ZM16.6905 16.4153C16.5716 17.2295 16.4353 17.9034 16.3132 18.4224C16.2384 18.7406 15.9376 19 15.5063 19C15.2554 19 15.0137 18.906 14.8287 18.7364L11.8996 16.0514C11.1619 15.3751 10.1975 15 9.19669 15H9C7.89543 15 7 14.1046 7 13L7 11C7 9.89543 7.89543 9 9 9H9.19669C9.22263 9 9.24856 8.99975 9.27445 8.99924L16.6905 16.4153Z" fill="var(--moonSun)"></path><path d="M16.3132 5.57761C16.6057 6.821 16.9801 8.95363 16.9992 11.7744L18.9569 13.7321C18.9844 13.184 19 12.6061 19 12C19 8.89192 18.5904 6.52403 18.2601 5.11974C17.9494 3.79838 16.7594 3 15.5063 3C14.755 3 14.0311 3.28161 13.4773 3.78926L11.1487 5.92383L12.5642 7.33938L14.8287 5.26357C15.0137 5.09404 15.2554 5 15.5063 5C15.9376 5 16.2384 5.25937 16.3132 5.57761Z" fill="var(--moonSun)"></path></g></svg>);

    const handleMuteToggle = () => {
        setIsMuted((prev) => {
            if (videoRef.current) {
                videoRef.current.muted = !prev;
            }
            return !prev;
        });
    };

    return (
        <div className="fixed">
            <div className="fixed z-[-99999]">
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    style={{ width: "0px", maxWidth: "0px", opacity: "0" }}
                />
            </div>
            <button
                onClick={handleMuteToggle}
                className="fixed justify-center items-center flex top-10 left-5 w-[3rem] h-[1rem] z-[99999] cursor-pointer hover:scale-[1.5] active:scale-[0.9] transition-transform">
                {
                    isMuted ? (pause) : (play)
                }
            </button>
        </div>
    );
}
