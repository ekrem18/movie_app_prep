import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
    // yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

    const values={createUser}
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
//children In gelebilmesi için  AuthContext.Provider  ile sarmallama yapmamız gerekiyor. App js içierisnde bütün yapıyı kapsayan AppRouter ı kapsadığımız için children approuter olmuş oldu

export default AuthContextProvider;
