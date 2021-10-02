import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Page } from "../components/Page";

const Tactics: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tactics</title>
      </Head>

      <Container>
        <ol>
          <li>INACCURATE QUOTATION</li>
          <li>TWISTED TRANSLATION</li>
          <li>HOOK</li>
          <li>IGNORING THE IMMEDIATE CONTEXT</li>
          <li>COLLAPSING CONTEXTS</li>
          <li>OVERSPECIFICATION</li>
          <li>WORDPLAY</li>
          <li>THE FIGURATIVE FALLACY</li>
          <li>SPECULATIVE READINGS OF PREDICTIVE PROPHECY</li>
          <li>SAYING BUT NOT CITING</li>
          <li>SELECTIVE CITING</li>
          <li>INADEQUATE EVIDENCE</li>
          <li>CONFUSED DEFINITION</li>
          <li>IGNORING ALTERNATIVE EXPLANATIONS</li>
          <li>THE OBVIOUS FALLACY</li>
          <li>VIRTUE BY ASSOCIATION</li>
          <li>ESOTERIC INTERPRETATION</li>
          <li>SUPPLEMENTING AUTHORITY</li>
          <li>REJECTING AUTHORITY</li>
          <li>WORLD-VIEW CONFUSION</li>
        </ol>
      </Container>
    </>
  );
};

export default Tactics;

const Container = styled(Page)`
  ol {
    margin-left: 3ch;
    list-style-type: decimal;
  }
`;
