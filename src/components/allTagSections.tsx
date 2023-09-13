import React from "react";

import Project from "./project";

import { INFO } from "@/data/user";
import { TagSection } from "./tagSection";
import { FrameworkIcon, LanguageIcon, ToolIcon } from "./icon";

export const AllTagSections = () => {
    return (
        <div className=" m-12 w-screen flex flex-wrap items-center justify-center gap-6 ">
            <TagSection Icon={<LanguageIcon color={"white"}/>} key={"Languages"} title={"Languages"} tags={INFO.languages} />
            <TagSection Icon={<FrameworkIcon color={"white"}/>} key={"Frameworks"} title={"Frameworks"} tags={INFO.frameworks} />
            <TagSection Icon={<ToolIcon color={"white"}/>} key={"Tools"} title={"Tools"} tags={INFO.tools} />
        </div>
    );
};
