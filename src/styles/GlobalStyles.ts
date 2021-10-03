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
    --status-bar-complete: #5969F5;
    --status-bar-incomplete: #D6DAFB;
    --font-color: #505873;
    --white: #FFFFFF;
    --input-label: #263238;
  }
`
