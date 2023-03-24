import React from "react";

export default function Main() {
  return (
    <div id="main" className="w-full lg:h-screen text-center relative z-[1]">
      <div className="max-w-[1240px] w-full h-[100%] mx-auto p-2 py-36 flex justify-center items-center">
        <div>
          <p className="uppercase text-lg font-semibold tracking-widest text-slate-600 dark:text-slate-300">
            📚 LEARNING DAILY
          </p>
          <h1 className="py-4 text-slate-800 dark:text-[#ecf0f3]">
            Hi 👋, I&apos;m{" "}
            <a href="/about">
              <span className="text-[#4f58fc] dark:text-[#9fa8ff] cursor-pointer hover:dark:text-[#6f78fc] hover:text-[#2f38c0] transition-all ease-in duration-150">
                Preston
              </span>
            </a>
            .
          </h1>
          <h2 className="py-4 text-slate-800 dark:text-[#ecf0f3] md:text-3xl text-lg font-semibold">
            Frontend Developer •
            <br />
            MS in Computer Science Postgraduate
            <br />
            at Kennesaw State University - (CCSE)
          </h2>
          <p className="py-4 text-slate-800  dark:text-[#ecf0f3] max-w-[70%] m-auto">
            My focus is on combining aesthetical, <br />
            functional design with efficient yet elegant frontend code.
            <br />
            <br />I also focus on continually learning in the STEAM (Scientific, Technological, Engineering, Artistic, and Mathematic) disciplines
            to cultivate better analytical and creative abilities for both
            professional and personal projects.
          </p>
        </div>
      </div>
    </div>
  );
}
