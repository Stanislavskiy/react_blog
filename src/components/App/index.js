import React, { Component } from 'react'
import Articles from '../ArticleList'
import Menu from '../Menu'
import fixtures from '../../data/fixtures'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.scss'
import './app.scss'


class App extends Component {
  state = {
    hasError: false,
    reverted: false
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    const article_list = (this.state.reverted && fixtures.slice().reverse()) || fixtures.slice()

    if (this.state.hasError) {
      return <h5>Error</h5>
    }

    return (
      <div className="App">
        <header className="App-header">
          <Menu revert={this.revert} />
        </header>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 text-center inline-group">
              <button className="menu btn btn-link" onClick={this.revert}>Revert</button>
              <button className="menu btn btn-link">Another</button>
              <button className="menu btn btn-link">Action</button>
            </div>
          </div>
          <Articles articles={article_list} />
        </div>
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
