import { createContext, useState } from 'react';

export const FriendsContext = createContext()

const FriendsProvider = ({ children }) => {
    const [lastAction, setLastAction] = useState(null);
    const [history, setHistory] = useState([]);
    
    const handleButton = (friendName, actionType) => {
        const timestamp = new Date().toLocaleTimeString();
        const newAction = {
            name: friendName,
            type: actionType,
            time: timestamp
        };
        setLastAction(newAction);
        setHistory(prev => [newAction, ...prev]);
    };

    const data = {
        lastAction,
        history, 
        handleButton
    };
    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;