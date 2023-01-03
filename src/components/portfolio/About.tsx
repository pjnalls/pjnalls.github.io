import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full lg:h-screen relative z-[1]">
      <div className="max-w-[1000px] w-full h-[100%] mx-auto p-2 px-0 py-36 flex justify-center items-center">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widestest text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-slate-600 dark:text-slate-300/90">
            I'm a frontend developer and Angular consultant with some career
            development experiences in React and other frontend technologies.
            <br />
            On the side (as a hobby), I learn Python, data science, machine
            learning, pure mathematics and started picking up C- and
            hardware programming for personal maker projects.
          </p>
          <p className="py-2 text-black dark:text-white">
            Along with frontend development, I enjoy using Photoshop and Figma
            for mockups, wireframes, prototypes, and other designs in order to
            communicate with clients about UI/UX.
            <br />
            <br />
            Work as a consultant and for my own UI projects feels like high
            forms of creative expression, and I'm honored to do the work I do
            everyday 🙏.
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
