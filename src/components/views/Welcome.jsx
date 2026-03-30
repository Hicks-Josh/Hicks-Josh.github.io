import React from 'react';

import MorphingText from '../MorphingText';
import Window from '../Window';
import useMediaQuery from '../../hooks/useMediaQuery';

import moominGif from '../../assets/moomin.gif';

function Welcome() {
  const isMobile = useMediaQuery();

  const welcomeStyle = React.useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      fontFamily: 'Raleway',
      fontSize: isMobile ? '2rem' : '3rem',
      padding: '20 auto',
      margin: '20 0',
      justifyItems: 'center',
      textAlign: 'justify',
      textAlignLast: 'justify',
      textJustify: 'inter-character',
      wordSpacing: '0.05em',
    }),
    [isMobile]
  );

  return (
    <React.Fragment>
      <Window src={moominGif} />
      <div style={welcomeStyle}>
        <p
          style={{
            lineHeight: 2,
            width: '85%',
            textAlign: 'justify',
            textAlignLast: 'justify',
            textJustify: 'inter-character',
            margin: '0 auto',
          }}
        >
          Oh hi! I'm
          {!isMobile && <br />}
          <span
            style={{
              display: 'inline-block',
              width: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            <MorphingText words={['Josh', 'Masaaki', '将義']} />
          </span>
        </p>
        {isMobile && (
          <React.Fragment>
            <p style={{ lineHeight: -3, padding: 0, margin: 0 }}>~~~</p>
            <p style={{ lineHeight: 2.5, width: '85%' }}>
              Thanks for visiting,
              <br />
              Feel free to look around!
            </p>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default Welcome;
