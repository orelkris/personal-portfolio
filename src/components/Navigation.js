import React, { useState, useEffect } from 'react';

export default function Navigation(props) {
  const { toggleMenu } = props;
  return (
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a onClick={toggleMenu} href="#top" class="nav__link">
            Top
          </a>
        </li>
        <li class="nav__item">
          <a onClick={toggleMenu} href="#my-services" class="nav__link">
            My Skills
          </a>
        </li>
        <li class="nav__item">
          <a onClick={toggleMenu} href="#about" class="nav__link">
            About Me
          </a>
        </li>
        <li class="nav__item">
          <a onClick={toggleMenu} href="#work" class="nav__link">
            My Work
          </a>
        </li>
      </ul>
    </nav>
  );
}
