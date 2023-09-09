import styled from "styled-components";


export const Container = styled.button`

width: 100%;
height: 5.6rem;

border-radius: 1.0rem;
border: 0;

background-color:${({ theme }) => theme.COLORS.PINK};
color:${({ theme }) => theme.COLORS.BLUE};

font-weight: 500;

margin-top: 1.6rem;
padding: 1.6rem;
`