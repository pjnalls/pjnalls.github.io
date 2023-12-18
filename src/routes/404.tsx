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
        This page isn't found on my website.
        <br />
      </Text>
      <Stack gap={0} justify="center" py={24}>
        <Flex align={"center "} gap={4} justify={'center'}>
          <Text>Please click the the top-right </Text>
          <RxHamburgerMenu />
          <Text>of this page.</Text>
        </Flex>
        <Text>
          Then on this page's left-side, select a listed page.
        </Text>
      </Stack>
    </Stack>
  );
}
export default PageNotFound;
