import LoadMorePost from "../../components/HomeFeeds/SignlePost/LoadMorePost";

const PhotosPost = () => {
    return (
        <div className="bg-[#0A123E] timeline-photos ">
            <div className="flex  justify-center pt-20">
                <div className="no-photos flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <path d="M20.375 2L32.625 14.3077M32.625 2L20.375 14.3077M8.125 31.5385C8.92935 31.5385 9.72582 31.3793 10.4689 31.07C11.2121 30.7608 11.8873 30.3075 12.456 29.736C13.0248 29.1646 13.476 28.4862 13.7838 27.7396C14.0916 26.993 14.25 26.1928 14.25 25.3846C14.25 27.0167 14.8953 28.582 16.044 29.736C17.1926 30.8901 18.7505 31.5385 20.375 31.5385C21.9995 31.5385 23.5574 30.8901 24.706 29.736C25.8547 28.582 26.5 27.0167 26.5 25.3846C26.5 27.0167 27.1453 28.582 28.294 29.736C29.4426 30.8901 31.0005 31.5385 32.625 31.5385C34.2495 31.5385 35.8074 30.8901 36.956 29.736C38.1047 28.582 38.75 27.0167 38.75 25.3846C38.75 27.0167 39.3953 28.582 40.544 29.736C41.6926 30.8901 43.2505 31.5385 44.875 31.5385C46.4995 31.5385 48.0574 30.8901 49.206 29.736C50.3547 28.582 51 27.0167 51 25.3846C51 38.9797 40.0314 50 26.5 50C12.9687 50 2 38.9797 2 25.3846C2 27.0167 2.64531 28.582 3.79397 29.736C4.94263 30.8901 6.50055 31.5385 8.125 31.5385Z" stroke="#7F7F7F" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <p className="text-white text-center mt-6">No posts uploaded yet</p>
            <LoadMorePost></LoadMorePost>
        </div>
    );
};

export default PhotosPost;