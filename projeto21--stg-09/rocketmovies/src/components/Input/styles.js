import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;

    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`;
