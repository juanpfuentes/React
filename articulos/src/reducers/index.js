import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/action-types'

const initialState = {
  articles: []
}

function rootReducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...state, articles: state.articles.concat(action.payload) }
  }
  if (action.type === DELETE_ARTICLE) {
    return {
      ...state,
      articles: state.articles.filter((x, i) => i !== action.payload)
    }
  }
  return state
}

export default rootReducer
