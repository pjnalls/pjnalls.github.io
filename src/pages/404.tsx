import { Flex, Stack, Text, Title } from "@mantine/core";
import { RxHamburgerMenu } from "react-icons/rx";

function PageNotFound() {
  return (
    <Stack gap={0} my={"calc(50dvh - 200px)"}>
      <Title fz={80} fw={400} order={1}>
        404
        <br />
      </Title>
      <Text>
        This page isn't found.
        <br />
      </Text>
      <Stack gap={0} justify="center" py={24}>
        <Flex align={"center "} gap={4} justify={'center'}>
          <Text>Please click the top-right </Text>
          <RxHamburgerMenu />
          <Text>icon.</Text>
        </Flex>
        <Text>
          Then on left side, select a page name.
        </Text>
      </Stack>
    </Stack>
  );
}
export default PageNotFound;
