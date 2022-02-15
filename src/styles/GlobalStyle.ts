import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    background-color: #e5e5e5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
