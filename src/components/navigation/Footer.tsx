import { Anchor, AppShell } from "@mantine/core";

function Footer() {
  return (
    <AppShell.Footer className="footer">
      <Anchor
        className="copyright"
        fz={12}
        href="https://github.com/pjnalls/pjnalls.github.io/blob/3e9bb0acf3c9376d34b97f099886e3be4de6e571/LICENSE"
      >
        Copyright © 2023, 2024 Preston Nalls
      </Anchor>
    </AppShell.Footer>
  );
}
export default Footer;
