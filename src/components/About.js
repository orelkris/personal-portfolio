import React from 'react';
import Image from './Image';
import Badge from './Badge';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Developer based out of Mississauga
      </p>
      <div className="about__body">
        <p>
          I am a junior web developer and I really enjoy taking on design and
          development challenges. I am constantly trying to improve my
          development knowledge by researching new technologies and taking
          online courses.
        </p>
        <p>
          I also have a lot of personal interests like: watching movies, playing
          piano, weight lifting and going on long hikes. For anyone interested I
          would like to recommend some of my top favorite movies:{' '}
          <Badge color="red">Midnight&nbsp;Run</Badge>,
          <Badge color="orange">Scarface</Badge>,{' '}
          <Badge color="yellow">The&nbsp;Thing</Badge>,{' '}
          <Badge color="green">'71</Badge>,{' '}
          <Badge color="lightblue">Good&nbsp;Time</Badge>,{' '}
          <Badge color="blue">The&nbsp;Lighthouse</Badge> and{' '}
          <Badge color="purple">Roma</Badge>.
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
