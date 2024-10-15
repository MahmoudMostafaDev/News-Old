
import CardContainer from './CardContainer';
import cards from '../../../assets/fakeData';
const CardInfinteContainer = () => {
    return (
        <div>
            <div className='flex justify-between mb-5 px-10'><h2 className='text-3xl font-bold mb-5 mt-10  '>For You</h2>
                <button className='text-xl  text-primary font-bold mb-5 mt-10  text-center md:text-start'>Filter</button>
            </div>
            <CardContainer Cards={cards} />
        </div>
    );
}

export default CardInfinteContainer;
