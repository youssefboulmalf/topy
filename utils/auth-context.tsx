import React from "react";
import { useRouter } from "next/router";

function getToken (token: string){
    return token
}

interface AuthContextValue {
  authState: any;
  setAuthState: React.Dispatch<React.SetStateAction<any>>;
  isUserAuthenticated (): boolean;
}

const AuthContext = React.createContext<AuthContextValue>({
  authState: false,
  setAuthState () {},
  isUserAuthenticated: () => false,
});

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
   token: () => {},
  });


  const setUserAuthInfo = ({ data }) => {
   const token = ()=>{localStorage.setItem("token", data.data)};

   setAuthState({
    token,
});
 };

 // checks if the user is authenticated or not
 const isUserAuthenticated = () => !!authState.token;

 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };