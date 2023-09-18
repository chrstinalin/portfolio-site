import React, { FC } from "react";


import { INFO } from "../../../public/user";
import Project from "./project";

export const ProjectModal: FC<{ setIsOpen: any, projNumber: number }> = ({ setIsOpen, projNumber }) => {

  const project = INFO.projects[projNumber]

  return (
    <>






      <div className={'fade-in bg-black bg-opacity-50 h-screen w-screen fixed z-30 flex sm:p-24'} onClick={() => setIsOpen(false)}>

          <Project
          banner={project.banner}
          logo={project.logo}
          title={project.title}
          description={project.description}
          linkText={project.linkText}
          link={project.link}
          preventEvent={true}
          onClose={() => setIsOpen(false)}
        />
        

      </div>


    </>
  );
};