const scrollToProjectsHeader = () => {
  const projectsHeader = document.getElementById('my-projects');
  if (!projectsHeader) return;
  projectsHeader.scrollIntoView({ behavior: 'smooth' });
};
