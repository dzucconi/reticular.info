import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  html,
  body,
  #__next {
    height: 100%;
    min-height: 100%;
  }
  
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
    color: black;
    background-color: white;
    -webkit-text-size-adjust: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.33;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  button {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body,
  input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
