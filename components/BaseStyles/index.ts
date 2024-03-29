import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    box-sizing: border-box;
    font-variant-numeric: lining-nums;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  html,
  body {
    font-family: 'Source Code Pro', monospace;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body,
  html,
  li,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    list-style: none;
  }
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  p {
    line-height: 1.9;
    margin: 0;
  }
  a {
    cursor: 'pointer';
  }
`;
