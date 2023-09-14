/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LinkIcon } from "./icon";

const ProjectFull = (props: { banner: any, logo: any; title: any; description: any; linkText: any; link: any }) => {
    const { banner, logo, title, description, linkText, link } = props;

    return (
        <React.Fragment>
            <div onClick={(e) => {e.stopPropagation()}} className={"h-full w-full bg-white z-50 rounded-lg border-b border-gray-300 bg-gradient-to-b from-zinc-200  dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit"}>
                <div className={"h-80 overflow-hidden"}>
                    <img src={banner} alt="header" className="w-full brightness-75 z-0" />
                </div>

                <div className=" -mt-12 p-8 flex flex-col gap-3 justify-center">
                    <img src={logo} alt="logo" className="z-10" style={{ width: "2em" }} />
                    <p className="text-l font-bold">{title}</p>
                    <div>{description}</div>
                    <a href={link} className="flex gap-2 items-center">
                        <LinkIcon />
                        <span className="text-sm">{linkText}</span>
                    </a>
                </div>

            </div>
        </React.Fragment>
    );
};

export default ProjectFull;