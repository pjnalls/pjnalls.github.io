import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full relative z-[1] p-2 py-32">
      <div className="max-w-[1000px] w-full h-[100%] mx-auto p-2 px-0 py-36 flex justify-center items-center">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widestest text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-slate-600 dark:text-slate-300/90">
            I'm a frontend developer providing Angular and React consulting
            along with other technologies for UI designs and implementations.
            <br />
            Along with full-time consulting, I&apos;m also a postgraduate
            beginning a program for an MS in computer science in summer of 2023.
            <br />
          </p>
          <p className="py-2 text-black dark:text-white">
            Recently, I've begin an open-source, cross-platform project called
            CareerCron, "a career aide and guide that is there for you anytime,
            anywhere — one small goal after the next". We use MERN, React
            Native, and TypeScript technologies for truly fullstack, web, iOS,
            and Android developer, development-team and, most importantly, user
            experiences.
            <br />
            <br />
            As a hobby, I learn Python, data science, machine learning, and pure
            mathematics. I also started picking up React Native for
            cross-platform development to create apps for not only the web but
            for native iOS and Android — to write the code only once and for it
            to work across multiple devices.
            <br />
            <br />
            Work as a consultant and for personal pet projects feels like high
            forms of creative expression, and I love to do the work that I do
            everyday.
          </p>
          <p className="py-2 text-black dark:text-white">
            I&apos;d like to show you my work rather than tell you about it, so{" "}
            <a href="/projects" className="py-2 font-semibold">
              <span className="text-[#4f58fc] dark:text-[#9fa8ff] cursor-pointer hover:dark:text-[#6f78fc] hover:text-[#2f38c0] transition-all ease-in duration-150">
                please feel free to check out some of my latest projects.
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
