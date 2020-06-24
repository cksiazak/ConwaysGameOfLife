import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  cursor: pointer;
`;

const Button = ({
  clickHandler,
  children,
}: {
  clickHandler: () => void;
  children: ReactNode;
}) => {
  return (
    <ButtonStyle type='button' onClick={clickHandler}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
