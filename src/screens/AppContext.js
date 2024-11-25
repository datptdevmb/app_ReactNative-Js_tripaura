import React, { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = (props) => {
    const { children } = props;
<<<<<<< HEAD
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState(null);

    return (        

=======
    const [isLogin, setIsLogin] = useState(false);
    return (
>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
        <AppContext.Provider
            value={{
                isLogin, setIsLogin,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
