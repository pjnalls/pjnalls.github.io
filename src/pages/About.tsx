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
          👷 With a solid foundation in computer science and computer graphics,
          my career has gradually evolved into a synthesis of both design and
          development.
          <br />
          Recently, I've worked on teams to successfully deliver robust React
          Native applications, enhancing user experiences across web and mobile
          platforms. My proficiency in React, React Native, and TypeScript,
          coupled with my artistic background, has positioned me uniquely in the
          tech industry.
          <br />
          <br />
          🦄 I consider myself to be a bit of a unicorn in the sense that I'm
          currently a fullstack web and mobile developer where I work yet I have
          a background in art and design: I grew up with a passion for drawing
          and animation. Later, I graduated from a university earning a Bachelor
          of Science degree with a concentration in 2D and 3D animation and
          then, later on, earning an additional Bachelor of Science degree in
          computer science.
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
