import styled from "styled-components";

export const Container = styled.div `
height: 100vh;

>header{
  width: 100%;
  height: 14.4rem;

  background: rgba(255, 133, 155, 0.05);

  padding: 6.4rem ;
}
`

export const Form = styled.form`
max-width: 340px;
margin: 0 80rem;

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

text-align: center;




div:nth-child(3) {
  
  margin-bottom: 2.4rem;
}
`

export const Avatar = styled.div`
  position: relative;
  margin: -9rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  >img{
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 9.3rem;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
  

`