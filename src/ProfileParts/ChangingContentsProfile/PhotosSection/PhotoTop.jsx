
const PhotoTop = () => {
    return (
        <div className="trip-contain  flex justify-between items-center pe-4">
            <div className="left-top flex items-center gap-3 ">
                <div className="tip-svg flex justify-center items-center ms-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.6 9.6H13.6L10.84 6L9 8.4L7.76 6.8L5.6 9.6ZM4.8 12.8C4.36 12.8 3.98347 12.6435 3.6704 12.3304C3.3568 12.0168 3.2 11.64 3.2 11.2V1.6C3.2 1.16 3.3568 0.7832 3.6704 0.4696C3.98347 0.156533 4.36 0 4.8 0H14.4C14.84 0 15.2168 0.156533 15.5304 0.4696C15.8435 0.7832 16 1.16 16 1.6V11.2C16 11.64 15.8435 12.0168 15.5304 12.3304C15.2168 12.6435 14.84 12.8 14.4 12.8H4.8ZM1.6 16C1.16 16 0.783467 15.8435 0.4704 15.5304C0.1568 15.2168 0 14.84 0 14.4V3.2H1.6V14.4H12.8V16H1.6Z" fill="#F8F8F8" />
                    </svg>
                </div>
                <p className='text-white'>Photos</p>
            </div>
            <div className="right-top flex justify-center items-center">
                <p className="text-white">+ Upload photos</p>
            </div>
        </div>
    );
};

export default PhotoTop;