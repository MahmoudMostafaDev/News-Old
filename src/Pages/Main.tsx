import React from 'react';
import fakeData from '../assets/fakeData';
import CardContainer from '../components/ui/Card/CardContainer';
import CardInfinteContainer from '../components/ui/Card/CardInfinteContainer';

const Main = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-5 mt-10 text-primary text-center md:text-start'>Your Headline</h2>
            <CardContainer Cards={fakeData} />
            <CardInfinteContainer />
        </div>
    );
}

export default Main;
