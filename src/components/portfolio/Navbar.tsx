import { useStore } from "@nanostores/react";

import React, { useEffect } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai/index";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs/index";
import { FaGithub, FaLanguage, FaLinkedin } from "react-icons/fa/index";
import { FiDownload } from "react-icons/fi/index";

import { itsDark, navOpen, navShadow } from "../../stores";
import logo from "/assets/p.avif";

import "./Navbar.css";

export default function Navbar() {
  const $navOpen = useStore(navOpen);
  const $navShadow = useStore(navShadow);
  const $itsDark = useStore(itsDark);

  const handleDarkMode = () => {
    const htmlClassList = document
      .getElementsByTagName("html")
      .item(0)?.classList;

    if (htmlClassList?.value.includes("dark")) {
      itsDark.set(false);
      htmlClassList?.remove("dark");
      localStorage.theme = "light";
    } else {
      itsDark.set(true);
      htmlClassList?.add("dark");
      localStorage.theme = "dark";
    }
  };

  const initTheme = () =>
    document
      .getElementsByTagName("html")
      .item(0)
      ?.classList?.value.includes("dark")
      ? itsDark.set(true)
      : itsDark.set(false);

  const handleNavShadow = () => {
    if (window.scrollY > 90) {
      navShadow.set(true);
    } else {
      navShadow.set(false);
    }
  };

  const addFadeOutClass = () => {
    document.getElementsByTagName("main")?.item(0)?.classList?.add("fade-out");
    document
      .getElementById("blossomContainer")
      ?.classList?.add("fade-out-blossoms");
  };
  const handleTopNavItemClick = (routeName = "") => {
    addFadeOutClass();
    navOpen.set(!navOpen);
    setTimeout(
      () => (window.location.href = `${window.location.origin}/${routeName}`),
      1133
    );
  };
  const selectLocale = (locale: string) => {
    localStorage.setItem("locale", locale);
    window.location.reload();
  };

  useEffect(() => {
    const locale = localStorage?.getItem("locale") as string;
    document
      .getElementById("linked-navbar")
      ?.setAttribute(
        "href",
        `https://www.linkedin.com/in/pjnalls?locale=${locale}`
      );
    const intlTags = document.getElementsByClassName("intl-nav");
    const setLocale = () => {
      for (let i = 0; i < intlTags?.length; i++) {
        (intlTags.item(i) as Element).textContent =
          localizationDB[intlTags.item(i)?.getAttribute("id") as any]?.get(
            localStorage.getItem("locale")
          ) ??
          localizationDB[intlTags.item(i)?.getAttribute("id") as any]?.get(
            "en_US"
          );
      }
      const localeSettings = document.querySelectorAll(
        `#${localStorage.getItem("locale") as string}`
      ) as NodeListOf<HTMLOptionElement>;
      localeSettings.forEach((setting) => {
        setting.selected = true;
      });
    };
    setLocale();
    handleNavShadow();
    initTheme();
    window.addEventListener("scroll", () => handleNavShadow());
  }, []);

  /**
   * LOCALIZATION DATABASE
   */
  var localizationDB: any = {
    /**
     * NAVIGATION BAR
     */
    about: new Map([
      ["en_US", "About"],
      ["ja_JP", "自己紹介"],
      ["zh_TW", "自我介紹"],
      ["zh_CN", "自我介绍"],
      ["es_ES", "Introducción"],
      ["ko_KR", "자기소개"],
    ]),
    skills: new Map([
      ["en_US", "Skills"],
      ["ja_JP", "スキル"],
      ["zh_TW", "技能"],
      ["zh_CN", "技能"],
      ["es_ES", "Técnica"],
      ["ko_KR", "기술"],
    ]),
    works: new Map([
      ["en_US", "Works"],
      ["ja_JP", "作品"],
      ["zh_TW", "作品"],
      ["zh_CN", "作品"],
      ["es_ES", "Obras"],
      ["ko_KR", "작품"],
    ]),
    en_AS: new Map([
      ["en_US", "English (American)"],
      ["ja_JP", "英語（アメリカ）"],
      ["zh_TW", "英語（美國）"],
      ["zh_CN", "英语（美国）"],
      ["es_ES", "Inglés (Americano)"],
      ["ko_KR", "영어(미국식)"],
    ]),
    blog: new Map([
      ["en_US", "Blog"],
      ["ja_JP", "ブログ  (英語）"],
      ["zh_TW", "博客 (英語）"],
      ["zh_CN", "博客 (英语）"],
      ["es_ES", "Blog (Inglés)"],
      ["ko_KR", "블로그 (미국식)"],
    ]),
    resume: new Map([
      ["en_US", "Resume"],
      ["ja_JP", "レジュメ"],
      ["zh_TW", "簡歷"],
      ["zh_CN", "简历"],
      ["es_ES", "CV (EN)"],
      ["ko_KR", "이력서"],
    ]),
    cv: new Map([
      ["en_US", "CV (JA)"],
      ["ja_JP", "履歴書"],
      ["zh_TW", "自我介紹"],
      ["zh_CN", "自我介绍"],
      ["es_ES", "CV (JA)"],
      ["ko_KR", "자기소개"],
    ]),
    madeWith: new Map([
      ["en_US", "Made with"],
      ["ja_JP", "使用技術"],
      ["zh_TW", "使用的技術"],
      ["zh_CN", "使用的技术"],
      ["es_ES", "Hecho con"],
      ["ko_KR", "사용 기술"],
    ]),
    techUsed: new Map([
      ["en_US", "React, TypeScript, Tailwind CSS, Astro, Piskel, and ❤️."],
      ["ja_JP", "React、TypeScript、 Tailwind CSS、 Astro、 Piskel、❤️。"],
      ["zh_TW", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️。"],
      ["zh_CN", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️。"],
      ["es_ES", "React, TypeScript, Tailwind CSS, Astro, Piskel y ❤️."],
      ["ko_KR", "React, TypeScript, Tailwind CSS, Astro, Piskel, ❤️."],
    ]),
    download_here: new Map([
      ["en_US", "Download my resume here."],
      ["ja_JP", "履歴書はこちらからダウンロードできます。"],
      ["zh_TW", "在此下載我的簡歷。"],
      ["zh_CN", "在此下载我的简历。"],
      ["es_ES", "Descargue mi currículum aquí."],
      ["ko_KR", "여기에서 이력서를 다운로드하세요."],
    ]),
  };

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
                <a
                  id="about"
                  className="intl-nav"
                  href="#"
                  onClick={() => handleTopNavItemClick("about")}
                >
                  About
                </a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a
                  id="skills"
                  className="intl-nav"
                  href="#"
                  onClick={() => handleTopNavItemClick("skills")}
                >
                  Skills
                </a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a
                  id="works"
                  className="intl-nav"
                  href="#"
                  onClick={() => handleTopNavItemClick("works")}
                >
                  Works
                </a>
              </li>

              <li className="ml-10 text-sm uppercase hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in">
                <a
                  id="blog"
                  className="intl-nav"
                  href="#"
                  onClick={() => handleTopNavItemClick("blog")}
                >
                  Blog
                </a>
              </li>

              <li className="ml-10 text-sm hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in resume-option">
                <a
                  className="flex items-center"
                  href="/assets/Resume - Preston Nalls.pdf"
                >
                  <FiDownload fontSize={"1rem"} />{" "}
                  <span id="resume" className="intl-nav ml-1 uppercase">
                    {" "}
                    Resume{" "}
                  </span>{" "}
                </a>
                <span className="hovercard">
                  <span className="pointer">👆</span>
                  <div
                    id="download_here"
                    className="intl-nav tooltiptext font-medium"
                  >
                    Download my resume here.
                  </div>
                </span>
              </li>
              {/* <li className="ml-10 text-sm hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in resume-option">
                <a
                  className="flex items-center"
                  href="/assets/履歴書 - Nalls, Preston.xlsx"
                >
                  <span id="cv" className="intl-nav mr-1 uppercase">
                    CV (JA){" "}
                  </span>{" "}
                  <FiDownload fontSize={"1rem"} />
                </a>
                <span className="hovercard">
                  <span className="pointer right-20">👆</span>
                  <div id="download_here" className="intl-nav tooltiptext font-medium">
                    Download my resume here.
                  </div>
                </span>
              </li> */}
              <li className="ml-10 mt-[-2px] text-sm hover:scale-110 hover:border-slate-300 transition-all duration-200 ease-in resume-option flex items-center">
                <FaLanguage size={"24px"} />
                <select
                  className="locale-settings ml-1"
                  onChange={({ target: { value } }) => selectLocale(value)}
                >
                  <option id="en_US" value={"en_US"}>
                    ENGLISH
                  </option>
                  <option id="ja_JP" value={"ja_JP"}>
                    日本語
                  </option>
                  <option id="zh_TW" value={"zh_TW"}>
                    繁體字
                  </option>
                  <option id="zh_CN" value={"zh_CN"}>
                    简体字
                  </option>
                  <option id="es_ES" value={"es_ES"}>
                    ESPAÑOL
                  </option>
                  <option id="ko_KR" value={"ko_KR"}>
                    한국어
                  </option>
                </select>
              </li>
              <li
                onClick={() => handleDarkMode()}
                className="darkModeToggle ml-10 text-sm uppercase text-[30px] hover:scale-110 hover:border-slate-300 transition-all duration-200 ease width-[60px]"
              >
                {$itsDark ? (
                  <BsFillSunFill fontSize={"1.333rem"} />
                ) : (
                  <BsFillMoonFill fontSize={"1.333rem"} />
                )}
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
              <a
                id="about"
                className="intl-nav"
                href="#"
                onClick={() => handleTopNavItemClick("about#opened")}
              >
                About
              </a>
            </li>

            <li className="py-3 text-sm origin-left uppercase hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease">
              <a
                id="skills"
                className="intl-nav"
                href="#"
                onClick={() => handleTopNavItemClick("skills#opened")}
              >
                Skills
              </a>
            </li>

            <li className="py-3 text-sm origin-left uppercase hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease">
              <a
                id="works"
                className="intl-nav"
                href="#"
                onClick={() => handleTopNavItemClick("works#opened")}
              >
                Works
              </a>
            </li>
            <li className="py-3 text-sm origin-left uppercase hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease">
              <a
                id="blog"
                className="intl-nav"
                href="#"
                onClick={() => handleTopNavItemClick("blog#opened")}
              >
                Blog
              </a>
            </li>
            <li className="py-3 text-sm origin-left hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease resume-option">
              <a
                className="flex items-center"
                href="/assets/Resume - Preston Nalls.pdf"
              >
                <FiDownload fontSize={"1rem"} />{" "}
                <span id="resume" className="intl-nav ml-1 uppercase">
                  {" "}
                  Resume{" "}
                </span>{" "}
              </a>
              <span className="hovercard drawer">
                <span className="pointer drawer-pointer">👈</span>
                <div
                  id="download_here"
                  className="intl-nav tooltiptext font-medium"
                >
                  Download my resume here.
                </div>
              </span>
            </li>
            {/* <li className="py-3 text-sm origin-left hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-all duration-200 ease resume-option">
              <a
                className="flex items-center"
                href="/assets/履歴書 - Nalls, Preston.xlsx"
              >
                <span className="mr-1 uppercase">CV (JA) </span>{" "}
                <FiDownload fontSize={"1rem"} />
              </a>
              <span className="hovercard drawer">
                <span className="pointer drawer-pointer">👈</span>
                <div id="download_here" className="intl-nav tooltiptext font-medium">
                  Download my resume here.
                </div>
              </span>
            </li> */}
            <li className="py-3 mt-[-1px] text-sm origin-left hover:text-slate-700 hover:scale-110 transition-all duration-200 ease resume-option flex items-center">
              <FaLanguage size={"24px"} />
              <select
                className="locale-settings ml-1"
                onChange={({ target: { value } }) => selectLocale(value)}
              >
                <option id="en_US" value={"en_US"}>
                  ENGLISH
                </option>
                <option id="ja_JP" value={"ja_JP"}>
                  日本語
                </option>
                <option id="zh_TW" value={"zh_TW"}>
                  繁體字
                </option>
                <option id="zh_CN" value={"zh_CN"}>
                  简体字
                </option>
                <option id="es_ES" value={"es_ES"}>
                  ESPAÑOL
                </option>
                <option id="ko_KR" value={"ko_KR"}>
                  한국어
                </option>
              </select>
            </li>
            <li
              onClick={() => handleDarkMode()}
              className="darkModeToggle text-sm origin-left uppercase text-[30px] hover:opacity-80 hover:scale-110 py-4 ml-[-2px] transition-all duration-200 ease width-[60px]"
            >
              {$itsDark ? (
                <BsFillSunFill fontSize={"1.333rem"} />
              ) : (
                <BsFillMoonFill fontSize={"1.333rem"} />
              )}
            </li>
          </ul>
          <div className="pt-16">
            <p className="text-sm tracking-wider">
              <span
                id="madeWith"
                className="intl-nav text-[#2e40e0] dark:text-[#9fa8ff] tracking-widest"
              >
                Made with
              </span>
              <br />
              <span id="techUsed" className="intl-nav">
                React, TypeScript, Tailwind CSS, Astro, Piskel and ❤️.
              </span>
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
                id="linked-navbar"
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
