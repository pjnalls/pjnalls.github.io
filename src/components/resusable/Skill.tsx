import { Flex, Text, Title } from "@mantine/core";
import { SkillProps } from "../../shared/types";
import "../../scss/components/Skill.scss";
import * as FaReactIcons from "react-icons/fa";
import * as SiReactIcons from "react-icons/si";

function Skill({
  faIcon,
  id,
  otherIcon,
  siIcon,
  skill,
  stars,
  style,
}: SkillProps) {
  const displayIcon = () => {
    if (faIcon)
      return <>{FaReactIcons[faIcon]({ style: { width: "20px" } })} </>;
    else if (siIcon)
      return <>{SiReactIcons[siIcon]({ style: { width: "20px" } })} </>;
    else if (otherIcon) return <>{otherIcon} </>;
    else return <></>;
  };
  return (
    <div style={{ padding: "0.12em 0" }}>
      <Flex
        align={"center"}
        gap={2}
        style={{
          ...style,
          fontStyle: id && (id + 1) % 2 === 0 ? "normal" : "italic",
        }}
      >
        {displayIcon()}
        <Title fw={300} fz={10} lts={-0.2} order={3} w={"100%"}>
          {skill}
        </Title>
        {stars && (
          <Text fw={300} fz={8}>
            <i data-star={stars}></i>
          </Text>
        )}
      </Flex>
    </div>
  );
}
export default Skill;
