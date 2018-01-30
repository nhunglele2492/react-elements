import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';

import HeroBanner from '../components/heroBanner/HeroBanner';
import Cta from '../components/callToAction/callToAction';
import GridImage  from '../components/gridImage/gridImage';

const gridImageList = [
  {
    'imageSrc': '//unsplash.it/960/540/',
    'title': 'The Wedding',
    'description': 'Lorem ipsum dolor sit a met'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/',
    'title': 'The Wedding',
    'description': 'Lorem ipsum dolor sit a met'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  }
]


class Page1 extends React.Component {
  render() {
    return(
      <DefaultLayout>
        <HeroBanner />
        <Cta />
        <GridImage items={gridImageList}/>
      </DefaultLayout>
    )
  }
}

export default Page1;
