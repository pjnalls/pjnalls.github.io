import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Card, Center, Image, Stack, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import avatar from '/assets/p.logo.avif';

function Home() {
  useDocumentTitle("Home | Preston's Portfolio");
  return (
    <motion.main
      key='home'
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ zIndex: 2 }}
    >
      <Card
        className='home'
        style={{
          height: '100vh',
        }}
      >
        <Stack
          gap={0}
          style={{ margin: 'auto' }}
        >
          <Center>
            <NavLink
              className='anchor-avatar'
              to={'/about'}
              style={{ paddingBottom: 12, paddingTop: 12, width: 120 }}
            >
              <Image
                src={avatar}
                className='avatar'
                alt="Preston's photo"
                width={'120px'}
                height={'120px'}
              />
            </NavLink>
          </Center>
          <Title
            fw={500}
            fz={48}
            lts={0.6}
            order={1}
            my={12}
          >
            Preston Nalls
          </Title>
          <Title
            fw={400}
            order={2}
            fz={20}
          >
            Frontend Mobile and Web Developer
          </Title>
          <Stack
            className='promo'
            gap={0}
            mt={4}
          >
            <Text
              fw={400}
              fz={20}
            >
              React, React Native, TypeScript
              <br />
            </Text>
          </Stack>
          <Text
            lts={-0.2}
            mt={24}
            fw={300}
          >
            <NavLink
              className='anchor-text'
              style={{ fontWeight: 400, textAlign: 'left' }}
              to={'/projects'}
            >
              View my projects here.
            </NavLink>
          </Text>
        </Stack>
      </Card>
    </motion.main>
  );
}
export default Home;
