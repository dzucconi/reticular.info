import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";
import { Page } from "../components/Page";

const CallOfContinuity: NextPage = () => {
  return (
    <>
      <Head>
        <title>Call Of Continuity</title>
      </Head>

      <Background />

      <Page>
        <Image
          src="/recycle.jpg"
          width="800"
          height="774"
          alt="Recycle Symbol"
        />
      </Page>
    </>
  );
};

export default CallOfContinuity;

const Background = createGlobalStyle`
  body {
    background-color: gray;
  }
`;
