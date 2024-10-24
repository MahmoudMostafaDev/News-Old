import { Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import LargeBtn from '../components/ui/LargeBtn';
import InterestsContiainer from '../components/ui/Auth/InterestsContiainer';
import { FormEvent, useState } from 'react';
import { RegisterObj, register } from '../util/http';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/store';
import { useDispatch, UseDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { preferancesActions } from '../../store/preferencesSlice';
export type callBackFunc = (updateFunction: (value: string[]) => string[]) => void;

const Register = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoadidng] = useState(false);
    const [interests, setInterests] = useState<string[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const updateInterests: callBackFunc = (updateFunction) => {
        setInterests((old) => updateFunction(old));
    }
    async function handleRegister(data: RegisterObj) {
        setIsLoadidng(true);
        const res = await register(data);
        setIsLoadidng(false)
        if (res.code === 101) {
            setError(res.msg as string);
        } else {
            dispatch(preferancesActions.updatePreferences([...data.preferences]))
            dispatch(loginAction(res.data.accessToken));
            navigate("/");
        }
    }
    function onSubmit(e: FormEvent) {
        e.preventDefault();
        setError("");
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        if (!data.Username || !data.Password) {
            setError("Please fill all fields")
            return;
        }
        if (interests.length < 3) {
            setError("Select at least three interests");
            return;
        }
        handleRegister({ username: data.Username as string, password: data.Password as string, preferences: interests })

    }
    return (
        <form onSubmit={onSubmit} className='p-4 border m-2 flex flex-col gap-4 max-w-[550px] lg:max-w-[650px] mx-auto md:mt-40 lg:px-20 lg:py-16'>
            <h2 className='text-2xl font-bold mb-4'>Register</h2>
            <Input label="Username" type="text" onChangeOutter={() => { }} />
            <Input label="Password" type="password" onChangeOutter={() => { }} />
            <div className='flex justify-between mb-1 mt-4 items-end'>
                <h2 className='text-xl font-bold '>Choose your Interests : </h2>
                <h3 className='text-md font-bold text-primary '>At Least 3</h3>
            </div>
            <InterestsContiainer setInterests={updateInterests} selected={interests} />
            <LargeBtn text="Register" onClick={() => { }} />
            {isLoading && <p>Loading...</p>}
            {error != "" && <p className='text-red-500'>{error}</p>}
            <Link to="/login"><p>Already have account ? <span className='text-primary font-semibold'>Login now</span></p></Link>
        </form>
    );
}

export default Register;
