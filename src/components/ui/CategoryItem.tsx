import React from 'react';
interface Props {
    text: string
    onClick: (selected: boolean) => void
    isSelected?: boolean
}
const CategoryItem: React.FC<Props> = ({ text, onClick, isSelected }) => {
    const [selected, setSelected] = React.useState(isSelected);
    function handleSelect() {
        setSelected(!selected);
        if (!selected) {
            onClick(true);
        }
    }

    return (
        <button type='button' onClick={handleSelect} className={`${selected ? 'bg-primary text-white' : 'text-primary bg-slate-200'}  text-xl shadow-lg font-bold py-2 px-10 rounded-xl`}>
            {text}{!selected ? ' +' : ''}
        </button>
    );
}

export default CategoryItem;
