import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Page } from "../components/Page";

const AThroughY: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Through Y</title>
      </Head>

      <Container>
        <ol>
          <li>A. Hear no evil, see no evil, speak no evil.</li>
          <li>B. Become incredulous and indignant.</li>
          <li>C. Create rumor mongers.</li>
          <li>D. Use a straw man.</li>
          <li>E. Sidetrack opponents with name calling and ridicule.</li>
          <li>F. Hit and run.</li>
          <li>G. Question motives.</li>
          <li>H. Invoke authority.</li>
          <li>I. Play dumb.</li>
          <li>J. Associate opponent charges with old news.</li>
          <li>K. Establish and rely upon fall-back positions.</li>
          <li>L. Enigmas have no solution.</li>
          <li>M. Alice in wonderland logic.</li>
          <li>N. Demand complete solutions.</li>
          <li>O. Fit the facts to alternate conclusions.</li>
          <li>P. Vanish evidence and witnesses.</li>
          <li>Q. Change the subject.</li>
          <li>R. Emotionalize, antagonize, and goad opponents.</li>
          <li>S. Ignore proof presented, demand impossible proofs.</li>
          <li>T. False evidence.</li>
          <li>
            U. Call a grand jury, special prosecutor, or other empowered
            investigative body.
          </li>
          <li>V. Manufacture a new truth.</li>
          <li>W. Create bigger distractions.</li>
          <li>X. Silence critics.</li>
          <li>Y. Vanish.</li>
          <li>Z.</li>
        </ol>
      </Container>
    </>
  );
};

export default AThroughY;

const Container = styled(Page)`
  font-family: Courier, monospace;
`;
