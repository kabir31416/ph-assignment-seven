import React, { Children, createContext } from 'react';

export const friendsContext = createContext()

const FriendsProvider = ({Children}) => {
    return <friendsContext.Provider>
        {Children}
    </friendsContext.Provider>
};

export default FriendsProvider;