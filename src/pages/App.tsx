import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppShell, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/src/components/navigation/Header';
import Navbar from '@/src/components/navigation/Navbar';
import Footer from '@/src/components/navigation/Footer';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import PageNotFound from './404';
import OneLove from './OneLove';
import Skills from './Skills';
import Languages from './Languages';
import Earth from '@/src/components/background/Earth';
import Particles from '@/src/components/background/Particles';
import Overlay from '@/src/components/background/Overlay';

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
      className='app'
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: false },
      }}
      p={0}
      m={0}
    >
      <Particles />
      {/* <OneLoveText /> */}
      <Earth />
      <Overlay />
      <AppShell.Header w={'100dvw'}>
        <Header {...{ mobileOpened, toggleMobile }} />
      </AppShell.Header>
      <AppShell.Navbar p='lg'>
        <Navbar {...{ handleActiveNavToggle }} />
        <Footer />
      </AppShell.Navbar>
      <AppShell.Main>
        <Center
          style={{
            zIndex: 9,
          }}
        >
          <AnimatePresence mode='wait'>
            <Routes
              location={location}
              key={location.pathname}
            >
              <Route
                path='/'
                element={
                  <Navigate
                    to={`/${
                      window.location.href.split('?')[1]?.split('=')[1] ??
                      'home'
                    }`}
                    replace
                  />
                }
              />
              <Route
                path='/home'
                element={<Home />}
              />
              <Route
                path='/about'
                element={<About />}
              />
              <Route
                path='/resume'
                element={<Resume />}
              />
              <Route
                path='/skills'
                element={<Skills />}
              />
              <Route
                path='/languages'
                element={<Languages />}
              />
              <Route
                path='/projects'
                element={<Projects />}
              />
              <Route
                path='/onelove'
                element={<OneLove />}
              />
              <Route
                path='/*'
                element={<PageNotFound />}
              />
            </Routes>
          </AnimatePresence>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
