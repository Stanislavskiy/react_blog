import React, {PureComponent} from 'react'
import Article from '../Article'

export default class ArticleList extends Component {
  state = {
    openedId:null
  }
  render() {
    const {articles} = this.props
    const article_elements = articles.map((article, index) =>
    <li key={article.id}>
       <Article article={article} isOpened={this.state.openedId===article.id} toggleArticle={this.toggleArticle.bind(this, article.id)} />
    </li>
    )
    return (
      <ul>
        {article_elements}
      </ul>
    )
  }

  toggleArticle = id => {
    if (id===this.state.openedId) this.setState({
      openedId: null
    })
    else this.setState({
      openedId: id
    })
  }
}
