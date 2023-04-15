import React from 'react';
import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Backroads specializes in creating distinctive inbound and outgoing
            tours and travel experiences for both businesses and people, both
            locally and globally.
          </p>
          <p>
            We provide our customers with outstanding service ensuring a
            pleasurable and unforgettable trip with services that go above and
            beyond their expectations.
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
