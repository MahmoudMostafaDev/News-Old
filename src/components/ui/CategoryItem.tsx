import React from 'react';
interface Props {
    text: string
    onClick: (selected: string) => void
    isSelected?: boolean
    isDisabled?: boolean
}
const CategoryItem: React.FC<Props> = ({ text, onClick, isSelected, isDisabled }) => {

    return (
        <button type='button' onClick={isDisabled ? isSelected ? () => { } : () => onClick(text) : () => onClick(text)} className={`${isSelected ? 'bg-primary text-white' : 'text-primary bg-slate-200'}  text-xl shadow-lg font-bold py-2 px-10 rounded-xl`}>
            {text}{!isSelected ? ' +' : ''}
        </button>
    );
}

export default CategoryItem;
