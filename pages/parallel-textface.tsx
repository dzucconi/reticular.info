import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Page } from "../components/Page";

const ParallelTextface: NextPage = () => {
  return (
    <>
      <Head>
        <title>Parallel Textface</title>
      </Head>

      <Container>
        <Image
          src="/parallel-textface.jpg"
          alt="Independent Text Pulls Dependent Text Along"
          width="1000"
          height="773"
        />
      </Container>
    </>
  );
};

export default ParallelTextface;

const Container = styled(Page)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;
