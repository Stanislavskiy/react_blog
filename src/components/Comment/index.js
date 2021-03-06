import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './comment.css'

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  }

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
