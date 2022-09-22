import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    window.addEventListener('focus', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('focus', handleScroll);
    };
  });

  return scrolled;
};

export default useScroll;
