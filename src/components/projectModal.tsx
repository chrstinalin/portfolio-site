import React, { FC } from "react";


import { INFO } from "@/data/user";
import ProjectFull from "./projectFull";

export const ProjectModal: FC<{ setIsOpen: any, projNumber: number }> = ({ setIsOpen, projNumber }) => {

  const project = INFO.projects[projNumber]

  return (
    <>






      <div className={'bg-black bg-opacity-50 h-screen w-screen fixed z-30 p-60 flex'} onClick={() => setIsOpen(false)}>


        <ProjectFull
          banner={project.banner}
          logo={project.logo}
          title={project.title}
          description={project.description}
          linkText={project.linkText}
          link={project.link}
        />

      </div>


    </>
  );
};