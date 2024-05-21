import { motion } from 'framer-motion';
import { Anchor, Stack, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import Showcase from '../components/pages/Works/Showcase';
import '../styles/components/Works.scss';

function Works() {
  useDocumentTitle("Works | Preston's Portfolio");
  return (
    <motion.main
      key="works"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Stack className="works" gap={0} 
        px={24} >
        <Title fw={500} order={2} ta={'left'} my={'xs'}>
          💼 My Projects
        </Title>
        <hr />
        <br />
        <Showcase />
        <br />
        <Text lts={-0.2}>
          🧑‍💻 Please click{' '}
          <Anchor
            fw={600}
            href="https://github.com/pjnalls?tab=repositories&q=&type=public&language=&sort="
            className="anchor-text"
            target="_blank"
            rel="noreferrer"
          >
            here
          </Anchor>{' '}
          to view
          <br />
          my projects on GitHub.
        </Text>
      </Stack>
    </motion.main>
  );
}
export default Works;
