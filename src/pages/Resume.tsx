import { Card, Container, Flex, Grid, Stack, Text, Title } from "@mantine/core";
import {
  education,
  experiences,
  devSkills,
  designSkills,
  prodSkills,
} from "../shared/index.fixtures";
import Profession from "../components/pages/Resume/Profession";
import Skill from "../components/resusable/Skill";
import { FaGithub, FaHome } from "react-icons/fa";

function Resume() {
  return (
    <Container p={0} maw={420} size={"xs"}>
      <Card
        className="resume"
        h={"calc(100dvh - 102px)"}
        p={12}
        m={0}
        mah={620}
        shadow={"lg"}
      >
        <Grid
          align={"center"}
          columns={12}
          h={"calc(100dvh - 102px)"}
          justify="space-between"
          overflow="scroll"
          style={{ transition: "all 3s ease" }}
          ta={"left"}
        >
          <Grid.Col span={7}>
            <Title fw={600} fz={28} order={1}>
              Preston Nalls
            </Title>
            <Title order={2} fw={300} fz={10} lts={-0.2}>
              Human-Centered Frontend Engineer
            </Title>
          </Grid.Col>
          <Grid.Col
            span={5}
            style={{
              textAlign: "right"
            }}
          >
            <Flex align={"center"} gap={4} justify={"end"} mt={12}>
              <Text fz={10} fw={300} lts={-0.6}>
                www.pjnalls.com
              </Text>
              <FaHome style={{ fontSize: "12px" }} />
            </Flex>
            <Flex align={"center"} gap={4} justify={"end"}>
              <Text fz={10} fw={300} lts={-0.6}>
                www.github.com/pjnalls
              </Text>
              <FaGithub style={{ fontSize: "12px" }} />
            </Flex>
          </Grid.Col>
          <Grid.Col span={7}>
            <Title order={2} fz={16}>
              Experience
            </Title>
            <Stack gap={0}>
              {experiences.map(({ dates, concentration, title }, id) => (
                <Profession
                  key={id + 100}
                  {...{ concentration, dates, id, title }}
                />
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col span={5}>
            <Title order={2} fz={16}>
              Skills
            </Title>
            <Text fs={"italic"} fw={300} fz={10} lts={-0.4} my={0} mt={0}>
              Note: Skills are all self-accessed.
            </Text>
            <Title lts={-0.4} order={3} fw={500} fz={12} mt={4}>
              Frontend Engineering
            </Title>
            <Stack gap={0}>
              {devSkills.map(({ faIcon, siIcon, skill, stars }, id) => (
                <Skill
                  key={id + 200}
                  {...{ faIcon, id, siIcon, skill, stars }}
                />
              ))}
              <Title order={3} fw={500} fz={12} mt={12}>
                UI/UX Design
              </Title>
              {designSkills.map(({ faIcon, siIcon, skill, stars }, id) => (
                <Skill
                  key={id + 300}
                  {...{ faIcon, id, siIcon, skill, stars }}
                />
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col span={7}>
            <Title order={2} fz={16}>
              Education
            </Title>
            <Stack gap={0}>
              {education.map(({ dates, concentration, title }, id) => (
                <Profession
                  key={id + 400}
                  {...{ dates, concentration, id, title }}
                />
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col m={0} py={0} span={5}>
            <Title order={3} fw={500} fz={12} my={0}>
              DevOps, CI/CD
            </Title>
            {prodSkills.map(({ faIcon, siIcon, skill, stars }, id) => (
              <Skill key={id + 500} {...{ faIcon, id, siIcon, skill, stars }} />
            ))}
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
}
export default Resume;
