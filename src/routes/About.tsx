import { Container, Text } from "@mantine/core";
import "../scss/components/About.scss";

function About() {
  return (
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
  );
}
export default About;
