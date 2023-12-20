import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  AppShell,
  Center,
  MantineColorScheme,
  MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../components/navigation/Header";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const ColorSchemeContext = createContext<{
  colorScheme: MantineColorScheme;
  onChange: React.Dispatch<React.SetStateAction<MantineColorScheme>>;
} | null>(null);

function Root() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const [colorScheme, setColorScheme] = useState(
    colorSchemeContext?.colorScheme
  );
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();
  const handleActiveNavToggle = () => {
    if (mobileOpened) toggleMobile();
    else if (desktopOpened) toggleDesktop();
  };
  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme: colorScheme as MantineColorScheme,
        onChange: setColorScheme as React.Dispatch<
          React.SetStateAction<MantineColorScheme>
        >,
      }}
    >
      <MantineProvider defaultColorScheme={"auto"}>
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
              <Outlet />
            </Center>
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}

export default Root;
