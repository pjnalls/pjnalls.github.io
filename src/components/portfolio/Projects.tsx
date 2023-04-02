import React from "react";

/** Load images for design project. */
import forzenPrototypeMobile from "/assets/project-1.5.avif";
import forzenPrototypeDesktop from "/assets/project-1.5.b.avif";
/** */
import ccLight from "/assets/cc.main.avif";
import ccDark from "/assets/cc.main-dark.avif";
import forzenAppMobileLight from "/assets/forzen-rn-light.avif";
import forzenAppMobileDark from "/assets/forzen-rn-dark.avif";
import memomalistAppMobileLight from "/assets/memomalist-rn-light.avif";
import memomalistAppMobileDark from "/assets/memomalist-rn-dark.avif";

import aSolid from "/assets/ng-solid-design.avif";
import forecast from "/assets/forecast.avif";
import pDot from "/assets/p_700x700.avif";
import spreangLight from "/assets/spreang.logo.avif";
import spreangDark from "/assets/spreang.logo.dark.avif";
import digitalRain from "/assets/project-2.avif";
import forzenJungCauz from "/assets/project-4.avif";
import scssArt from "/assets/project-6.avif";
import mceWeb from "/assets/project-20220817.avif";
import mceDesktop from "/assets/project-20220820.avif";
import rnStrapiLight from "/assets/rn-strapi-light.avif";
import rnStrapiDark from "/assets/rn-strapi-dark.avif";

