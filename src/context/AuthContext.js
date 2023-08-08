import React from 'react'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  return (
    <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
  )
}
//children In gelebilmesi için  AuthContext.Provider  ile sarmallama yapmamız gerekiyor.
export default AuthContextProvider