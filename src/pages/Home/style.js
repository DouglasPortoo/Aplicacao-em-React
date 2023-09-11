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
  overflow-y: scroll;
  padding: 5.4rem 0; 
  margin-top: 2.5rem;
}

`

export const Content = styled.div`
    
  max-width:112.1rem;
  margin: 0 auto;

  div{
  display: flex;
  justify-content: space-between;
  gap:663px;
  align-items: center;
  margin-bottom: 4rem;

  h1{
    width: 100%;
  }
}
`