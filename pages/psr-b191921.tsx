import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Page } from "../components/Page";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Psrb191921: NextPage = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const cycle = async () => {
      if (pulse) return;

      await wait(1337 - 40);
      setPulse(true);
      await wait(40);
      setPulse(false);
      await cycle();
    };

    cycle();
  }, [pulse]);

  return (
    <>
      <Head>
        <title>PSR B1919+21</title>
      </Head>

      <Container style={{ backgroundColor: pulse ? "white" : "black" }}>
        <h1>PSR B1919+21</h1>

        <p>
          <a
            href="https://en.wikipedia.org/wiki/PSR_B1919%2B21"
            target="_blank"
            rel="noreferrer"
          >
            Via Wikipedia
          </a>
        </p>

        <p>
          PSR B1919+21 is a pulsar with a period of 1.337 seconds and a pulse
          width of 0.04 second. It is notable for being the first radio pulsar
          ever discovered (in July 1967 by Jocelyn Bell Burnell). Its original
          designation was CP 1919 and it is also known as PSR J1921+2153. It is
          located in the constellation of Vulpecula.
        </p>
      </Container>
    </>
  );
};

export default Psrb191921;

const Container = styled(Page)`
  font-size: 5rem;

  h1 {
    margin-bottom: 1rem;
  }

  p + p {
    margin-top: 1rem;
  }
`;
