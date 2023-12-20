export const getLastRoute = () => localStorage.getItem("lastRoute");
export const setLastRoute = (route: string) =>
  localStorage.setItem("lastRoute", route);