"use client"
import { AllProjects } from "@/components/allProject";
import { AllTagSections } from "@/components/allTagSections";
import { CardStack } from "@/components/cardstack";
import { FadeInSection } from "@/components/fadeInSection";
import { GithubIcon, LinkedInIcon } from "@/components/icon";
import { InteractableImage } from "@/components/image";
import { NavBar } from "@/components/navBar";
import { Particle } from "@/components/particles";
import { ResumeButton } from "@/components/resumeButton";
import React, { useState } from "react";

import { INFO } from "@/data/user";

export default function Home() {

  const [section, useSetSection] = useState({ home: false, about: false, projects: false })

  return (
    <main className={"bg-zinc-700 text-white"}>

      <Particle />
      <NavBar section={section} />

      <div className=" z-50 fixed left-0 top-0 flex w-full justify-end items-center gap-4 p-6">
        <div className="flex gap-4">
          <GithubIcon color={"grey"} />
          <LinkedInIcon color={"grey"} />
        </div>
        <ResumeButton />
      </div>

      <section id="home">
        <div className={"min-w-fit h-screen flex justify-center items-center flex-wrap overflow-clip"}>
          <FadeInSection id="home" useSetSection={useSetSection}>
            <div className="relative flex justify-center place-items-center flex-wrap-reverse">
              <div className="text-5 w-fit lg:pr-16 md:pr-16">
                <p className="text-5xl font-bold">{INFO.home.title}</p>
                <p className="text-5">{INFO.home.description}</p>
              </div>
              <InteractableImage />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section id="about">
        <div className={"h-screen flex justify-center items-center flex-wrap overflow-clip"}>
          <FadeInSection id="about" useSetSection={useSetSection}>
            <div className="relative flex justify-center items-center flex-wrap">
              <CardStack />
              <div className="text-5 w-96 lg:pl-16 md:pl-16">
                <p className="text-5xl font-bold">{INFO.about.title}</p>
                <p className="text-5">{INFO.about.description}</p>
              </div>
              <AllTagSections />
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className={"min-w-fit h-screen flex flex-col justify-center items-center"}>
        <section id="projects">
          <FadeInSection id="projects" useSetSection={useSetSection}>
            <div className={"flex flex-col gap-12 justify-center items-center flex-wrap overflow-clip"}>
              <p className="text-5xl font-bold">Projects & Experience</p>
              <AllProjects />
            </div>
          </FadeInSection>
        </section>
      </div>

      <div className="text-zinc-400 flex w-full h-28 justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        © 2023 Christina Lin
      </div>

    </main>

  )
}
