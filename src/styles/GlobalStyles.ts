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

  :root {
    --primary: #6A81D1;
    --button-navigation: #5969F5;
    --button-navigation2: #ABB2EB;
    --font-color: #505873;
    --white: #FFFFFF;
    --input-label: #263238;
    --title-text-color: #252B42;
  }
`
