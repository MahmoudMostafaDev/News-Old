import { useQuery } from '@tanstack/react-query';
import { getHeadNews } from '../util/http';
import CardContainer from '../components/ui/Card/CardContainer';
import CardInfinteContainer from '../components/ui/Card/CardInfinteContainer';
import { CardType } from '../components/ui/Card/CardContainer';
import { useSelector } from 'react-redux';


const Main = () => {
    //error template
    const preferences = useSelector((state: any) => state.preferences);
    const { data, isLoading, isError } = useQuery({
        queryKey: ["head"],
        queryFn: async ({ signal }: { signal: any }) => await getHeadNews({ signal, categories: preferences.preferences })
    })

    return (
        <div>
            <h2 className='text-3xl font-bold mb-5 mt-10 text-primary text-center md:text-start'>Your Headline</h2>
            {isLoading ? <p>Loading....</p> : (isError || data?.code === 404) ? < p > error</p> : <> <CardContainer Cards={data?.data as CardType[]} /> <CardInfinteContainer /></>}

            {/* {<CardContainer Cards={data?.data as CardType[]} />} */}

        </div >
    );
}

export default Main;
