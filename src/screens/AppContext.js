import React, { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AppContext.Provider
            value={{
                isLogin, setIsLogin,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
