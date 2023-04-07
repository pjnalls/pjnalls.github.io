import { useStore } from "@nanostores/react";

import React, { useEffect } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai/index";
import { FaGithub, FaLinkedin } from "react-icons/fa/index";
import { FiDownload } from "react-icons/fi/index";

import { navOpen, navShadow } from "../../stores";
import logo from "/assets/p.avif";

import "./Navbar.css";

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

  const addFadeOutClass = () =>
    document.getElementsByTagName("main")?.item(0)?.classList?.add("fade-out");
  const handleTopNavItemClick = (routeName = "") => {
    addFadeOutClass();
    navOpen.set(!navOpen);
    setTimeout(
      () => (window.location.href = `${window.location.origin}/${routeName}`),
      1133
    );
  };

  useEffect(() => {
    handleNavShadow();
    window.addEventListener("scroll", () => handleNavShadow());
  }, []);

  return (
    <div>
      <div
        className={
          $navShadow
            ? "fixed w-full z-[10] h-20 shadow-lg shadow-slate-600/40 dark:shadow-slate-900/60 dark:bg-[#416] bg-[#ccf] transition-all ease-in duration-500"
            : "fixed w-full z-[10] h-20 shadow-slate-600/40 bg-transparent transition-all ease-in duration-500"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 transition-all ease-in duration-300">
          <a href="#" onClick={() => handleTopNavItemClick("")}>
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
                <a href="#" onClick={() => handleTopNavItemClick("about")}>
                  About
                </a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="#" onClick={() => handleTopNavItemClick("skills")}>
                  Skills
                </a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="#" onClick={() => handleTopNavItemClick("projects")}>
                  Projects
                </a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a href="#" onClick={() => handleTopNavItemClick("blog")}>
                  Blog
                </a>
              </li>

              <li className="ml-10 text-sm hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in resume-option">
                <a
                  className="flex items-center"
                  href="/assets/Frontend Developer Resume - Preston Nalls.docx"
                >
                  <span className="mr-1 uppercase">Resume </span>{" "}
                  <FiDownload fontSize={"1rem"} />
                </a>
                <span className="hovercard">
                  <span className="pointer">👆</span>
                  <div className="tooltiptext font-medium">
                    Download my resume here.
                  </div>
                </span>
              </li>
              <li className="ml-10 text-sm hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in resume-option">
                <a
                  className="flex items-center"
                  href="/assets/履歴書 - Preston Nalls.pdf"
                >
                  <span className="mr-1 uppercase">CV (JA) </span>{" "}
                  <FiDownload fontSize={"1rem"} />
                </a>
                <span className="hovercard">
                  <span className="pointer right-20">👆</span>
                  <div className="tooltiptext font-medium">
                    <span lang="ja">
                      ここから履歴書を
                      <br />
                      ダウンロードします。
                    </span>
                  </div>
                </span>
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
            ? "md:hidden fixed z-[100] left-0 top-0 w-full h-screen bg-[#1f2937]/70 transition-all ease duration-500"
            : "fixed z-[1] left-0 top-0 w-full h-screen bg-transition  transition-all ease duration-500"
        }
      ></div>
      <div
        className={
          $navOpen
            ? "md:hidden fixed z-[101] left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen dark:bg-[#416] bg-[#ccf] p-10 transition-all duration-500 ease"
            : "fixed z-[0] left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen dark:bg-[#416] bg-[#ccf] p-10 transition-all duration-500 ease"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between transition-all duration-200 ease">
            <a href="#" onClick={() => handleTopNavItemClick("#opened")}>
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
          <p className="w-[100%] md:w-[80%] text-sm py-4 tracking-widest font-semibold dark:text-amber-400 text-amber-900">
            👆 G . P . X . 2 . A
          </p>
        </div>
        <div className="py-4 flex flex-col">
          <ul>
            <li className="py-3 text-sm origin-left uppercase hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease">
              <a href="#" onClick={() => handleTopNavItemClick("about#opened")}>
                About
              </a>
            </li>

            <li className="py-3 text-sm origin-left uppercase hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease">
              <a
                href="#"
                onClick={() => handleTopNavItemClick("skills#opened")}
              >
                Skills
              </a>
            </li>

            <li className="py-3 text-sm origin-left uppercase hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease">
              <a
                href="#"
                onClick={() => handleTopNavItemClick("projects#opened")}
              >
                Projects
              </a>
            </li>
            <li className="py-3 text-sm origin-left uppercase hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease">
              <a href="#" onClick={() => handleTopNavItemClick("blog#opened")}>
                Blog
              </a>
            </li>
            <li className="py-3 text-sm origin-left hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease resume-option">
              <a
                className="flex items-center"
                href="/assets/Frontend Developer Resume - Preston Nalls.docx"
              >
                <span className="mr-1 uppercase">Resume </span>{" "}
                <FiDownload fontSize={"1rem"} />
              </a>
              <span className="hovercard drawer">
                <span className="pointer drawer__pointer">👈</span>
                <div className="tooltiptext font-medium">
                  Download my resume here.
                </div>
              </span>
            </li>
            <li className="py-3 text-sm origin-left hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease resume-option">
              <a
                className="flex items-center"
                href="/assets/履歴書 - Preston Nalls.pdf"
              >
                <span className="mr-1 uppercase">CV (JA) </span>{" "}
                <FiDownload fontSize={"1rem"} />
              </a>
              <span className="hovercard drawer">
                <span className="pointer drawer__pointer">👈</span>
                <div className="tooltiptext font-medium">
                  <span lang="ja">
                    ここから履歴書を
                    <br />
                    ダウンロードします。
                  </span>
                </div>
              </span>
            </li>
            <li
              onClick={() => handleDarkMode()}
              className="darkModeToggle text-sm origin-left uppercase text-[30px] hover:opacity-80 hover:scale-110 py-4"
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
              React, TypeScript, Tailwind CSS, Astro and ❤️.
              <br />
              <br />
              Copyright © 2023 Preston Nalls
            </p>
            <div className="flex items-center my-2 pt-2 w-full gap-5">
              <a href="https://github.com/pjnalls" aria-label="GitHub">
                <div className="rounded-full shadow-lg text-[#19216f] dark:text-[#fff0e0] shadow-slate-400 dark:shadow-slate-900 p-3 cursor-pointer hover:scale-110 transition-all ease-in duration-200">
                  <FaGithub size="30px" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/pjnalls"
                aria-label="LinkedIn"
              >
                <div className="rounded-full shadow-lg text-[#19216f] dark:text-[#fff0e0] shadow-slate-400 dark:shadow-slate-900 p-3 cursor-pointer hover:scale-110 transition-all ease-in duration-200">
                  <FaLinkedin size="30px" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
