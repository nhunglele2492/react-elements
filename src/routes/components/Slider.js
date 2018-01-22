import React from 'react';

import Slider from 'react-slick';

var sliderList = [
  {
    'src': '//unsplash.it/1400/500/',
    'highlight': 'THE NEXT BIG THING IN AUTOMOTIVE IS WAITING FOR YOU',
    'description': 'Trust Cypress broad portfolio of automotive-grade MCU, memory, and connectivity solutions to bring your ideas to life.'
  },
  {
    'src': '//unsplash.it/1400/500/',
    'highlight': 'CEO Blog: Contextual intelligence and the IoT Revolution.'
  }
]

class SliderItem extends React.Component {
  render() {
    return (
      <div className="featured-slider-1__slide bg--dark-black--overlay text-light">
        <div className="featured-slider-1__image">
          <img src={this.props.src} alt='FFW' />
        </div>
        <div className="container">
          <div className="featured-slider-1__inner">
            <div className="featured-slider-1__inner__content">
              <h1 className="featured-slider-1__highlight">{this.props.highlight}</h1>
              <div className="featured-slider-1__group">
                <div className="featured-slider-1__description">{this.props.description}</div>
                <div className="featured-slider-1__link link-btn-wrap link-btn-wrap--white default btn--outline btn--radius-100 btn--outline-white btn--weight-800">{this.props.link}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class SliderList extends React.Component {
  render() {
    const listItem = sliderList.map((item, i) => {
      return <SliderItem key={i} src={item.src} highlight={item.highlight} description={item.description} link={item.link}/>
    })
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <Slider {...settings} className="featured-slider-1 slick-dots-white">
        {listItem}
      </Slider>
    )
  }
}

export default SliderList;
