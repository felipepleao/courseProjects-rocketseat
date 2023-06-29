import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 111.3rem;
  margin: 4rem auto;
`;

export const Form = styled.form`
  > header {
    margin: 2.4rem 0 4rem;

    h1 {
      font-weight: 400;
    }
  }

  .formInput {
    display: flex;
    gap: 0 4rem;
  }

  textarea {
    margin: 4rem 0;
  }

  section {
    > h2 {
      font-size: 2rem;
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }

  .tags {
    margin: 2.4rem 0 4rem;
    display: flex;
    align-items: center;
    gap: 0 2.4rem;
    flex-wrap: wrap;

    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 1rem;
  }

  .Buttons {
    display: flex;
    align-items: center;
    gap: 0 4rem;
  }

  .Buttons button:nth-child(1) {
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`;
