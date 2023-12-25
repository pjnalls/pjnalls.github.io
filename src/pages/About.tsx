import { motion } from "framer-motion";
import { Container, Text } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";

function About() {
  useDocumentTitle("About | Preston's Portfolio");
  return (
    <motion.main
      key="about"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container className="p-lg" mx={0} px={12} size={"xs"}>
        <Text ta={"left"}>
          🏡 Hi, I'm Preston. <br />
          Welcome to my portfolio website!
          <br />
          <br />
          🧑‍💻 As a frontend engineer by day who takes language-learning
          seriously, I spend most of my free time learning all kinds of natural
          languages—in addition to programming languages such as TypeScript and
          Sass I use just about everyday.
          <br />
          <br />
          🧬 Hopefully through my work, I can inspire others to make their work
          "human-centered"—as human-computer interaction (HCI) becomes of
          paramount importance with advancements of technologies such as
          artificial general intelligence (AGI), metaverse-user experiences, etc.
          <br />
          <br />
          💼 Please feel free to look around from time to time whenever you're
          here as I add more to this site about my profession, works, love of
          languages and cultures, and myself.
        </Text>
      </Container>
    </motion.main>
  );
}
export default About;
