import React, { createContext, useContext, useEffect, useState } from 'react';
import { signIn, signUp } from '../api/auth';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [jwtToken, setJwtToken] = useState(null)

  async function loginUser ({ email, password }) {
    const resp = await signIn(email, password)
    console.log(resp)
    if (resp.error === true) {
      return resp.message
    } else {
      setJwtToken(resp.token)
      setUser(resp.data)
      setIsLoggedIn(true)
    }
    
  }

  async function signupUser ({ email, username, password }) {
    const resp = await signUp(email, username, password)
    console.log(resp)
    if (resp.error === true) {
      return resp.message
    } else {
      setJwtToken(resp.token)
      setUser(resp.data)
      setIsLoggedIn(true)
    }
  }

  async function logoutUser () {
    // clear states
    setIsLoggedIn(false)
    setJwtToken(null)
    setUser({})
  }; 

    return (
      <AuthContext.Provider value = {{
        loginUser,
        logoutUser,
        signupUser,
        user,
        jwtToken,
        isLoggedIn
      }}>
        {children}
      </AuthContext.Provider>
    )

};

export default function useAuth() {
  return useContext(AuthContext);
}