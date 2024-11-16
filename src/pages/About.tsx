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
          Hi, I'm Preston. <br />
          Welcome to my portfolio website!
          <br />
          <br />
          I have 7+ years of frontend software development experience and am
          currently building cross-platform Expo apps in React Native and
          TypeScript for iOS, Android, and the Web.
          <br />
          Some other JavaScript libraries I use for my projects are Tailwind CSS
          and NativeWind for inline styling.
          <br />
          <br />
          Along with frontend web and mobile development expertise, I can use
          Figma to create most of my designs and assets for my projects.
          <br />
          <br />
          I'm currently seeking new React Native job opportunities in the
          Nashville Metropolitan Area either hybrid or onsite or opportunities
          which are remote as well.
          <br />
          <br />
          Please direct message on LinkedIn if you're a recruiter and would like
          to discuss further.
          <br />
          <br />
          Thank you for visting!
        </Text>
      </Container>
    </motion.main>
  );
}
export default About;
