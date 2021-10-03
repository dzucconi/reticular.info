import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Page } from "../components/Page";

const Shining: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shining (Ghost)</title>
      </Head>

      <Container>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="315"
          src="https://www.youtube-nocookie.com/embed/sI4RzLXvcco"
          title="YouTube video player"
          width="560"
        />

        <p>
          The soul of an angel, touched from above
          <br />
          Your spirit is shining
          <br />
          Surrounded by love
        </p>
      </Container>
    </>
  );
};

export default Shining;

const Container = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  iframe {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  p {
    font-style: italic;
  }
`;
