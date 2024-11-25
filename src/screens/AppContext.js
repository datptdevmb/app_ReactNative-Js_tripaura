import React, { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(true);
<<<<<<< HEAD
    return (
=======
    const [user, setUser] = useState(null);

    return (        

>>>>>>> aee1b1af7168e56a7fc252ee383cc92f7ccf3b19
        <AppContext.Provider
            value={{
                isLogin, setIsLogin,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
