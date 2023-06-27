import React, { Component } from 'react'

export default class Click extends Component {

    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

  render() {
    return (
      <div>
        <p>Click count is {this.state.clickCount}</p>
        <button onClick={this.handleClick}>Click Me!</button>
        <div onClick={this.handleClick}>
            <a onClick={this.handleLink} href="https://react.dev/">React</a>
        </div>
      </div>
      
    )
  }

  handleClick(event){
    this.setState((state) => {
        return{
            clickCount: state.clickCount + 1
        }
    })
  }

  handleLink(event){
    event.preventDefault();
    event.stopPropagation();
    console.log('clicked');
  }
}