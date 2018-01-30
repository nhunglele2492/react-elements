import React, { Component } from 'react';

import GridImageItem from './gridImageItem';

class GridImage extends Component {
  render() {
    const createItem = function(itemText, i) {
      return <GridImageItem key={i} title={itemText.title}  description={itemText.description} imageSrc = {itemText.imageSrc} />
    }
    return (
      <div className="container">
        <ul className="gim-2 js-lightbox-gallery">
          {this.props.items.map(createItem)}
        </ul>
      </div>
    )
  }
}

export default GridImage;
