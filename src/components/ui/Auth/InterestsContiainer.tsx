import React from 'react';

import CategoryItem from '../CategoryItem';
import { callBackFunc } from '../../../Pages/Register';

const InterestsContiainer: React.FC<{ setInterests: callBackFunc, selected?: string[], isWide?: boolean, isDisabled?: boolean }> = ({ setInterests, isWide, selected, isDisabled }) => {
    function onSelect(selected: string) {
        setInterests((oldState) => {
            const currentState = [...oldState]
            if (currentState.find((ele) => ele === selected) != undefined) {
                return currentState.filter((ele) => ele != selected);
            } else currentState.push(selected)
            return currentState
        });
    }
    return (
        <div className={`grid  grid-cols-2 gap-x-2 gap-y-4 justify-between max-[450px]:grid-cols-1 align-center ${isWide && " min-[1300px]:grid-cols-3"} `}>
            <CategoryItem text="General" isSelected={selected?.includes("General")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="World" isSelected={selected?.includes("World")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="Nation" isSelected={selected?.includes("Nation")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="Business" isSelected={selected?.includes("Business")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="Health" isSelected={selected?.includes("Health")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="Technology" isSelected={selected?.includes("Technology")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="Entertainment" isSelected={selected?.includes("Entertainment")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="Sports" isSelected={selected?.includes("Sports")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
            <CategoryItem text="Science" isSelected={selected?.includes("Science")} onClick={(selected) => onSelect(selected)} isDisabled={isDisabled} />
        </div>
    );
}

export default InterestsContiainer;
