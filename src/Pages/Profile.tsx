import { useEffect, useState } from 'react';
import InterestsContiainer from '../components/ui/Auth/InterestsContiainer';
import CardContainer from '../components/ui/Card/CardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedNews, setUserPreferencers } from '../util/http';
import { preferancesActions } from '../../store/preferencesSlice';
import { useMutation, useQuery } from '@tanstack/react-query';
import Button from '../components/ui/Button';
import { AppDispatch, logout } from '../../store/store';
import ErrorPage from './ErrorPage';



const token = localStorage.getItem("token");
const Profile = () => {
    const preferences = useSelector((state: any) => state.preferences);
    const [firstMount, setFirstMount] = useState(true);
    const [interests, setInterests] = useState<string[]>([...preferences.preferences]);
    const [isDisabled, setIsDisabled] = useState(interests.length <= 3);
    const dispatch = useDispatch<AppDispatch>();

    //update when change
    const { mutate, data } = useMutation({
        mutationKey: ["pref"],
        mutationFn: async () => await setUserPreferencers(token as string, interests),
        onSuccess: (data) => {
            if (data?.code === 200) {
                dispatch(preferancesActions.updatePreferences(interests));
            }
        },
    })

    useEffect(() => {
        if (!firstMount) {
            if (interests.length <= 3) {
                setIsDisabled(true);
            } else { setIsDisabled(false) }
            mutate();
        } else {
            setFirstMount(false)
        }


    }, [interests])

    //load 
    useEffect(() => {
        if (preferences?.preferences?.preferences != undefined) {
            setInterests((old) => [...old, ...preferences?.preferences?.preferences]);
        }
    }, [preferences])

    const query = useQuery({
        queryKey: ['saved'],
        queryFn: async () => await getSavedNews(localStorage.getItem("token") as string),
    })

    return (
        <div className='p-5'>
            <div className='flex justify-between items-start'>
                <h3 className='text-2xl font-bold mb-4 mt-10 text-center md:text-start '>Welcome</h3>
                <div className='mt-10'><Button text="Logout" onClick={() => dispatch(logout())} /></div>
            </div>
            <h4 className='text-xl font-bold mb-4 mt-10 text-center md:text-start '>Your Interests</h4>
            <InterestsContiainer setInterests={setInterests} selected={interests} isWide isDisabled={isDisabled} />
            <h4 className='text-xl text-primary font-bold mb-4 mt-10 text-center md:text-start  '>Your Saved</h4>
            {query.data?.code === 200 && <CardContainer Cards={query.data?.data} />}
            {query.data?.code === 404 && <p className='text-gray-500 font-bold'>No Saved News Found</p>}
            <ErrorPage isNotFound></ErrorPage>
        </div>
    );
}

export default Profile;
