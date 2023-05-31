import React from "react";
import JavascriptImageComponent from "./images/JavascriptImageComponent";
import HtmlImageComponent from "./images/HtmlImageComponent";
import CssImageComponent from "./images/CssImageComponent";
import ExpressImageComponent from "./images/ExpressImageComponent";
import ReactImageComponent from "./images/ReactImageComponent";
import { MongoImageComponent } from "./images/MongoImageComponent";
import NodeImageComponent from "./images/NodeImageComponent";
import PostgreSqlImageComponent from "./images/PostgreSqlImageComponent";
import MysqlImageCompoent from "./images/MysqlImageCompoent";
import GitImangeComponent from "./images/GitImangeComponent";

const SkillsComponent = () => {
    return (
        <section
            id="skills"
            class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
        >
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Skills
                </h2>
            </div>
            <div>
                <div className="flex flex-wrap gap-2">
                    <HtmlImageComponent />
                    <CssImageComponent />
                    <JavascriptImageComponent />
                    <GitImangeComponent />
                    <MongoImageComponent />
                    <ExpressImageComponent />
                    <ReactImageComponent />
                    <NodeImageComponent />
                    <PostgreSqlImageComponent />
                    <MysqlImageCompoent />
                </div>
            </div>
        </section>
    );
};

export default SkillsComponent;
