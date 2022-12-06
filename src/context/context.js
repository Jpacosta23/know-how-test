import React, { createContext, useReducer, useContext } from 'react'

const initialState = {
  data: {},
  favorites: [],
  errors: null
}

const AppStateContext = createContext()
const AppDispatchContext = createContext()

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DATA': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'ADD_FAVORITES': {
      return {
        ...state,
        favorites: action.payload
      }
    }
    case 'REMOVE_FAVORITES': {
      return {
        ...state,
        favorites: action.payload
      }
    }
    case 'ERROR': {
      return {
        ...state,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

const useAppState = () => {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used withim a AppProvider')
  }

  return context
}

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider')
  }

  return context
}

export { AppContextProvider, useAppState, useAppDispatch }
