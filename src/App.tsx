import { useContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ColorSchemeContext from "./ColorSchemeContext";
import {
  Anchor,
  AppShell,
  Burger,
  Center,
  Group,
  Image,
  MantineColorScheme,
  MantineProvider,
  NavLink,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { navLinks } from "./shared/fixtures";
import Resume from "./routes/Resume";
import Cover from "./routes/Cover";
import PageNotFound from "./routes/404";

const routes = [
  { path: "/", element: <Cover />, errorElement: <PageNotFound /> },
  { path: "/resume", element: <Resume /> },
];
const router = createBrowserRouter(routes, { basename: "/" });

function App() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const [colorScheme, setColorScheme] = useState(
    colorSchemeContext?.colorScheme
  );
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();

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
          <AppShell.Header w={"100vw"}>
            <Group h="100%" justify={"space-between"} px="md">
              <Group gap={4}>
                <Image
                  className={"avatar"}
                  alt={"Preston's logo"}
                  src={"/p.logo.avif"}
                  w={24}
                />
                <Text fw={500} fz={16} pl={4}>
                  <a className="anchor-text" href="https://github.com/pjnalls">
                    @pjnalls
                  </a>
                </Text>
              </Group>
              <Group>
                <Burger
                  opened={mobileOpened}
                  onClick={toggleMobile}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Burger
                  opened={desktopOpened}
                  onClick={toggleDesktop}
                  visibleFrom="sm"
                  size="sm"
                />
              </Group>
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="lg">
            {navLinks.map((link, index) => (
              <NavLink
                active={link.route === location.href.split("/").pop()}
                h={28}
                href={link.href}
                key={index}
                label={link.label}
                mt="sm"
              />
            ))}
            <AppShell.Footer className="footer">
              <Anchor
                className="copyright"
                fz={12}
                href="https://github.com/pjnalls/pjnalls.github.io/blob/3e9bb0acf3c9376d34b97f099886e3be4de6e571/LICENSE"
              >
                Copyright © 2023 Preston Nalls
              </Anchor>
            </AppShell.Footer>
          </AppShell.Navbar>
          <AppShell.Main>
            <Center>
              <RouterProvider router={router} />
            </Center>
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}

export default App;
