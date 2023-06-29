import styled from "styled-components";

// import { Link } from "react-router-dom"

export const Container = styled.header`
  width: 100%;

  padding: 2.4rem 12.3rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_1000};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    position: relative;
  }
`;

export const Search = styled.div`
  max-width: 110rem;
  width: 100%;
  padding: 0 4rem;
`;

export const Profile = styled.a`
  display: flex;
  align-items: center;
  gap: 0 0.9rem;

  > div {
    span {
      font-size: 1.4rem;
      font-weight: bold;
      white-space: nowrap;
    }
  }

  > img {
    width: 6.2rem;
    height: 6.2rem;

    border: 1px solid #3e3b47;
    border-radius: 3.5rem;
  }
`;

export const Logout = styled.button`
  border: none;
  background-color: transparent;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  position: absolute;
  top: 4rem;
  right: 7rem;
`;
