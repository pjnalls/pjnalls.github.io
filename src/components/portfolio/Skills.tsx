import React from "react";

/** Load icons for all skills. */
import {
  FaAngular,
  FaFigma,
  FaGitAlt,
  FaReact,
  FaSass,
} from "react-icons/fa/index";
import {
  SiAdobephotoshop,
  SiArduino,
  SiAstro,
  SiAmazon,
  SiMicrosoftazure,
  SiC,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiJest,
  SiJupyter,
  SiMarkdown,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiNx,
  SiPandas,
  SiPython,
  SiReactivex,
  SiRedux,
  SiStrapi,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si/index";

export default function Skills() {
  return (
    <div id="skills" className="w-full relative z-[1] p-2">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center py-36 px-2">
        <p
          id="skills"
          className="intl-nav header-2 text-xl tracking-widest uppercase text-[#4f58fc] dark:text-[#9fa8ff] font-semibold"
        >
          Skills
        </p>
        <h2 id="what_i_can_do" className="intl py-4">
          What I Can Do
        </h2>
        <br />
        <h3
          id="toolkit"
          className="intl font-semibold text-2xl py-2 text-center"
        >
          🛠️ Toolkit I Use as a Frontend Engineer
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center pt-3 pb-10">
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiJest
                  size="48px"
                  className="mr-6 text-[#99425b] dark:text-[#c9829b] dark:bg-transparent rounded-md"
                />
                <h3>Jest</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  96%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[96%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiReactivex
                  size="48px"
                  className="mr-6 text-[#910038] dark:text-[#e10988] dark:bg-transparent rounded-md"
                />
                <h3>RxJS</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  93%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[93%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiNestjs size="48px" className="mr-6 text-[#e0234e]" />
                <h3>NestJS</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  88%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[88%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <FaAngular size="48px" className="mr-6 text-[#c3002f]" />
                <h3>Angular</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  98%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[98%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <FaGitAlt size="48px" className="mr-6 text-[#e44c30]" />
                <h3>Git</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  99%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[99%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiHtml5
                  size="48px"
                  className="mr-6 text-[#e86126] rounded-md"
                />
                <h3>HTML</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  92%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[92%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiJavascript
                  size="48px"
                  className="mr-6 text-[#f0db4f] bg-[#323330]"
                />
                <h3>JavaScript</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  94%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[94%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiSwagger
                  size="48px"
                  className="mr-6 dark:text-[#97c200] text-[#679200]"
                />
                <h3>Swagger UI</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  97%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[97%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiNodedotjs
                  size="48px"
                  className="mr-6 dark:text-[#9Cce98] text-[#4C8e48]"
                />
                <h3>Node.js</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  97%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[97%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiNginx
                  size="48px"
                  className="mr-6 dark:text-[#3caf79] text-[#1c8f59]"
                />
                <h3>NGINX</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  92%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[92%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiNx
                  size="48px"
                  className="mr-6 text-[#002F56] dark:text-[#1894c5] dark:bg-transparent rounded-md"
                />
                <h3>Nx</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  89%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[89%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiRedux
                  size="48px"
                  className="mr-6 text-[#61dafb] bg-[#1f2937] p-1 dark:p-0 dark:bg-transparent rounded-md"
                />
                <h3>
                  Redux /
                  <br />
                  NgRx
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  91%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[91%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-release-box hover:scale-110 transition-all ease-in">
            <div className="folded-ribbon font-bold">TOP</div>
            <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl cursor-pointer ease duration-200">
              <div className="grid grid-cols-1 gap-4 justify-between items-center">
                <div className="m-auto inline-flex justify-around items-center w-full">
                  <FaReact
                    size="48px"
                    className="mr-6 text-[#61dbfb] bg-[#1f2937] p-1 dark:p-0 dark:bg-transparent rounded-md"
                  />
                  <h3>React Native</h3>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                    99%{" "}
                  </div>
                  <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                    <div className="bg-[#9d8c66] w-[99%] h-[0.6rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <FaReact
                  size="48px"
                  className="mr-6 text-[#61dbfb] bg-[#1f2937] p-1 dark:p-0 dark:bg-transparent rounded-md"
                />
                <h3>React</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  93%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[93%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiTypescript
                  size="48px"
                  className="mr-6 text-[#007acc] bg-[#fff] rounded-md"
                />
                <h3>TypeScript</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  90%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[90%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiCss3
                  size="48px"
                  className="mr-6 text-[#2861e8] rounded-md"
                />
                <h3>CSS</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  91%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[91%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiAdobephotoshop
                  size="48px"
                  className="mr-6 text-[#001833] bg-[#2da9ff] rounded-xl"
                />
                <h3>Photoshop</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  96%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[96%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <FaAngular
                  size="48px"
                  className="mr-6 dark:text-[#6f81e5] text-[#3f51b5]"
                />
                <h3>
                  Angular
                  <br /> Material
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  96%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[96%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiInsomnia
                  size="48px"
                  className="mr-6 dark:text-[#9485f5] text-[#6455c5]"
                />
                <h3>
                  Insomnia
                  <br /> (RESTful)
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  90%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[90%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <FaSass size="48px" className="mr-6 text-[#ce679a]" />
                <h3>Sass (SCSS)</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  90%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[90%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiMarkdown
                  size="48px"
                  className="mr-6 dark:text-[#fff] text-[#000] rounded-md"
                />
                <h3>Markdown</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  99%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[99%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <FaFigma
                  size="48px"
                  className="mr-6 text-[#1f2937] dark:text-white"
                />
                <h3>Figma</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  92%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[92%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl cursor-pointer ease duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3>Enzyme</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  92%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[92%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3
          id="other_tools"
          className="intl font-semibold text-2xl text-center"
        >
          🛠️ Other Tools I Use for Web, Mobile, and Cross-Platform Development
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center pt-3 pb-10 mb-5">
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiAstro size="48px" className="mr-6 text-[#f75500]" />
                <h3>Astro</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  99%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[99%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiAmazon
                  size="48px"
                  className="mr-6 dark:text-[#f29100] text-[#923100]"
                />
                <h3>AWS</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  83%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[99%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiMongodb size="48px" className="mr-6 text-[#00c13f]" />
                <h3>MongoDB</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  96%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[96%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiTailwindcss size="48px" className="mr-6 text-[#38bdf8]" />
                <h3>Tailwind CSS</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  96%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[96%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiDocker size="48px" className="mr-6 text-[#027ed2]" />
                <h3>Docker</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  92%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[92%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiMui size="48px" className="mr-6 text-[#007fff]" />
                <h3>
                  MUI
                  <br />
                  (Material UI)
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  95%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[95%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiStrapi size="48px" className="mr-6 text-[#8f76ff]" />
                <h3>Strapi</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  90%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[90%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiNextdotjs
                  size="48px"
                  className="mr-6 text-[#000]  dark:bg-[#fff] rounded-full p-[-33px]
                  dark:border-2 dark:border-white transition-all ease-in duration-200"
                />
                <h3>Next.js</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  89%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[89%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiExpress
                  size="48px"
                  className="mr-6 text-[#000]  dark:bg-[#fff] rounded-full p-[-33px]
                  dark:border-2 dark:border-white transition-all ease-in duration-200"
                />
                <h3>Express</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  85%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[85%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3
          id="natural_languages"
          className="intl font-semibold text-2xl text-center"
        >
          🌐 Natural Languages Ordered by Proficiency
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center pt-3 pb-10">
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="en_AS" className="intl">
                  English <br />
                  (American Standard)
                </h3>
              </div>
              <p
                id="native"
                className="intl text-[#8f203f] dark:text-[#ffb0cf]"
              >
                Native Proficiency
              </p>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="en_A" className="intl">
                  English <br />
                  (Academic)
                </h3>
              </div>
              <p
                id="full_prof"
                className="intl text-[#7f203f] dark:text-[#efb0cf]"
              >
                Full Professional Proficiency
              </p>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="en_B" className="intl">
                  English <br />
                  (Business)
                </h3>
              </div>
              <p
                id="full_prof"
                className="intl text-[#7f203f] dark:text-[#efb0cf]"
              >
                Full Professional Proficiency
              </p>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="ja_S" className="intl">
                  Japanese <br />
                  (Standard)
                </h3>
              </div>
              <p
                id="full_prof"
                className="intl text-[#7f203f] dark:text-[#efb0cf]"
              >
                Full Professional Proficiency
              </p>
            </div>
          </div>

          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="greek" className="intl">
                  Greek
                </h3>
              </div>
              <p
                id="etymological"
                className="intl text-[#5f203f] dark:text-[#cfb0cf]"
              >
                Etymological Proficiency
              </p>
            </div>
          </div>

          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="latin" className="intl">
                  Latin
                </h3>
              </div>
              <p id="etymological" className="intl dark:text-[#cfb0cf]">
                Etymological Proficiency
              </p>
            </div>
          </div>

          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="zh_M" className="intl">
                  Chinese <br />
                  (Mandarin)
                </h3>
              </div>
              <p
                id="limited_working"
                className="intl text-[#4f204f] dark:text-[#bfb0df]"
              >
                Limited Working Proficiency
              </p>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="es_skill" className="intl">
                  Spanish
                </h3>
              </div>
              <p
                id="elementary"
                className="intl text-[#4f205f] dark:text-[#bfb0ef]"
              >
                Elementary Proficiency
              </p>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <h3 id="th" className="intl">
                  Thai
                </h3>
              </div>
              <p
                id="novice"
                className="intl text-[#4f206f] dark:text-[#bfb0ff]"
              >
                Novice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
