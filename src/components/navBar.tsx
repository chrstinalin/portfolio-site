import React from "react"
import { HomeIcon, PortfolioIcon, UserIcon } from "./icon"

export const NavBar = (props: {
    section: {
        home: boolean;
        about: boolean;
        projects: boolean;
    }
}) => {

    const { section } = props

    return (
        <React.Fragment>

            <nav id={"sider"} className={"h-screen fixed w-32 flex justify-center items-center z-50"}>
                <div id={"menuBackground"} className={"rounded-full h-36 w-12 flex justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"}>
                    <ul id={"menu"} className={"flex flex-col gap-3"}>
                        <li>
                            <a href="#home">
                                <HomeIcon color={section?.home && !section?.about ? "white" : "grey"} />
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <UserIcon color={section?.about && !section?.projects ? "white" : "grey"} />
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <PortfolioIcon color={section?.projects ? "white" : "grey"} />
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}