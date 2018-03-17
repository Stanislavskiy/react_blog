import React, {Component} from 'react'
import Comment from '../Comment'
import './commentList.css'

export default class CommentList extends Component {

  propTypes: {
    comments: React.propTypes.array
  }

  render() {
    const {comments} = this.props

    if (!comments)
      return (
        <div className="CommentList text-secondary text-center">
          No comments yet ...
        </div>
      )

    const commentList = comments.map(comment =>
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    )

    return (
      <ul className="CommentList">
        {commentList}
      </ul>
    )
  }
}
