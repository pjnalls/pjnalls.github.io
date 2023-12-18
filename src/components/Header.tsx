import { Anchor, Burger, Group, Image, Text } from "@mantine/core";
import avatar from "/p.logo.avif";

function Header({
  desktopOpened,
  mobileOpened,
  toggleDesktop,
  toggleMobile,
}: any) {
  return (
    <Group h="100%" justify={"space-between"} px="md">
      <Group gap={4}>
        <Anchor
          className="anchor-avatar"
          href="/"
          rel="noopener noreferrer"
          target="_blank"
          w={24}
        >
          <Image
            src={avatar}
            className="avatar"
            alt="Preston's photo"
            width={24}
          />
        </Anchor>
        <Text fw={400} fz={16} pl={4}>
          <a className="anchor-text" href="https://github.com/pjnalls">
            @pjnalls
          </a>
        </Text>
      </Group>
      <Group>
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
        />
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom="sm"
          size="sm"
        />
      </Group>
    </Group>
  );
}
export default Header;
