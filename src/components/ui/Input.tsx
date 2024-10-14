import React from 'react';
interface Props {
    label: string;
    onChangeOutter: (e: any) => void;
    value?: string;
    type?: string;
}
const Input: React.FC<Props> = ({ label, onChangeOutter, value, type }) => {
    const [valueInput, setValueInput] = React.useState(value);
    function onChange(e: any) {
        setValueInput(e.target.value);
        onChangeOutter(e);
    }
    return (
        <div>
            <label className=" text-lg  text-gray-700 block mb-1" htmlFor={label}>{label}</label>
            <input
                onChange={onChange}
                value={valueInput}
                className="w-full h-11 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                name={label}
                type={type || 'text'}
            />
        </div>
    );
}

export default Input;
