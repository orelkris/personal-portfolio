import React from 'react';
import Image from './Image';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Developer based out of Mississauga
      </p>
      <div className="about__body">
        <p>
          I am a junior web developer. I am constantly trying to improve my
          development skills. I really enjoy looking at designs and replicating
          them.
        </p>
        <p>
          I am also interested in watching movies. Some of my favorite movies
          are: Scarface, The Thing, '71, Good Time.
        </p>
      </div>
      <Image
        src="./images/sketch-cat.png"
        alt="a sketch of a humanoid cat and regular cat in a field of sunflowers"
        className="about__image"
      />
    </section>
  );
}
