import type { NextPage } from "next";
import Head from "next/head";
import { Editor } from "../components/Editor";
import { Page } from "../components/Page";

const EverySingleThingBecomesAWord: NextPage = () => {
  return (
    <>
      <Head>
        <title>Every Single Thing Becomes a Word</title>
      </Head>

      <Page>
        <Editor changeValue={braid} />
      </Page>
    </>
  );
};

export default EverySingleThingBecomesAWord;

const zip = <T,>(rows: T[][]) =>
  rows[0].map((_, i) => rows.map((row) => row[i]));

const braid = (input: string) => {
  if (!input) return "";

  const tokens = input.split(/\s/g);

  const upTo = tokens.reduce((a, b) => (a.length > b.length ? a : b)).length;

  const normalized = tokens.map(
    (token) => token + Array(upTo - (token.length - 1)).join(" ")
  );

  const leaves = normalized.map((token) => token.split(""));

  return zip(leaves)
    .map((token) => token.join(""))
    .join("");
};
