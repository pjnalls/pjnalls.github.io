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
            I'm a frontend developer providing React and Angular consulting
            along with other technologies with many opportunities for frontend-architectural and UI/UX designs and implementations
            <br />
            Along with full-time consulting, I&apos;m also a postgraduate
            beginning a program for an MS in computer science in May of 2023.
            <br />
          </p>
          <p className="py-2 text-black dark:text-white">
            Recently, I've create an open-source, cross-platform template project called{" "}
            <strong>
              <a href="/projects#react-native-strapi-template">
                <span className="text-[#4f58fc] dark:text-[#9fa8ff] cursor-pointer hover:dark:text-[#6f78fc] hover:text-[#2f38c0] transition-all ease-in duration-150">
                  ⚛️ React Native + 🚀 Strapi Template
                </span>
              </a>
            </strong>
            . In the template, I integrate a Strapi, backend CMS into a React Native written TypeScript for a truly
            fullstack, web (React app needs to be committed and pushed first), iOS, and Android developer, development-team and,
            most importantly, user experiences.
            <br />
            <br />
            As a hobby, I learn Python, data science, machine learning, and pure
            mathematics.
            <br />
            <br />
            Work as a consultant and for personal pet projects feels like high
            forms of creative expression, and I love to do the work that I do
            everyday.
          </p>
          <p className="py-2 text-black dark:text-white">
            I&apos;d like to show you my work rather than tell you about it, so please feel free to check out some of{" "}
            <a href="/projects" className="py-2 font-semibold">
              <span className="text-[#4f58fc] dark:text-[#9fa8ff] cursor-pointer hover:dark:text-[#6f78fc] hover:text-[#2f38c0] transition-all ease-in duration-150">
                my latest projects.
              </span>
            </a>
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
