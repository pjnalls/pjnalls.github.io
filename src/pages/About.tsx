import { motion } from 'framer-motion';
import { Container, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

function About() {
  useDocumentTitle("About | Preston's Portfolio");
  return (
    <motion.main
      key="about"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container
        mx={0}
        px={24}
        size={'xs'}
      >
        <Title fw={500} order={2} ta={'left'} my={'lg'}>
          🧑‍💻 About me
        </Title>
        <hr />
        <Text ta={'left'} my={'lg'}>
          🏡 Hi, I'm Preston. <br />
          Welcome to my portfolio website!
          <br />
          <br />
          👨‍💻 I create, enhance, and maintain React, Angular, .NET, and React
          Native web and mobile apps and services where I work and do extended
          amounts of yoga in my spare time.
          <br />
          I primarily write code in C# and TypeScript, currently learning
          Python, and can read in multiple natural languages.
          <br />
          <br />
          🧬 Hopefully through my work, I can inspire others to make their work
          "human-centered"—as human-computer interaction (HCI) becomes of
          paramount importance with advancements in technologies such as artificial general
          intelligence (AGI) and metaverse-user experiences.
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
