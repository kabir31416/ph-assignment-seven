import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendsContext = createContext()

const FriendsProvider = ({ children }) => {
    const [lastAction, setLastAction] = useState(null);
    const [history, setHistory] = useState([]);

    const handleButton = (friendName, actionType) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const timestamp = new Date().toLocaleString('en-US', options);
        const newAction = {
            name: friendName,
            type: actionType,
            time: timestamp
        };
        setLastAction(newAction);
        setHistory(prev => [newAction, ...prev]);


        if (actionType === "Call") {
            toast(`You called ${friendName} at ${timestamp}`);
        }
        if (actionType === "Text") {
            toast(`You texted ${friendName} at ${timestamp}`);
        }
        if (actionType === "Video") {
            toast(`You video called ${friendName} at ${timestamp}`);
        }

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