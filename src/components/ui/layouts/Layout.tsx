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
          <Box as="main">{children}</Box>
        </FullPageLayout>
      </>
    );
  } else {
    return (
      <>
        <NavigationBar />
        <Box pt="5rem">
          <main>{children}</main>
        </Box>
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
