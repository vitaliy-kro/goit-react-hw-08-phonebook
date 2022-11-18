import styled from 'styled-components';

export const ContactsItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
`;
export const Button = styled.button`
  padding: ${({ theme }) => theme.space[2]}px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii.normal};
  margin-left: ${({ theme }) => theme.space[3]}px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondBackground};
  }
`;
