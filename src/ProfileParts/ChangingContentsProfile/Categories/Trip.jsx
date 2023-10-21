import './Category.css'
const Trip = () => {
    return (
        <div className="trip-contain flex items-center gap-3 ">
            <div className="tip-svg flex justify-center items-center ms-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M14.6341 1.6C15.7073 1.6 16.5854 2.32 16.5854 3.2V12.8C16.5854 13.68 15.7073 14.4 14.6341 14.4V1.6ZM0 14.4C0 15.28 0.878049 16 1.95122 16H10.7317C11.8049 16 12.6829 15.28 12.6829 14.4V1.6C12.6829 0.72 11.8049 0 10.7317 0H1.95122C0.878049 0 0 0.72 0 1.6V14.4ZM18.5366 12.8C19.3463 12.8 20 12.264 20 11.6V4.4C20 3.736 19.3463 3.2 18.5366 3.2V12.8Z" fill="#D9D9D9" />
                </svg>
            </div>
            <p className='text-white'>Trip Category</p>
        </div>
    );
};

export default Trip;