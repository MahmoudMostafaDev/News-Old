import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header/Header';

const RootLayout = () => {
    return (
        <>
            <Header />
            <main className='sm:max-w-[600px] md:max-w-[720px] lg:max-w-[990px] xl:max-w-[1200px] mx-auto'>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
