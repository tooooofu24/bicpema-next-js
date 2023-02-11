import { AspectRatio, Flex, Image } from "@chakra-ui/react";
import { Breadcrumbs, Button, Grid, Spacer, Text } from "@geist-ui/core";
import { Github, PlayFill } from "@geist-ui/icons";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/ui/layouts/Layout";
import { Simulation } from "@/types/Simulation";
import { client } from "@/utils/client";

type props = {
  simulation: Simulation;
};
const Home: NextPage<props> = ({ simulation }) => {
  return (
    <>
      <Head>
        <title>{simulation.title} - Bicpema</title>
      </Head>
      <Layout>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/simulations">Simulations</Breadcrumbs.Item>
          <Breadcrumbs.Item>{simulation.title}</Breadcrumbs.Item>
        </Breadcrumbs>
        <Spacer h={2} />
        <Grid.Container gap={2}>
          <Grid sm={24} md={12}>
            <Text h1 font="2rem">
              {simulation.title}
            </Text>
          </Grid>
          <Grid sm={24} md={12}>
            <Flex w="100%" alignItems="center" justifyContent="end" gap={10}>
              <Link href={simulation.shareLinkUrl ?? ""} target="_blank">
                <Button
                  iconRight={<Github />}
                  auto
                  scale={3 / 4}
                  px={0.6}
                  disabled={!simulation.shareLinkUrl}
                />
              </Link>
              <Link href={simulation.url} target="_blank">
                <Button icon={<PlayFill />} type="secondary" scale={3 / 4}>
                  Play
                </Button>
              </Link>
            </Flex>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2}>
          <Grid sm={24} md={12}>
            <AspectRatio w="100%" ratio={4 / 3}>
              <Image alt="" objectFit="cover" src={simulation.thumbnailUrl} />
            </AspectRatio>
          </Grid>
          <Grid sm={24} md={12}>
            <div
              dangerouslySetInnerHTML={{
                __html: `${simulation.description}`,
              }}
            />
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "simulations" });

  const paths = data.contents.map(
    (content: any) => `/simulations/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "simulations", contentId: id });

  return {
    props: {
      simulation: data,
    },
  };
};

export default Home;
