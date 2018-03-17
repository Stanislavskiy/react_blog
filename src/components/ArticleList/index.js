import React, {Component} from 'react'
import Article from '../Article'

export default class ArticleList extends Component {
  propTypes: {
    articles: React.propTypes.array
  }

  state = {
    openedId:null
  }

  render() {
    const articles = this.props.articles.map((article, index) =>
      <li key={article.id}>
        <Article article={article} isOpened={this.state.openedId===article.id} toggleArticle={this.toggleArticle.bind(this, article.id)} />
      </li>
    )

    return (
      <ul>
        {articles}
      </ul>
    )
  }

  toggleArticle = id => {
    if (id === this.state.openedId) this.setState({
      openedId: null
    })
    else this.setState({
      openedId: id
    })
  }
}
