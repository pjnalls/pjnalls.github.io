import React from "react";

/** Load icons for all skills. */
import { FaAngular, FaReact, FaFigma, FaSass } from "react-icons/fa/index";
import {
  SiAdobephotoshop,
  SiArduino,
  SiC,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJupyter,
  SiMaterialui,
  SiMarkdown,
  SiNextdotjs,
  SiNumpy,
  SiNx,
  SiPandas,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si/index";

export default function Skills() {
  return (
    <div id="skills" className="w-full relative z-[1] p-2">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center py-36 px-2">
        <p className="text-xl tracking-widest uppercase text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <br />
        <h3 className="font-semibold text-2xl py-2 text-center">
          💼 Toolkit I Use as a Frontend Developer
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center pt-3 pb-10">
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
                <FaAngular size="48px" className="mr-6 text-[#3f51b5]" />
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
                <SiNx
                  size="48px"
                  className="mr-6 text-[#002F56] dark:text-[#48C4e5] dark:bg-transparent rounded-md"
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
                <SiJest
                  size="48px"
                  className="mr-6 text-[#99425b] dark:bg-transparent rounded-md"
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
        <h3 className="font-semibold text-2xl text-center">
          ⚒️ Other Tools I Use for Frontend Development
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center pt-3 pb-10 mb-5">
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
                <SiMaterialui size="48px" className="mr-6 text-[#007fff]" />
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
        </div>
        <br />
        <h3 className="font-semibold text-2xl text-center">
          🖥️ Toolkit I Use as a Python/C Hobbyist
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center pt-3 pb-10">
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiPython size="48px" className="mr-6 text-[#4885b6]" />
                <h3>Python</h3>
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
                <SiNumpy size="48px" className="mr-6 text-[#4d77cf]" />
                <h3>NumPy</h3>
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
                <SiPandas
                  size="48px"
                  className="mr-6 text-[#000] dark:text-[#fff]"
                />
                <h3>pandas</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  87%{" "}
                </div>
                <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                  <div className="bg-[#9d8c66] w-[87%] h-[0.6rem]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl hover:scale-110 cursor-pointer ease transition-all ease-in duration-200">
            <div className="grid grid-cols-1 gap-4 justify-between items-center">
              <div className="m-auto inline-flex justify-around items-center w-full">
                <SiJupyter size="48px" className="mr-6 text-[#f37726]" />
                <h3>Jupyter Notebook</h3>
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
          <div className="new-release-box hover:scale-110 transition-all ease-in">
            <div className="folded-ribbon font-bold hover:scale-110">NEW</div>
            <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl cursor-pointer ease-in duration-200">
              <div className="grid grid-cols-1 gap-4 justify-between items-center">
                <div className="m-auto inline-flex justify-around items-center w-full">
                  <SiC size="48px" className="mr-6 text-[#5968ba]" />
                  <h3>C</h3>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                    -
                  </div>
                  <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                    <div className="bg-[#9d8c66] w-[0%] h-[0.6rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-release-box hover:scale-110 transition-all ease-in">
            <div className="folded-ribbon font-bold hover:scale-110">NEW</div>
            <div className="p-6 shadow dark:shadow-slate-800 dark:shadow-md rounded-xl cursor-pointer ease transition-all ease-in duration-200">
              <div className="grid grid-cols-1 gap-4 justify-between items-center">
                <div className="m-auto inline-flex justify-around items-center w-full">
                  <SiArduino size="48px" className="mr-6 text-[#009298]" />
                  <h3>Arduino</h3>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                    -
                  </div>
                  <div className="bg-[#1f2937] w-full h-[0.6rem] ml-3">
                    <div className="bg-[#9d8c66] w-[0%] h-[0.6rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
