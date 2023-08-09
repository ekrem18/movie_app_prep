import React from 'react'

export const MovieContext =createContext()

const MovieContextProvider = () => {
  return (
    <MovieContextProvider value={null}>{children}</MovieContextProvider>
  )
}

export default MovieContextProvider