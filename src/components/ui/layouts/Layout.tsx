import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { NavigationBar } from "../parts/NavigationBar";

type props = {
  children?: ReactNode;
  fullPage?: boolean;
};
export const Layout: FC<props> = ({ children, fullPage }) => {
  if (fullPage) {
    return (
      <>
        <NavigationBar />
        <FullPageLayout>
          <Box as="main" maxW="900px" w="100%">
            {children}
          </Box>
        </FullPageLayout>
      </>
    );
  } else {
    return (
      <>
        <NavigationBar />
        <Flex pt="5rem" justifyContent="center">
          <Box as="main" maxW="900px" w="100%" pt="2rem">
            {children}
          </Box>
        </Flex>
      </>
    );
  }
};

type FullPageLayoutProps = {
  children?: ReactNode;
};
const FullPageLayout: FC<FullPageLayoutProps> = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      display="grid"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};
