import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
export default function Question() {
  const qaData = [
    {
        id: 1,
        title: "Next.js",
        question: "What are the benefits of using Next.js over traditional React?",
        dateTime: "2023-10-01T14:30:00Z"
    },
    {
        id: 2,
        title: "React",
        question: "How do you manage state in a React application?",
        dateTime: "2023-10-02T09:15:00Z"
    },
    {
        id: 3,
        title: "Redux",
        question: "What is Redux and how does it work with React?",
        dateTime: "2023-10-03T11:45:00Z"
    },
    {
        id: 4,
        title: "JavaScript",
        question: "What are the differences between var, let, and const?",
        dateTime: "2023-10-04T16:00:00Z"
    }
];
  return (
    <div className="flex flex-col items-center justify-center mt-6 gap-9">

      <p className="text-5xl">
        Question
      </p> 

      <input  type="text" placeholder="search" className="w-4/5 md:w-5/12 border-stone-300 border-2 rounded-md p-1 focus:border-stone-400" /> 

      <div className="flex gap-7 text-sm font-medium items-center text-stone-700">
        <p >fliter by :</p>
        <button className="flex items-center"><FaArrowDownLong className="w-3 h-3"/> Newer</button>
        <button className="flex items-center"><FaArrowDownLong className="w-3 h-3"/> Older</button>
      </div>

      {qaData.map((item ,i)=>(
        
          <div className=" flex mb-5 mt-7 gap-4 md:gap-9 " key={i} >

          <Link href={`/questions/${item.id}`} className="justify-between shadow-lg w-question  px-1 md:px-5 h-24 flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">

          <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base font-medium">{item.title}</p>
          <p className="w-32 md:w-52 text-xs md:text-sm font-medium text-stone-700 ellipsis ">{item.question}</p>
          </div>

          <p className="text-xs ellipsis md:text-sm font-medium text-stone-700">{item.dateTime}</p>
          </Link>


          <div className="  flex items-center justify-center px-4 md:px-12 shadow-lg h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <FaTrash className=" w-6 h-6 "/>
          </div>
          
        </div>
        
        
      ))}

    </div>
  );
}
