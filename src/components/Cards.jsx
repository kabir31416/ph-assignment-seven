import React from 'react';

const Cards = ({friend}) => {
    return (
        <div className='card bg-base-100 card-xs shadow-sm p-6 flex flex-col gap-3 items-center justify-center'>
            <img className='rounded-full h-20 w-20' src={friend.picture} alt="" />
            
            <h2>{friend.name}</h2>

            <p>{friend.days_since_contact}d ago</p>

            <div className='flex gap-2'>
                {
                friend.tags.map((tag , index)=> (
                <span key={index} className="px-4 py-1.5 bg-[#CBFADB] text-[#244D3F] text-sm font-medium rounded-full">{tag} </span>
                ))
            }
            </div>


        </div>
    );
};

export default Cards;