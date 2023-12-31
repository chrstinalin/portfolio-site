import React, { useEffect, useState } from "react"
import { HomeIcon, PortfolioIcon, UserIcon } from "../decorative/icon"

export const NavBar = () => {

    const [currentSection, setCurrentSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry: any) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        }, { threshold: 0.2 });
        sections.forEach((section) => observer.observe(section));
    }, []);

    useEffect(() => {
        const buttons = document.querySelectorAll(".current-section");
        buttons.forEach(button => button.classList.remove("current-section"))
        const button = document.getElementById(currentSection + "Button")
        button?.classList.add("current-section")
    }, [currentSection])


    return (
        <React.Fragment>

            <nav id={"sider"} className={"h-screen fixed w-32 justify-center items-center z-20 hidden lg:flex"}>
                <div id={"menuBackground"} className={"rounded-full h-36 w-12 flex justify-center items-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-900 from-inherit"}>
                    <ul id={"menu"} className={"flex flex-col gap-3"}>
                        <li id={"homeButton"} className={"hover-effect button"}>
                            <a href="#home">
                                <HomeIcon />
                            </a>
                        </li>
                        <li id={"aboutButton"} className={"hover-effect button"}>
                            <a href="#about">
                                <UserIcon />
                            </a>
                        </li>
                        <li id={"projectsButton"} className={"hover-effect button"}>
                            <a href="#projects">
                                <PortfolioIcon />
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}