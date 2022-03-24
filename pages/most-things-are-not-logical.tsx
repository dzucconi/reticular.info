import type { NextPage } from "next";
import Head from "next/head";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Page } from "../components/Page";

const MostThingsAreNotLogical: NextPage = () => {
  return (
    <>
      <Head>
        <title>Most Things Are Not Logical</title>
      </Head>

      <Styles />

      <Page>
        <Svg viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path
              id="circle"
              d="
              M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text>
            <textPath xlinkHref="#circle">
              I do everything I say — word for word. I am never a minute late. I
              show no excitement. Calm, direct, pointed, non-energetic. ALL
              ABOUT BUSINESS. I am not impulsive. I do not react. I am always
              proactive. I know the outcome of every encounter. I do not
              hesitate. I constantly make decisions & change them as needed. I
              give IMMEDIATE feedback, non-emotionally. I speak rarely. When I
              do — CRISP and CONCISE. I call bullshit immediately. My hands are
              always in my pockets or gesturing. I am fully present.
            </textPath>
          </text>
        </Svg>
      </Page>
    </>
  );
};

export default MostThingsAreNotLogical;

const Styles = createGlobalStyle`
  body {
    background-color: black;
    color: white;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Svg = styled.svg`
  width: 100%;
  height: auto;
  transform-origin: center;
  fill: currentColor;
  font-size: 0.063em;
  animation: ${rotate} 100s linear infinite;
`;
