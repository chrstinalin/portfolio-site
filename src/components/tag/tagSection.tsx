import React from "react";

export const TagSection = (props: { title: any; tags: any; Icon: any}) => {
    const { title, tags, Icon} = props;

    return (
        <React.Fragment>
            <div className={"rounded-lg p-6 w-56 h-44 flex flex-col items-center gap-2"}>
                <p className="h-8 text-l font-bold flex gap-2">{Icon}{title}</p>
                <div className={"flex flex-wrap w-48 justify-center items-center gap-1"}>
                    {tags.map((tag: string) => <div className={"px-2 rounded-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit"} key={tag}>{tag}</div>)}
                </div>
            </div>

        </React.Fragment>
    );
};