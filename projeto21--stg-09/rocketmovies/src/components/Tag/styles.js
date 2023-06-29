import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-right: 0.8rem;
  padding: 0.5rem 1.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;