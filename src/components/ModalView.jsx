import React from 'react';

import AboutMe from './views/AboutMe.jsx';
import MorphingText from './MorphingText.jsx';
import NavItem from './NavItem.jsx';
import LastPlayed from './views/LastPlayed.jsx';
import Welcome from './views/Welcome.jsx';
import Window from './Window.jsx';

import useMediaQuery from '../hooks/useMediaQuery.jsx';

import steamData from '../steamData.json';
import me from '../assets/me.webp';
import moominGif from '../assets/moomin.gif';

const filterStyles = {
  backdropFilter: 'blur(10px)',
  webkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.2)',
  transition: 'all 1s',
  borderRadius: '10px',
  zIndex: 30,
};

const styles = {
  nav: {
    main: {
      ...filterStyles,
      height: '3rem',
      width: '35%',
      minWidth: 'max-content',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50px',
      padding: '12px 25px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      boxShadow: `
            0 20px 40px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '82%',
      overflow: 'hidden',
      zIndex: 30,
    },
    list: {
      display: 'flex',
      alignItems: 'center',
      // gap: '5px',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      zIndex: 2,
      position: 'relative',
    },
  },
};

// TODO: we'll want to support the main text, probably as a child rather than a string
// TODO: we'll want to change the image
// so where do we define the actual content?
// I suppose it works here... hmmm
function ModalView() {
  const modalViews = React.useMemo(
    () => ['Welcome', 'About Me', 'Last Played'],
    []
  );

  const [fullscreen, setFullscreen] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState(modalViews[0]);
  const isMobile = useMediaQuery();

  const handleFullscreenToggle = React.useCallback(
    () => setFullscreen((prev) => !prev),
    []
  );

  const modalStyle = React.useMemo(
    () => ({
      ...filterStyles,
      transform: 'translate(-50%, -50%)',
      width: fullscreen || isMobile ? '100%' : '60%',
      height: fullscreen || isMobile ? '100%' : '60%',
      position: 'absolute',
      top: '50%',
      left: '50%',
    }),
    [fullscreen, isMobile]
  );

  const handleViewChange = React.useCallback((view) => {
    setSelectedView(view);
  }, []);

  return (
    <React.Fragment>
      <div style={modalStyle}>
        {selectedView === modalViews[0] && <Welcome />}
        {selectedView === modalViews[1] && (
          <AboutMe
            fullscreen={fullscreen}
            handleFullscreenToggle={handleFullscreenToggle}
          />
        )}
        {selectedView === modalViews[2] && <LastPlayed />}
      </div>
      <div style={styles.nav.main}>
        <ul style={styles.nav.list}>
          {/* TODO: welcome is shifted to the right... */}
          {modalViews.map((view) => (
            <NavItem
              title={view}
              active={view === selectedView}
              handleViewChange={handleViewChange}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ModalView;
