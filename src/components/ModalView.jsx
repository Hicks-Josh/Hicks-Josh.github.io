import React from 'react';

import MorphingText from './MorphingText.jsx';
import NavItem from './NavItem.jsx';
import Window from './Window.jsx';

import useMediaQuery from '../hooks/useMediaQuery.jsx';

import steamData from '../steamData.json';
import me from '../assests/me.webp';
import moominGif from '../assests/moomin.gif';

const filterStyles = {
  backdropFilter: 'blur(10px)',
  webkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.2)',
  transition: 'all 1s',
  borderRadius: '10px',
  zIndex: 30,
};

const modalStyle = {
  ...filterStyles,
  transform: 'translate(-50%, -50%)',
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

const styles = {
  lastPlayed: {
    intro: {
      fontFamily: 'Roboto mono, mono',
      textAlign: 'justify',
      width: '66%',
      margin: '2rem auto 2rem auto',
      textAlign: 'justify',
      textAlignLast: 'justify',
      wordSpacing: '0.05em',
      lineHeight: 1.6,
    },
    introSub: {
      fontFamily: 'Roboto Mono, mono',
      fontSize: '0.75rem',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%)',
      padding: 20,
      width: '60%',
      textAlign: 'justify',
      textAlignLast: 'justify',
      wordSpacing: '0.05em',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '80%',
      margin: '0 auto',
    },
    card: (index) => ({
      ...filterStyles,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      borderRadius: '12px',
    }),
    image: { width: '80px', borderRadius: '8px' },
    info: { display: 'flex', flexDirection: 'column' },
    link: {
      fontFamily: 'Roboto Mono, mono',
      fontWeight: 600,
      color: 'inherit',
      textDecoration: 'none',
    },
    hours: {
      fontFamily: 'Roboto Mono, mono',
      marginTop: '0.25rem',
      fontSize: '0.9rem',
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
        {selectedView === modalViews[0] && (
          <React.Fragment>
            <div style={welcomeStyle}>
              <p>
                Hey, I'm{' '}
                <span style={{ display: 'inline-block', width: '7ch' }}>
                  <MorphingText words={['Josh', 'Masaaki', '将義']} />
                </span>
              </p>
              <p>Thanks for checking out my page!</p>
            </div>
            <Window src={moominGif} />
          </React.Fragment>
        )}
        {selectedView === modalViews[1] && (
          <React.Fragment>
            yo
            <p>test</p>
            <Window src={me} />
          </React.Fragment>
        )}
        {selectedView === modalViews[2] && (
          <React.Fragment>
            <p style={styles.lastPlayed.intro}>
              If I'm not coding then I'm probably playing some games; here's the
              last three games I played:
            </p>
            <div style={styles.lastPlayed.list}>
              {steamData.parsedGames.map((game, index) => (
                <div style={styles.lastPlayed.card(index)} key={game.name}>
                  <img src={game.logo} style={styles.lastPlayed.image} />
                  <div style={styles.lastPlayed.info}>
                    <a
                      href={game.link}
                      target="_blank"
                      style={styles.lastPlayed.link}
                    >
                      {game.name}
                    </a>
                    <span style={styles.lastPlayed.hours}>
                      {game.hoursOnRecord} hours on record
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p style={styles.lastPlayed.introSub}>
              (this is a front end application, so I just resync the data every
              night, oh no it's not 100% accurate! 😨)
            </p>
            <Window src={steamData?.profilePicture} />
          </React.Fragment>
        )}
      </div>
      <div style={navStyle}>
        <ul style={navListStyle}>
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
