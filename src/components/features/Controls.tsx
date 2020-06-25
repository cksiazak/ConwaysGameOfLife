import React from 'react';
import styled from 'styled-components';

// components
import Button from '../ui-components/Button';

const ControlCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
`;

const Controls = ({
  grid,
  setGrid,
  intervalId,
  innerGrid,
  gameLogic,
  setGeneration,
  setClickable,
  speed,
  setSpeed,
  clickable,
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
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  clickable: boolean;
}) => {
  const seed = () => {
    const gridCopy = Array(innerGrid.rows)
      .fill(null)
      .map(() => Array(innerGrid.cols).fill(false));

    grid.forEach((row, rowI) => {
      row.forEach((_, colI) => {
        if (Math.floor(Math.random() * 3) === 1) {
          gridCopy[rowI][colI] = true;
        }
      });
    });

    setGrid(gridCopy);
  };

  const pattern1 = () => {
    const gridCopy = Array(innerGrid.rows)
      .fill(null)
      .map(() => Array(innerGrid.cols).fill(false));

    grid.forEach((row, rowI) => {
      row.forEach((_, colI) => {
        if ((rowI * 5) % 4 === 0) {
          gridCopy[rowI][colI] = true;
        }
      });
    });

    setGrid(gridCopy);
    setGeneration(0);
  };

  const pattern2 = () => {
    const gridCopy = Array(innerGrid.rows)
      .fill(null)
      .map(() => Array(innerGrid.cols).fill(false));

    grid.forEach((row, rowI) => {
      row.forEach((_, colI) => {
        if ((colI * rowI) % 4 === 0) {
          gridCopy[rowI][colI] = true;
        }
      });
    });

    setGrid(gridCopy);
    setGeneration(0);
  };

  const pattern3 = () => {
    const gridCopy = Array(innerGrid.rows)
      .fill(null)
      .map(() => Array(innerGrid.cols).fill(false));

    grid.forEach((row, rowI) => {
      row.forEach((_, colI) => {
        if (colI ** rowI % 2 === 0) {
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
    global.clearTimeout(intervalId);
    setGeneration(0);
    setClickable(true);
  };

  const speedHandler = (e: {
    target: { value: React.SetStateAction<any> };
  }) => {
    setSpeed(e.target.value);
  };
  return (
    <ControlCenter>
      <label htmlFor='speed'>Speed(ms)</label>
      <input name='speed' type='text' value={speed} onChange={speedHandler} />
      <ButtonWrapper>
        <Button clickHandler={seed} disabled={!clickable}>
          Random
        </Button>
        <Button clickHandler={start} disabled={!clickable}>
          Start
        </Button>
        <Button clickHandler={stop}>Stop</Button>
        <Button clickHandler={emptyGrid} disabled={!clickable}>
          Clear Grid
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button clickHandler={pattern1} disabled={!clickable}>
          Stripes
        </Button>
        <Button clickHandler={pattern2} disabled={!clickable}>
          Squares
        </Button>
        <Button clickHandler={pattern3} disabled={!clickable}>
          Rising Sun
        </Button>
      </ButtonWrapper>
    </ControlCenter>
  );
};

export default Controls;
