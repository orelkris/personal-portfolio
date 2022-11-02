import React from 'react';

export default function Navigation(props) {
  const { toggleMenu } = props;
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a onClick={toggleMenu} href="#top" className="nav__link">
            Top
          </a>
        </li>
        <li className="nav__item">
          <a onClick={toggleMenu} href="#my-services" className="nav__link">
            My Skills
          </a>
        </li>
        <li className="nav__item">
          <a onClick={toggleMenu} href="#about" className="nav__link">
            About Me
          </a>
        </li>
        <li className="nav__item">
          <a onClick={toggleMenu} href="#work" className="nav__link">
            My Work
          </a>
        </li>
      </ul>
    </nav>
  );
}
