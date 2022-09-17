// Import icons for all skills.
import {
  FaAngular,
  FaReact,
  FaFigma,
  FaSass,
} from "react-icons/fa/index";
import {
  SiTailwindcss,
  SiMaterialui,
  SiAdobephotoshop,
  SiJavascript,
} from "react-icons/si/index";

export default function Skills() {
  return (
    <div id="skills" className="w-full relative z-[1] lg:h-screen p-2 py-32">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-2">
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
                <SiMaterialui size="48px" className="mr-6 text-[#007fff]" />
                <h3>
                  Material UI
                  <br />
                  MUI
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
                <FaSass size="48px" className="mr-6 text-[#ce679a]" />
                <h3>
                  Sass
                  <br /> (SCSS)
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
                <SiJavascript
                  size="48px"
                  className="mr-6 text-[#f0db4f] bg-[#323330]"
                />
                <h3>
                  ES6+
                  <br />
                  JavaScript
                </h3>
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
        </div>
      </div>
    </div>
  );
}
