import React, {Component} from 'react';

import {Button} from '../../baseElements/elements/Button';
import Input from '../../baseElements/elements/Input';
import Select from '../../baseElements/elements/Select';

import firebase from '../../firebase.js'; // <--- add this line

class GridItem extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    if(item.title.length === 0) {
      console.log('pls fill title')
    }
    else {
      itemsRef.push(item);
      this.setState({
        currentItem: '',
        username: ''
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  handleSlectChange(selectOption) {
    const value = selectOption.target.value;

    console.log(value);
  }

  render() {
    return (
      <div className='container'>
        <section className="add-item">
          <form onSubmit={this.handleSubmit}>
            <Input
              hasLabel='true'
              htmlFor='name'
              label='Name'
              type='text'
              name="username"
              ref='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Input
              hasLabel='true'
              htmlFor='position'
              label='Position'
              type='text'
              name="currentItem"
              ref='currentItem'
              value={this.state.currentItem}
              onChange={this.handleChange}
            />
            <Select
              hasLabel='true'
              htmlFor='select'
              label='Type Display'
              value={this.state.value}
              options= 'grid, inline-grid'
              onChange={this.handleSlectChange}
            />
            <button>Add Item</button>
          </form>
        </section>
        <div className='grid-container__list'>
          {this.state.items.map((item) => {
            return (
              <div key={item.id} className="grid-container__item">
                <h3>{item.title}</h3>
                <p>{item.user}</p>
                <Button onClick={() => this.removeItem(item.id)}>Remove Item</Button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
export default GridItem;
