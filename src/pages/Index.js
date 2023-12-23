import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => {
  const githubLink = <a href="https://github.com/mldangelo/personal-site">here</a>;
  const descript = (
  <p>
    {'The majority of this website\'s code is from Michael D\'Angelo\'s open-source website available'} {githubLink}
    {' on Github. While customizing this website, I accomplished my goal of learning basic HTML, Javascript, and CSS.'}
  </p>
  );

  return (
    <Main
      description={
        'Jason Lee\'s personal website. UC Berkeley Engineering student, '
        + 'undergraduate AI researcher, and tech-enthusiast.'
      }
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2><Link to="/">Welcome to my website!</Link></h2>
            <p>
              A beautiful, responsive, statically-generated,
              react application written with modern Javascript.
            </p>
          </div>
        </header>
        <p>
          Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
        {descript}
      </article>
    </Main>
  );
};

export default Index;
