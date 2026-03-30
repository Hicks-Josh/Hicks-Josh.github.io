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
      position: 'absolute',
      height: isMobile ? '150px' : '250px',
      width: isMobile ? '150px' : '250px',
      top: isMobile ? '-8%' : '-20%',
      right: isMobile ? '-10%' : '-22%',
      borderRadius: '50%',
      zIndex: 40,
      background: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(10px)',
      webkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px 0 rgba(0,0,0,0.2)',
      transition: 'all 1s',
      overflow: 'hidden',
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
