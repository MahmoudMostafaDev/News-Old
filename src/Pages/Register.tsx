import React from 'react';
import Input from '../components/ui/Input';
import LargeBtn from '../components/ui/LargeBtn';
import InterestsContiainer from '../components/ui/Auth/InterestsContiainer';
const Register = () => {
    return (
        <form className='p-4 border m-2 flex flex-col gap-4 max-w-[550px] lg:max-w-[650px] mx-auto md:mt-40 lg:px-20 lg:py-16'>
            <h2 className='text-2xl font-bold mb-4'>Register</h2>
            <Input label="Email" type="email" onChangeOutter={() => { }} />
            <Input label="Password" type="password" onChangeOutter={() => { }} />
            <div className='flex justify-between mb-1 mt-4 items-end'>
                <h2 className='text-xl font-bold '>Choose your Interests : </h2>
                <h3 className='text-md font-bold text-primary '>At Least 3</h3>
            </div>
            <InterestsContiainer />
            <LargeBtn text="Register" onClick={() => { }} />
        </form>
    );
}

export default Register;
