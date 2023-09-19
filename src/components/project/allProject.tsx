/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef, useState } from "react";

import ProjectCard from "./projectCard";

import { INFO } from "../../../public/user";

const getScreenSize = () => {
	if (typeof window !== "undefined") {
		return window.innerWidth;
	}
	return undefined
}

export const AllProjects: FC<{ onClick: any }> = ({ onClick }) => {

	const [windowSize, setWindowSize] = useState(getScreenSize());

	useEffect(() => {
		function handleResize() {
			setWindowSize(getScreenSize());
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="p-6 flex flex-wrap items-center justify-center gap-6 " style={{ maxWidth: "52.5rem" }}>
			{INFO.projects.map((project: { banner: any; logo: any; title: any; subtitle: any; description: any; linkText: any; link: any; }, index: React.Key | null | undefined) => (
				<div key={index} onClick={() => { onClick(index) }}>
					<ProjectCard
						banner={project.banner}
						logo={project.logo}
						title={project.title}
						subtitle={project.subtitle}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						isFull={true}
						// isFull={index == 0 || windowSize != undefined && windowSize < 900}
					/>
				</div>
			))}
		</div>
	);
};
