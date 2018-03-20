import React, {Component} from 'react'
import Comment from '../Comment'
import './commentList.css'

export default class CommentList extends Component {
  propTypes = {
    comments: React.propTypes.array,
    isOpened: React.propTypes.bool
  }
  
  static defaultProps = {
    comments: []
  }

  state = {
    isOpened: false,
  }

  render() {
    const {comments} = this.props

    if (!comments)
      return (
        <div className="CommentList text-secondary text-center">
          No comments yet ...
        </div>
      )

    const btnCommentsText = this.state.isOpened ? "Hide comments" : "Show comments"
    const commentList = this.state.isOpened && comments.map(comment =>
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    )

    return (
      <React.Fragment>
        <div className="inline-group">
          <button onClick={this.toggleComments} className="comments btn btn-outline-accent btn-xs">
            {btnCommentsText}
          </button>
        </div>
        <ul className="CommentList">
          {commentList}
        </ul>
      </React.Fragment>
    )
  }

  toggleComments = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

}
