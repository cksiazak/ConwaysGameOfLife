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
}: {
  grid: any[][];
  toggleBox: (row: number, col: number) => void;
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
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Grid;
