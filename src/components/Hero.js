import React from 'react';

const hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>backroads app</h1>
        <p>
          Discover Backroads, the world's #1 active travel company. See our
          international biking tours, walking & hiking trips, and other
          adventure vacations..
        </p>
        <a href='#tours' className='btn hero-btn'>
          explore tours
        </a>
      </div>
    </section>
  );
};
export default hero;
