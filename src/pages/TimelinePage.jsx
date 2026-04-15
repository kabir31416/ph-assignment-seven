
import Activity from '../components/Activity';

const TimelinePage = () => {

    return (
        <div className="bg-[#F8FAFC] p-2 min-h-[50vh]">
            <div className='container mx-auto '>
                <h2 className="text-5xl font-bold mb-4 pt-20">Timeline</h2>
                <Activity></Activity>
            </div>
            
        </div>
    );
};

export default TimelinePage;