import React, {Component} from 'react'
import './comment.scss'

export default class Comment extends Component {
  render() {
    const {comment} = this.props

    return (
      <div className="Comment">
        <h5 className="text-secondary">{comment.user}</h5>
        <p className="">{comment.text}</p>
        <div className="inline-group">
          <button className="btn btn-link">Card link</button>
          <button className="btn btn-link">Another link</button>
        </div>
      </div>
    )
  }
}
