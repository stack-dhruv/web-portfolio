"use client";

import MainComponent from "@/components/MainComponent";
import NavigationComponent from "@/components/NavigationComponent";
import SocialmediaHandlesComponent from "@/components/SocialmediaHandlesComponent";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {
    // pointer background modifier
    const handleMouseMove = (event) => {
        const mouseX = event.pageX;
        const mouseY = event.pageY;

        var radialBackground = `radial-gradient(600px at ${mouseX}px ${mouseY}px,rgba(29, 78, 216, 0.15),transparent 80%)`;

        document.getElementById("pointer-move").style.background =
            radialBackground;
    };

    useEffect(() => {
        // Add the mousemove event listener
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array ensures the effect only runs once (on mount)

    return (
        <>
            <div
                id="pointer-move"
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            ></div>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                                <a href="/">Dhruvkumar Patel</a>
                            </h1>
                            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                                Information Technology Engineer
                            </h2>
                            <p className="mt-4 max-w-xs leading-normal">
                                I build and develop software/web applications.
                            </p>
                            <NavigationComponent />
                            <SocialmediaHandlesComponent />
                        </div>
                    </header>
                    <MainComponent />
                </div>
            </div>
        </>
    );
}
