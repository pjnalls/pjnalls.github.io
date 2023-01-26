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
          I'm a frontend developer providing Angular and React consulting along 
          with other technologies for UI designs and implementations.
          </p>
          <p className="py-2 text-black dark:text-white">
            I enjoy using Photoshop and Figma for mockups, wireframes, prototypes, and other designs.
            <br/>
            <br />
            On the side as a hobby, I learn Python, data science, machine
            learning, and pure mathematics. I also started picking up C- and
            hardware programming for personal maker projects.
            <br />
            <br />
            Work as a consultant and for personal pet projects feels like high
            forms of creative expression, and I love to do the work that I do everyday.
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
