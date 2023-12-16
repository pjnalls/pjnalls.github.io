import {
  Anchor,
  Card,
  Center,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import avatar from "/p.logo.avif";

function Cover() {
  return (
    <Card
      className="app"
      w={"calc(100dvw - 24px)"}
    >
      <Center>
        <Anchor
          className="anchor-avatar"
          href="https://github.com/pjnalls"
          py={24}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={avatar}
            className="avatar"
            alt="Preston's photo"
            width={"120px"}
            height={"120px"}
          />
        </Anchor>
      </Center>
      <Title fw={500} fz={48} order={1}>
        Preston Nalls
      </Title>
      <Title fw={400} order={2}>
        Software Engineer, Frontend
      </Title>
      <Stack className="promo" gap={0} my={24}>
        <Text fw={300} size="xl">
          Promoting joy of learning natural
          <br />
          and programming languages
          <br />
          of all kinds.
          <br />
        </Text>
        <Text size="xl">
          ❤️{" "}
          <span className="onelove" style={{ fontWeight: 600 }}>
            #onelove
          </span>{" "}
          🌏🌍🌎.
        </Text>
      </Stack>
      <Text>
        Please click{" "}
        <Anchor
          fw={600}
          href="https://github.com/pjnalls"
          className="anchor-text"
          target="_blank"
        >
          here
        </Anchor>{" "}
        or on the logo above
        <br />
        to view my GitHub profile.
      </Text>
    </Card>
  );
}
export default Cover;
