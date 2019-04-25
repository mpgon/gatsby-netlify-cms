import React, { useContext, useState, useLayoutEffect } from "react";
import axios from "axios";

const LoginContext = React.createContext({
  isLogged: false,
  setIsLogged: undefined,
});

export const useLoginContext = () => useContext(LoginContext);

export const useAuth = () => {
  const [error, setError] = useState(false);
  const { isLogged, setIsLogged } = useLoginContext();

  function loggedInStore() {
    const isLoggedInStore = window.localStorage.getItem("isLogged");
    if (isLoggedInStore && !isLogged) setIsLogged(true);
  }

  function receiveMessage(event) {
    if (event && event.data && event.data.account && event.data.token) {
      const { account, token } = event.data;
      axios
        .get(`https://api-staging.recaresolutions.com/accounts/${account}`, {
          headers: { Accept: "*/*", Authorization: `Bearer ${token}` },
        })
        .then(response => {
          console.log("response ", response);
          window.localStorage.setItem("isLogged", true);
          setIsLogged(true);
          setError(false);
        })
        .catch(error => {
          console.log("error ", error);
          window.localStorage.setItem("isLogged", false);
          setIsLogged(false);
          setError(true);
        });
    }
  }

  useLayoutEffect(() => {
    loggedInStore();

    window.addEventListener("message", receiveMessage, false);
    window.parent.postMessage("faq ready", "*");

    return () => window.removeEventListener("message", receiveMessage);
  }, []);

  return { isLogged, error };
};

export default function LoginProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
}
