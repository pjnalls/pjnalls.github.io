export default function ScrollToTopButton({
  id,
}: {
  id: `scroll-to-top-button-${string}`;
}) {
  const scrollToProjectsHeader = () => {
    const projectsHeader = document.getElementById('my-projects');
    if (!projectsHeader) return;
    projectsHeader.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <button
        id={id}
        onClick={scrollToProjectsHeader}
        className="bg-[#d0c2ff] dark:bg-[#6e408a] border-2 border-[#b0a2df] rounded-lg dark:text-white p-4 my-8 cursor-pointer block mx-auto hover:opacity-80 hover:scale-95 hover:brightness-90"
        style={{ textDecoration: 'none' }}
      >
        Scroll to Top
      </button>
  );
}
