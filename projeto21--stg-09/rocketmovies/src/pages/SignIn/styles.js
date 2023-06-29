import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch; 
 
  margin: 0 auto;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16.3rem;
  
  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK };
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 4.8rem 0;
  }

  > a {
    margin: 0 auto;
    display: inline-block;
    margin-top: 4.2rem;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK };
  }
`;