import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html, body {
      font-family: "Ubuntu","Open Sans",Helvetica,Arial,sans-serif;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
  `;

export default GlobalStyles;