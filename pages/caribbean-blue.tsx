import type { NextPage } from "next";
import Head from "next/head";
import { CaribbeanBlue as Instance } from "../components/CaribbeanBlue";
import styled from "styled-components";

const CaribbeanBlue2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caribbean Blue</title>
      </Head>

      <Container>
        <Instance speed={50} />
      </Container>
    </>
  );
};

export default CaribbeanBlue2;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem;
`;
