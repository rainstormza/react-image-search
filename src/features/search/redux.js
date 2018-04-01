import axios from 'axios'
import config from '../../common/config'

const SEARCH_IMAGE = 'SEARCH_IMAGE'
const SEARCH_IMAGE_PENDING = 'SEARCH_IMAGE_PENDING'
const SEARCH_IMAGE_FULFILLED = 'SEARCH_IMAGE_FULFILLED'
const SEARCH_IMAGE_REJECTED = 'SEARCH_IMAGE_REJECTED'

const initialState = {
  isLoading: false,
  search: '',
  data: []
}

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case SEARCH_IMAGE:
      return {
        ...state,
        search: action.search
      }
    case SEARCH_IMAGE_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case SEARCH_IMAGE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        search: '',
        data: action.payload.results
      }
    case SEARCH_IMAGE_REJECTED:
      return {
        ...state,
        isLoading: false,
        search: '',
        data: []
      }
    default:
      return state
  }
}

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${config.accessKey}` }
})

// action creator
export const searchImage = search => ({
  type: SEARCH_IMAGE,
  payload: instance.get(`/search/photos?page=1&query=${search}`).then(res => {
    return res.data
  })
})
