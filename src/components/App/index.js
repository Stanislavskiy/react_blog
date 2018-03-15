import React, { Component } from 'react';
import Articles from '../ArticleList'
import fixtures from '../../data/fixtures'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'

class App extends PureComponent {
  state = {
    hasError: false,
    reverted: false
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    let article_list = fixtures.slice()

    if (this.state.reverted) {
      article_list.reverse()
    }

    if (this.state.hasError) {
      return <h5>Error</h5>
    }

    return (
      <div className="App container">
        <div className="row">
          <div className="col-10 offset-1 text-center">
            <header className="App-header jumbotron">
              <h1 className="App-title display-2">Hello</h1>
            </header>
          </div>
        </div>
        <div className="row App-nav">
          <div className="col-10 offset-1">
            <button className=" btn btn-light btn-lg" onClick={this.revert}>Revert</button>
          </div>
        </div>
        <Articles articles={article_list} />
      </div>
    );
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    })
  }
}

export default App;
