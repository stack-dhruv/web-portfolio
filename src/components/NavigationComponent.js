"use client";

import React, { useState, useEffect } from "react";

const NavigationComponent = () => {
    const [activeLink, setActiveLink] = useState("about");

    const switchActive = (activeString) => {
        setActiveLink(activeString);
    };

    return (
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
                <li
                    onClick={() => {
                        switchActive("about");
                    }}
                >
                    <a class="group flex items-center py-3" href="#about">
                        {/* <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all  group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span> */}

                        {/* <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            About
                        </span> */}

                        <span
                            className={`nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16  group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                                activeLink === "about"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                                activeLink === "about"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                        >
                            About
                        </span>
                    </a>
                </li>
                <li
                    onClick={() => {
                        switchActive("education");
                    }}
                >
                    <a class="group flex items-center py-3" href="#education">
                        {/* <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Experience
                        </span> */}
                        <span
                            className={`nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16  group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                                activeLink === "education"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                                activeLink === "education"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                        >
                            education
                        </span>
                    </a>
                </li>
                <li
                    onClick={() => {
                        switchActive("experience");
                    }}
                >
                    <a class="group flex items-center py-3" href="#experience">
                        {/* <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Experience
                        </span> */}
                        <span
                            className={`nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16  group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                                activeLink === "experience"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                                activeLink === "experience"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                        >
                            Experience
                        </span>
                    </a>
                </li>
                <li
                    onClick={() => {
                        switchActive("projects");
                    }}
                >
                    <a class="group flex items-center py-3" href="#projects">
                        {/* <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Projects
                        </span> */}
                        <span
                            className={`nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16  group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                                activeLink === "projects"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                                activeLink === "projects"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                        >
                            Projects
                        </span>
                    </a>
                </li>
                <li
                    onClick={() => {
                        switchActive("skills");
                    }}
                >
                    <a class="group flex items-center py-3" href="#skills">
                        {/* <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Projects
                        </span> */}
                        <span
                            className={`nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16  group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                                activeLink === "skills"
                                    ? "w-16 bg-slate-200"
                                    : "bg-slate-600"
                            }`}
                        ></span>
                        <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                                activeLink === "skills"
                                    ? "text-slate-200"
                                    : "text-slate-500 "
                            }`}
                        >
                            skills
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationComponent;
