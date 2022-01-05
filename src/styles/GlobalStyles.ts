import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root{
    height: 100%;
  }

  *, input, button {
    border: 0;
    outline: 0;
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
