import React, { useContext } from 'react';
import { FriendsContext } from '../context/FriendsProvider';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const StatsPage = () => {
    const { history } = useContext(FriendsContext);

    const chartData = [
        { name: 'Call', value: history?.filter(h => h.type === 'Call').length || 0, color: '#3B82F6' },
        { name: 'Text', value: history?.filter(h => h.type === 'Text').length || 0, color: '#10B981' },
        { name: 'Video', value: history?.filter(h => h.type === 'Video').length || 0, color: '#A855F7' },
    ];

    const hasData = chartData.some(item => item.value > 0);

    return (
        <div className='bg-[#F8FAFC] p-2'>

            <div className='container mx-auto'>
                <h1 className='font-bold text-3xl md:text-5xl my-10'>Friendship Analytics</h1>

                <div className="p-10 flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm mb-10">
                    <h2 className="text-xl font-bold text-gray-700 mb-6">By Interaction Type</h2>

                    <div className="w-full h-55">
                        {hasData ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        innerRadius="75%"
                                        outerRadius="100%"
                                        paddingAngle={10}
                                        cornerRadius={10}
                                        dataKey="value"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" align="center" />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400 italic">
                                No activity data available yet.
                            </div>
                        )}
                    </div>

                    <div className="mt-6 text-sm text-gray-500">
                        Total Interactions: {history?.length || 0}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;