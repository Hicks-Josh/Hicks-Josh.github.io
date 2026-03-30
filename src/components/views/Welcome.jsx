import React from 'react';

import MorphingText from '../MorphingText';
import Window from '../Window';
import useMediaQuery from '../../hooks/useMediaQuery';

import moominGif from '../../assests/moomin.gif';

function Welcome() {
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
  return (
    <React.Fragment>
      <Window src={moominGif} />
      <div style={welcomeStyle}>
        <p>
          Hey, I'm{' '}
          <span style={{ display: 'inline-block', width: '7ch' }}>
            <MorphingText words={['Josh', 'Masaaki', '将義']} />
          </span>
        </p>
        <p>Thanks for checking out my page!</p>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
