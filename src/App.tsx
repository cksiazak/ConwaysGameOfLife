import React, { useState } from 'react';
import styled from 'styled-components';

// components
import Grid from './components/features/Grid';
import Controls from './components/features/Controls';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [generation, setGeneration] = useState(0);
  const [speed] = useState(250);
  const [innerGrid] = useState({
    rows: 25,
    cols: 25,
  });
  const [grid, setGrid] = useState(() =>
    Array(innerGrid.rows)
      .fill(null)
      .map(() => Array(innerGrid.cols).fill(false))
  );
  const [intervalId, setIntervalId] = useState<number>();

  const toggleBox = (row: number, col: number) => {
    const gridCopy = grid.map((array) => array.slice());
    gridCopy[row][col] = !gridCopy[row][col];
    setGrid(gridCopy);
  };

  const gameLogic = () => {
    const currentGrid = grid;
    const gridClone = grid.map((array) => array.slice());

    currentGrid.forEach((row, rowI) => {
      row.forEach((_, colI) => {
        // increase count per each neighbor
        let count = 0;

        // top neighbor
        if (rowI > 0) {
          if (grid[rowI - 1][colI]) {
            count++;
          }
        }
        if (rowI > 0 && colI > 0) {
          // top-left neighbor
          if (grid[rowI - 1][colI - 1]) {
            count++;
          }
        }
        if (rowI > 0 && colI < innerGrid.cols - 1) {
          // top right neighbor
          if (grid[rowI - 1][colI + 1]) {
            count++;
          }
        }
        if (colI < innerGrid.cols - 1) {
          // right neighbor
          if (grid[rowI][colI + 1]) {
            count++;
          }
        }
        // left neighbor
        if (colI > 0) {
          if (grid[rowI][colI - 1]) {
            count++;
          }
        }
        // bottom neighbor
        if (rowI < innerGrid.rows - 1) {
          if (grid[rowI + 1][colI]) {
            count++;
          }
        }
        // bottom left neighbor
        if (rowI < innerGrid.rows - 1 && colI > 0) {
          if (grid[rowI + 1][colI - 1]) {
            count++;
          }
        }
        // bottom right neighbor
        if (rowI < innerGrid.rows - 1 && colI < innerGrid.cols - 1) {
          if (grid[rowI + 1][colI + 1]) {
            count++;
          }
        }

        // check grid and count to verify rules on life/death
        if (grid[rowI][colI] && (count < 2 || count > 3)) {
          gridClone[rowI][colI] = false;
        }
        if (!grid[rowI][colI] && count === 3) {
          gridClone[rowI][colI] = true;
        }
      });
    });

    setGrid(gridClone);
    setGeneration((prevState) => prevState + 1);
  };

  return (
    <AppStyle className='App'>
      <h1>Conway's Game of Life</h1>
      <Grid grid={grid} toggleBox={toggleBox} />
      <h3>Generation: {generation}</h3>
      <Controls
        grid={grid}
        setGrid={setGrid}
        setIntervalId={setIntervalId}
        intervalId={intervalId}
        innerGrid={innerGrid}
        gameLogic={gameLogic}
        speed={speed}
      />
    </AppStyle>
  );
};

export default App;
