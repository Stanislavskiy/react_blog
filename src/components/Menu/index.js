import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu bg-accent d-flex justify-content-center">
        <div className="d-flex align-items-center justify-content-center ">
          <span className="display-3 brand-name">Articles</span>
        </div>
      </div>
    )
  }
}
