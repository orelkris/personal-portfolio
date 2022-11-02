import React from 'react';

export default function Service(props) {
  const { title, content } = props;
  return (
    <div className="service">
      <h3 className="service__title">{title}</h3>
      <p className="service__content">{content}</p>
    </div>
  );
}
