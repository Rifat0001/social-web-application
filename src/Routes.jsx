import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import ProfileLayout from "./components/Layouts/ProfileLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: 'profile',
                element: <ProfileLayout></ProfileLayout>
            }
        ]
    }
]);