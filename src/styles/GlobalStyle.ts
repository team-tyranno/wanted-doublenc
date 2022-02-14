import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`

  body {
    background: #E5E5E5;
  }
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    background-color: #ffffff;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
