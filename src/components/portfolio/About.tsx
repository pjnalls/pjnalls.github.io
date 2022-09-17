export default function About() {
  return (
    <div
      id="about"
      className="w-full h-screen relative z-[1]"
    >
      <div className="max-w-[1000px] w-full h-[100%] mx-auto p-2 px-0 py-36 flex justify-center items-center">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widestest text-[#4f58fc] dark:text-[#9fa8ff] font-semibold">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-slate-600 dark:text-slate-300/90">
            As a self-described UX engineer currently working as a UI
            consultant, I&apos;m equally involved in the both UI design and
            development spaces.
          </p>
          <p className="py-2 text-black dark:text-white">
            I have experience in HTML, Sass (SCSS), and ES6+ JavaScript and am
            currently focused on React, Next.js, Angular (mainly), Tailwind CSS, and Astro
            front-end libraries and frameworks.
          </p>
          <p className="py-2 text-black dark:text-white">
            Along with UI coding, I enjoy using Photoshop and Figma for mockups,
            wireframes, prototypes, and other designs in order to communicate
            with clients about UI/UX.
          </p>
          <p className="py-2 text-black dark:text-white">
            Work as a UI consultant and for my own personal projects feel like
            forms of creative expression, and it&apos;s a joy to create UI
            everyday 🙏.
          </p>
          <p className="py-2 text-black dark:text-white">
            I&apos;d like to show you my work rather than tell you about it, so{' '}
            <a href="/#projects" className="py-2 font-semibold">
              <span className="text-[#4f58fc] dark:text-[#9fa8ff] cursor-pointer hover:dark:text-[#6f78fc] hover:text-[#2f38c0] transition-all ease-in duration-150">
                please feel free to check out some of my latest projects.
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
