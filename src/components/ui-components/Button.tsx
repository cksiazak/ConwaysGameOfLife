import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  font-size: 14px;
  margin: 2px;
`;

const Button = ({
  clickHandler,
  children,
  disabled,
}: {
  clickHandler: () => void;
  children: ReactNode;
  disabled?: boolean;
}) => {
  return (
    <ButtonStyle type='button' onClick={clickHandler} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
