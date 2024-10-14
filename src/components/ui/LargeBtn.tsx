import React from 'react';
interface Props {
    text: string
    onClick: () => void
}

const LargeBtn: React.FC<Props> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="bg-primary hover:bg-secondary text-white text-xl shadow-lg font-semibold py-3 w-full rounded-2xl">
            {text}
        </button>
    );
}

export default LargeBtn;
