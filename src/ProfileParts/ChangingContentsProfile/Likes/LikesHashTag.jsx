const LikesHashTag = () => {
    return (
        <div className="trip-contain flex items-center gap-3 mt-4">
            <div className="tip-svg flex justify-center items-center ms-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.94875 5.41797L6.29825 14.253M13.3662 5.41797L10.7157 14.253M15.1332 8.06847H5.41475M14.2497 11.6025H4.53125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.67 9.835C18.67 13.9998 18.67 16.0822 17.3757 17.3757C16.0831 18.67 13.9998 18.67 9.835 18.67C5.67018 18.67 3.58777 18.67 2.29344 17.3757C1 16.0831 1 13.9998 1 9.835C1 5.67018 1 3.58777 2.29344 2.29344C3.58865 1 5.67018 1 9.835 1C13.9998 1 16.0822 1 17.3757 2.29344C18.2362 3.15397 18.5242 4.36348 18.6214 6.301" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            </div>
            <p className='text-white'>Liked Hashtags</p>
        </div>

    );
};

export default LikesHashTag;