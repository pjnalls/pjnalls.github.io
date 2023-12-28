import { Container, Flex } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { motion } from "framer-motion";
import { certs } from "../shared/fixtures/Cert.fixtures";
import Cert from "../components/pages/Cert";

function Certifications() {
    useDocumentTitle("Certifications | Preston's Portfolio");
  return (
    <motion.main
      key="contact"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container size={"sm"} style={{ margin: '0 auto'}} my={"calc(50dvh - 300px)"}>
        <Flex gap={12} justify={"center"} wrap={"wrap"}>
          {certs.map((cert, index) => (
            <Cert key={`cert-${cert.name}-${index}`} {...cert} />
          ))}
        </Flex>
      </Container>
    </motion.main>
  );
}

export default Certifications;
