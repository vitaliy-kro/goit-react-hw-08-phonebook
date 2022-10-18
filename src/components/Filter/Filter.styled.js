import { Field } from 'formik';
import styled from 'styled-components';
export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;
export const Input = styled(Field)`
  padding: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
`;
