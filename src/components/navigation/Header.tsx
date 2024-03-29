import { Anchor, Burger, Group, Image, Text } from "@mantine/core";
import avatar from "/assets/p.logo.avif";

function Header({
  desktopOpened,
  mobileOpened,
  toggleDesktop,
  toggleMobile,
}: any) {
  return (
    <Group h="100%" justify={"space-between"} px="md">
      <Group gap={4}>
        <Anchor className="anchor-avatar" href="/" w={24}>
          <Image
            src={avatar}
            className="avatar"
            alt="Preston's photo"
            width="24px"
            height="24px"
          />
        </Anchor>
        <Text fw={400} fz={16} pl={4}>
          <Anchor className="anchor-text" href="/">
            @pjnalls
          </Anchor>
        </Text>
      </Group>
      <Group>
        <Burger
          aria-label="Toggle mobile navigation"
          hiddenFrom="sm"
          onClick={toggleMobile}
          opened={mobileOpened}
          size="sm"
        />
        <Burger
          aria-label="Toggle desktop navigation"
          onClick={toggleDesktop}
          opened={desktopOpened}
          size="sm"
          visibleFrom="sm"
        />
      </Group>
    </Group>
  );
}
export default Header;
