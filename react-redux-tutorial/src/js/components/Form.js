import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from '../actions/index'

const Form = () => {
  const [article, setArticle] = useState('')
  const dispatch = useDispatch()
  const handleArticleChange = event => {
    setArticle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(addArticle(article))
    setArticle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={article}
          onChange={handleArticleChange}
        />
      </div>
      <button type='submit'>SAVE</button>
    </form>
  )
}

export default Form
