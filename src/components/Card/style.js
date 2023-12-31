import styled from 'styled-components'

export const Container = styled.button`
  
  width: 100%;
  background: rgba(255, 133, 155, 0.05);
  
  border-radius: 16px;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h2 {
    flex:1;
    text-align: left;
    
    font-size: 20px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 1.5rem;
    
  }

  >h3{

    flex:1;
    text-align: left;

    font-size: 1.6rem;
    font-weight: 400;
    
    color: var(--Gray, #999591);

    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    
  }

  >footer{
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`

export const Star = styled.span`
  display: flex;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;

  >svg{
    color:  ${({ theme }) => theme.COLORS.PINK};
  }
`