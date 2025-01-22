import { IoLogoGithub } from "react-icons/io";
export default function Footer() {
    return (
        <div className="w-full h-40 bg-sky-700 flex flex-col items-center justify-center mt-5 gap-3">
            <p className="text-white text-lg font-medium"> more project ive worked on!</p>
            <div className="flex items-center gap-2">
            <IoLogoGithub className="text-white w-6 h-6"/>
            <p className="text-white text-lg font-medium"> @teamwoek-next on github</p>
            </div>
        </div>
    )
}