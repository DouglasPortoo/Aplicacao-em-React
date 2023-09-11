import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  

  button {
    font-size: 16px;
    color: ${({theme})=> theme.COLORS.PINK};
    background: transparent;
  }

  svg{
    color: ${({theme})=> theme.COLORS.PINK};
  }
`