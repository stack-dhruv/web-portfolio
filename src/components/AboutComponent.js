import React from "react";

const AboutComponent = () => {
    return (
        <div
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    Hi there, I’m{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        Dhruvkumar Patel
                    </span>
                    , a final year student of{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        Information Technology
                    </span>{" "}
                    at LDRP ITR, Gandhinagar. I’m from a small town in Gujarat,
                    but I have big dreams of becoming a{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        software development engineer
                    </span>
                    .
                </p>
                <p className="mb-4">
                    I love coding and learning new technologies, especially{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        web development
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        data science
                    </span>
                    . I have experience in building web applications using the{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        MERN stack
                    </span>{" "}
                    (MongoDB, Express, React and Node), as well as working with
                    SQL databases.
                </p>
                <p className="mb-4">
                    I’m also exploring the fascinating world of{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        artificial intelligence
                    </span>
                    ,{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        machine learning
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        data analysis
                    </span>
                    . I believe in using the best and latest tools to create
                    innovative and impactful solutions.
                </p>
                <p className="mb-4">
                    With each project, I aim to challenge myself and contribute
                    to the development community.
                </p>
            </div>
        </div>
    );
};

export default AboutComponent;
