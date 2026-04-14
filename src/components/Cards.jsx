import React from 'react';

const Cards = ({ friend }) => {

    const statusStyles = {
        Overdue: "bg-red-100 text-red-600 border-red-200",
        On_Track: "bg-green-800 text-white border-green-200",
        Almost_Due: "bg-blue-100 text-blue-600 border-blue-200",
    };

    return (
        <div className='card bg-base-100 card-xs shadow-sm p-6 flex flex-col gap-3 items-center justify-center'>
            <img className='rounded-full h-20 w-20' src={friend.picture} alt="" />

            <h2 className='font-semibold text-2xl'>{friend.name}</h2>

            <p>{friend.days_since_contact}d ago</p>

            <div className='flex gap-2'>
                {
                    friend.tags.map((tag, index) => (
                        <span key={index} className="px-4 py-1.5 bg-[#CBFADB] text-[#244D3F] text-sm font-medium rounded-full">{tag} </span>
                    ))
                }
            </div>

            <div className={`px-3 py-1 rounded-full border ${statusStyles[friend.status] || 'bg-gray-100'}`}>
                {friend.status}
            </div>

        </div>
    );
};

export default Cards;