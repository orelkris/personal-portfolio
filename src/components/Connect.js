import React from 'react';

export default function Connect(props) {
  const { href, target, styles, icon } = props;

  return target !== null ? (
    <a href={href} target={target !== null ? target : null} className={styles}>
      <i className={icon}></i>
    </a>
  ) : (
    <a href={href} className={styles}>
      <i className={icon}></i>
    </a>
  );
}
