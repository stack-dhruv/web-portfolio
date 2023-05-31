import React from "react";
import AboutComponent from "./AboutComponent";
import ExperienceComponent from "./ExperienceComponent";
import ProjectsComponent from "./ProjectsComponent";
import FooterComponent from "./FooterComponent";
import EducationComponent from "./EducationComponent";
import SkillsComponent from "./SkillsComponent";

const MainComponent = () => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutComponent />
            <EducationComponent />
            <ExperienceComponent />
            <ProjectsComponent />
            <SkillsComponent />
            <FooterComponent />
        </main>
    );
};

export default MainComponent;
