import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { FrameInterval } from "frame-interval";
import { useEffect, useRef, useState } from "react";

const ThreeHundredAndSixty: NextPage = () => {
  const [degrees, setDegrees] = useState(0);

  const fiRef = useRef(
    new FrameInterval(60, () => {
      setDegrees((i) => {
        return i >= 360 ? 0 : i + 1;
      });
    })
  );

  useEffect(() => {
    const fi = fiRef.current;

    fi.start();

    return () => {
      fi.stop();
    };
  }, []);

  return (
    <>
      <Head>
        <title>360</title>
      </Head>

      <Container>
        <Degrees style={{ transform: `rotate(${degrees}deg)` }}>
          {degrees}°
        </Degrees>
      </Container>
    </>
  );
};

export default ThreeHundredAndSixty;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Degrees = styled.div`
  font-size: 6vw;
  width: 4ch;
  text-align: center;
  display: inline-block;
`;
