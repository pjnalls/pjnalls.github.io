import { Anchor, Stack, Text } from "@mantine/core";
import Construction from "../components/Construction";
import "../scss/components/Construction.scss";

function Works() {
  return (
    <Stack gap={0} my={"calc(50dvh - 280px)"}>
      <Stack gap={0}>
        <Construction />
        <br />
        <Text lts={-0.2}>
          ⚠️ Please click{" "}
          <Anchor
            fw={600}
            href="https://github.com/pjnalls?tab=repositories&q=&type=public&language=&sort="
            className="anchor-text"
            target="_blank"
          >
            here
          </Anchor>{" "}
          or on
          <br />
          the logo above to view my works on GitHub
          <br />
          as a temporary work-around.
        </Text>
      </Stack>
    </Stack>
  );
}
export default Works;
