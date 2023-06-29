import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_900};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_900}` : "none"};
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
  
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }
`;