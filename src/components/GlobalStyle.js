import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 16px;
  }
  body {
    background-color: #1b1b1b;
    z-index: 1;
    color: white;
    font-family: 'Open Sans', monospace;
  }

`

export default GlobalStyle