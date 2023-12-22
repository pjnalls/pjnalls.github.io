import { Card, Text, Title } from "@mantine/core";

function Construction() {
  return (
    <Card className="construction" maw={480} mt={0} w={"calc(100dvw - 24px)"}>
      <Title fz={64} fw={700} order={1}>
        UNDER
        <br />
      </Title>
      <Title fz={28} fw={400} order={1}>
        CONSTRUCTION
        <br />
      </Title>
      <Text fz={99.9}>👷</Text>
      <Title fz={28} fw={700} order={1}>
        COMING SOON
      </Title>
    </Card>
  );
}
export default Construction;
