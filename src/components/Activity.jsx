import React, { useContext } from 'react';
import { FriendsContext } from '../context/FriendsProvider';

const Activity = () => {

    const { history } = useContext(FriendsContext);

    if (!history) {
        return <div className="p-6">No recent activity.</div>;
    }

    return (
        <div>
            {history.map((item, index) => (
                <div key={index} className="border-b p-2">
                    {item.type} with {item.name} at {item.time}
                </div>
            ))}
        </div>
    );
};

export default Activity;