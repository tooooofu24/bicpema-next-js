import { AspectRatio, Flex, Image } from "@chakra-ui/react";
import { Breadcrumbs, Button, Grid, Spacer, Text } from "@geist-ui/core";
import { Github, PlayFill } from "@geist-ui/icons";
import Head from "next/head";

import { Layout } from "@/components/ui/layouts/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>MacBookAir - Bicpema</title>
      </Head>
      <Layout>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/simulations">Simulations</Breadcrumbs.Item>
          <Breadcrumbs.Item>MacBookAir</Breadcrumbs.Item>
        </Breadcrumbs>
        <Spacer h={2} />
        <Grid.Container gap={2}>
          <Grid sm={24} md={12}>
            <Text h1 font="2rem">
              MacBookAir
            </Text>
          </Grid>
          <Grid sm={24} md={12}>
            <Flex w="100%" alignItems="center" justifyContent="end" gap={10}>
              <Button iconRight={<Github />} auto scale={3 / 4} px={0.6} />
              <Button icon={<PlayFill />} type="secondary" scale={3 / 4}>
                Play
              </Button>
            </Flex>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2}>
          <Grid sm={24} md={12}>
            <AspectRatio w="100%" ratio={4 / 3}>
              <Image
                alt=""
                objectFit="cover"
                src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
              />
            </AspectRatio>
          </Grid>
          <Grid sm={24} md={12}>
            <Text>
              These are short, famous texts in English from classic sources like
              the Bible or Shakespeare. Some texts have word definitions and
              explanations to help you. Some of these texts are written in an
              old style of English. Try to understand them, because the English
              that we speak today is based on what our great, great, great,
              great grandparents spoke before! Of course, not all these texts
              were originally written in English. The Bible, for example, is a
              translation. But they are all well known in English today, and
              many of them express beautiful thoughts.
            </Text>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
}
