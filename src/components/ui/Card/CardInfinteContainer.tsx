import { useEffect, useState } from 'react';
import { getNews } from '../../../util/http';
import CardContainer from './CardContainer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const CardInfinteContainer = () => {
    const preferences = useSelector((state: any) => state.preferences);
    const [categories, setCategories] = useState([...preferences.preferences]);
    const [cards, setCards] = useState<any[]>([]);

    const { data, fetchNextPage } = useInfiniteQuery({
        queryKey: ["news", categories],
        queryFn: async ({ pageParam }) => {
            const res = await getNews({ pageParam: pageParam as number, categories })
            console.log([...preferences.preferences])
            console.log(res)
            return res
        },
        getNextPageParam: (lastPage) => {
            if (lastPage.data.news.length === 0) return undefined
            return +lastPage.data.page + 1;
        },
        initialPageParam: 1,
    });


    useEffect(() => {
        setCategories([...preferences.preferences]);
    }, [preferences.preferences.length])

    useEffect(() => {
        const newCards = data?.pages[data.pages.length - 1].data.news || [];
        setCards((cards) => [...cards, ...newCards] as any[]);
    }, [data])

    useEffect(() => {
        window.addEventListener("scrollend", () => {
            fetchNextPage();
        })
        return () => {
            window.removeEventListener("scrollend", () => { });
        }
    }, [fetchNextPage])
    return (
        <div>
            <div className='flex justify-between mb-5 px-10'><h2 className='text-3xl font-bold mb-5 mt-10  '>For You</h2></div>
            <CardContainer Cards={cards} />
        </div>
    );
}

export default CardInfinteContainer;
