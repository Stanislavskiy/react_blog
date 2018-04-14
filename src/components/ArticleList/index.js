import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from '../Article'
import accordeon from '../../decorators/accordeon'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    
    // from accordeon
    toggleOpen: PropTypes.func.isRequired,
    openedId: PropTypes.string

  }

  render() {
    let {toggleOpen, openedId} = this.props

    const articles = this.props.articles.map((article, index) =>
      <li key={article.id}>
        <Article article={article} isOpened={openedId===article.id} toggleArticle={toggleOpen(article.id)} />
      </li>
    )

    return (
      <ul>
        {articles}
      </ul>
    )
  }
}

export default accordeon(ArticleList);