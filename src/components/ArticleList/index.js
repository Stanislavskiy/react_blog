import React from 'react'
import Article from '../Article'

export default function ArticleList ({ article_list }) {
  const article_elements = article_list.map((article, index) =>
    <li key={article.id}>
       <Article article={article} defaultOpen={index===0} />
    </li>
  )
  return (
    <ul>
      {article_elements}
    </ul>
  )
}
