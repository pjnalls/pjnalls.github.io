import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa/index";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full relative text-center z-[1] hidden md:block py-6 pb-24"
    >
      <p className="text-sm tracking-wider">
        <span className="text-[#2e40e0] dark:text-[#9fa8ff] tracking-widest">
          Made with
        </span>
        <br />
        React, TypeScript, Tailwind CSS, Astro, Piskel and ❤️.
        <br />
        <br />Copyright © 2023 Preston Nalls
      </p>
      <div className="flex items-center content-center justify-center my-2 pt-2 w-full gap-5">
        <a href="https://github.com/pjnalls" aria-label="GitHub">
          <div className="rounded-full shadow-lg text-[#19216f] dark:text-[#fff0e0] shadow-slate-400 dark:shadow-slate-900 p-3 cursor-pointer hover:scale-110 transition-all ease-in duration-200">
            <FaGithub size="30px" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/pjnalls" aria-label="LinkedIn">
          <div className="rounded-full shadow-lg text-[#19216f] dark:text-[#fff0e0] shadow-slate-400 dark:shadow-slate-900 p-3 cursor-pointer hover:scale-110 transition-all ease-in duration-200">
            <FaLinkedin size="30px" />
          </div>
        </a>
      </div>
    </footer>
  );
}
