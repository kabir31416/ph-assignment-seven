import { use } from 'react';
import Cards from './Cards';



const friendsPromise = fetch('/friends.json').then(res => res.json());


const AllFriends = () => {

    const friendsData = use(friendsPromise)

    return (
        <div className='pb-20'>
            <h1 className='font-semibold text-2xl py-4'>Your friends</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                {
                    friendsData.map(friend => <Cards key={friend.id} friend={friend}></Cards>)
                }
            </div>
        </div>
    );
};

export default AllFriends;