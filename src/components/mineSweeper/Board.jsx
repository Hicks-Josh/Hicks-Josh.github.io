import React from 'react';

import Cell from './Cell.jsx';

function Board({ board, open, toggleFlag }) {
  const boardStyle = React.useMemo(
    (rows, columns) => ({
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: `repeat(${board.meta.cols}, 1fr)`,
      gridTemplateRows: `repeat(${board.meta.rows}, 1fr)`,
    }),
    [board.meta]
  );

  if (!board) return null;
  return (
    <div style={boardStyle}>
      {board.data.map((row) =>
        row.map((cell) => (
          <Cell key={cell.id} cell={cell} open={open} toggleFlag={toggleFlag} />
        ))
      )}
    </div>
  );
}

export default Board;
