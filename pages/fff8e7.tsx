import type { NextPage } from "next";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { Page } from "../components/Page";

const Fff8e7: NextPage = () => {
  return (
    <>
      <Head>
        <title>FFF8E7</title>
      </Head>

      <Background />
    </>
  );
};

export default Fff8e7;

const Background = createGlobalStyle`
  body {
    background-color: #fff8e7;
  }
`;
