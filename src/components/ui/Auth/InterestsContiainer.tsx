import React from 'react';

import CategoryItem from '../CategoryItem';

const InterestsContiainer = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4 justify-between max-[450px]:grid-cols-1 align-center'>
            <CategoryItem text="General" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="World" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="Nation" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="Business" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="Health" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="Technology" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="Entertainment" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="Sports" onClick={(selected) => console.log(selected)} />
            <CategoryItem text="Science" onClick={(selected) => console.log(selected)} />
        </div>
    );
}

export default InterestsContiainer;