import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full relative z-[1] p-2">
      <div className="max-w-[1000px] mx-auto px-2 py-36">
        <p className="text-xl tracking-widest uppercase text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Created</h2>
        <div className="grid md:grid-cols-2 gap-8 py-2">
          <div id="react-native-strapi-template">
            <ProjectItem
              className="dark:hidden"
              title="⚛️ React Native + 🚀 Strapi Template"
              description={
                "An example and template of mobile-application and CMS integrations with React Native and Strapi."
              }
              madeWith="React Native, TypeScript, Microsoft Paint • Photos, Expo, and Strapi."
              backgroundImg={rnStrapiLight}
              enableScreenshot={false}
              enableCode={true}
              enableDemo={false}
              demoLabel="Open Demo"
              demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-memomalist"
              githubUrl="https://github.com/pjnalls/react-native-strapi-template"
            />
            <ProjectItem
              className="hidden dark:block"
              title="⚛️ React Native + 🚀 Strapi Template"
              description={
                "An example and template of mobile-application and CMS integrations with React Native and Strapi."
              }
              madeWith="React Native, TypeScript, Microsoft Paint • Photos, Expo, and Strapi."
              backgroundImg={rnStrapiDark}
              enableScreenshot={false}
              enableCode={true}
              enableDemo={false}
              demoLabel="Open Demo"
              demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-memomalist"
              githubUrl="https://github.com/pjnalls/react-native-strapi-template"
            />
          </div>
          <ProjectItem
            className="dark:hidden"
            title="CareerCron"
            description={
              "(Work-in-Progress) Career aide and guide that is there for you anytime, anywhere... ⌛💻📲."
            }
            madeWith="MERN, React Native, TypeScript, Figma, and MƎTRON."
            backgroundImg={ccLight}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            demoLabel="View Promotion"
            demoUrl="https://careercron.com/"
            githubUrl="https://github.com/pjnalls/careercron"
          />
          <ProjectItem
            className="hidden dark:block"
            title="CareerCron"
            description={
              "(Work-in-Progress) Career aide and guide that is there for you anytime, anywhere... ⌛💻📲."
            }
            madeWith="MERN, React Native, TypeScript, Figma, and MƎTRON."
            backgroundImg={ccDark}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            demoLabel="View Promotion"
            demoUrl="https://careercron.com/"
            githubUrl="https://github.com/pjnalls/careercron"
          />
          <ProjectItem
            className="dark:hidden"
            title="Spreang"
            description={
              'A 3-day, remote React and Angular "hackathon" (coding fest) before spring break, March 8th - March 10th.'
            }
            madeWith="Figma."
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
            madeWith="Figma."
            backgroundImg={spreangDark}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            githubUrl=""
          />
          <ProjectItem
            className="dark:hidden"
            title="Memomalist"
            description="/ˈmeməˌmələst/ [noun]: A minimalistic spaced-repetition application for memorization."
            madeWith="React Native, React, TypeScript, Fibonacci Sequence, and Expo."
            backgroundImg={memomalistAppMobileLight}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={false}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-memomalist"
            githubUrl="https://github.com/pjnalls/memomalist"
          />
          <ProjectItem
            className="hidden dark:block"
            title="Memomalist"
            description="/ˈmeməˌmələst/ [noun]: A minimalistic spaced-repetition application for memorization."
            madeWith="React Native, React, TypeScript, Fibonacci Sequence, and Expo."
            backgroundImg={memomalistAppMobileDark}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={false}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-memomalist"
            githubUrl="https://github.com/pjnalls/memomalist"
          />
          <ProjectItem
            className="dark:hidden"
            title="F⍛rzen RN"
            description="A React Native (RN) app for a self-help blog and educational purposes."
            madeWith="React Native, React, TypeScript, and Expo."
            backgroundImg={forzenAppMobileLight}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={false}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-forzen-rn"
            githubUrl="https://github.com/pjnalls/forzen-rn"
          />
          <ProjectItem
            className="hidden dark:block"
            title="F⍛rzen RN"
            description="A React Native (RN) app for a self-help blog and educational purposes."
            madeWith="React Native, React, TypeScript, and Expo."
            backgroundImg={forzenAppMobileDark}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={false}
            demoLabel="Open Demo"
            demoUrl="https://snack.expo.dev/@pjnalls/github.com-pjnalls-forzen-rn"
            githubUrl="https://github.com/pjnalls/forzen-rn"
          />
          <ProjectItem
            title="F⍛rzen.io (Mobile Prototype)"
            description="A live prototype of the mobile version of F⍛rzen.io."
            madeWith="Figma."
            backgroundImg={forzenPrototypeMobile}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={true}
            demoLabel="Open Prototype"
            demoUrl="https://www.figma.com/proto/r4YnlPce6mSm8fsjbVclaW/F⍛rzen.io-Prototype-(Mobile)?node-id=0%3A2&amp;scaling=contai&amp;page-id=0%3A1&amp;starting-point-node-id=0%3A2"
            githubUrl=""
          />
          <ProjectItem
            title="F⍛rzen.io (Desktop Prototype)"
            description="A live prototype of the desktop version of F⍛rzen.io."
            madeWith="Figma."
            backgroundImg={forzenPrototypeDesktop}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={true}
            demoLabel="Open Prototype"
            demoUrl="https://www.figma.com/proto/Wqz3rQJgEC9vJR03WRDnCB/F⍛rzen.io-Prototype-(Desktop)?node-id=0%3A2&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=0%3A2"
            githubUrl=""
          />

          <ProjectItem
            title="A° SOLID"
            description="An example Angular web app developed in phases with SOLID design principles."
            madeWith="Angular, SOLID Design, and Markdown."
            backgroundImg={aSolid}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={false}
            githubUrl="https://github.com/pjnalls/ng-solid-design"
          />
          <ProjectItem
            title="Halstown City's Forecast"
            description="Time series analysis / weather forecast via seasonal autoregression."
            madeWith="Python, NumPy, pandas, and Matplotlib."
            backgroundImg={forecast}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={false}
            demoLabel=""
            githubUrl="https://github.com/pjnalls/time_series_analysis_and_forecast"
          />
          <ProjectItem
            title="Minimalistic Code Editor (Desktop)"
            description="A screenshot of a minimalistic code editor for Zenful coding
            which has only syntax highlighting."
            madeWith="React, TypeScript, Electron, CodeMirror, and Vite."
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
            madeWith="Angular, SCSS, and CodeMirror."
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
            madeWith="HTML, SCSS, and ES6+ JavaScript."
            backgroundImg={digitalRain}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            demoLabel=""
            demoUrl=""
            githubUrl=""
          />
          <ProjectItem
            title="F⍛rzen.io • J.ungy⍛gi"
            description="F⍛rzen.io from the perspective of J.ungy⍛gi, the artist — the
            side of meditation."
            madeWith="HTML, SCSS, and ES6+ JavaScript."
            backgroundImg={forzenJungCauz}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="View Page"
            demoUrl="https://forzen.io/j.ungyogi/"
            githubUrl="https://github.com/forzen-dot-io/jungyogi"
          />
          <ProjectItem
            title="SCSS Abstract Art"
            description="For capturing certain, abstract forms of art with thin HTML markup and modular SCSS code."
            madeWith="SCSS and HTML."
            backgroundImg={scssArt}
            enableScreenshot={false}
            enableCode={true}
            enableDemo={true}
            demoLabel="View Gallery"
            demoUrl="https://forzen.io/j.ungyogi/art.html"
            githubUrl="https://github.com/pjnalls?tab=repositories&q=scss-&type=&language=scss&sort="
          />
          <ProjectItem
            title="pjnalls.com"
            description="My portfolio and blog website made seamlessly thanks to Astro with React integrations."
            madeWith="React, TypeScript, Tailwind CSS, Astro and ❤️."
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
