import React, {useState, createContext} from "react";

// create empty state context
const StateContext = createContext(null);
//const MyContext = React.createContext();

const StateProvider = ({ children }) => {
    // const [getter, setter] = useState(datatype);
    const [login, setLogin] = useState(false);

    // const [user, setUser] = useState({})
    return (
        <StateContext.Provider value={{login, setLogin}}>
            {children}
        </StateContext.Provider>

    )
}

export { StateContext, StateProvider};