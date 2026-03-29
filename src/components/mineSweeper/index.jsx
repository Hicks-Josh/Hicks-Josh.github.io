import React from 'react';
import { useMinesweeper } from '@ebinas/react-use-minesweeper';

import Board from './Board.jsx';

function calculateGridSize() {
  const cellSize = 30;

  const width = window.innerWidth || 0;
  const height = window.innerHeight || 0;

  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);

  return {
    rows: rows || 0,
    cols: cols || 0,
  };
}

function MineSweeper() {
  const { board, open, toggleFlag, init } = useMinesweeper();
  const [size, setSize] = React.useState(calculateGridSize());

  React.useEffect(() => {
    init('normal');
  }, [init]);

  React.useEffect(() => {
    function handleResize() {
      setSize(calculateGridSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     const r = Math.floor(Math.random() * size.rows);
  //     const c = Math.floor(Math.random() * size.cols);
  //
  //     const cell = board.data[r][c];
  //     open(cell);
  //   }, 200);
  //
  //   return () => clearInterval(interval);
  // }, [board]);

  return <Board board={board} open={open} toggleFlag={toggleFlag} />;
}

export default MineSweeper;
