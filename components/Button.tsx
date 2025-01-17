import * as React from 'react';
import styled from 'styled-components';

import { ctrlColor, ctrlColorHover } from '../styles';

const StyledButton = styled.button`
  background-color: ${ctrlColor};
  border-color: transparent;
  color: #ffffff;
  padding: 2px 1px 2px 1px;
  cursor: pointer;
  text-align: center;
  border-radius: 6px;
  user-select: none;
  :hover {
    background-color: ${ctrlColorHover};
  }
  width: 72px;
  height: 40px;
  margin-left: 4px;
`;
interface Props extends React.PropsWithChildren {
  onClick: () => void;
  name: string;
}
const Button: React.FC<Props> = ({ children, onClick, name }) => {
  return (
    <StyledButton aria-label={name} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
