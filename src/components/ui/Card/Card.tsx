import React, { useState } from 'react';
import Button from '../Button';
import imgd from '../../../assets/cardPlaceholder.webp';
import CardInfo from './CardInfo';
import { saveNews } from '../../../util/http';

interface Props {
    headline: string;
    desc: string;
    img: string;
    link: string;
}
const Card: React.FC<Props> = ({ headline, desc, img = imgd, link }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isError, setIsError] = useState(null);
    const token = localStorage.getItem("token")
    async function handleSave() {
        setIsLoading(true);
        setIsError(null);
        const res = await saveNews(token as string, { title: headline, description: desc, image: img, url: link });
        if (res.code != 200) {
            setIsError(res.msg);
        } else {
            setIsSaved(true);
        }
        setIsLoading(false);
    }
    if (isError) {
        console.error(isError);
    }
    return (
        <div className='bg-white shadow-lg rounded-lg w-[300px] relative overflow-hidden h-[450px] flex flex-col justify-between '>
            <img src={img} alt={headline} loading='lazy' className='object-cover h-48 w-full  ' />
            <CardInfo headline={headline} desc={desc} />
            <div className='flex justify-between m-4'>
                <Button text='View' isPrimary onClick={() => { }} isLink link={link} />
                <Button text={isLoading ? "Saving.." : isError ? "try" : isSaved ? "Saved" : "Save"} isDisabled={isLoading || isSaved} onClick={handleSave} />
            </div>
        </div>

    );
}

export default Card;
