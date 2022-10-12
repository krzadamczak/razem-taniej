//TODO: https://beta.reactjs.org/learn/passing-data-deeply-with-context

import React, { useContext, useReducer } from "react";

const userInitialState = { data: {} };

const UserContext = React.createContext(userInitialState);

export function useUserContext() {
    return useContext(UserContext);
}

const userReducer = (state, action) => {
    switch (action.type) {
        default: {
            console.log("There is no such action.");
            break;
        }
    }
};

export const UserProvider = (props) => {
    const [userState, dispatchUserAction] = useReducer(userReducer, userInitialState);

    const value = { userState };
    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};
