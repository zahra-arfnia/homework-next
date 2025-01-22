import Image from "next/image";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
export default function Header() {
  const links = [
    { name: "HOME", path: "/" },
    { name: "QUESTIONS", path: "/questions" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <div className={`bg-sky-600 w-full h-16 flex items-center justify-between px-5`}>
      <div className="flex items-center gap-5">
        <Image
          src="/question.jpg"
          width={50}
          height={50}
          alt="Question"
          className="rounded-full bg-sky-600"
        />
        {links.map((item) =>(
            <Link key={item.name} href={item.path} className="text-xs text-white font-semibold "> {item.name}</Link>
        ))}
      </div>

      <FaMoon className="w-8 h-8 text-indigo-950 mr-4"/>
    </div>
  );
}
