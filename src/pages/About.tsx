import { motion } from "framer-motion";
import { Container, Text } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import "../styles/components/About.scss";

function About() {
  useDocumentTitle("About | Preston's Portfolio");
  return (
    <motion.main
      key="about"
      initial={{ marginTop: 120, opacity: 0 }}
      animate={{ marginTop: 0, opacity: 1 }}
      exit={{ marginTop: -120, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Container className="about" size={"xs"}>
        <Text ta={"left"}>
          🏡 Hi, I'm Preston. <br />
          Welcome to my portfolio website!
          <br />
          <br />
          🧑‍💻 I have 8+ years of IT- and tech-industry experience.
          <br />
          🧬 I'm a software engineer by day spending most of my free time
          learning—in addition to programming languages such as TypeScript and
          Sass—different kinds of natural languages and cultures.
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
