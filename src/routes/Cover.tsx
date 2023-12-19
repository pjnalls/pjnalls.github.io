import { Anchor, Card, Center, Image, Stack, Text, Title } from "@mantine/core";
import avatar from "/p.logo.avif";

function Cover() {
  return (
    <Card className="app" pt={'calc(50dvh - 293px)'}  w={"calc(100dvw - 24px)"}>
      <Center>
        <Anchor
          className="anchor-avatar"
          href="/works"
          py={24}
          rel="noopener noreferrer"
          target="_blank"
          w={120}
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
      <Title fw={400} fz={48} lts={0.6} order={1}>
        Preston Nalls
      </Title>
      <Title fw={300} order={2} fz={16} lts={0.3}>
        Human-Centered Frontend Engineer
      </Title>
      <Stack className="promo" gap={0} my={24}>
        <Text fw={300} lts={-0.4} size="xl">
          Promoting joy of learning
          <br />
          natural and programming
          <br />
          languages of all kinds.
          <br />
        </Text>
        <Text fw={300} size="xl">
          ❤️{" "}
          <span className="onelove" style={{ fontWeight: 600 }}>
            #onelove
          </span>{" "}
          🌏🌍🌎.
        </Text>
      </Stack>
      <Text lts={-0.2}>
        Please click{" "}
        <Anchor
          fw={600}
          href="/works"
          className="anchor-text"
        >
          here
        </Anchor>{" "}
        or on the logo above
        <br />
        to view my worka.
      </Text>
    </Card>
  );
}
export default Cover;
