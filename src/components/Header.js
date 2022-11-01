import React, { useEffect, useState, useRef } from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const navButton = useRef();

  useEffect(() => {
    if (open) {
      return document.body.classList.add('nav-open');
    }

    document.body.classList.remove('nav-open');
  }, [open]);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <code>&lt;devkris&gt;</code>
      </div>

      <button
        onClick={toggleMenu}
        ref={navButton}
        className="header__nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="header__nav-menu"></span>
      </button>
      <Navigation toggleMenu={toggleMenu} />
    </header>
  );
}
