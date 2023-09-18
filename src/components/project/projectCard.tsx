/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LinkIcon } from "../decorative/icon";
import Project from "./project";

const ProjectCard = (props: { banner: any, logo: any; title: any; description: any; linkText: any; link: any; isFull: boolean }) => {
	const { banner, logo, title, description, linkText, link, isFull } = props;

	return (
		<div className={`${isFull ? "w-full m-h-96" : "w-96 m-h-80"}`}>
			<Project
				banner={banner}
				logo={logo}
				title={title}
				description={description}
				linkText={linkText}
				link={link}
				preventEvent={false}
			/>
		</div>
	)
};

export default ProjectCard;