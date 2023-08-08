import React, { createContext } from 'react'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  return (
    <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
  )
}
//children In gelebilmesi için  AuthContext.Provider  ile sarmallama yapmamız gerekiyor. App js içierisnde bütün yapıyı kapsayan AppRouter ı kapsadığımız için children approuter olmuş oldu

export default AuthContextProvider