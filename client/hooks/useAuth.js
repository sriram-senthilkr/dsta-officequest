import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  async function loginUser () {
    setIsLoggedIn(true)
  }
  async function logoutUser () {
    setIsLoggedIn(false)
  }; 

    return (
      <AuthContext.Provider value = {{
        loginUser,
        logoutUser,

        isLoggedIn
      }}>
        {children}
      </AuthContext.Provider>
    )

};

export default function useAuth() {
  return useContext(AuthContext);
}