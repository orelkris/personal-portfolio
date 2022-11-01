import React from 'react';
import Image from './Image';

export default function Introduction(props) {
  return (
    <section className="intro" id="top">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Kris&nbsp;Orel</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        full-stack dev
      </p>
      <Image
        src="./images/humanoid-squirrel.png"
        alt="an oil painting of a squirrel with a galaxy background"
        className="intro__image"
      />
    </section>
  );
}
