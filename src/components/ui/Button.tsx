import React from 'react';

interface Props {
    text: string;
    onClick: () => void;
    isPrimary?: boolean;
}
const Button: React.FC<Props> = ({ text, onClick, isPrimary }) => {
    return (
        <button onClick={onClick} className={`${isPrimary ? 'bg-primary hover:bg-secondary' : 'bg-black hover:bg-gray-900'}  text-white text-xl shadow-lg font-semibold py-2 px-10 rounded-xl`}>
            {text}
        </button>
    );
}

export default Button;
