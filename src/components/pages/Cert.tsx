import { Anchor, Card, Image, Stack, Text, Title } from "@mantine/core";
import { CertProps } from "../../shared/types";
import "../../styles/components/Cert.scss";

function Cert(certs: CertProps) {
  const { description, name, imgUrl, issuer, alt, certUrl } = certs;
  return (
    <Card className={"cert"} w={336}>
      <Stack>
        <Image
          src={imgUrl}
          alt={alt}
          fit={"cover"}
          w={300}
          height={212}
          style={{ margin: "0 auto", objectPosition: "top" }}
        />
        <Title fw={500} fz={20}>
          {name}
        </Title>
        <Text fw={400} fz={14}>
          Issued by <b>{issuer}</b>
        </Text>
        <Text fw={300} fz={12} m={0} lh={0}>
          {description}
        </Text>
        <Anchor
          className={"anchor-text"}
          fz={12}
          href={certUrl}
          lh={1.5}
          style={{
            overflowWrap: "break-word",
          }}
        >
          {certUrl}
        </Anchor>
      </Stack>
    </Card>
  );
}

export default Cert;
