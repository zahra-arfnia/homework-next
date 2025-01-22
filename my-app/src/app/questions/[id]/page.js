import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { notFound } from "next/navigation";

export default async function QuestionId({ params }) {
  const qaData = [
    {
      id: 1,
      title: "Next.js",
      question: "What are the benefits of using Next.js over traditional React?",
      dateTime: "2023-10-01T14:30:00Z",
    },
    {
      id: 2,
      title: "React",
      question: "How do you manage state in a React application?",
      dateTime: "2023-10-02T09:15:00Z",
    },
    {
      id: 3,
      title: "Redux",
      question: "What is Redux and how does it work with React?",
      dateTime: "2023-10-03T11:45:00Z",
    },
    {
      id: 4,
      title: "JavaScript",
      question: "What are the differences between var, let, and const?",
      dateTime: "2023-10-04T16:00:00Z",
    },
  ];

  const id = parseInt(params.id); 

  if (isNaN(id) || id <= 0) {
    notFound();
  }

  const totalquestion = qaData.length;

  if (id > totalquestion) {
    notFound();
  }

  const question = qaData.find((item) => item.id === id);

  if (!question) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center my-24 ">
      <div className="w-4/6 flex flex-col gap-8">

        <div className="flex flex-col gap-3 border-b border-neutral-300 ">
         <p className="text-4xl">{question.title}</p>
         <p className="mb-3 text-sm font-medium text-zinc-900">{question.question}</p>
        </div>

        <div className="flex flex-col gap-6 ">
          <p className="text-2xl">Answers :</p>
          <input placeholder="write your answer ..." type="text" className="text-neutral-300 w-full bg-stone-100 h-24 px-3 border-b-4 border-sky-600"/>
          <button className="w-full h-7 bg-sky-600 text-white text-sm font-medium">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}