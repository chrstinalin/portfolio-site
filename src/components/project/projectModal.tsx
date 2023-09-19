import React, { FC } from "react";


import { INFO } from "../../../public/user";
import Project from "./project";

export const ProjectModal: FC<{ setIsOpen: any, projNumber: number }> = ({ setIsOpen, projNumber }) => {

  const project = INFO.projects[projNumber]

  return (
    <>
      <div className='z-30 fixed top-0 left-0 w-screen h-screen'>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md' ></div>
        <div className='flex justify-center fade-in relative overflow-auto h-full w-full sm:p-24' onClick={() => setIsOpen(false)}>

          <div className="max-w-4xl">

            <Project
              banner={project.banner}
              logo={project.logo}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              linkText={project.linkText}
              link={project.link}
              preventEvent={true}
              onClose={() => setIsOpen(false)}
            />
          </div>

        </div>
      </div>

    </>
  );
};