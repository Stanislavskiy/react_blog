import React, { PureComponent } from 'react';
import './article.scss';

class Article extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  render() {
    const {article, isOpened, toggleArticle} = this.props
    const text = isOpened && (
      <p className="card-text"> {article.text}</p>
    )

    return (
        <div className="Article row">
          <div className="col-10 offset-1">
            <div className="card">
              <h3 className="card-title card-header" onClick={this.incrementCount}>
                {article.title}
                <button onClick={toggleArticle.bind(this, article.id)} className="btn btn-primary float-right">Toggle</button>
              </h3>
              <div className="card-body">
                {text}
                <small className="text-secondary">Published: {new Date(article.date).toDateString()}, clicks: {this.state.count}</small>
              </div>
            </div>
          </div>
        </div>
    );
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default Article;
