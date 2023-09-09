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
/* 
input{
display: flex;
padding: 1.9rem 2.4rem;
align-items: flex-start;
flex: 1;
border-radius: 10px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};;
} */

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
}

span{
color: ${({ theme }) => theme.COLORS.GRAY_100};
font-size: 1.4rem;
font-weight: 400;

display: flex;
justify-content: flex-end
}
}

>img{
width: 6.4rem;
height: 6.4rem;
border-radius: 50%;
}

`