import React from "react";

import { FaEye, FaSearchPlus, FaGithub } from "react-icons/fa/index";

export default function ProjectItem({
  className = "",
  title = "",
  description = "",
  madeWith = "",
  backgroundImg = "",
  enableScreenshot = false,
  enableCode = false,
  enableDemo = false,
  demoLabel = "",
  demoUrl = "",
  githubUrl = "",
}) {
  return (
    <div
      className={`relative flex items-center justify-center h-auto w-full shadow-xl shadow-slate-400 dark:shadow-slate-900 rounded-xl group hover:bg-gradient-to-b from-[#4f58fc] to-[#2e40e0] bg-[#2e40e0] transition-all ease-in duration-500 ${className}`}
    >
      <img
        className="rounded-xl group-hover:opacity-10 group-hover:blur-[1.333px]  transition-all ease-in duration-300 cursor-pointer"
        width={"700px"}
        height={"700px"}
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full p-4 lg:px-10 md:px-6 px-5 leading-4 lg:leading-6 md:leading-4">
        <label
          htmlFor={title}
          className="pb-0 mb-0 drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
        >
          Title
        </label>
        <h3
          id={title}
          className="text-white pb-3 m-0 pt-0 leading-5 lg:leading-7 md:leading-5 font-semibold text-xl drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
        >
          {title}
        </h3>
        <label
          htmlFor={description}
          className="drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
        >
          Description
        </label>
        <p
          id={description}
          className=" text-white pb-3 drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
        >
          {description}
        </p>
        <label
          htmlFor={title + ": " + madeWith}
          className="drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
        >
          Made with
        </label>
        <p
          id={title + ": " + madeWith}
          className="text-white pb-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
        >
          {madeWith}
        </p>

        <div className="icons text-center flex justify-around items-center lg:py-18 py-2 md:py-4">
          {enableDemo && (
            <div className="block">
              <label
                htmlFor="title"
                className="w-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
              >
                {demoLabel}
              </label>
              <a
                href={demoUrl}
                className="w-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
              >
                <div className="rounded-full shadow-lg p-2  w-[48px] h-[48px]cursor-pointer hover:scale-110 transition-all ease-in duration-200 bg-gradient-to-b from-[#7d6c43] to-[#605523] flex justify-center items-center mx-auto my-2 cursor-pointer drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]">
                  <FaEye size="30px" className="text-white" />
                </div>
              </a>
            </div>
          )}
          {enableCode && (
            <div className="block">
              <label
                htmlFor="title"
                className="w-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
              >
                View Code
              </label>
              <a
                href={githubUrl}
                className="w-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
              >
                <div className="rounded-full shadow-lg p-2  w-[48px] h-[48px]cursor-pointer hover:scale-110 transition-all ease-in duration-200 bg-gradient-to-b from-[#7d6c43] to-[#605523] flex justify-center items-center mx-auto my-2 cursor-pointer drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]">
                  <FaGithub size="30px" className="text-white" />
                </div>
              </a>
            </div>
          )}
          {enableScreenshot && (
            <div className="block">
              <label
                htmlFor="title"
                className="w-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]"
              >
                View Screenshot
              </label>
              <div className="rounded-full shadow-lg p-2  w-[48px] h-[48px]cursor-pointer hover:scale-110 transition-all ease-in duration-200 bg-gradient-to-b from-[#7d6c43] to-[#605523] flex justify-center items-center mx-auto my-2 cursor-pointer drop-shadow-[0_3px_3px_rgba(0,0,0,0.333)]">
                <FaSearchPlus size="30px" className="text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
