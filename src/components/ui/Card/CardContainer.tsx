import React from 'react';
import Card from './Card';
export type CardType = {
    _id: string,
    title: string,
    description: string
    image: string,
    url: string,
    __v: number,
}
interface Props {
    Cards: CardType[];
}
const CardContainer: React.FC<Props> = ({ Cards }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4 place-items-center'>
            {Cards.map((card) => (
                <Card
                    key={card._id}
                    headline={card.title}
                    desc={card.description}
                    img={card.image}
                    link={card.url}
                />
            ))}
        </div>
    );
}

export default CardContainer;
