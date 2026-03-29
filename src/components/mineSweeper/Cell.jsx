import React from 'react';

function Cell({ cell, open, toggleFlag }) {
  const handleOpen = React.useCallback(() => open(cell), [cell, open]);
  const handleContextMenu = React.useCallback(
    (e) => {
      e.preventDefault();
      toggleFlag(cell);
    },
    [cell, toggleFlag]
  );

  const cellStyle = React.useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      aspectRatio: 1,
      justifyContent: 'center',
      border: '1px solid rgba(255,255,255,0.08)',
      fontSize: '0.8rem',
      cursor: 'pointer',
      userSelect: 'none',
      backgroundColor: cell.isOpened ? '#2a2a2a' : '#1e1e1e',
      color: '#fff',
    }),
    [cell.isOpened]
  );

  return (
    <div
      style={cellStyle}
      onClick={handleOpen}
      onContextMenu={handleContextMenu}
    >
      {cell.isOpened && (cell.isMine ? '💣' : cell.adjacentMines || '')}
    </div>
  );
}

export default Cell;
