import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import {
  Anchor,
  AppShell,
  Card,
  Center,
  Container,
  Image,
  Text,
  Title,
} from '@mantine/core';
import profilePic from '/p.logo.avif';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <AppShell>
      <AppShell.Main id="app">
        <Container size="lg" id="container">
          <Center>
            <Anchor
              href="https://github.com/pjnalls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={profilePic}
                className="profile-pic"
                alt="Preston's photo"
                width={'240px'}
                height={'240px'}
              />
            </Anchor>
          </Center>
          <Title fw={500} order={1} style={{ fontSize: 60 }}>
            Preston Nalls
          </Title>
          <Card
          className='card'
            style={{
              border: 'none',
              backgroundColor: 'transparent',
            }}
            padding={48}
          >
            <Title fw={500} order={2} style={{ paddingBottom: 24 }}>
              Software Engineer
            </Title>
            <Text fw={300} size="xl">
              Promoting joy of learning natural and programming languages of all
              kinds.
              <br />
              ❤️{' '}
              <span id="onelove" style={{ fontWeight: 600 }}>
                #onelove
              </span>{' '}
              🌏🌍🌎
            </Text>
          </Card>
          <Text className="message">
            Please click the logo above or{' '}
            <Anchor
              fw={500}
              href="https://github.com/pjnalls"
              id="here"
              target="_blank"
            >
              here
            </Anchor>{' '}
            to view my GitHub profile.
          </Text>
        </Container>
        <footer id="footer">Copyright © 2023 Preston Nalls</footer>
      </AppShell.Main>
    </AppShell>
  </MantineProvider>
);
