
import Activity from '../components/Activity';

const TimelinePage = () => {

    return (
        <div className="bg-[#F8FAFC] p-2">
            <div className='container mx-auto pt-20'>
                <h2 className="text-5xl font-bold mb-4">Timeline</h2>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default TimelinePage;