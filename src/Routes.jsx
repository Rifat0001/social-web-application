import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import ProfileLayout from "./components/Layouts/ProfileLayout";
import Timeline from "./ProfileParts/ChangingContentsProfile/Timeline/Timeline";
import Categories from "./ProfileParts/ChangingContentsProfile/Categories/Categories";
import Groups from "./ProfileParts/ChangingContentsProfile/Groups/Groups";
import Likes from "./ProfileParts/ChangingContentsProfile/Likes/Likes";
import Following from "./ProfileParts/ChangingContentsProfile/Following/Following";
import Followers from "./ProfileParts/ChangingContentsProfile/Following/Followers";
import Photos from "./ProfileParts/ChangingContentsProfile/PhotosSection/Photos";
import Videos from "./ProfileParts/ChangingContentsProfile/Videos/Videos";
import OtherProfileLayout from "./components/Layouts/OtherProfileLayout";
import TimelineOthers from "./OthersProfilePats/OtherChangingPosts/TimelinePostsOthers/TimelineOthers";
import TimelineAllPosts from "./OthersProfilePats/OtherChangingPosts/TimelinePostsOthers/TimelineAllPosts";
import PhotosPost from "./OthersProfilePats/OtherChangingPosts/PhotosPost";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            }
        ]
    },
    {
        path: 'profile',
        element: <ProfileLayout></ProfileLayout>,
        children: [
            {
                path: 'categories',
                element: <Categories></Categories>
            },
            {
                path: 'timeline',
                element: <Timeline></Timeline>
            },
            {
                path: 'groups',
                element: <Groups></Groups>
            },
            {
                path: 'likes',
                element: <Likes></Likes>
            },
            {
                path: 'following',
                element: <Following></Following>
            },
            {
                path: 'followers',
                element: <Followers></Followers>
            },
            {
                path: 'photos',
                element: <Photos></Photos>
            },
            {
                path: 'videos',
                element: <Videos></Videos>
            },

        ]
    },
    {
        path: 'othersProfile',
        element: <OtherProfileLayout></OtherProfileLayout>,
        children: [
            {
                path: 'timeline',
                element: <TimelineOthers></TimelineOthers>,
                children: [
                    {
                        path: 'feeds',
                        element: <TimelineAllPosts>s</TimelineAllPosts>
                    },
                    {
                        path: 'photos',
                        element: <PhotosPost></PhotosPost>
                    }
                ]
            },

        ]
    }
]);