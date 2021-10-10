import type { NextPage } from "next";
import Head from "next/head";
import useWebAnimations from "@wellyshen/use-web-animations";
import { useCallback, useState } from "react";
import { Page } from "../components/Page";
import { sample } from "../util/sample";
import styled from "styled-components";

const PLACES = [
  "Attic",
  "Bedroom",
  "Book",
  "Brain",
  "Cage",
  "Cave",
  "Church",
  "Dirt",
  "Distance",
  "Dream",
  "Entrance",
  "Forest",
  "Gallery",
  "Garbage",
  "Garden",
  "Gospel",
  "Grass",
  "Hands of God",
  "Hospital",
  "Hotel",
  "House",
  "Image",
  "Jungle",
  "Kingdom",
  "Library",
  "Mirror",
  "Nursery",
  "Painting",
  "Poem",
  "Prison",
  "Road",
  "Roadway",
  "Same Room",
  "School",
  "Shrine",
  "Sky",
  "Text",
  "Well",
  "Woods",
  "Zoo",
];

const AMirror: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Mirror</title>
      </Head>

      <Page>
        <Container>
          A Mirror in the&nbsp;
          <Place />
        </Container>
      </Page>
    </>
  );
};

export default AMirror;

const DURATION = 1500;

const Container = styled.div`
  display: flex;
  font-size: 3rem;
`;

const Place: React.FC = () => {
  const [[outgoingPlace, incomingPlace], setPlace] = useState<[string, string]>(
    [sample(PLACES), sample(PLACES)]
  );

  const next = useCallback(() => {
    setPlace((prevPlace) => {
      return [prevPlace[1], sample(PLACES)];
    });
  }, []);

  const { ref: incomingRef, getAnimation: getIncomingAnimation } =
    useWebAnimations({
      keyframes: [
        { transform: "translate3d(0, 100%, 0)", opacity: 0 },
        { transform: "translate3d(0, 0, 0)", opacity: 1 },
      ],
      animationOptions: {
        duration: DURATION,
        fill: "both",
        easing: "ease-in-out",
      },
      onFinish: () => {
        getIncomingAnimation()?.play();
      },
    });

  const { ref: outgoingRef, getAnimation: getOutgoingAnimation } =
    useWebAnimations({
      keyframes: [
        { transform: "translate3d(0, 0, 0)", opacity: 1 },
        { transform: "translate3d(0, -100%, 0)", opacity: 0 },
      ],
      animationOptions: {
        duration: DURATION,
        fill: "both",
        easing: "ease-in-out",
      },
      onFinish: () => {
        next();
        getOutgoingAnimation()?.play();
      },
    });

  return (
    <Wrapper>
      <Cell ref={outgoingRef as any}>{outgoingPlace}</Cell>
      <Cell ref={incomingRef as any}>{incomingPlace}</Cell>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Cell = styled.div`
  position: absolute;
  white-space: nowrap;
`;
