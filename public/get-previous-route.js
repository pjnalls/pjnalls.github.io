(function () {
  setTimeout(() => {
    const href = window.location.href.split("/");
    const prev = href[1];
    localStorage.setItem(
      "previousRoute",
      window.location.href.includes("blog") ? "blog" : prev ? prev : href.pop()
    );
  }, 1000);
})();
