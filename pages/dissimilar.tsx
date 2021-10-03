import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Page } from "../components/Page";

const shuffle = <T,>(xs: T[]) => {
  let length = xs.length;

  while (--length > 0) {
    let j = ~~(Math.random() * (length + 1));
    let t = xs[j];
    xs[j] = xs[length];
    xs[length] = t;
  }

  return xs;
};

const brands = [
  "Sony",
  "Vizio",
  "Fujitsu",
  "JVC",
  "Philips",
  "LG",
  "Sharp",
  "Toshiba",
  "Sanyo",
  "Hitachi",
  "Samsung",
];

const init = () => {
  const [first, second] = shuffle(brands);
  return [first, second];
};

const Dissimilar: NextPage = () => {
  const [tv, remote] = init();
  const [_key, setKey] = useState(0);

  const handleClick = () => {
    setKey((x) => x + 1);
  };

  return (
    <>
      <Head>
        <title>Dissimilar</title>
      </Head>

      <Page>
        <Button onClick={handleClick}>
          A {tv} television with a {remote} remote.
        </Button>
      </Page>
    </>
  );
};

export default Dissimilar;

const Button = styled.button`
  font-size: 3rem;
`;
