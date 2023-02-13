import { Box, Flex } from "@chakra-ui/react";
import {
  Breadcrumbs,
  Button,
  Input,
  Spacer,
  Text,
  Textarea,
  useTheme,
} from "@geist-ui/core";
import { Mail, User } from "@geist-ui/icons";
import { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components/ui/layouts/Layout";

const Home: NextPage = () => {
  const { palette } = useTheme();
  return (
    <>
      <Head>
        <title>Contact - Bicpema</title>
      </Head>
      <Layout>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Contact</Breadcrumbs.Item>
        </Breadcrumbs>
        <Spacer h={2} />
        <form>
          <Flex flexDir="column" alignItems="center">
            <Box maxW="30rem" w="100%">
              <Input icon={<User />} w="100%" placeholder="山田太郎">
                Name
              </Input>
              <Spacer />
              <Input icon={<Mail />} w="100%" placeholder="user@email.com">
                Email
              </Input>
              <Spacer />
              <Text
                marginBottom={0.5}
                small
                style={{ color: palette.accents_6, display: "block" }}
              >
                Comment
              </Text>
              <Textarea
                width="100%"
                placeholder="お問い合わせ内容を記入してください。"
                rows={5}
              />
            </Box>
            <Spacer h={3} />
            <Button>送信</Button>
          </Flex>
        </form>
      </Layout>
    </>
  );
};

export default Home;
