import { Anchor, Container, Text } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { motion } from "framer-motion";

function Contact() {
  useDocumentTitle("Contact | Preston's Portfolio");
  return (
    <motion.main
      key="contact"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container className="p-md" mx={0} px={12} size={"xs"}>
        <Text ta={"left"}>
          ✉️ Contact me at{" "}
          <Anchor className="anchor-text" href="mailto:concierge@pjnalls.com">
            concierge@pjnalls.com
          </Anchor>
          .<br />
          <br />
          I'd be glad to answer any questions about how I code as a frontend
          engineer.
          <br />
          In addition to coding, I'd be even more excited to show you how I
          learn to understand, speak, and write many natural languages as a
          polyglot.
          <br />
          <br />
          Thank you,
          <br />
          Preston
        </Text>
      </Container>
    </motion.main>
  );
}

export default Contact;
