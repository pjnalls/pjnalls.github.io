import React from "react";
import { useStore } from "@nanostores/react";

import { useEffect } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai/index";
import { FaGithub } from "react-icons/fa/index";
import { FiDownload } from "react-icons/fi/index";

import { navOpen, navShadow } from "../../stores";
import logo from "/assets/p.png";

export default function Navbar() {
  const $navOpen = useStore(navOpen);
  const $navShadow = useStore(navShadow);

  const handleDarkMode = () => {
    const htmlClassList = document
      .getElementsByTagName("html")
      .item(0)?.classList;

    if (htmlClassList?.value.includes("dark")) {
      htmlClassList?.remove("dark");
      localStorage.theme = "light";
    } else {
      htmlClassList?.add("dark");
      localStorage.theme = "dark";
    }
  };

  const handleNavShadow = () => {
    if (window.scrollY > 90) {
      navShadow.set(true);
    } else {
      navShadow.set(false);
    }
  };

  useEffect(() => {
    handleNavShadow();
    window.addEventListener("scroll", () => handleNavShadow());
  }, []);

  return (
    <div className="transition-all ease-in duration-300">
      <div
        className={
          $navShadow
            ? "fixed w-full z-[10] h-20 shadow-lg shadow-slate-600/40 dark:shadow-slate-900/60 bg-[#ecf0f3] dark:bg-[#1f2937] transition-all ease-in duration-500"
            : "fixed w-full z-[10] h-20 shadow-slate-600/40 bg-transparent transition-all ease-in duration-500"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 transition-all ease-in duration-300">
          <a href="/">
            <img
              src={logo}
              alt="logo for P.J. Nalls"
              width={52}
              height={52}
              className="rounded-full cursor-pointer"
            />
          </a>
          <div>
            <ul className="hidden md:flex px-2 transition-all ease-in duration-300">
              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="/">Home</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="/about">About</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="/skills">Skills</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="/projects">Projects</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="/blog">Blog</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a
                  className="flex items-center"
                  href="/assets/Resume - Frontend Developer - Preston Nalls - 20230227.docx"
                >
                  <span className="mr-1">RESUME </span> <FiDownload />
                </a>
              </li>
              <li
                onClick={() => handleDarkMode()}
                className="darkModeToggle ml-10 text-sm uppercase text-[30px] hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in"
              >
                ◑
              </li>
            </ul>
            <div
              onClick={() => navOpen.set(!$navOpen)}
              className="md:hidden z-[10] cursor-pointer hover:text-[#4f58ff] dark:hover:text-[#9fa8ff] hover:scale-110 transition-all ease-in duration-200"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          $navOpen
            ? "md:hidden fixed z-[100] left-0 top-0 w-full h-screen bg-[#1f2937]/70 transition-all ease-in duration-300"
            : "fixed z-[1] left-0 top-0 w-full h-screen bg-transition  transition-all ease-in duration-300"
        }
      ></div>
      <div
        className={
          $navOpen
            ? "md:hidden fixed z-[101] left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#1f2937] p-10 transition-all ease-in duration-300"
            : "fixed z-[0] left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#1f2937] p-10 transition-all ease-in duration-300"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between transition-all ease-in duration-300">
            <a href="/">
              <img
                src={logo}
                alt="logo for pjnalls"
                width="54"
                height="54"
                className="rounded-full cursor-pointer"
              />
            </a>
            <div
              onClick={() => navOpen.set(!$navOpen)}
              className="rounded-full z-[11] shadow-lg shadow-slate-400 dark:shadow-slate-900 p-3 cursor-pointer hover:scale-110"
            >
              <AiOutlineClose></AiOutlineClose>
            </div>
          </div>
          <div className="border-b border-slate-400 my-4">
            <p className="w-[100%] md:w-[80%] text-sm py-4 tracking-widest">
              📚 LEARNING DAILY
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            <li className="py-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-200 ease-in">
              <a href="/">Home</a>
            </li>

            <li className="py-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-200 ease-in">
              <a href="/about">About</a>
            </li>

            <li className="py-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-200 ease-in">
              <a href="/skills">Skills</a>
            </li>

            <li className="py-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-200 ease-in">
              <a href="/projects">Projects</a>
            </li>
            <li className="py-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-200 ease-in">
              <a href="/blog">Blog</a>
            </li>
            <li className="py-3 text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-200 ease-in">
              <a
                className="flex items-center"
                href="/assets/Resume - Frontend Developer - Preston Nalls - 20230227.docx"
              >
                <span className="mr-1">Resume </span> <FiDownload />
              </a>
            </li>
            <li
              onClick={() => handleDarkMode()}
              className="darkModeToggle text-sm uppercase text-[30px] hover:text-slate-700 dark:hover:text-slate-300 py-4 transition-all duration-200 ease-in"
            >
              ◑
            </li>
          </ul>
          <div className="pt-16">
            <p className="text-sm tracking-wider">
              <span className="text-[#2e40e0] dark:text-[#9fa8ff] tracking-widest">
                Made with
              </span>
              <br />
              Astro, React, TypeScript, Tailwind CSS, and ❤️.
              <br />
              <br />© Copyright 2022–2023 Preston Nalls
            </p>
            <div className="flex items-center my-2 pt-2 w-full">
              <a href="https://github.com/pjnalls/pjnalls" aria-label="GitHub">
                <div className="rounded-full shadow-lg shadow-slate-400 dark:shadow-slate-900 p-3 cursor-pointer hover:scale-110 transition-all ease-in duration-200">
                  <FaGithub size="30px" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
