import { Breadcrumbs, Grid, Spacer } from "@geist-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/ui/layouts/Layout";
import { ListItem } from "@/components/ui/parts/ListItem";
import { Article } from "@/types/Article";
import { client } from "@/utils/client";

type props = {
  articles: Article[];
};
const Home: NextPage<props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Simulations - Bicpema</title>
      </Head>
      <Layout>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Articles</Breadcrumbs.Item>
        </Breadcrumbs>
        <Spacer h={2} />
        <Grid.Container gap={2}>
          {articles.map((article) => (
            <Grid key={article.id} sm={24} md={12} lg={8}>
              <Link
                href={article.url}
                target="_blank"
                style={{ width: "100%" }}
              >
                <ListItem
                  title={article.title}
                  thumbnailUrl={article.thumbnailUrl}
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
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default Home;
