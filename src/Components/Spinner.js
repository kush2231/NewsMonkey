import React, { Component } from 'react'
import loader from './Rounded blocks.gif'
export default class Spinner extends Component { // class based component 
  render() {
      return (
        <div className='text-center'>
          <img src={loader} alt='loading' />
        </div>
      );
  }
}
