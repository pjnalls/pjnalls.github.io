setTimeout(
  () =>
    localStorage.setItem(
      "previousRoute",
      window.location.href.includes("blog")
        ? "blog"
        : window.location.href.split("/").pop()
    ),
  1000
);
