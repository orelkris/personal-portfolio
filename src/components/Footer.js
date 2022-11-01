import React from 'react';
import Connect from './Connect';
import connectData from '../data/connect-data';

export default function Footer(props) {
  const connectElements = connectData.map((data) => (
    <li className="connect-list__item">
      <Connect
        key={data.id}
        href={data.href}
        target={data.target}
        styles={data.styles}
        icon={data.icon}
      />
    </li>
  ));

  return (
    <footer className="footer">
      <ul className="connect-list">{connectElements}</ul>
    </footer>
  );
}
