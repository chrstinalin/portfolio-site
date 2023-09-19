import React from "react";

export const TagSection = (props: { title: any; tags: any; Icon: any}) => {
    const { title, tags, Icon} = props;

    return (
        <React.Fragment>
            <div className={"rounded-lg w-56 h-44 flex flex-col items-center gap-1"}>
                <p className="h-8 text-l font-bold flex gap-2">{Icon}{title}</p>
                <div className={"flex flex-wrap w-48 justify-center items-center gap-1"}>
                    {tags.map((tag: string) => <div className={"px-2 rounded-full border-b border-gray-300 backdrop-blur-2xl border-neutral-800 bg-zinc-900 from-inherit"} key={tag}>{tag}</div>)}
                </div>
            </div>

        </React.Fragment>
    );
};