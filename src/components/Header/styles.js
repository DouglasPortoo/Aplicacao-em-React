import styled from "styled-components";

export const Container = styled.header`
grid-area: header;

width: 100%;
height: 10.5rem;
padding: 6.4rem 12.3rem;

border-bottom: 1px solid #3E3B47;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

display: flex;
align-items: center;
justify-content: space-between;
gap:6.4rem;

h1{
  color: ${({ theme }) => theme.COLORS.PINK};
}
`

export const Menu = styled.div`

display: flex;
height: 6.8rem;
align-items: center;
gap: .9rem;


>div{
display: flex;
flex-direction: column;

p{
color: ${({ theme }) => theme.COLORS.WHITE};
font-size: 1.4rem;
font-weight: 700;
width: 100px;
display: flex;
justify-content: flex-end
}

span{
color: ${({ theme }) => theme.COLORS.GRAY_100};
font-size: 1.4rem;
font-weight: 400;

display: flex;
justify-content: flex-end
}
}

>a,img{
width: 6.4rem;
height: 6.4rem;
border-radius: 50%;
}

`