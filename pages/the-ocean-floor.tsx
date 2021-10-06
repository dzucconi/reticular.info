import type { NextPage } from "next";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const TheOceanFloor: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Ocean Floor</title>
      </Head>

      <Background />
    </>
  );
};

export default TheOceanFloor;

const Background = createGlobalStyle`
  body {
    background-color: #81b7db;
    background-image: url("/ocean-floor.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
