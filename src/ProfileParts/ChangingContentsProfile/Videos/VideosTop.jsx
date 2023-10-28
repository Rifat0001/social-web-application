const VideosTop = () => {
    return (
        <div className="trip-contain  flex justify-between items-center pe-4">
            <div className="left-top flex items-center gap-3 ">
                <div className="tip-svg flex justify-center items-center ms-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                        <path d="M15.15 1.81458L12 3.7375V1.08333C12 0.796016 11.8946 0.520465 11.7071 0.317301C11.5196 0.114137 11.2652 0 11 0H2C1.46957 0 0.960859 0.228273 0.585786 0.634602C0.210714 1.04093 0 1.59203 0 2.16667V10.8333C0 11.408 0.210714 11.9591 0.585786 12.3654C0.960859 12.7717 1.46957 13 2 13H11C11.2652 13 11.5196 12.8859 11.7071 12.6827C11.8946 12.4795 12 12.204 12 11.9167V9.25167L15.15 11.1746C15.2308 11.2318 15.3241 11.2649 15.4205 11.2707C15.5169 11.2765 15.613 11.2547 15.6991 11.2075C15.7853 11.1603 15.8584 11.0893 15.9112 11.0018C15.964 10.9142 15.9947 10.8132 16 10.7088V2.275C15.9938 2.17104 15.9626 2.07065 15.9095 1.98384C15.8563 1.89703 15.7831 1.82683 15.6971 1.78025C15.6111 1.73366 15.5153 1.71232 15.4193 1.71834C15.3233 1.72437 15.2305 1.75755 15.15 1.81458Z" fill="#F8F8F8" />
                    </svg>
                </div>
                <p className='text-white'>Videos</p>
            </div>
            <div className="right-top flex justify-center items-center">
                <p className="text-white">+ Upload videos</p>
            </div>
        </div>
    );
};

export default VideosTop;