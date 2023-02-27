import React from "react";

/** Load images for design project. */
import forzenPrototypeMobile from "/assets/project-1.5.jpg";
import forzenPrototypeDesktop from "/assets/project-1.5.b.jpg";
/** */
import ccLight from "/assets/cc.main.png";
import ccDark from "/assets/cc.main-dark.png";
import forzenAppMobileLight from "/assets/forzen-rn-light.jpg";
import forzenAppMobileDark from "/assets/forzen-rn-dark.jpg";
import memomalistAppMobileLight from "/assets/memomalist-rn-light.jpg";
import memomalistAppMobileDark from "/assets/memomalist-rn-dark.jpg";

import aSolid from "/assets/ng-solid-design.jpg";
import forecast from "/assets/forecast.png";
import pDot from "/assets/p_1000x1000.jpg";
import spreangLight from "/assets/spreang.logo.png";
import spreangDark from "/assets/spreang.logo.dark.png";
import digitalRain from "/assets/project-2.jpg";
import forzenPjnalls from "/assets/project-3.jpg";
import forzenJungCauz from "/assets/project-4.jpg";
import scssArt from "/assets/project-6.jpg";
import mceWeb from "/assets/project-20220817.jpg";
import mceDesktop from "/assets/project-20220820.jpg";

import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full relative z-[1] p-2 py-32">
      <div className="max-w-[1000px] mx-auto px-2 py-36">
        <p className="text-xl tracking-widest uppercase text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Created</h2>
        <div className="grid md:grid-cols-2 gap-8 py-2">
          <div className="new-release-box">
            <div className="folded-ribbon font-bold">IN-PROGRESS</div>
            <ProjectItem
              className="dark:hidden"
              title="CareerCron"
              description={
                "(Work-in-Progress) A career aide and guide that is there for you anytime, anywhere — One small goal after the next. ⌛💻📲"
              }
              madeWith="MERN, React Native, TypeScript, Figma, and MƎTRON"
              backgroundImg={ccLight}
              enableScreenshot={false}
              enableCode={true}
              enableDemo={true}
              demoLabel="See Progress"
              demoUrl="https://careercron.com/"
              githubUrl="https://github.com/pjnalls/careercron"
            />
            <ProjectItem
              className="hidden dark:block"
              title="CareerCron"
              description={
                "(Work-in-Progress) A career aide and guide that is there for you anytime, anywhere — One small goal after the next. ⌛💻📲"
              }
              madeWith="MERN, React Native, TypeScript, Figma, and MƎTRON"
              backgroundImg={ccDark}
              enableScreenshot={false}
              enableCode={true}
              enableDemo={true}
              demoLabel="See Progress"
              demoUrl="https://careercron.com/"
              githubUrl="https://github.com/pjnalls/careercron"
            />
          </div>
          <div className="new-release-box">
            <div className="folded-ribbon font-bold">NEW</div>
            <ProjectItem
              className="dark:hidden"
              title="Spreang"
              description={
                'A 3-day, remote React and Angular "hackathon" (coding fest) before spring break, March 8th - March 10th.'
              }
              madeWith="Figma"
              backgroundImg={spreangLight}
              enableScreenshot={false}
              enableCode={false}
              enableDemo={false}
              githubUrl=""
            />
            <ProjectItem
              className="hidden dark:block"
              title="Spreang"
              description={
                'A 3-day, remote React and Angular "hackathon" (coding fest) before spring break, March 8th - March 10th.'
              }
              madeWith="Figma"
              backgroundImg={spreangDark}
              enableScreenshot={false}
              enableCode={false}
              enableDemo={false}
              githubUrl=""
            />
          </div>
          <ProjectItem
            className="dark:hidden"
            title="Memomalist"
            description="/\ˈmeməˌmələst/ [noun]: A minimalistic, simple spaced-repetition cross-platform application for memorization. Made with React Native and the Fibonacci sequence."
            madeWith="React Native, React, TypeScript, Expo CLI, Expo Go, and Expo Snack"
            backgroundImg={memomalistAppMobileLight}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-memomalist"
            githubUrl="https://github.com/pjnalls/memomalist"
          />
          <ProjectItem
            className="hidden dark:block"
            title="Memomalist"
            description="/\ˈmeməˌmələst/ [noun]: A minimalistic, simple spaced-repetition cross-platform application for memorization. Made with React Native and the Fibonacci sequence."
            madeWith="React Native, React, TypeScript, Expo CLI, Expo Go, and Expo Snack"
            backgroundImg={memomalistAppMobileDark}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-memomalist"
            githubUrl="https://github.com/pjnalls/memomalist"
          />
          <ProjectItem
            className="dark:hidden"
            title="Forzen RN"
            description="A React Native (RN) app for a self-help blog for educational purposes."
            madeWith="React Native, React, TypeScript, Expo CLI, Expo Go, and Expo Snack"
            backgroundImg={forzenAppMobileLight}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-forzen-rn"
            githubUrl="https://github.com/pjnalls/forzen-rn"
          />
          <ProjectItem
            className="hidden dark:block"
            title="Forzen RN"
            description="A React Native (RN) app for a self-help blog for educational purposes."
            madeWith="React Native, React, TypeScript, Expo CLI, Expo Go, and Expo Snack"
            backgroundImg={forzenAppMobileDark}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-forzen-rn"
            githubUrl="https://github.com/pjnalls/forzen-rn"
          />
          <ProjectItem
            title="Forzen.io (Mobile Prototype)"
            description="A live prototype of the mobile version of Forzen.io."
            madeWith="Figma"
            backgroundImg={forzenPrototypeMobile}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={true}
            demoLabel="Open Prototype"
            demoUrl="https://www.figma.com/proto/r4YnlPce6mSm8fsjbVclaW/Forzen.io-Prototype-(Mobile)?node-id=0%3A2&amp;scaling=contai&amp;page-id=0%3A1&amp;starting-point-node-id=0%3A2"
            githubUrl=""
          />
          <ProjectItem
            title="Forzen.io (Desktop Prototype)"
            description="A live prototype of the desktop version of Forzen.io."
            madeWith="Figma"
            backgroundImg={forzenPrototypeDesktop}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={true}
            demoLabel="Open Prototype"
            demoUrl="https://www.figma.com/proto/Wqz3rQJgEC9vJR03WRDnCB/Forzen.io-Prototype-(Desktop)?node-id=0%3A2&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=0%3A2"
            githubUrl=""
          />

          <ProjectItem
            title="A° SOLID"
            description="An example Angular web app developed in phases with SOLID design principles — from monolithic to modular."
            madeWith="Angular, SOLID Design, and Markdown"
            backgroundImg={aSolid}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={false}
            githubUrl="https://github.com/pjnalls/ng-solid-design"
          />
          <div className="new-release-box">
            <div className="folded-ribbon font-bold">NEW</div>
            <ProjectItem
              title="Halstown City's Weather Forecast"
              description="Time series analysis and weather forecast via seasonal autoregression using mock data (work-in-progress)."
              madeWith="Python, NumPy, pandas, and Matplotlib"
              backgroundImg={forecast}
              enableScreenshot={false}
              enableCode={true}
              enableDemo={false}
              demoLabel=""
              githubUrl="https://github.com/pjnalls/time_series_analysis_and_forecast"
            />
          </div>
          <ProjectItem
            title="Minimalistic Code Editor (Desktop)"
            description="A screenshot of a minimalistic code editor for Zenful coding
            which has only syntax highlighting."
            madeWith="React, TypeScript, Electron, CodeMirror, and Vite"
            backgroundImg={mceDesktop}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            demoLabel=""
            demoUrl=""
            githubUrl=""
          />
          <ProjectItem
            title="Minimalistic Code Editor (Web)"
            description="A screenshot of a minimalistic code editor for Zenful coding
            which has only syntax highlighting and a simple console."
            madeWith="Angular, SCSS, and CodeMirror"
            backgroundImg={mceWeb}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            demoLabel=""
            demoUrl=""
            githubUrl=""
          />
          <ProjectItem
            title="Digital Rain"
            description="Digital rain in the browser. (Based off a popular film franchise.)"
            madeWith="HTML, SCSS, and ES6+ JavaScript"
            backgroundImg={digitalRain}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            demoLabel=""
            demoUrl=""
            githubUrl=""
          />
          <ProjectItem
            title="Forzen.io | pjnalls"
            description="Forzen.io from the perspective of pjnalls, the engineer — the
            side of individuation."
            madeWith="HTML, SCSS, and ES6+ JavaScript"
            backgroundImg={forzenPjnalls}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="View Project"
            demoUrl="https://forzen.io/pjnalls/"
            githubUrl="https://github.com/forzen-dot-io/pjnalls"
          />
          <ProjectItem
            title="Forzen.io | Jung Cauz"
            description="Forzen.io from the perspective of Jung Cauz, the artist — the
            side of meditation."
            madeWith="HTML, SCSS, and ES6+ JavaScript"
            backgroundImg={forzenJungCauz}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="View Page"
            demoUrl="https://forzen.io/jung-cauz/"
            githubUrl="https://github.com/forzen-dot-io/JungCauz"
          />
          <ProjectItem
            title="SCSS Abstract Art"
            description="For capturing certain, abstract forms of art with thin HTML markup and modular SCSS code."
            madeWith="SCSS and HTML"
            backgroundImg={scssArt}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="View Gallery"
            demoUrl="https://forzen.io/jung-cauz/art.html"
            githubUrl="https://github.com/pjnalls?tab=repositories&q=scss-&type=&language=scss&sort="
          />
          <ProjectItem
            title="pjnalls.com"
            description="My portfolio and blog website made seamlessly thanks to Astro with React integrations."
            madeWith="Astro, React, TypeScript, Tailwind CSS, and ❤️."
            backgroundImg={pDot}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            githubUrl=""
          />
        </div>
      </div>
    </div>
  );
}
