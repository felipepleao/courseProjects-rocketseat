import styled from "styled-components";

export const Container = styled.button`
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 1.6rem;

  text-align: start;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
  }

  > span {
    display: flex;
    gap: 0 0.6rem;
    margin: 0.8rem 0 1.5rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > p {
    font-size: 1.6rem;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 3rem;
  }
`;
