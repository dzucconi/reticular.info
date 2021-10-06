import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Page } from "../components/Page";

const ITEMS = [
  { text: "My word...it shall not return unto Me void,", checked: false },
  {
    text: "I will multiply them, and they shall not be few; I will make them honored, and they shall not be small,",
    checked: false,
  },
  { text: "They do not profit this people at all,", checked: false },
  {
    text: "They have built the high places of Topheth, which is in the valley of the son of Hinnom, to burn their sons and their daughters in the fire, which I did not command,",
    checked: false,
  },
  {
    text: "And they offered strange fire which he did not command",
    checked: false,
  },
  {
    text: "...and in regard to that tribe Moses said nothing about priests,",
    checked: false,
  },
];

const BiblicalLitotes: NextPage = () => {
  const [items, setItems] = useState(ITEMS);

  return (
    <>
      <Head>
        <title>Biblical Litotes</title>
      </Head>

      <Container>
        <ul>
          {items.map((item, i) => {
            return (
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    onChange={(event) => {
                      setItems((prevItems) => {
                        const nextItems = [...prevItems];
                        nextItems[i].checked = event.target.checked;
                        return nextItems;
                      });
                    }}
                  />
                  {item.checked ? <del>{item.text}</del> : item.text}
                </label>
              </li>
            );
          })}
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
