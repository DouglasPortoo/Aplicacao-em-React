import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size:62.5%
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto Slab', serif;
    outline: none;
    font-size: 1.6rem;
  }

  input, button, textarea{
    font-family: 'Roboto Slab', serif;
    outline: none;
    font-size: 1.6rem;
    border: 0;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s
  }

  button:hover, a:hover {
    
    filter: brightness(0.9);
  }

`