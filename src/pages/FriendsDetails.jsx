import { Archive, BellOff, Delete, MessageSquareText, Phone, PhoneCall, Video } from 'lucide-react';
import React, { use } from 'react';
import { useParams } from 'react-router';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const FriendsDetails = () => {

    const statusStyles = {
        Overdue: "bg-red-100 text-red-600 border-red-200",
        On_Track: "bg-green-800 text-white border-green-200",
        Almost_Due: "bg-blue-100 text-blue-600 border-blue-200",
    };

    const friendsData = use(friendsPromise)
    const params = useParams()
    const getFriends = friendsData.find(friend => friend.id == params.id)

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-gray-50">
                    <div className="md:col-span-4 space-y-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center ">
                            <img src={getFriends.picture} className="w-24 h-24 rounded-full mx-auto" />
                            <h2 className="text-xl font-bold mt-4">{getFriends.name}</h2>

                            <div className={`px-3 py-1 my-4 rounded-full border w-fit mx-auto ${statusStyles[getFriends.status] || 'bg-gray-100'}`}>
                                {getFriends.status}
                            </div>

                            <div className='flex gap-2 justify-center'>
                                {
                                    getFriends.tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-1.5 bg-[#CBFADB] text-[#244D3F] text-sm font-medium rounded-full">{tag} </span>
                                    ))
                                }
                            </div>
                            <p className="italic text-gray-500 my-3">"{getFriends.bio}"</p>
                            <p className=" text-gray-800">{getFriends.email}</p>
                        </div>


                        <div className="space-y-2">
                            <button className="w-full py-3 bg-white rounded-xl flex items-center justify-center gap-2 shadow-sm">
                                <BellOff /> Snooze 2 Weeks
                            </button>
                            <button className="w-full py-3 bg-white rounded-xl flex items-center justify-center gap-2 shadow-sm">
                                <Archive /> Archive
                            </button>
                            <button className="w-full py-3 bg-white rounded-xl text-red-500 flex items-center justify-center gap-2 shadow-sm">
                                <Delete /> Delete
                            </button>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                                <h1 className="text-3xl font-bold">{getFriends.days_since_contact}</h1>
                                <p className="text-gray-400">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                                <h1 className="text-3xl font-bold">{getFriends.goal}</h1>
                                <p className="text-gray-400">Goal(Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                                <h1 className="text-3xl font-bold">{getFriends.next_due_date}</h1>
                                <p className="text-gray-400">Next Due</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl flex justify-between items-center shadow-sm">
                            <div>
                                <h3 className="text-emerald-800 font-semibold">Relationship Goal</h3>
                                <p>Connect every <span className="font-bold">{getFriends.goal} days</span></p>
                            </div>
                            <button className="px-4 py-1 btn rounded-lg">Edit</button>
                        </div>

                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-emerald-800 font-semibold mb-4">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="py-8 bg-gray-50 rounded-xl hover:bg-gray-100 flex flex-col items-center gap-2">
                                    <Phone /> Call
                                </button>
                                <button className="py-8 bg-gray-50 rounded-xl hover:bg-gray-100 flex flex-col items-center gap-2">
                                    <MessageSquareText /> Text
                                </button>
                                <button className="py-8 bg-gray-50 rounded-xl hover:bg-gray-100 flex flex-col items-center gap-2">
                                    <Video /> Video
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default FriendsDetails;