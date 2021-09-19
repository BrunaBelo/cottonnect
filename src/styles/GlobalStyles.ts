import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  *, input, button {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }
`
