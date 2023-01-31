// spagehetti.js from https://tailwindcss.com/docs/dark-mode to avoid FOUC
(function () {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.getElementsByTagName('html').item(0)?.classList.add('dark');
  } else {
    document.getElementsByTagName('html').item(0)?.classList.remove('dark');
  }
})();
