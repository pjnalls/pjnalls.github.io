import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppShell, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../components/navigation/Header";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Works from "./Works";
import PageNotFound from "./404";
import OneLove from "./OneLove";

function App() {
  const location = useLocation();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();
  const handleActiveNavToggle = () => {
    if (mobileOpened) toggleMobile();
    else if (desktopOpened) toggleDesktop();
  };
  return (
    <AppShell
      className="app"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header w={"100dvw"}>
        <Header
          {...{ desktopOpened, mobileOpened, toggleDesktop, toggleMobile }}
        />
      </AppShell.Header>
      <AppShell.Navbar p="lg">
        <Navbar {...{ handleActiveNavToggle }} />
        <Footer />
      </AppShell.Navbar>
      <AppShell.Main>
        <Center>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <Navigate
                    to={`/${
                      window.location.href.split("?")[1]?.split("=")[1] ??
                      "home"
                    }`}
                    replace
                  />
                }
              />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/works" element={<Works />} />
              <Route path="/onelove" element={<OneLove />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </AnimatePresence>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
