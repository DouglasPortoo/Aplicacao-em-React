import styled from "styled-components";

export const Container = styled.input`

display: flex;
padding: 1.9rem 2.4rem;
align-items: flex-start;
flex: 1;
border-radius: 10px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
color: ${({ theme }) => theme.COLORS.WHITE}

`