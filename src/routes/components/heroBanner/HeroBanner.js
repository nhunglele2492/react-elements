import React from 'react';

import {Button} from '../../baseElements/elements/Button';

var Banner = {
  'subtitle': 'Lorem Ipsum',
  'title': 'A Better Way',
  'links': [
    {
      'hrefBtn': '#',
      'classBtn': '',
      'textBtn': 'Btn 1'
    },
    {
      'hrefBtn': '#',
      'classBtn': '',
      'textBtn': 'Btn 2'
    }
  ]
}


export default class HeroBanner extends React.Component {
  render() {
    const Links = Banner.links.map((item, i) => {
      return <div key={i} className="field__item"><Button href={item.hrefBtn} className={item.classBtn}>{item.textBtn}</Button></div>
    });

    return(
      <div className="hero-banner-3 bg--dark-black--overlay">
        <div className="hero-banner-3__image"><img src="//unsplash.it/1400/560/" alt=""/></div>
        <div className="hero-banner-3__content text--center">
          <div className="container">
             <div className="hero-banner-3__subtitle">{Banner.subtitle}</div>
             <h1 className="hero-banner-3__title">{Banner.title}</h1>
             <div className="hero-banner-3__link link-btn-wrap">
              {Links}
             </div>
          </div>
        </div>
      </div>
    )
  }
}
