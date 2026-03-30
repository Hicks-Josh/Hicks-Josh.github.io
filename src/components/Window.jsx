import React from 'react';

import useMediaQuery from '../hooks/useMediaQuery';

const imgStyle = {
  maxWidth: '100%',
  height: '100%',
  objectFit: 'cover',
  width: '100%',
};

function Window({ src }) {
  const isMobile = useMediaQuery();

  const windowStyle = React.useMemo(
    () => ({
      float: 'right',
      shapeOutside: 'circle(50%)',
      width: isMobile ? '150px' : '250px',
      height: isMobile ? '150px' : '250px',
      borderRadius: '50%',
      marginLeft: '1rem',
      marginBottom: '1rem',
      overflow: 'hidden',
      objectFit: 'cover',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      transition: 'all 1s',
      zIndex: 40,
    }),
    [isMobile]
  );

  return (
    <div style={windowStyle}>
      <img src={src} style={imgStyle} />
    </div>
  );
}

export default Window;
