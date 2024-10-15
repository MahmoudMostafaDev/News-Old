import React from 'react';
import Input from '../components/ui/Input';
import LargeBtn from '../components/ui/LargeBtn';

const Login = () => {
    return (
        <form className='p-4 border m-2 flex flex-col gap-4 max-w-[550px] lg:max-w-[650px] mx-auto md:mt-40 lg:px-20 lg:py-16'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <Input label="Email" type="email" onChangeOutter={() => { }} />
            <Input label="Password" type="password" onChangeOutter={() => { }} />
            <LargeBtn text="Login" onClick={() => { }} />
        </form>
    );
}

export default Login;
