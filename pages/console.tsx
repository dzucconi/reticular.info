import type { NextPage } from "next";
import Head from "next/head";
import { Console } from "../components/Console";
import { Page } from "../components/Page";

const ConsolePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Console</title>
      </Head>

      <Console />
    </>
  );
};

export default ConsolePage;
