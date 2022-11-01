import React from 'react';

export default function Button(props) {
  const { href, content, styles, target } = props;
  return target === null ? (
    <a href={href} className={styles}>
      {content}
    </a>
  ) : (
    <a href={href} target={target} className={styles}>
      {content}
    </a>
  );
}
