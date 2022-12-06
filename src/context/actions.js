const API_URL_BASE = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

export const searchGifs = async (query, dispatch, offset, limit) => {
  try {
    const res = await fetch(
      `${API_URL_BASE}/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`
    )

    const data = await res.json()

    dispatch({ type: 'DATA', payload: data })
  } catch (err) {
    dispatch({ type: 'ERROR', payload: err })
  }
}

export const addToFavorites = async (dispatch, image) => {
  try {
    dispatch({ type: 'ADD_FAVORITES', payload: image })
  } catch (err) {
    dispatch({ type: 'ERROR', payload: err })
  }
}

export const removeFromFavorites = async (dispatch, image) => {
  try {
    dispatch({ type: 'REMOVE_FAVORITES', payload: image })
  } catch (err) {
    dispatch({ type: 'ERROR', payload: err })
  }
}
