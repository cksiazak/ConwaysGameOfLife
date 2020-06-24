import React from 'react';
import styled from 'styled-components';

// components
import Cell from '../ui-components/Cell';

const Row = styled.div`
  display: flex;
`;

const Grid = ({
  grid,
  toggleBox,
  clickable,
}: {
  grid: any[][];
  toggleBox: (row: number, col: number) => void;
  clickable: boolean;
}) => {
  return (
    <div>
      {grid.map((row, rowKey) => (
        <Row key={rowKey}>
          {row.map((_, colKey) => (
            <Cell
              key={colKey}
              active={grid[rowKey][colKey]}
              toggleBox={toggleBox}
              row={rowKey}
              col={colKey}
              clickable={clickable}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Grid;
