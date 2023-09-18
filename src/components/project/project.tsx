/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { CloseIcon, LinkIcon } from "../decorative/icon";

interface ProjectProps {
    banner: any
    logo: any
    title: any
    description: any
    linkText: any
    link: any
    preventEvent?: boolean
    onClose?: any
}

const Project: FC<ProjectProps> = ({ banner, logo, title, description, linkText, link, preventEvent, onClose }) => {
    return (
        <React.Fragment>

            <div onClick={preventEvent ? (e) => { e.stopPropagation() } : undefined} className={"overflow-hidden z-50 rounded-lg border-b border-gray-300 bg-gradient-to-b from-zinc-200 dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit"}>

                <div className={"flex flex-col items-stretch relative"}>

                    <div className={"w-full max-h-96 overflow-hidden"}>
                        <img src={banner} alt="header" className="w-full brightness-75 z-0" />
                    </div>

                    {onClose ? <div onClick={onClose} className={"absolute right-0 top-0  pt-4 pr-8 sm:p-6 text-zinc-100"} ><CloseIcon size={25}/></div> : undefined}

                    <div className="-mt-16 p-8 flex flex-col gap-3 justify-center">
                        <img src={logo} alt="logo" className="z-10" style={{ width: "4em" }} />
                        <p className="text-l font-bold">{title}</p>
                        <div>{description}</div>
                        <a href={link} className="flex gap-2 items-center">
                            <LinkIcon />
                            <span className="text-sm">{linkText}</span>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;