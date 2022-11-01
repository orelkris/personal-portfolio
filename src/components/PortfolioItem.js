import React from 'react';
import Button from './Button';
import Image from './Image';

export default function PortfolioItem(props) {
  const { projectType, imageSrc, href, title, description } = props;
  return (
    <div className="portfolio__item">
      <div
        className={`portfolio__side portfolio__side--front ${projectType.toLowerCase()}--front`}
      >
        <Image src={imageSrc} alt="" className="portfolio__image" />
        <h3>{projectType}</h3>
      </div>
      <div
        className={`portfolio__side portfolio__side--back ${projectType}--back`}
      >
        <div>{description}</div>
        <Button
          href={href}
          styles="btn-secondary"
          content={title}
          target="_blank"
        />
      </div>
    </div>
  );
}
