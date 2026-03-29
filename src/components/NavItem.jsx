import React from 'react';

function NavItem({ active, title }) {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => setHover(true), []);

  const handleMouseLeave = React.useCallback(() => setHover(false), []);

  const navItemStyle = React.useMemo(
    () => ({
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '2.5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      borderRadius: '20px',
      transition: 'all 0.2s ease',
      background: active
        ? 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))'
        : 'transparent',
      boxShadow:
        active || hover
          ? `inset 0 1px 0 rgba(255,255,255,0.3),
             0 4px 12px rgba(0,0,0,0.1)`
          : 'none',
    }),
    [active, hover]
  );

  return (
    <li
      style={navItemStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
    </li>
  );
}

export default NavItem;
