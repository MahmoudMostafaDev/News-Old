import React from 'react';
import InterestsContiainer from '../components/ui/Auth/InterestsContiainer';
import CardContainer from '../components/ui/Card/CardContainer';
import cards from '../assets/fakeData';

const Profile = () => {
    return (
        <div className='p-5'>
            <h3 className='text-2xl font-bold mb-4 mt-10 text-center md:text-start '>Welcome : <span className='text-primary'>Mahmoud</span></h3>
            <h4 className='text-xl font-bold mb-4 mt-10 text-center md:text-start '>Your Interests</h4>
            <InterestsContiainer />
            <h4 className='text-xl text-primary font-bold mb-4 mt-10 text-center md:text-start '>Your Interests</h4>
            <CardContainer Cards={cards} />
        </div>
    );
}

export default Profile;
