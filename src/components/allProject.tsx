import React, { FC } from "react";

import Project from "./project";

import { INFO } from "@/data/user";

export const AllProjects: FC<{onClick: any}> = ({onClick}) => {
	return (
		<div className="w-screen flex flex-wrap items-center justify-center gap-6 " style={{maxWidth: "50rem"}}>
			{INFO.projects.map((project: { banner: any; logo: any; title: any; description: any; linkText: any; link: any; }, index: React.Key | null | undefined) => (
				<div key={index} onClick={() => {onClick(index)}}>
					<Project
						banner={project.banner}
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						isFirst={index == 0}
					/>
				</div>
			))}
		</div>
	);
};
