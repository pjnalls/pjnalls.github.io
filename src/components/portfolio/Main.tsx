import React from "react";

import { FaGithub } from "react-icons/fa/index";

export default function Main() {
  return (
    <div id="main" className="w-full lg:h-screen text-center relative z-[1]">
      <div className="max-w-[1240px] w-full h-[100%] mx-auto p-2 px-0 py-36 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm font-semibold tracking-widest text-slate-600 dark:text-slate-300">
            LEARNING DAILY
          </p>
          <h1 className="py-4 text-slate-800 dark:text-[#ecf0f3]">
            Hi 👋, I&apos;m{" "}
            <span className="text-[#4f58fc] dark:text-[#9fa8ff]">pjnalls</span>
          </h1>
          <h1 className="py-4 text-slate-800 dark:text-[#ecf0f3]">
            A Frontend Developer Consultant
          </h1>
          <p className="py-4 text-slate-800  dark:text-[#ecf0f3] max-w-[70%] m-auto">
            My focus is on combining aesthetical, <br />
            functional design with efficient yet elegant frontend code.
            <br />
            <br />I also focus on fundemental, continual learning within the
            STEAM disciplines which aids me in better logical and creative
            expressions.
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
}
