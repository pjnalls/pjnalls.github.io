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
          currently only accepting contracts for React Native and React
          development and will continue to do so as I transition at this time
          into a postgraduate researcher role as a doctoral candidate applicant
          in behavioral, monetary, and quantitative economics.
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
