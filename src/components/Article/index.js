import React, { Component } from 'react';
import './article.scss';

class Article extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpened: props.defaultOpen,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen!==this.props.defaultOpen)
      this.setState({
        isOpened:nextProps.defaultOpen
      })
  }

  render() {
    const {article} = this.props
    const text = this.state.isOpened && (
      <p className="card-text"> {article.text}</p>
    )
    return (
        <div className="Article row">
          <div className="col-10 offset-1">
            <div className="card">
              <h3 className="card-title card-header">
                {article.title}
                <button onClick={this.toggle} className="btn btn-primary float-right">Toggle</button>
            </h3>
              <div className="card-body">
                {text}
                <small className="text-secondary">{new Date(article.date).toDateString()}</small>
              </div>
            </div>
          </div>
        </div>
    );
  }

  toggle = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }
}

export default Article;
