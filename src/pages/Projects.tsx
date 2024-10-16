import { motion } from 'framer-motion';
import { Anchor, Stack, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import Showcase from '../components/pages/Works/Showcase';
import '../styles/components/Works.scss';

function Works() {
  useDocumentTitle("Projects | Preston's Portfolio");
  return (
    <motion.main
      key='works'
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ zIndex: 2 }}
    >
      <Stack
        id={'my-projects'}
        className='works'
        gap={0}
        px={24}
        maw={'100vw'}
        mt={80}
      >
        <Title
          fw={500}
          order={2}
          ta={'left'}
          my={'xs'}
        >
          💼 My Projects
        </Title>
        <hr />
        <br />
        <Showcase />
        <br />
        <Text lts={-0.2}>
          🧑‍💻 Click{' '}
          <Anchor
            fw={600}
            href='https://github.com/pjnalls?tab=repositories&q=&type=public&language=&sort='
            className='anchor-text'
            target='_blank'
            rel='noreferrer'
          >
            here
          </Anchor>{' '}
          to view
          <br />
          my projects on GitHub.
        </Text>
        <br />
        <br />
      </Stack>
    </motion.main>
  );
}
export default Works;
