import { Box, Flex } from "@chakra-ui/react";
import { Divider, useTheme } from "@geist-ui/core";
import { Github } from "@geist-ui/icons";

export const NavigationBar = () => {
  const { palette } = useTheme();
  return (
    <Box w="100%" bg={palette.background} position="fixed" zIndex="10">
      <Flex justifyContent="center">
        <Flex
          maxW="1000px"
          alignItems="center"
          h="5rem"
          w="100%"
          justifyContent="space-between"
        >
          <Flex alignItems="center" gap="1.5rem">
            <Github />
            Bicpema
          </Flex>
        </Flex>
      </Flex>
      <Divider margin={0} />
    </Box>
  );
};
