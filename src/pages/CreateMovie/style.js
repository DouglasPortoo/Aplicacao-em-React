import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 150px auto;
grid-template-areas: 
"header"
"content";

main{  
  grid-area: content;
  margin:0 auto;
}
`

export const Form = styled.form`

    min-width: 1200px;
    margin: 40px 0;
   
    h1{
    margin-top:24px;
    margin-bottom: 40px;
  }

  .input{
    display: flex;
    gap: 40px;
  }

  textarea{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 100%;
    border-radius: 10px;
    padding: 19px 16px;
    margin: 40px 0;

    resize: none;
  }

  h2{
    color: var(--Gray, #999591);
    font-size: 20px;
    font-weight: 400;

    margin-top: 40px;
    margin-bottom: 24px;
  }

  section{
    max-width: 1200px;
    height: 100%; 

    border-radius: 8px;
    background: #0D0C0F;

    display: flex;
    padding: 16px;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    margin-bottom: 40px;

    flex-wrap: wrap;
  }
`