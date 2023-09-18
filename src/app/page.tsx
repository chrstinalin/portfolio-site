"use client"
import { AllProjects } from "@/components/project/allProject";
import { AllTagSections } from "@/components/tag/allTagSections";
import { CardStack } from "@/components/decorative/cardstack";
import { FadeInSection } from "@/components/navigation/fadeInSection";
import { GithubIcon, LinkedInIcon } from "@/components/decorative/icon";
import { InteractableImage } from "@/components/decorative/image";
import { NavBar } from "@/components/navigation/navBar";
import { Particle } from "@/components/decorative/particles";
import { ResumeButton } from "@/components/navigation/resumeButton";
import { ProjectModal } from "@/components/project/projectModal";
import { INFO } from "../../public/user";
import { useEffect, useState } from "react";


export default function Home() {

  const [projNumber, setProjNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const modalEvent = (projNumber: number) => {
    setProjNumber(projNumber)
    setIsOpen(true)
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <main className={"bg-zinc-800 text-white"}>

      {isOpen && <ProjectModal setIsOpen={setIsOpen} projNumber={projNumber} />}

      <Particle />
      <NavBar />

      <div className=" z-20 fixed left-0 top-0 flex w-full justify-end items-center gap-4 pt-4 pb-2  bg-zinc-800 drop-shadow-md lg:bg-transparent lg:drop-shadow-none">
        <div className="flex gap-4">
          <a className={"hover-effect"} href={INFO.socials.github} target="_blank">
            <GithubIcon />
          </a>
          <a className={"hover-effect"} href={INFO.socials.linkedin} target="_blank">
            <LinkedInIcon />
          </a>

        </div>
        <ResumeButton />
      </div>

      <section id="home">
        <div className={"min-w-fit min-h-screen flex justify-center items-center flex-wrap overflow-clip"}>
          <FadeInSection>
            <div className="relative flex justify-center place-items-center flex-wrap-reverse">
              <div className="w-96 p-8 flex flex-col gap-2">
                <p className="text-5xl font-bold">{INFO.home.title}</p>
                <p >{INFO.home.description}</p>
              </div>
              <InteractableImage />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section id="about" >
        <div className={"min-w-fit min-h-screen flex justify-center items-center flex-wrap overflow-clip"}>
          <FadeInSection>
            <div className="relative flex justify-center items-center flex-wrap">
              <CardStack />
              <div className="w-96 p-16 flex flex-col gap-2">
                <p className="text-5xl font-bold">{INFO.about.title}</p>
                <p>{INFO.about.description}</p>
              </div>
              <AllTagSections />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section id="projects">
        <div className={"min-h-screen flex flex-col justify-center items-center"}>
          <FadeInSection>
            <div className={"flex flex-col gap-12 justify-center items-center flex-wrap overflow-clip text-center"}>
              <p className="text-5xl font-bold">Projects & Experience</p>
              <AllProjects onClick={modalEvent} />
            </div>
          </FadeInSection>

        </div>
      </section>

      <div className="text-zinc-400 flex h-28 mt-6 justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit">
        © 2023 Christina Lin
      </div>



    </main>

  )
}
