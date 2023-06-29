import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    padding: 6rem 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    a {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 0 .8rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 34.4rem;
  margin: 1rem auto;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  margin: -10rem auto 6.4rem;
  position: relative;

  display: flex;
  justify-content: center;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    height: 4.8rem;
    width: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    position: absolute;
    right: 8rem;
    bottom: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
  }
`;
