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
            }

        ]
    }
]);