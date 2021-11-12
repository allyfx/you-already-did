import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  div {
    font-family: 'Quicksand';
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyles };
