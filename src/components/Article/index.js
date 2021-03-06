import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import './article.css';

export default class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpened: PropTypes.bool,
    toggleArticle: PropTypes.func
  }

  state = {
    count: 0,
  }

  render() {
    const { 
      article, 
      isOpened, 
      toggleArticle 
    } = this.props
    const btnText = isOpened ? "Close" : "Read"
    const articleText = isOpened &&
      <p className="card-text"> {article.text}</p>

    return (
      <div className="Article row">
        <div className="col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div className="card">
            <div className="card-title card-header bg-header">
              <div className="row">
                <div className="col-12 col-md-10">
                  <h4 className="title text-secondary text-center text-md-left" onClick={this.incrementCount}>
                    {article.title} 
                  </h4>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <button onClick={toggleArticle.bind(this, article.id)} className="toggle btn btn-accent btn-sm float-md-right text-white">{btnText}</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              {articleText}
              <div className="inline-group">
                <small className="inline-group text-secondary">
                  <b className="text-accent-secondary ">Published:</b> {new Date(article.date).toDateString()}
                </small>
                <small className="inline-group text-secondary">
                  <b className="text-accent-secondary">Clicks:</b> {this.state.count}
                </small>
              </div>
              <div className="row">
                <div className="col-12">
                  {this.getComments()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getComments = () => {
    if (!this.props.isOpened) return null

    return <CommentList comments={this.props.article.comments} />
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}
