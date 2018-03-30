import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from '../Comment'
import './commentList.css'
import toggleOpen from '../../decorators/toggleOpen'


class CommentList extends Component {
  static  propTypes = {
    comments: PropTypes.array
  }

  static defaultProps = {
    comments: []
  }

  render() {
    const {comments, isOpened, toggleOpen} = this.props

    if (!comments)
      return (
        <div className="CommentList text-secondary text-center">
          No comments yet ...
        </div>
      )

    const btnCommentsText = isOpened ? "Hide comments" : "Show comments"
    const commentList = isOpened && comments.map(comment =>
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    )

    return (
      <React.Fragment>
        <div className="inline-group">
          <button onClick={toggleOpen} 
          className="comments btn btn-outline-accent btn-xs">
            {btnCommentsText}
          </button>
        </div>
        <ul className="CommentList">
          {commentList}
        </ul>
      </React.Fragment>
    )
  }
}

export default toggleOpen(CommentList)
