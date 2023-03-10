import { Breadcrumbs, Grid, Spacer } from "@geist-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/ui/layouts/Layout";
import { ListItem } from "@/components/ui/parts/ListItem";
import { Simulation } from "@/types/Simulation";
import { client } from "@/utils/client";

type props = {
  simulations: Simulation[];
};
const Home: NextPage<props> = ({ simulations }) => {
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
          {simulations.map((simulation) => (
            <Grid key={simulation.id} sm={24} md={12} lg={8}>
              <Link
                href={`simulations/${simulation.id}`}
                style={{ width: "100%" }}
              >
                <ListItem
                  title={simulation.title}
                  thumbnailUrl={simulation.thumbnailUrl}
                />
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "simulations" });

  return {
    props: {
      simulations: data.contents,
    },
  };
};

export default Home;
