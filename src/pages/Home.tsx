import { Card, Center, Image, Stack, Text, Title } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import avatar from "/assets/p.logo.avif";
import { NavLink } from "react-router-dom";

function Home() {
  useDocumentTitle("Home | Preston's Portfolio");
  return (
    <Card className="app" pt={"calc(50dvh - 293px)"} w={"calc(100dvw - 24px)"}>
      <Center>
        <NavLink
          className="anchor-avatar"
          to={"/works"}
          style={{ paddingBottom: 12, paddingTop: 12, width: 120 }}
        >
          <Image
            src={avatar}
            className="avatar"
            alt="Preston's photo"
            width={"120px"}
            height={"120px"}
          />
        </NavLink>
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
          languages of all kinds
          <br />
        </Text>
        <Text fw={300} size="xl">
          ❤️{" "}
          <span className="onelove" style={{ fontWeight: 600 }}>
            #onelove
          </span>{" "}
          🌏🌍🌎
        </Text>
      </Stack>
      <Text lts={-0.2}>
        <NavLink
          className="anchor-text"
          style={{ fontWeight: 600, textAlign: "left" }}
          to={"/works"}
        >
          View my works here
        </NavLink>
        .
      </Text>
    </Card>
  );
}
export default Home;
