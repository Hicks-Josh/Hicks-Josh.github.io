import React from 'react';

import Window from '../Window';
import useMediaQuery from '../../hooks/useMediaQuery';

import me from '../../assets/me.webp';

const filterStyles = {
  backdropFilter: 'blur(10px)',
  webkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.2)',
  transition: 'all 1s',
  borderRadius: '10px',
  zIndex: 30,
};

function AboutMe({ fullscreen, handleFullscreenToggle }) {
  const isMobile = useMediaQuery();
  const isExtraSmall = useMediaQuery('(max-width: 680px)');

  const styles = React.useMemo(
    () => ({
      intro: {
        fontFamily: 'Roboto mono, mono',
        maxWidth: '66%',
        margin: '2rem auto 2rem auto',
        textAlign: 'justify',
        textAlignLast: 'justify',
        wordSpacing: '0.05em',
        lineHeight: 1.6,
      },
      list: {
        clear: 'both',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '80%',
        margin: '0 auto',
        zIndex: -10,
        maxHeight: isExtraSmall ? '45vh' : '60vh',
        overflowY: 'auto',
        ...(!isMobile && { top: -100 }),
      },
      card: {
        marginLeft: 7,
        width: '90%',
        ...filterStyles,
        display: isMobile ? 'block' : 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '12px',
        fontFamily: 'Roboto Mono, mono',
      },
      cardTitle: {
        fontWeight: 'bold',
        textAlign: 'justify',
        textAlignLast: 'justify',
        hyphens: 'auto',
        WebkitHyphens: 'auto',
        overflowWrap: 'break-word',
        textJustify: 'inter-character',
        wordSpacing: '0.05em',
      },
      fadeBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '10%',
        zIndex: 1,
      },
      button: {
        alignItems: 'center',
        border: 'none',
        background: 'inherit',
        cursor: 'pointer',
        fontFamily: 'Roboto Mono, mono',
        fontSize: '1.25rem',
        position: 'fixed',
        top: fullscreen ? '12%' : '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: 'all 1s',
      },
    }),
    [fullscreen, isExtraSmall, isMobile]
  );

  return (
    <React.Fragment>
      <Window src={me} alt="image of me" />
      <p style={styles.intro}>
        I'm a full stack software engineer with experience in product ownership
        <br />
        If you'd like to see my qualifications you're at the right spot!
      </p>
      {!isMobile && (
        <button style={styles.button} onClick={handleFullscreenToggle}>
          [{fullscreen ? 'collapse' : 'expand'}]
        </button>
      )}
      {(isMobile || fullscreen) && (
        <div style={styles.list}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              Full Stack Engineer,
              <br />
              Product Owner
            </div>
            <ul>
              <li>
                Product Owner and Software Engineer; collaborated with
                stakeholders, defining epics, user stories, and sprint
                deliverables that supported engineering, warehouse, and QA
                operations teams.
              </li>
              <li>
                Developed, maintained, and deployed Progress Tracker, a full
                stack React application with a Fastify and Node.js backend and
                PostgreSQL database, replacing a error prone complex Excel
                spreadsheet with a centralized, real time tracking platform
              </li>
              <li>
                Designed and implemented customizable team dashboards to provide
                timely and accurate data for immediate visibility into warehouse
                equipment status, order fulfillment progress, and QA audit logs
              </li>
            </ul>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}> Associate Software Engineer </div>
            <ul>
              <li>
                Worked with a team of three, refactored a Vue based dashboard
                into a full-stack React SPA with Node.js, Fastify, and
                PostgreSQL, improving maintainability, performance, and long
                term scalability.
              </li>
              <li>
                Migrated the database from Firebase to PostgreSQL, reducing
                infrastructure costs while enhancing data integrity and
                reporting capabilities for sales and admin team performance
                tracking.
              </li>
              <li>
                Developed features that added visibility into inbound and
                outbound sales activity, enabling leadership to identify
                coaching opportunities and gamify intern performance through
                goal driven dashboards.
              </li>
              <li>
                Built additional internal tools, automation scripts, and outward
                facing products including shipping label automation and an IFU
                management platform to support EU compliance for health
                products, streamlining operations and reducing manual
                administrative workload.
              </li>
            </ul>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Software Engineer Intern</div>
            <ul>
              <li>
                Contributed to development of a full-stack Angular SPA with an
                Express and Node.js backend powering a cloud platform for mobile
                heart monitor data management.
              </li>
              <li>
                Implemented new features and resolved production bugs, improving
                platform reliability and enhancing the experience for clinical
                and operational users.
              </li>
              <li>
                Heavily contributed to migration of select frontend views from
                Angular to React, modernizing portions of the codebase and
                improving maintainability.
              </li>
            </ul>
          </div>
          <div style={styles.fadeBottom} />
        </div>
      )}
    </React.Fragment>
  );
}

export default AboutMe;
