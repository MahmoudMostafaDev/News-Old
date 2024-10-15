import React from 'react';
import Card from './Card';
type CardType = {
    id: number,
    headline: string,
    desc: string
    img: string
}
interface Props {
    Cards: CardType[];
}
const CardContainer: React.FC<Props> = ({ Cards }) => {
    console.log(Cards)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4 place-items-center'>
            {Cards.map((card) => (
                <Card
                    key={card.id}
                    headline={card.headline}
                    desc={card.desc}
                    img={card.img}
                    onView={() => { }}
                    onSave={() => { }}
                />
            ))}
        </div>
    );
}

export default CardContainer;
