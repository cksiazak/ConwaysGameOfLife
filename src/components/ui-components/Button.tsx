import React, { ReactNode } from 'react';

const Button = ({
  clickHandler,
  children,
}: {
  clickHandler: () => void;
  children: ReactNode;
}) => {
  return (
    <button type='button' onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
