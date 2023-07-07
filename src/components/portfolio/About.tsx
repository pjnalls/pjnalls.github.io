import React from "react";
import profilePicture from "/assets/profile-picture.avif";

export default function About() {
  return (
    <div id="about" className="w-full relative z-[1] p-2">
      <div className="max-w-[1000px] w-full mx-auto p-2 px-0 py-36 md:flex justify-center items-center">
        <div className="col-span-2">
          <p className="header-2 uppercase text-xl tracking-widestest text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2">
            I'm a a frontend engineer with fullstack Javascript development and
            UI architecture experience providing React, Angular, and some
            cross-platform development consulting along with other technological
            services.
          </p>
          <p className="py-2">
            As hobbies, I learn and practice Python, data science, machine
            learning, mathematics, philosophy, yoga (in the traditional sense),
            and many languages and cultures as a polyglot.
            <br />
            <br />
            Work as a consultant and for personal pet projects feels like high
            forms of both creative and analytical expression, and I strive to be
            completely devoted to and singularly focused on the process of
            designing and developing great DX, CX, UX, and, most importantly, PX
            — great people experience above all. 👆{" "}
            <a
              href="https://www.linkedin.com/in/pjnalls"
              className="text-[#4f58fc] dark:text-[#9fa8ff] cursor-pointer hover:dark:text-[#6f78fc] hover:text-[#2f38c0] transition-all ease-in duration-150"
            >
              #gpx2a
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
      <section className="mb-8 max-w-[1000px] w-full mx-auto">
        <h2 className="py-4 mb-8 text-center">
          What my coding <br />
          statistics are
        </h2>
        <div className="text-center flex flex-wrap justify-center gap-8 content-center items-center">
          <div className="w-full flex flex-wrap">
            <p className="w-full mb-4">
              🔥 Total GitHub Contributions and Streak Statistics
            </p>
            <a
              href="https://github.com/pjnalls"
              className="mx-auto hidden dark:block"
            >
              <img src="https://streak-stats.demolab.com?user=pjnalls&theme=highcontrast&border_radius=5&ring=c163bb&background=0,3f203f,160020&currstreaknum=fff&dates=dbc&sidenums=fff&stroke=fff&sidelabels=fff&hide_border=true" />
            </a>
            <a
              href="https://github.com/pjnalls"
              className="mx-auto dark:hidden"
            >
              <img src="https://streak-stats.demolab.com?user=pjnalls&theme=default&border_radius=5&ring=9f4280&background=0,e0c0df,ffe9f9&currstreaknum=090219&dates=6f1250&sidenums=090219&stroke=090219&sidelabels=090219" />
            </a>
          </div>

          <div className="w-full flex flex-wrap">
            <p className="w-full mb-4">
              🅰️ Overall GitHub Statistics and Grade (Mark)
            </p>
            <br />
            <a
              href="https://github.com/pjnalls"
              className="mx-auto hidden dark:block"
            >
              <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=pjnalls&show_icons=true&icon_color=c163bb&title_color=ffa2e0&text_color=fff&hide_border=false&bg_color=0,3f203f,160020&border_radius=5&count_private=true&include_all_commits=true&hide_border=true" />
            </a>
            <a
              href="https://github.com/pjnalls"
              className="mx-auto dark:hidden"
            >
              <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=pjnalls&show_icons=true&icon_color=c163bb&title_color=9f4280&text_color=090219&hide_border=false&bg_color=0,e0c0df,ffe9f9&border_radius=5&count_private=true&include_all_commits=true" />
            </a>
          </div>

          <div className="w-full flex flex-wrap">
            <p className="w-full mb-4">
              🔝 Top Programming Languages I Use on GitHub
            </p>
            <br />
            <a
              href="https://github.com/pjnalls"
              className="mx-auto hidden dark:block"
            >
              <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs?username=pjnalls&theme=tokyonight&show_icons=true&hide_title=true&card_width=848&bg_color=0,3f203f,160020&text_color=ffffff&hide_border=true" />
            </a>
            <a
              href="https://github.com/pjnalls"
              className="mx-auto dark:hidden"
            >
              <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs?username=pjnalls&show_icons=true&hide_title=true&card_width=848&bg_color=0,e0c0df,ffe9f9&text_color=090219" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
