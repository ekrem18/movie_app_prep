import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    let navigate = useNavigate() 
  const createUser = async (email, password) => {
    // yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      navigate("/")
      toastSuccessNotify("Registered Successfully!")
    } catch (error) {
      toastErrorNotify(error.message)
    }
  };


  const signIn =async(email,password)=>{
    try {
     let userCredential =  await signInWithEmailAndPassword(auth, email, password)
     console.log(userCredential);
     navigate("/")
     toastSuccessNotify("Logged In Successfully!")
    } catch (error) {
        
    }
  }

    const values={createUser, signIn}
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
//children In gelebilmesi için  AuthContext.Provider  ile sarmallama yapmamız gerekiyor. App js içierisnde bütün yapıyı kapsayan AppRouter ı kapsadığımız için children approuter olmuş oldu

export default AuthContextProvider;
