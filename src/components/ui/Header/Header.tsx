import user from "../../../assets/user.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout, AppDispatch } from '../../../../store/store';
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png"
import Button from '../Button';

const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const auth: { isAuth: boolean } = useSelector((state: any) => state.auth);
    return (
        <div className='shadow-lg'>
            <div className='flex justify-between items-center p-4 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[990px] xl:max-w-[1200px] mx-auto'>
                <img src={Logo} alt="Logo" className='w-10' onClick={() => navigate("/")} />
                <div className=' gap-4 hidden md:flex'>
                    {auth.isAuth &&
                        <>
                            <Button text="Profile" onClick={() => navigate("/myprofile")} />                            <img src={user} alt="User" className='w-10' onClick={() => navigate("/myprofile")} />
                        </>}
                </div>
                {auth.isAuth && <img src={user} alt="User" className='md:hidden w-10' onClick={() => navigate("/myprofile")} />}
            </div>
        </div>
    );
}

export default Header;
