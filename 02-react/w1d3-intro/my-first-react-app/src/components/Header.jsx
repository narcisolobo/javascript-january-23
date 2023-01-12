import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <fieldset>
        <legend>Header</legend>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </fieldset>
    )
  }
}

export default Header