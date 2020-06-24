import React from 'react';
import styled from 'styled-components';

// components
import Button from '../ui-components/Button';

const ButtonWrapper = styled.div`
  display: flex;
`;

const Controls = ({
  grid,
  setGrid,
  intervalId,
  innerGrid,
  gameLogic,
  setGeneration,
  setClickable,
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
  setGeneration: React.Dispatch<React.SetStateAction<number>>;
  setClickable: React.Dispatch<React.SetStateAction<boolean>>;
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
    gameLogic();
    setClickable(false);
  };

  const stop = () => {
    global.clearTimeout(intervalId);
    setClickable(true);
  };

  const emptyGrid = () => {
    const empty = Array(innerGrid.rows)
      .fill(null)
      .map(() => Array(innerGrid.cols).fill(false));

    setGrid(empty);
    setGeneration(0);
    global.clearTimeout(intervalId);
    setClickable(true);
  };
  return (
    <ButtonWrapper>
      <Button clickHandler={seed}>Random</Button>
      <Button clickHandler={start}>Start</Button>
      <Button clickHandler={stop}>Stop</Button>
      <Button clickHandler={emptyGrid}>Clear Grid</Button>
    </ButtonWrapper>
  );
};

export default Controls;
