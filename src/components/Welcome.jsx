import React from 'react';

import MorphingText from './MorphingText.jsx';
import NavItem from './NavItem.jsx';
import Window from './Window.jsx';

import useMediaQuery from '../hooks/useMediaQuery.jsx';

import me from '../assests/me.webp';

const filterStyles = {
  transform: 'translate(-50%, -50%)',
  backdropFilter: 'blur(10px)',
  webkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.2)',
  transition: 'all 1s',
  borderRadius: '10px',
  zIndex: 30,
};

const modalStyle = {
  ...filterStyles,
  width: '60%',
  height: '60%',
  position: 'absolute',
  top: '50%',
  left: '50%',
};

const navStyle = {
  ...filterStyles,
  height: '3rem',
  width: '35%',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50px',
  padding: '12px 25px',
  display: 'flex',
  alignItems: 'center',
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
};

const navListStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  listStyle: 'none',
  zIndex: 2,
  position: 'relative',
};

function Welcome() {
  const modalViews = React.useMemo(
    () => ['Welcome', 'About Me', 'Last Played'],
    []
  );
  const [selectedView, setSelectedView] = React.useState(modalViews[0]);
  const isMobile = useMediaQuery();

  const welcomeStyle = React.useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Raleway',
      textJustify: 'inter-character',
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : '3rem',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 0,
      marginBottom: 0,
    }),
    [isMobile]
  );

  const handleViewChange = React.useCallback((view) => {
    setSelectedView(view);
  }, []);

  return (
    <React.Fragment>
      <div style={modalStyle}>
        <div style={welcomeStyle}>
          <p>
            Hey, I'm{' '}
            <span style={{ display: 'inline-block', width: '7ch' }}>
              <MorphingText words={['Josh', 'Masaaki', '将義']} />
            </span>
          </p>
          <p>Thanks for checking out my page!</p>
        </div>
        <Window src={me} />
        we'll want to put the glassy nav bar below the modal for clarity
      </div>
      <div style={navStyle}>
        <ul style={navListStyle}>
          {/* TODO: welcome is shifted to the right... */}
          {modalViews.map((view) => (
            <NavItem title={view} active={view === selectedView} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
