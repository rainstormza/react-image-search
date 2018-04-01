const SEARCH_IMAGE = 'SEARCH_IMAGE'

const initialState = {
  search: ''
}

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case SEARCH_IMAGE:
      return {
        ...state,
        search: action.search
      }

    default:
      return state
  }
}

// action creator
export const searchImage = search => ({
  type: SEARCH_IMAGE,
  search
})
