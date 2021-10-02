import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Page } from "../components/Page";

const BiblicalLitotes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Biblical Litotes</title>
      </Head>

      <Container>
        <ul>
          <li>
            <input type="checkbox" checked />
            &ldquo;My word...it shall not return unto Me void,&rdquo;
          </li>

          <li>
            <input type="checkbox" checked />
            &ldquo;I will multiply them, and they shall not be few; I will make
            them honored, and they shall not be small,&rdquo;
          </li>

          <li>
            <input type="checkbox" checked />
            &ldquo;They do not profit this people at all,&rdquo;
          </li>

          <li>
            <input type="checkbox" checked />
            &ldquo;They have built the high places of Topheth, which is in the
            valley of the son of Hinnom, to burn their sons and their daughters
            in the fire, which I did not command,&rdquo;
          </li>

          <li>
            <input type="checkbox" checked />
            &ldquo;And they offered strange fire which he did not command&rdquo;
          </li>

          <li>
            <input type="checkbox" checked />
            &ldquo;...and in regard to that tribe Moses said nothing about
            priests,&rdquo;
          </li>
        </ul>
      </Container>
    </>
  );
};

export default BiblicalLitotes;

const Container = styled(Page)`
  background-color: red;
  color: white;
  user-select: none;

  input {
    margin-right: 1rem;
  }

  li {
    margin: 1rem;
  }
`;
