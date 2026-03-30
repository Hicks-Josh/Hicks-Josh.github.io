import React from 'react';

import Window from '../Window';
import useMediaQuery from '../../hooks/useMediaQuery';

import steamData from '../../steamData.json';

const filterStyles = {
  backdropFilter: 'blur(10px)',
  webkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.2)',
  transition: 'all 1s',
  borderRadius: '10px',
  zIndex: 30,
};

function LastPlayed() {
  const isMobile = useMediaQuery();
  const isExtraSmall = useMediaQuery('(max-width: 680px)');

  const styles = React.useMemo(
    () => ({
      intro: {
        fontFamily: 'Roboto mono, mono',
        width: '66%',
        margin: '5rem auto 2rem auto',
        textAlign: 'justify',
        textAlignLast: 'justify',
        wordSpacing: '0.05em',
        lineHeight: 1.6,
      },
      introSub: {
        fontFamily: 'Roboto Mono, mono',
        fontSize: '0.75rem',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        padding: 20,
        width: '60%',
        textAlign: 'justify',
        textAlignLast: 'justify',
        wordSpacing: '0.05em',
        ...(!isMobile && { bottom: -15 }),
      },
      list: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '80%',
        margin: isMobile ? '0 11%' : '0 auto',
        zIndex: -10,
        top: isMobile ? 0 : -50,
      },
      // TODO: remove index if not using animation delay!
      card: (index) => ({
        ...filterStyles,
        animation: `fadeInUp 0.6s ease forwards`,
        animationDelay: `${index * 0.15}s`,
        // opacity: 0,
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
    }),
    [isMobile]
  );

  return (
    <React.Fragment>
      <Window src={steamData?.profilePicture} alt="picture of steam profile" />
      <p style={styles.intro}>
        If I'm not coding then I'm probably playing some games; here's the last
        three games I played:
      </p>
      <div style={styles.list}>
        {steamData.parsedGames.map((game, index) => (
          <div style={styles.card(index)} key={game.name}>
            <img
              src={game.logo}
              style={styles.image}
              img="image of game logo"
            />
            <div style={styles.info}>
              <a
                href={game.link}
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                {game.name}
              </a>
              <span style={styles.hours}>
                {game.hoursOnRecord} hours on record
              </span>
            </div>
          </div>
        ))}
      </div>
      {!isExtraSmall && (
        <p style={styles.introSub}>
          (this is a front end application, so I'm just resyncing the data every
          night, oh no it's not 100% accurate! 😨)
        </p>
      )}
    </React.Fragment>
  );
}

export default LastPlayed;
