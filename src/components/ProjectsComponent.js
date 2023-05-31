import React from "react";

const ProjectsComponent = () => {
    return (
        <section
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            id="projects"
            aria-label="Selected projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            {/* list of the projects */}
            <div>
                <ul className="group/list">
                    <li class="mb-12">
                        <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div class="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a
                                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                        href="https://www.newline.co/courses/build-a-spotify-connected-app"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Build a Spotify Connected App"
                                    >
                                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>• Student Dropout Analysis </span>
                                    </a>
                                </h3>
                                <p class="mt-2 text-sm leading-normal">
                                    Student Dropout Analysis application -
                                    created for the state level Hackathon.
                                </p>
                            </div>
                            {/* <img
                                alt=""
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                // style="color:transparent"
                                // srcset="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"
                                src="https://picsum.photos/540/360"
                            /> */}
                        </div>
                    </li>
                    <li class="mb-12">
                        <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div class="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a
                                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                        href="https://www.newline.co/courses/build-a-spotify-connected-app"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Build a Spotify Connected App"
                                    >
                                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>• Salon Chain Management </span>
                                    </a>
                                </h3>
                                <p class="mt-2 text-sm leading-normal">
                                    A project I&apos;ve created during my
                                    internship.
                                </p>
                            </div>
                            {/* <img
                                alt=""
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                // style="color:transparent"
                                // srcset="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"
                                src="https://picsum.photos/540/360"
                            /> */}
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ProjectsComponent;
