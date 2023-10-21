const LikesTop = () => {
    return (
        <div className="trip-contain flex items-center gap-3 ">
            <div className="tip-svg flex justify-center items-center ms-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.894 2H6.68598C6.06401 2 5.4675 2.24708 5.0277 2.68688C4.5879 3.12668 4.34082 3.72319 4.34082 4.34516V14.8984C4.34082 15.5204 4.5879 16.1169 5.0277 16.5567C5.4675 16.9965 6.06401 17.2435 6.68598 17.2435H14.894C15.516 17.2435 16.1125 16.9965 16.5523 16.5567C16.9921 16.1169 17.2392 15.5204 17.2392 14.8984V4.34516C17.2392 3.72319 16.9921 3.12668 16.5523 2.68688C16.1125 2.24708 15.516 2 14.894 2Z" stroke="#F8F8F8" stroke-width="2.09524" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.34516 4.3457C3.72319 4.3457 3.12668 4.59278 2.68688 5.03258C2.24708 5.47239 2 6.06889 2 6.69086V16.0715C2 17.0045 2.37062 17.8992 3.03032 18.5589C3.69003 19.2186 4.58478 19.5892 5.51774 19.5892H12.5532C13.1752 19.5892 13.7717 19.3422 14.2115 18.9024C14.6513 18.4626 14.8984 17.8661 14.8984 17.2441" stroke="#F8F8F8" stroke-width="2.09524" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <p className='text-white'>Pages</p>
        </div>
    );
};

export default LikesTop;