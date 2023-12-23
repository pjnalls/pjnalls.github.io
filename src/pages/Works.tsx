import { motion } from "framer-motion";
import { Anchor, Stack, Text } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import Showcase from "../components/pages/Works/Showcase";

function Works() {
  useDocumentTitle("Resume | Preston's Portfolio");
  return (
    <motion.main
      key="works"
      initial={{ marginTop: 120, opacity: 0 }}
      animate={{ marginTop: 0, opacity: 1 }}
      exit={{ marginTop: -120, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Stack gap={0}>
        <Stack gap={0}>
          <Showcase />
          <br />
          <Text lts={-0.2}>
            🧑‍💻 Please click{" "}
            <Anchor
              fw={600}
              href="https://github.com/pjnalls?tab=repositories&q=&type=public&language=&sort="
              className="anchor-text"
              target="_blank"
            >
              here
            </Anchor>{" "}
            to view
            <br />
            my works on GitHub.
          </Text>
        </Stack>
      </Stack>
    </motion.main>
  );
}
export default Works;
