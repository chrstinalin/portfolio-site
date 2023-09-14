import React from "react";
import { INFO } from "../../public/user";
import { TagSection } from "./tagSection";
import { FrameworkIcon, LanguageIcon, ToolIcon } from "./icon";

export const AllTagSections = () => {
    return (
        <div className="w-screen flex flex-wrap items-center justify-center gap-2 md:m-12">
            <TagSection Icon={<LanguageIcon />} key={"Languages"} title={"Languages"} tags={INFO.languages} />
            <TagSection Icon={<FrameworkIcon />} key={"Frameworks"} title={"Frameworks"} tags={INFO.frameworks} />
            <TagSection Icon={<ToolIcon />} key={"Tools"} title={"Tools"} tags={INFO.tools} />
        </div>
    );
};
