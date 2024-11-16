(function () {
  window.location.href = `/${
    window.location.pathname
      ? `?currentRoute=${window.location.pathname.slice(1)}`
      : ""
  }`;
})();
