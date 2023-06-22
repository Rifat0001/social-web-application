import Card from '../Card/Card';
import CreateStory from '../CreateStory/CreateStory';
import './Story.css'
import { FiChevronRight } from "react-icons/fi";
const Story = () => {
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 100;
    }
    return (
        <div className="relative me-6">
            <div className="absolute right-[-25px] top-[50px] z-20">
                <button onClick={scrollRight} className="p-2 right m-2 rounded-full bg-[#808396] ">
                    <FiChevronRight />
                </button>
            </div>
            <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide z-10">
                <div>
                    <CreateStory></CreateStory>
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Story;