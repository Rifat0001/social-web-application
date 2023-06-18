import React from 'react';
import './HomeLayout.css'
import SideIcons from '../SideIcons/SideIcons';
import Profile from '../Profile/Profile';
const HomeLayout = () => {
    return (
        <div className='home-layout'>
            <SideIcons></SideIcons>
            <Profile></Profile>
            <div className='bg-indigo-500'>feeds</div>
            <div className='bg-indigo-700'>message</div>
        </div>
    );
};

export default HomeLayout;