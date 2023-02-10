import { AspectRatio, Image } from "@chakra-ui/react";
import { Card, Text } from "@geist-ui/core";
import Link from "next/link";
import { FC } from "react";

import { Simulation } from "@/types/Simulation";

type props = {
  simulation: Simulation;
};
export const SimulationItem: FC<props> = ({ simulation }) => {
  return (
    <Link href={`/simulations/${simulation.id}`} style={{ width: "100%" }}>
      <Card w="100%" h="100%">
        <AspectRatio w="100%" ratio={4 / 3}>
          <Image
            alt={simulation.title}
            objectFit="cover"
            src={simulation.thumbnailUrl}
          />
        </AspectRatio>
        <Text h4 marginBottom={0} marginTop="5px" font={1}>
          {simulation.title}
        </Text>
      </Card>
    </Link>
  );
};
