import React, { useEffect, useState } from "react";
export const UsersContext = React.createContext(null);

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [status, setStatus] = useState("loading");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/login", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setStatus("idle");
        return setUsers(response.data);
      })
      .catch((error) => console.log("ERROR: ", error));
  }, []);
  //

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        status,
        setStatus,
        loginData,
        setLoginData,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
