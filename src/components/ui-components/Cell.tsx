import React from 'react';
import styled from 'styled-components';

const CellStyle = styled.div<{ active?: boolean }>`
  display: inline-block;
  border: 1px solid black;
  width: 10px;
  height: 10px;
  margin-left: -1px;
  margin-bottom: -1px;
  background: ${({ active }) => (active ? 'black' : 'white')};
  cursor: pointer;

  &:hover {
    background: red;
  }
`;

const Cell = ({
  active,
  toggleBox,
  row,
  col,
}: {
  active: boolean;
  toggleBox: (row: number, col: number) => void;
  row: number;
  col: number;
}) => {
  const clickHandler = () => {
    toggleBox(row, col);
  };

  return <CellStyle active={active} onClick={clickHandler} />;
};

export default Cell;
