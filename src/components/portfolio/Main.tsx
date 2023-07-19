import React from "react";

export default function Main() {
  return (
    <div id="main" className="w-full lg:h-screen text-center relative z-[1]">
      <div className="max-w-[1240px] w-full h-[100%] mx-auto p-2 py-36 flex justify-center items-center">
        <div>
          <p className="text-lg font-semibold tracking-widest  mb-2">
            <span className="text-2xl dark:text-amber-400 text-amber-900">
              G . P . X . 2 . A
            </span>
            <br />
            <span className="font-normal text-base tracking-wide ">
              👆 Great People Experience Above All
            </span>
          </p>
          <h1 className="py-4 ">
            <span id="hi_im" className="intl">
              Hi 👋, I&apos;m{" "}
            </span>
            <br />
            <a href="/about">
              <span
                id="preston"
                className="intl text-[#4f58fc] dark:text-[#9fa8ff] cursor-pointer hover:dark:text-[#6f78fc] hover:text-[#2f38c0] transition-all ease-in duration-150"
              >
                Preston
              </span>
            </a>
            <span id="period" className="intl">
              .
            </span>
          </h1>
          <h2
            id="headline"
            className="intl md:py-4 py-1 md:text-3xl text-xl font-semibold"
          >
            Polyglot Frontend Engineer
          </h2>
          <p id="summary1" className="intl py-4 max-w-[75%] m-auto">
            My focus is on combining aesthetical,
            functional design with efficient yet elegant frontend code.
          </p>
          <p id="summary2" className="intl py-0 max-w-[83.3%] m-auto">
            I also focus on continually learning in the STEAM (Scientific,
            Technologic, Engineering, Artistic, and Mathematic) disciplines to
            cultivate better analytical and creative abilities for both
            professional and personal works.
          </p>
        </div>
      </div>
    </div>
  );
}
