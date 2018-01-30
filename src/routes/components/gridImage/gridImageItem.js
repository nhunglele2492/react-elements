import React, { Component } from 'react';

class GridImageItem extends Component {
  render() {
    const isTitle = this.props.title;
    const isDescription = this.props.description;
    let conditional = '';

    if(isTitle && isDescription) {
      conditional = <div className="gim-2__content"><h2 className="gim-2__title">{isTitle}</h2><p className="gim-2__description">{isDescription}</p></div>
    }
    else {
      conditional = <span className="plus-icon"></span>
    }
    return (
      <li className="gim-2__item">
        <div className="gim-2__item__inner">
          <div className="gim-2__image"><img src={this.props.imageSrc} alt="Grid Images"/></div>
          {conditional}
        </div>
      </li>
    )
  }
}

export default GridImageItem;
