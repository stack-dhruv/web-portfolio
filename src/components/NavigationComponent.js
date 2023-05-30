"use client";

import React, { useState } from "react";

const NavigationComponent = () => {
    const [activeLink, setActiveLink] = useState("about");

    const switchActive = (activeString) => {
        setActiveLink(activeString);
    };

    return (
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
                <li>
                    <a class="group flex items-center py-3" href="#about">
                        {/* <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all  group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span> */}

                        {/* <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            About
                        </span> */}

                        <span
                            className={`nav-indicator mr-4 h-px w-8  transition-all ${
                                activeLink === "about"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => {
                                switchActive("about");
                            }}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest ${
                                activeLink === "about"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                            onClick={() => {
                                switchActive("about");
                            }}
                        >
                            About
                        </span>
                    </a>
                </li>
                <li>
                    <a class="group flex items-center py-3" href="#experience">
                        {/* <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Experience
                        </span> */}
                        <span
                            className={`nav-indicator mr-4 h-px w-8  transition-all ${
                                activeLink === "experience"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => {
                                switchActive("experience");
                            }}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest ${
                                activeLink === "experience"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                            onClick={() => {
                                switchActive("experience");
                            }}
                        >
                            projects
                        </span>
                    </a>
                </li>
                <li>
                    <a class="group flex items-center py-3" href="#projects">
                        {/* <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Projects
                        </span> */}
                        <span
                            className={`nav-indicator mr-4 h-px w-8  transition-all ${
                                activeLink === "projects"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                            onClick={() => {
                                switchActive("projects");
                            }}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest ${
                                activeLink === "projects"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                            onClick={() => {
                                switchActive("projects");
                            }}
                        >
                            projects
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationComponent;
