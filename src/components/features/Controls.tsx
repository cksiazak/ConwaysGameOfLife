import React from 'react';

// components
import Button from '../ui-components/Button';

const Controls = ({
  grid,
  setGrid,
  setIntervalId,
  intervalId,
  innerGrid,
  gameLogic,
  speed,
}: {
  grid: any[][];
  setGrid: React.Dispatch<React.SetStateAction<any[][]>>;
  setIntervalId: React.Dispatch<React.SetStateAction<number | undefined>>;
  intervalId: number | undefined;
  innerGrid: {
    rows: number;
    cols: number;
  };
  gameLogic: () => void;
  speed: number;
}) => {
  const seed = () => {
    const gridCopy = grid.map((array) => array.slice());

    grid.forEach((row, rowI) => {
      row.forEach((_, colI) => {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[rowI][colI] = true;
        }
      });
    });

    setGrid(gridCopy);
  };

  const start = () => {
    const id = setInterval(gameLogic, speed);
    setIntervalId(id);
  };

  const stop = () => {
    global.clearInterval(intervalId);
  };

  const emptyGrid = () => {
    const empty = Array(innerGrid.rows)
      .fill(null)
      .map(() => Array(innerGrid.cols).fill(false));

    setGrid(empty);
  };
  return (
    <>
      <Button clickHandler={seed}>Random</Button>
      <Button clickHandler={start}>Start</Button>
      <Button clickHandler={stop}>Stop</Button>
      <Button clickHandler={emptyGrid}>Clear Grid</Button>
    </>
  );
};

export default Controls;
