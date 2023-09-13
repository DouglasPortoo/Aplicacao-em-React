import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;

background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
color: ${({ theme }) => theme.COLORS.WHITE};

border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

margin-bottom:8px;
border-radius: 10px;
padding-right: 16px;

>button {
  background:none
}

.button-delete{
  color: ${({ theme }) => theme.COLORS.PINK};
}

.button-add{
  color: ${({ theme }) => theme.COLORS.WHITE};
}

>input{
  height:56px;
  width:100%;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;
  padding-left:16px;

  &::placeholder{
    color: ${({ theme }) => theme.GRAY_100};
  }
}
`