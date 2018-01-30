import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';

import SliderList from '../components/slider/Slider';
import GridItem from '../components/gridItem/gridItem';

class Page2 extends React.Component {
  render() {
    return(
      <DefaultLayout>
        <SliderList/>
        <GridItem />
      </DefaultLayout>
    )
  }
}

export default Page2;
