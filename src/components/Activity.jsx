import React, { useContext, useState } from 'react';
import { FriendsContext } from '../context/FriendsProvider';
import { MessageSquareText, Phone, Video } from 'lucide-react';




const Activity = () => {

    const { history } = useContext(FriendsContext);

    const [filterType, setFilterType] = useState("All")

    const filteredHistory = filterType === "All" ? history : history.filter(item => item.type === filterType)




    if (!history || history.length === 0) {
        return <div className="p-6 text-gray-500">No recent activity.</div>;
    }

    const setIcon = {
        Call: <Phone size={20} />,
        Text: <MessageSquareText size={20} />,
        Video: <Video size={20} />
    };


    return (
        <div className="space-y-6">
                <div className="flex mb-6">

                    <div className="relative w-48">
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-gray-600 rounded text-sm text-gray-700 shadow-sm outline-none cursor-pointer"
                        >
                            {['All', 'Call', 'Text', 'Video'].map((type) => (
                                <option key={type} value={type}>
                                    {type === 'All' ? 'All' : `${type}`}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

            <div className="space-y-4">
                {filteredHistory.length > 0 ? (
                    filteredHistory.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 shadow-sm rounded-xl bg-white border border-gray-100">
                            <div className="shrink-0 p-3 bg-gray-50 rounded-full">
                                {setIcon[item.type] || <Info size={20} />}
                            </div>
                            <div className="flex-1">
                                <h1 className="font-semibold text-gray-800">
                                    {item.type} with <span className="text-emerald-600">{item.name}</span>
                                </h1>
                                <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-400">
                        No {filterType} history found!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Activity;