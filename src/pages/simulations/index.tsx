import { AspectRatio, Image } from "@chakra-ui/react";
import { Breadcrumbs, Card, Grid, Spacer, Text } from "@geist-ui/core";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/ui/layouts/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simulations - Bicpema</title>
      </Head>
      <Layout>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Simulations</Breadcrumbs.Item>
        </Breadcrumbs>
        <Spacer h={2} />
        <Grid.Container gap={2}>
          <Grid sm={24} md={12} lg={8}>
            <Link href="/simulations/1" style={{ width: "100%" }}>
              <Card w="100%" h="100%">
                <AspectRatio w="100%" ratio={4 / 3}>
                  <Image
                    alt=""
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                  />
                </AspectRatio>
                <Text h4 marginBottom={0} marginTop="5px" font={1}>
                  MacBookAir
                </Text>
              </Card>
            </Link>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
}
