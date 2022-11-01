import React from 'react';
import PortfolioItem from './PortfolioItem';
import workData from '../data/work-data';

export default function Work(props) {
  const portfolioElements = workData.map((data) => (
    <PortfolioItem
      key={data.id}
      projectType={data.projectType}
      imageSrc={data.imageSrc}
      href={data.href}
      title={data.title}
      description={data.description}
    />
  ));
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work"></p>
      <div className="portfolio">{portfolioElements}</div>
    </section>
  );
}
