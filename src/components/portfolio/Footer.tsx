import { FaGithub } from "react-icons/fa/index";

export default function  Footer() {
  return (
    <footer id="footer" className="w-full relative text-center z-[1] hidden md:block py-6 pb-24">
      <p className="text-sm tracking-wider">
        <span className="text-[#2e40e0] dark:text-[#9fa8ff] tracking-widest">
          Made with
        </span>
        <br />
        Astro, React, TypeScript, Tailwind CSS, and ❤️.
      </p>
      <div className="flex items-center content-center justify-center my-2 pt-2 w-full">
        <a href="https://github.com/pjnalls/pjnalls" aria-label="GitHub">
          <div className="rounded-full shadow-lg shadow-slate-400 dark:shadow-slate-900 p-3 cursor-pointer hover:scale-110 transition-all ease-in duration-200">
            <FaGithub size="30px" />
          </div>
        </a>
      </div>
    </footer>
  );
};
