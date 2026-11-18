import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState ('')

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   cheak is login or not
  let isLoggedIn = !!token;

  // this is for logout
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // ??? JWT AUTHENTICATION FOR GETTING USER DATA

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }});

           if(response.ok){
          const data = await response.json()
          console.log("userdata" ,data)
          setUser(data)
        }
        
    } catch (error) {
      console.log("!userAuthentication");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ storeTokenInLs, LogoutUser,  user, isLoggedIn,token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);

  if (!AuthContextValue) {
    throw new Error("useAuth used outside from the provider");
  }

  return AuthContextValue;
};
