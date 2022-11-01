import React from 'react';
import Service from './Service';
import Button from './Button';
import serviceData from '../data/service-data';

export default function Services(props) {
  const serviceElements = serviceData.map((data) => (
    <Service key={data.id} title={data.title} content={data.content} />
  ));
  return (
    <div className="services__container" id="my-services">
      <section className="my-services">
        <div className="services__background"></div>
        <h2 className="section__title section__title--services">What I do</h2>

        <div className="services">{serviceElements}</div>
        <Button href="#work" styles="btn" content="see my work" />
      </section>
    </div>
  );
}
