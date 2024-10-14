import React from 'react';
import user from "../../../assets/user.png"

import Logo from "../../../assets/Logo.png"
import Button from '../Button';

const Header = () => {
    return (
        <div className='shadow-lg'>
            <div className='flex justify-between items-center p-4 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[990px] xl:max-w-[1200px] mx-auto'>
                <img src={Logo} alt="Logo" className='w-10' />
                <div className=' gap-4 hidden md:flex'>
                    <Button text="Profile" onClick={() => console.log("test")} />
                    <Button text="Logout" onClick={() => console.log("test")} />
                    <img src={user} alt="User" className='w-10' />
                </div>
                <img src={user} alt="User" className='md:hidden w-10' />
            </div>
        </div>
    );
}

export default Header;
