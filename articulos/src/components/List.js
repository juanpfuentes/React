import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteArticle } from '../actions/index'

const List = () => {
  const articles = useSelector(state => state.articles)
  const dispatch = useDispatch()
  return (
    <ul>
      {articles.map((el, i) => (
        <li key={i}>
          {el}{' '}
          <button onClick={() => dispatch(deleteArticle(i))}>Eliminar</button>
        </li>
      ))}
    </ul>
  )
}

export default List
