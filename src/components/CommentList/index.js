import React, {Component} from 'react'
import Comment from '../Comment'
import './commentList.scss'

export default class CommentList extends Component {
  render() {
    const {comments} = this.props

    if (!comments)
      return (
        <div className="Comment text-secondary text-center">No comments yet...</div>
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