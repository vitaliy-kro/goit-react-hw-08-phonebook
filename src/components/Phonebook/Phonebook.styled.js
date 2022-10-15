import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContactForm = styled(Form)`
  width: 300px;
  padding: ${({ theme }) => theme.space[2]}px;
  display: flex;
  flex-direction: column;
  border: ${({ theme }) => theme.borders.normal}
    ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;
export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
export const Input = styled(Field)`
  padding: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;
export const Button = styled.button`
  padding: ${({ theme }) => theme.space[2]}px;
  background-color: transparent;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondBackground};
  }
`;
