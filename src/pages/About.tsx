import { motion } from 'framer-motion';
import { Container, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

function About() {
  useDocumentTitle("About | Preston's Portfolio");
  return (
    <motion.main
      key='about'
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ zIndex: 2 }}
    >
      <Container
        mx={0}
        px={24}
        size={'xs'}
        mt={80}
      >
        <Title
          fw={500}
          order={2}
          ta={'left'}
          my={'lg'}
        >
          🧑‍💻 About me
        </Title>
        <hr />
        <Text
          ta={'left'}
          my={'lg'}
        >
          🏡 Hi, I'm Preston. <br />
          Welcome to my portfolio website!
          <br />
          <br />
          👷 I have 7+ years of frontend software development experience and am
          currently only accepting contracts for React Native development
          opportunities but am open to a postgraduate degree program.
          <br />
          <br />
          ☯️ I'm interested to great depths in all aspects of STEAM (science,
          technology, engineering, art, and mathematics).
          <br />
          Moreover, I consider art in it's both simultaneously novel and useful
          forms to be the quantum mechanical medium fundamental to the rigorous
          study of nature and the creative process for the greatest discoveries
          of the universe.
          <br />
          <br />
          🧬 In a more practical sense related to STEAM, I'm currently and
          actively seeking opportunities to study quantum physics (for science),
          taking the time to understand quantum computers and machine learning
          (for technology), improving my frontend mobile and web software
          development expertise in React Native (for engineering), finding
          articulate expression via my second language Japanese and third
          language Mandarin (for art), and solving quantum-logical problems with
          classic logical states on three-dimensional planes (for mathematics).
          <br />
          <br />
          💼 Please feel free to look around while you're here.
          <br />
          Thank you for visting!
        </Text>
      </Container>
    </motion.main>
  );
}
export default About;
