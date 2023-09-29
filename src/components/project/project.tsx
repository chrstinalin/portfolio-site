/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { CloseIcon, LinkIcon } from "../decorative/icon";

interface ProjectProps {
    banner: any
    logo: any
    title: any
    subtitle: any
    description: any
    linkText: any
    link: any
    preventEvent?: boolean
    onClose?: any
}

const Project: FC<ProjectProps> = ({ banner, logo, title, subtitle, description, linkText, link, preventEvent, onClose }) => {
    return (
            <div onClick={preventEvent ? (e) => { e.stopPropagation() } : undefined} className={"h-full z-50 rounded-lg border-b border-gray-300 border-neutral-800 bg-zinc-900 from-inherit"}>
                <div className={"text-left flex flex-col items-stretch relative m-h-full"}>
                    {banner ? <div className={"w-full max-h-96"}>
                        <img src={banner} alt="header" className="w-full brightness-75 z-0" />
                    </div> : undefined}
                    {onClose ? <div onClick={onClose} className={"absolute right-0 top-0  pt-4 pr-8 sm:p-6 text-zinc-100"} ><CloseIcon size={25} /></div> : undefined}
                    <div className="-mt-16 p-8 flex flex-col gap-3 justify-center">
                        <img src={logo} alt="logo" className="z-10" style={{ width: "4em" }} />
                        <p className="text-xl font-bold">{title}</p>
                        <p className="text-md -mt-3 text-zinc-400">{subtitle}</p>
                        <div className="whitespace-pre-line">{description}</div>
                        {link ? <div className="flex gap-2 items-center">
                            <LinkIcon />
                            <a href={link} target="_blank" onClick={(e) => { e.stopPropagation()}} className="text-sm">{linkText}</a>
                        </div> : undefined}
                    </div>
                </div>
            </div>
    );
};

export default Project;