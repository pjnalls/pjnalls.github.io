import { Flex, Text, Title } from "@mantine/core";
import { ProfessionProps } from "../shared/types";

function Profession({
  concentration,
  dates,
  id,
  style,
  title,
}: ProfessionProps) {
  return (
    <Flex
      justify="space-between"
      py={"0.2em"}
      style={{
        ...style,
        fontStyle: id && (id + 1) % 2 === 0 ? "normal" : "italic",
      }}
    >
      <Title fw={400} fz={11} lts={-0.3} order={3} ta={"left"} w={"100%"}>
        {title}, {concentration}
      </Title>
      <Text fw={300} fz={10} lts={-0.6} ta={"right"} w={140}>
        {dates}
      </Text>
    </Flex>
  );
}
export default Profession;
