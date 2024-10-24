import React from 'react';

interface Props {
    text: string;
    onClick: () => void;
    isPrimary?: boolean;
    isLink?: boolean
    link?: string
    isDisabled?: boolean
}
const Button: React.FC<Props> = ({ text, onClick, isPrimary, isLink, link, isDisabled }) => {
    return (
        <>     {!isLink ? <button onClick={onClick} disabled={isDisabled} className={`${isPrimary ? 'bg-primary hover:bg-secondary' : 'bg-black hover:bg-gray-900'}  text-white text-xl shadow-lg font-semibold py-2 px-10 rounded-xl`}>
            {text}
        </button > : <a href={link} className={`${isPrimary ? 'bg-primary hover:bg-secondary' : 'bg-black hover:bg-gray-900'}  text-white text-xl shadow-lg font-semibold py-2 px-10 rounded-xl`} > {text} </a>}

        </>);

}

export default Button;
