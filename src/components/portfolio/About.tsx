import React from "react";
import profilePicture from "/assets/profile-picture.avif";

export default function About() {
  return (
    <div id="about" className="w-full relative z-[1] p-2">
      <div className="max-w-[1000px] w-full h-[100%] mx-auto p-2 px-0 py-36 md:flex justify-center items-center">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widestest text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-slate-600 dark:text-slate-300/90">
            I'm a frontend developer with UI architecture experience providing
            React, Angular, and some cross-platform development consulting along
            with other technological services — having many opportunities for
            frontend-architectural and UI/UX designs and implementations from
            day to day.
          </p>
          <p className="py-2 text-black dark:text-white">
            Along with both part-time + full-time consulting, I'm also a
            postgraduate beginning a program for an MS in computer science in
            May of 2023.
            <br />
            <br />
            As a hobby, I learn Python, data science, machine learning, and pure
            mathematics.
            <br />
            <br />
            Work as a consultant and for personal pet projects feels like high
            forms of both creative and analytical expression, and I strive to be
            completely devoted to and singularly focused on the process of
            designing and developing great DX, CX, UX, and, most importantly, PX
            — great people experience above all.
          </p>
        </div>
        <div className="col-span-2 p-[3.333rem]">
          <img
            id="preston"
            className=" rounded-[50%]"
            width={"640px"}
            height={"640px"}
            alt="Preston's portrait"
            src={profilePicture}
          />
        </div>
      </div>
    </div>
  );
}
