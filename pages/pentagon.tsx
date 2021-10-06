import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";

const Pentagon: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pentagon</title>
      </Head>

      <Background />

      <Image
        src="/pentagon-stack.jpg"
        alt="Pentagon"
        width="1398"
        height="1200"
      />
    </>
  );
};

export default Pentagon;

const Background = createGlobalStyle`
  body {
    background-color: black;
  }
`;
