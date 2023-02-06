import React from "react";

const MyContext = React.createContext();

const ContextProvider = ({children}) => {
    const [userid, setuserid] = React.useState();
    const [username, setusername,] = React.useState();
    const [email, setemail] = React.useState();
    return(
        <MyContext.Provider value={{userid, setuserid, username, setusername, email, setemail}}>
            {children}
        </MyContext.Provider>
    )
}

export {ContextProvider, MyContext};