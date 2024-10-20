import { Anchor, Container, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.main
      key='home'
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
          my={'xs'}
        >
          📧 Contact me
        </Title>
        <hr />
        <br />
        <Anchor
          className='anchor-avatar'
          href='https://www.linkedin.com/in/pjnalls/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            alt='LinkedIn logo'
            src='/assets/logos/LinkedIn.svg'
            className='avatar'
            width={240}
            style={{ margin: '0 auto', borderRadius: 0 }}
          />
        </Anchor>
        <Text>
          <Anchor
            className='anchor-text'
            href='https://www.linkedin.com/in/pjnalls/'
            target='_blank'
            rel='noreferrer'
          >
            View my Linked Profile
          </Anchor>
        </Text>
        <br />
        <Text>
          I normally check Linkedin, so if you're a recruiter with a job
          opportunity or you too are interested in React Native, quantum
          computing, neural networks, or learning languages, feel free to
          connect and/or direct message me.
        </Text>
      </Container>
    </motion.main>
  );
}
