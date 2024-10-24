import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../util/http';
import { loginAction } from '../../store/store';
import { useDispatch, UseDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import Input from '../components/ui/Input';
import LargeBtn from '../components/ui/LargeBtn';


const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    async function handleLogin(data: any) {
        setError("")
        setIsLoading(true);
        const result = await login({ username: data.Username as string, password: data.Password as string });
        setIsLoading(false);
        if (result === "Username / Password are incorrect" || result === "fill all fields") {
            setError(result);
        } else if (result === "network") {
            setError("Can't connect to the server");
        } else {
            navigate("/");
            dispatch(loginAction(result.accessToken));
        }
    }
    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        await handleLogin(data);
    }
    return (
        <form onSubmit={onSubmit} className='p-4 border m-2 flex flex-col gap-4 max-w-[550px] lg:max-w-[650px] mx-auto md:mt-40 lg:px-20 lg:py-16'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <Input label="Username" type="text" onChangeOutter={() => { }} />
            <Input label="Password" type="password" onChangeOutter={() => { }} />
            <LargeBtn text="Login" onClick={() => { }} />
            {isLoading && <p>Loading...</p>}
            {error != "" && <p className='text-red-600'>{error}</p>}
            <Link to="/register"><p>Dont't have account ? <span className='text-primary font-semibold'>Sign up now</span></p></Link>
        </form>
    );
}

export default Login;
