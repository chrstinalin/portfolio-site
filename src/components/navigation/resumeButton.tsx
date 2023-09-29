import { FC } from "react"


export const ResumeButton: FC<{ onClick?: any }> = ({ onClick }) => {
    return (

            <button onClick={onClick ?? (() => {if (typeof window !== "undefined") window.open("/Christina_Lin_Resume.pdf")})} className="transition ease-in-out bg-blue-500 hover:bg-blue-600 duration-500 text-white focus:ring-1 focus:outline-none focus:ring-cyan-300 focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                View Resume
            </button>



    )
}