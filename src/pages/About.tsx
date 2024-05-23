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
      <Container mx={0} px={24} size={'xs'}>
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
          Native web and mobile apps and services where I work, and I like
          listening to a lot Square Enix music and reading the lastest tech news
          in my free time.
          <br />
          I primarily write code in C# and TypeScript and can read in multiple
          natural languages.
          <br />
          <br />
          🦄 I consider myself to be a bit of a unicorn in the sense that I'm
          currently a fullstack web and mobile developer where I work yet I have
          a background in art and design: I grew up with a passion in drawing,
          anime, and games. I also graduated from a university with a Bachelor
          of Science degree with a concentration in 2D and 3D animation and,
          later on, with an additional Bachelor of Science degree in computer
          science.
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
