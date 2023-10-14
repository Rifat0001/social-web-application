import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import ProfileLayout from "./components/Layouts/ProfileLayout";
import Timeline from "./ProfileParts/ChangingContentsProfile/Timeline/Timeline";
import Categories from "./ProfileParts/ChangingContentsProfile/Categories/Categories";

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
                path: 'timeline',
                element: <Timeline></Timeline>
            },
            {
                path: 'categories',
                element: <Categories></Categories>
            }
        ]
    }
]);