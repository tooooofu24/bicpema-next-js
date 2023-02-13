import { AspectRatio, Image } from "@chakra-ui/react";
import { Card, Text } from "@geist-ui/core";
import { FC } from "react";

type props = {
  title: string;
  thumbnailUrl: string;
};
export const ListItem: FC<props> = ({ title, thumbnailUrl }) => {
  return (
    <Card w="100%" h="100%">
      <AspectRatio w="100%" ratio={4 / 3}>
        <Image alt={title} objectFit="cover" src={thumbnailUrl} />
      </AspectRatio>
      <Text h4 marginBottom={0} marginTop="5px" font={1}>
        {title}
      </Text>
    </Card>
  );
};
