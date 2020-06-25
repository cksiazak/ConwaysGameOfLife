import React, { useState } from 'react';
import styled from 'styled-components';

// components
import Grid from './components/features/Grid';
import Controls from './components/features/Controls';
import { getNeighbors } from './utils/getNeighbor';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(250);
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
  const [clickable, setClickable] = useState(true);

  const toggleBox = (row: number, col: number) => {
    if (clickable) {
      const gridCopy = [...grid];
      gridCopy[row][col] = !gridCopy[row][col];
      setGrid(gridCopy);
    }
  };

  const gameLogic = () => {
    const newGrid = [...grid];

    grid.forEach((row, rowI) => {
      row.forEach((_, colI) => {
        let neighbors = getNeighbors(rowI, colI, grid, innerGrid);

        if (grid[rowI][colI] && (neighbors < 2 || neighbors > 3)) {
          newGrid[rowI][colI] = false;
        }
        if (!grid[rowI][colI] && neighbors === 3) {
          newGrid[rowI][colI] = true;
        }
      });
    });

    setGrid(newGrid);
    setGeneration((prevState) => prevState + 1);

    const id = setTimeout(() => {
      gameLogic();
    }, speed);
    setIntervalId(id);
  };

  return (
    <AppStyle className='App'>
      <h1>Conway's Game of Life</h1>
      <Grid grid={grid} toggleBox={toggleBox} clickable={clickable} />
      <h3>Generation: {generation}</h3>
      <Controls
        grid={grid}
        setGrid={setGrid}
        setIntervalId={setIntervalId}
        intervalId={intervalId}
        innerGrid={innerGrid}
        gameLogic={gameLogic}
        setGeneration={setGeneration}
        setClickable={setClickable}
        setSpeed={setSpeed}
        speed={speed}
        clickable={clickable}
      />
    </AppStyle>
  );
};

export default App;
