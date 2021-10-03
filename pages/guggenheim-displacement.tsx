import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Page } from "../components/Page";

const GuggenheimDisplacement: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guggenheim Displacement</title>
      </Head>

      <Container>
        <figure>
          <Image
            src="/guggenheim-1.jpg"
            width="1000"
            height="667"
            alt="Guggenheim Displacement #1"
          />
        </figure>

        <figure>
          <Image
            src="/guggenheim-2.jpg"
            width="750"
            height="563"
            alt="Guggenheim Displacement #2"
          />
        </figure>
      </Container>
    </>
  );
};

export default GuggenheimDisplacement;

const Container = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  figure {
    display: flex;
  }

  figure + figure {
    margin-top: 2rem;
  }
`;
