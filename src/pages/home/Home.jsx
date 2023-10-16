import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoginPage from '../../components/loginPage/LoginPage';
import SignUpPage from '../../components/signUpPage/SignUpPage';


const Home = () => {
    return (
        <div className='container mx-auto font-serif'>
            <div className='pt-11'>
                <div className='text-center '>
                    <h1 className='text-2xl md:text-5xl font-semibold'>Welcome to AChat</h1>
                </div>
                <div className='text-center mt-4 h-screen'>
                    <Tabs className={'bg-neutral-800 md:w-1/2 p-3 rounded-lg mx-auto'}>
                        <TabList className={'flex gap-4 items-center justify-center bg-opacity-10'}>
                            <Tab className={'grow hover:rounded-full bg-slate-950 rounded-full md:text-xl font-semibold p-2'}>Login</Tab>
                            <Tab className={'grow hover:rounded-full bg-slate-950 rounded-full p-2 md:text-xl font-semibold'}>Sing up</Tab>
                        </TabList>

                        <TabPanel>
                            <LoginPage />
                        </TabPanel>
                        <TabPanel>
                            <SignUpPage />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Home;