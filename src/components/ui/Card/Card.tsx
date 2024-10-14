import React from 'react';
import Button from '../Button';
import imgd from '../../../assets/cardPlaceholder.webp';
import CardInfo from './CardInfo';

interface Props {
    headline: string;
    desc: string;
    img: string;
    onView: () => void;
    onSave: () => void;
}
const Card: React.FC<Props> = ({ headline, desc, img = imgd, onView, onSave }) => {
    console.log(img)
    return (
        <div className='bg-white shadow-lg rounded-lg w-[300px] relative overflow-hidden '>
            <img src={imgd} alt="" loading='lazy' className='object-cover h-42 w-full  ' />
            <CardInfo headline={headline} desc={desc} />
            <div className='flex justify-between m-4'>
                <Button text='View' isPrimary onClick={onView} />
                <Button text='Save' onClick={onSave} />
            </div>
        </div>

    );
}

export default Card;
