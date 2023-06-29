import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 111.3rem;
  margin: 4rem auto;

  .titleFilm {
    margin: 2.4rem 0 8.3rem;

    display: flex;
    align-items: center;
    gap: 0 2rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }

    .stars {
      display: flex;
      align-items: center;
      gap: 0 1rem;
    }

    svg {
      height: 2rem;
      width: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .category {
    margin-bottom: 4rem;

    > span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-right: 0.8rem;
      padding: 0.8rem 1.6rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }

  > p {
    font-size: 1.6rem;
    text-align: justify;
    margin-bottom: 3rem;
  }
`;
