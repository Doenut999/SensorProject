import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

`

export default GlobalStyle