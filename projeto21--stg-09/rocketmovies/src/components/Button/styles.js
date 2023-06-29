import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  margin-top: 1.5rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_900};

  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10px;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`;