import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Page } from "../components/Page";

const AnOpenWindow: NextPage = () => {
  return (
    <>
      <Head>
        <title>An Open Window</title>
      </Head>

      <Container>
        <Image
          src="/window.png"
          alt="An Open Window"
          width="800"
          height="568"
        />
      </Container>
    </>
  );
};

export default AnOpenWindow;

const fade = keyframes`
  50% { background-color: black }
`;

const Container = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fade} 10s linear infinite;
`;
