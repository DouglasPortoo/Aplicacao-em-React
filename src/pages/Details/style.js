import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 10.5rem auto;
grid-template-areas: 
"header"
"content"
;

main{
  grid-area: content;
  overflow-y: auto;
  padding: 5.4rem 0; 
  margin-top: 2.5rem;
  
}

`

export const Content = styled.div`
    
  max-width:112.1rem;
  margin: 0 auto;

  h2{
    font-size: 36px;
    font-weight: 500;
    margin: 2.4rem 0;
  }

  h3{ 
    text-align: justify;
    font-size: 16px;
    font-weight: 400;
    margin: 4rem 0 80px; 
  
}

  section{
    display: flex;
    gap:8px;
    margin: 0 0 4rem 0;
    align-items: center;

    img{
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    p,span{
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
    }

    svg {
      color:${({theme})=> theme.COLORS.PINK}
    }
  }


`