import React from 'react';

export default function Image(props) {
  const { src, alt, className } = props;
  return <img src={src} alt={alt} className={className} />;
}
