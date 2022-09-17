import { FaGithub } from "react-icons/fa/index";

export default function  Main() {
  return (
    <div id="main" className="w-full h-screen text-center relative z-[1]">
      <div className="max-w-[1240px] w-full h-[100%] mx-auto p-2 px-0 py-36 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm font-semibold tracking-widest text-slate-600 dark:text-slate-300">
            DESIGNING AND CODING UI/UX DAILY
          </p>
          <h1 className="py-4 text-slate-800 dark:text-[#ecf0f3]">
            Hi 👋, I&apos;m <span className="text-[#4f58fc] dark:text-[#9fa8ff]">pjnalls</span>
          </h1>
          <h1 className="py-4 text-slate-800 dark:text-[#ecf0f3]">A UX-Engineer UI Consultant</h1>
          <p className="py-4 text-slate-800  dark:text-[#ecf0f3] max-w-[70%] m-auto">
            My focus on combining aesthetical yet functional UX design and
            efficient yet elegant UI code — is pivotal throughout the
            creative process of developing UI for my clients and projects of my
            own.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <a href="https://github.com/pjnalls/pjnalls" aria-label="GitHub">
              <div className="rounded-full shadow-lg shadow-slate-400 dark:shadow-slate-900/60 p-3 cursor-pointer hover:scale-110 transition-all ease-in duration-200">
                <FaGithub size="45px" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
