import styled from 'styled-components'

export const Container = styled.section`
  
  padding: 3.2rem;
  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);
  margin-bottom: 2.4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 20px;
    font-weight: 400;
  }

  h3{
    
    color: var(--Gray, #999591);
    margin: 1.5rem 0;
    font-size: 1.6rem;
    font-weight: 400;
    padding-bottom: 2.0rem;
    
  }
`