import { Flex } from "@chakra-ui/react";
import { Card, Text, useTheme } from "@geist-ui/core";
import Link from "next/link";
import { FC, ReactNode } from "react";

type props = {
  href: string;
  title: string;
  comment: string;
  icon: ReactNode;
};
export const TopPageCard: FC<props> = ({ href, title, comment, icon }) => {
  const { palette } = useTheme();

  return (
    <Link href={href}>
      <Card h="100%">
        <Flex alignItems="center" gap="12px" color={palette.accents_8}>
          <Flex bg={palette.success} p="0.625rem" borderRadius="100%">
            {icon}
          </Flex>
          <Text h4 margin={0}>
            {title}
          </Text>
        </Flex>
        <Text style={{ color: palette.accents_6 }}>{comment}</Text>
      </Card>
    </Link>
  );
};
