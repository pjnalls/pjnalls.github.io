import { Flex, Stack, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';

function PageNotFound() {
  useDocumentTitle("Page not found | Preston's Portfolio");
  return (
    <motion.main
      key="page-not-found"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Stack gap={0} my={'calc(50dvh - 200px)'} px={24}>
        <Title fz={80} fw={400} order={1}>
          404
          <br />
        </Title>
        <Text>
          This page isn't found.
          <br />
        </Text>
        <Stack gap={0} justify="center" py={24}>
          <Flex align={'center '} gap={4} justify={'center'}>
            <Text>Please click the top-right </Text>
            <RxHamburgerMenu />
            <Text>icon.</Text>
          </Flex>
          <Text>Then on left side, select a page name.</Text>
        </Stack>
      </Stack>
    </motion.main>
  );
}
export default PageNotFound;
