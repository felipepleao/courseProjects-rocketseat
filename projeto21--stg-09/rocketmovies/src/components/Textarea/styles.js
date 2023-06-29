import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 25rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 1rem;

  resize: none;
  padding: 1.2rem;

  font-size: 1.6rem;
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  }
`;
