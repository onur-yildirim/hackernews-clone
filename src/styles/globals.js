import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html, body {
      font-family: "Open Sans",Helvetica,Arial,sans-serif;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      background-color:${props => props.theme.background}
    }
    a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
    span>svg {
      margin-bottom: -2px;
    }
  `;

export default GlobalStyles;