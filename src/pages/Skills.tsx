import { Container, Flex, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { certs } from '../shared/fixtures/Cert.fixtures';
import Cert from '../components/pages/Cert';
import GithubSkills from '../components/Skills/GithubSkills';

function Skills() {
  useDocumentTitle("Skills | Preston's Portfolio");
  return (
    <motion.main
      key='skills'
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ zIndex: 2 }}
    >
      <Container
        style={{ margin: '0 auto' }}
        maw={'768px'}
        px={24}
      >
        <Title
          fw={500}
          order={2}
          ta={'left'}
          my={'lg'}
        >
          🧮 My Skills
        </Title>
        <hr />
        <Container my={'lg'}>
          <GithubSkills />
        </Container>
        <br />
        <h3 style={{ textAlign: 'center' }}>🏅 Certifications</h3>
        <Flex
          gap={12}
          justify={'center'}
          wrap={'wrap'}
          my={'lg'}
        >
          {certs.map((cert, index) => (
            <Cert
              key={`cert-${cert.name}-${index}`}
              {...cert}
            />
          ))}
        </Flex>
        <br />
        <br />
      </Container>
    </motion.main>
  );
}

export default Skills;
