import { Box } from "@chakra-ui/react";
import { Grid, Text, useTheme } from "@geist-ui/core";
import { Display, FileText, Mail } from "@geist-ui/icons";
import Head from "next/head";

import { TopPageCard } from "@/components/feature/top/TopPageCard";
import { Layout } from "@/components/ui/layouts/Layout";

export default function Home() {
  const { palette } = useTheme();
  return (
    <>
      <Head>
        <title>Home - Bicpema</title>
      </Head>
      <Layout fullPage>
        <Text h1>Bicpema</Text>
        <Text h3 style={{ color: palette.accents_5 }} marginBottom="2rem">
          An open source design system for building modern websites and
          applications.
        </Text>
        <Box>
          <Grid.Container gap={2} justify="center">
            <Grid sm={24} md={8}>
              <TopPageCard
                href="/simulations"
                title="Simulation"
                comment="Ever-increasing list of concise and aesthetic components."
                icon={<Display size={15} />}
              />
            </Grid>
            <Grid sm={24} md={8}>
              <TopPageCard
                href="/articles"
                title="Articles"
                comment="Configure sizes, colors, appearances, shapes, and more."
                icon={<FileText size={15} />}
              />
            </Grid>
            <Grid sm={24} md={8}>
              <TopPageCard
                href="/"
                title="Contact"
                comment="Geist is open sourced and available free under MIT license."
                icon={<Mail size={15} />}
              />
            </Grid>
          </Grid.Container>
        </Box>
      </Layout>
    </>
  );
}
