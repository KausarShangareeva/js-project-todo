import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Light mode (default) */
  :root {
    --color-primary: #C4A484;
    --color-primary-dark: #A67B5B;
    --color-secondary: #8B7355;
    --color-accent: #D4A574;
    --color-background: #FAF6F1;
    --color-background-light: #FDF9F5;
    --color-card: #FFFFFF;
    --color-text: #4A3728;
    --color-text-light: #7D6B5D;
    --color-border: #E8DDD4;
    --color-cream: #F5EDE4;
    --color-brown-light: #E6D5C3;
  }

  /* Dark mode */
  .dark-mode {
    --color-background: #1a1512;
    --color-background-light: #201b14;
    --color-card: #2d261f;
    --color-text: #f5ede4;
    --color-text-light: #a89585;
    --color-border: #3d342a;
    --color-cream: #1f1a15;
  }

  /* Banana mode */
  .banana-mode {
    --color-primary: #E6A623;
    --color-primary-dark: #CC8F00;
    --color-secondary: #D4940A;
    --color-background: #8d6f05;
    --color-background-light: #FFDA44;
    --color-card: #FFE566;
    --color-text: #5C4813;
    --color-text-light: #8B7320;
    --color-border: #E6B800;
    --color-cream: #F0B800;
  }

  /* Sky mode */
  .sky-mode {
    --color-primary: #7B8CDE;
    --color-primary-dark: #5A6BC9;
    --color-secondary: #9BA3D5;
    --color-background: #4A5A8A;
    --color-background-light: #8FABD6;
    --color-card: rgba(255, 255, 255, 0.15);
    --color-text: #FFFFFF;
    --color-text-light: #D4D8F0;
    --color-border: rgba(255, 255, 255, 0.2);
    --color-cream: #E8A87C;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(180deg, var(--color-background-light) 0%, var(--color-cream) 100%);
    color: var(--color-text);
    line-height: 1.5;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    background: linear-gradient(180deg, var(--color-background-light) 0%, var(--color-cream) 100%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input, textarea {
    font: inherit;
  }
`;
