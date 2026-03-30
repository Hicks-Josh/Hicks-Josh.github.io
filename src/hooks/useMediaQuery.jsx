import React from 'react';

function useMediaQuery(query = '(max-width: 1100px)') {
  // Initialize with matchMedia API
  const [matches, setMatches] = React.useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);

    const handleChange = (e) => setMatches(e.matches);

    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
