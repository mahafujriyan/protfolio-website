import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Home/Banner';
import Home from '../Components/Home/Home';

const MainLayout = () => {
    return (
        <div  className="bg-[#f9f9fb] space-y-2 flex flex-col min-h-screen">
            <Navbar></Navbar>
            <Home></Home>
    
           <main className="flex-grow">
                <Outlet /> 
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;