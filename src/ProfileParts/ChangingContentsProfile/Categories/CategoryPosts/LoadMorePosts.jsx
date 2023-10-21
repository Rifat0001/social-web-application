
import './Categorypost.css'
const LoadMorePosts = () => {
    return (
        <div>
            <button
                className="load-outer text-white flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.41482 0 5.7511 0.335786 5.7511 0.75L5.75111 11.9393L8.71778 8.97703C9.01111 8.68414 9.48668 8.68414 9.78001 8.97703C10.0733 9.26992 10.0733 9.7448 9.78001 10.0377L5.53111 14.2803C5.39025 14.421 5.1992 14.5 5 14.5C4.80079 14.5 4.60975 14.421 4.46889 14.2803L0.219994 10.0377C-0.0733313 9.7448 -0.0733312 9.26992 0.219994 8.97703C0.513319 8.68414 0.988892 8.68414 1.28222 8.97703L4.24889 11.9393L4.24889 0.75C4.24889 0.335786 4.58518 0 5 0Z" fill="#B6B6B6" />
                </svg>
                <p className="text-[14px]">Load More Posts</p>
            </button>
        </div>
    );
};

export default LoadMorePosts;