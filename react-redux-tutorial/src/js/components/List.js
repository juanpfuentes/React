import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
  const articles = useSelector(state => state.articles)
  return (
    <ul>
      {articles.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  )
}

export default List
