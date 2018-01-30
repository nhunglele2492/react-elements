import React, { Component } from 'react';
import ReactModal from 'react-modal';
import firebase from '../../firebase.js';
import {Button} from '../../baseElements/elements/Button';
import Input from '../../baseElements/elements/Input';

class Cta extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      cta: [],
      showModal: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    const itemCta = firebase.database().ref('cta');
    itemCta.on('value', (snapshot) => {
      let cta = snapshot.val();
      let newState = [];
      for (let item in cta) {
        newState.push({
          id: item,
          title: cta[item].title,
          user: cta[item].user
        });
      }
      this.setState({
        cta: newState
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemCta = firebase.database().ref('cta');
    const item = {
      title: this.state.title,
      user: this.state.description
    }
    if(item.title.length === 0) {
      alert('Fill title field')
    }
    else {
      itemCta.push(item);
      this.setState({
        title: '',
        description: '',
        showModal: false
      });
    }
  }

  handleOpenModal () {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='container'>
        <Button onClick={this.handleOpenModal}>Add Call To Action</Button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
        >
          <form onSubmit={this.handleSubmit}>
            <Input
              hasLabel='true'
              htmlFor='name'
              label='Name'
              type='text'
              name="title"
              ref='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Input
              hasLabel='true'
              htmlFor='position'
              label='Position'
              type='text'
              name="description"
              ref='description'
              value={this.state.description}
              onChange={this.handleChange}
            />

            <Button>Add Item</Button>
          </form>
          <Button onClick={this.handleCloseModal}>Cancel</Button>
        </ReactModal>
        {this.state.cta.map((itemCta) => {
          return (
            <div className="block-cta" key={itemCta.id}>
              <div className="block-cta__inner  bg--light-white">
                <div className="container">
                  <div className="block-cta__content">
                    <h2 className="block-cta__title">{itemCta.title}</h2>
                    <div className="block-cta__body"><p>{itemCta.user}</p></div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
export default Cta;
