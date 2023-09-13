/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LinkIcon } from "./icon";

const Project = (props: { banner: any, logo: any; title: any; description: any; linkText: any; link: any; isFirst: boolean}) => {
	const { banner, logo, title, description, linkText, link, isFirst } = props;

	return (
		<React.Fragment>
			<div className={`${isFirst? "w-full h-96" : "w-96 h-80"} overflow-hidden rounded-lg border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit`}>
				<div className={`${isFirst ? "h-36" : "h-28"} w-inherit  overflow-hidden`}>
					<img src={banner} alt="header" className="w-full brightness-75 z-0"/>
				</div>
				
				<div className=" -mt-12 p-8 flex flex-col gap-3 justify-center">
					<img src={logo} alt="logo" className="z-10" style={{ width: "2em" }} />
					<p className="text-l font-bold">{title}</p>
					<div>{description}</div>
					<a href={link} className="flex gap-2 items-center">
						<LinkIcon color="white" size={15} />
						<span className="text-sm">{linkText}</span>
					</a>
				</div>

			</div>
		</React.Fragment>
	);
};

export default Project;