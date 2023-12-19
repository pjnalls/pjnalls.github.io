import { Anchor, Card, Center, Flex, Image, Stack, Title } from "@mantine/core";

import { WorkProps } from "../../../shared/types";
import "../../../scss/components/Skill.scss";
import Skill from "../../resusable/Skill";

function Work({
  name,
  ingredients,
  imgSrc,
  style,
}: WorkProps): JSX.Element {
  return (
    <Card className="work" style={style}>
      <Stack style={{ borderRadius: "4px" }}>
        <Center>
          <Image maw={48} src={imgSrc} />
        </Center>
        <Title fz={14} my={-8} order={2} ta={"center"}>
          <Anchor
            className="anchor-text"
            fz={14}
            href={'#'}
            my={0}
            py={0}
          >
            {name}
          </Anchor>
        </Title>
        <Flex wrap={"wrap"} gap={4} justify={"center"} my={-8} rowGap={0}>
          {ingredients.map(
            ({ faIcon, id, otherIcon, siIcon, skill, stars, style }, index) => (
              <Skill
                key={`${name}-work-skill-${index}`}
                {...{
                  faIcon,
                  id,
                  otherIcon,
                  siIcon,
                  skill,
                  stars,
                  style,
                }}
              />
            )
          )}
        </Flex>
      </Stack>
    </Card>
  );
}
export default Work;
