import React from "react";

const UserContext = React.createContext("Code Evalution");

const UserProvider = UserContext.Provider;
const Userconsumer = UserContext.Consumer;

export { UserProvider, Userconsumer };
export default UserContext;
