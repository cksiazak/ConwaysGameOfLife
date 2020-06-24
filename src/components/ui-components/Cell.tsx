import React from 'react';
import styled from 'styled-components';

const CellStyle = styled.div<{ active: boolean; clickable: boolean }>`
  display: inline-block;
  border: 1px solid black;
  width: 10px;
  height: 10px;
  margin-left: -1px;
  margin-bottom: -1px;
  background: ${({ active }) => (active ? 'black' : 'white')};

  &:hover {
    background: ${({ clickable }) => (clickable ? 'red' : '')};
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'cursor')};
  }
`;

const Cell = ({
  active,
  toggleBox,
  row,
  col,
  clickable,
}: {
  active: boolean;
  toggleBox: (row: number, col: number) => void;
  row: number;
  col: number;
  clickable: boolean;
}) => {
  const clickHandler = () => {
    toggleBox(row, col);
  };

  return (
    <CellStyle active={active} onClick={clickHandler} clickable={clickable} />
  );
};

export default Cell;
