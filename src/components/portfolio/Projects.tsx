// UX design projects
import forzenPrototypeMobile from "/assets/project-1.5.jpg";
import forzenPrototypeDesktop from "/assets/project-1.5.b.jpg";

import pDot from "/assets/p_1000x1000.jpg";
import forzen from "/assets/project-1.jpg";
import digitalRain from "/assets/project-2.jpg";
import forzenPjnalls from "/assets/project-3.jpg";
import forzenJungCauz from "/assets/project-4.jpg";
import scssArt from "/assets/project-6.jpg";
import mceWeb from "/assets/project-20220817.jpg";
import mceDesktop from "/assets/project-20220820.jpg";

import ProjectItem from "./ProjectItem";
import Footer from "./Footer";

export default function  Projects() {
  return (
    <div
      id="projects"
      className="w-full relative z-[1] lg:h-screen p-2"
    >
      <div className="max-w-[1000px] mx-auto px-2 py-36">
        <p className="text-xl tracking-widest uppercase text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 py-2">
        <ProjectItem
            title="pjnalls.com"
            description="My portfolio and blog website made seemlessly thanks to Astro with React integrations."
            madeWith="Astro, React, TypeScript, Tailwind CSS, and ❤️."
            backgroundImg={pDot}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={false}
            githubUrl=""
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
            title="Forzen.io"
            description="A cross-browser web application for explorations into the sides of meditation and individuation
            (work-in-progress)."
            madeWith="React, Tailwind CSS, and Framer Motion"
            backgroundImg={forzen}
            enableScreenshot={false}
            enableCode={false}
            enableDemo={true}
            demoLabel="Open App"
            demoUrl="https://forzen.io"
            githubUrl=""
          />
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
            demoUrl="https://www.figma.com/proto/r4YnlPce6mSm8fsjbVclaW/Forzen.io-Prototype-(Mobile)?node-id=0%3A2&amp;scaling=contai&amp;page-id=0%3A1&amp;starting-point-node-id=0%3A2"
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
            githubUrl="https://github.com/pjnalls/scss-abstract-shape-art"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
